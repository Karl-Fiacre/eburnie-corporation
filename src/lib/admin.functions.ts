import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";
import { createHash, timingSafeEqual } from "node:crypto";

type AdminSession = { unlocked?: boolean };

function sessionConfig() {
  return {
    password: process.env["EBURNIE_ADMIN_SESSION_SECRET"]!,
    name: "eburnie-admin",
    maxAge: 60 * 60 * 8,
    cookie: { httpOnly: true, secure: true, sameSite: "lax" as const, path: "/" },
  };
}

function matches(input: string, expected: string): boolean {
  const a = createHash("sha256").update(input, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

async function requireUnlocked() {
  const session = await useSession<AdminSession>(sessionConfig());
  if (!session.data.unlocked) throw new Error("UNAUTHORIZED");
  return session;
}

async function admin() {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  return supabaseAdmin;
}

export const adminStatus = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useSession<AdminSession>(sessionConfig());
  return { unlocked: session.data.unlocked === true };
});

export const adminLogin = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => {
    if (typeof data?.password !== "string" || data.password.length > 200) {
      throw new Error("Mot de passe invalide");
    }
    return { password: data.password };
  })
  .handler(async ({ data }) => {
    const expected = process.env["EBURNIE_ADMIN_PASSWORD"];
    if (!expected) throw new Error("Configuration admin manquante");
    if (!matches(data.password, expected)) return { ok: false as const };
    const session = await useSession<AdminSession>(sessionConfig());
    await session.update({ unlocked: true });
    return { ok: true as const };
  });

export const adminLogout = createServerFn({ method: "POST" }).handler(async () => {
  const session = await useSession<AdminSession>(sessionConfig());
  await session.clear();
  return { ok: true as const };
});

export const adminDashboard = createServerFn({ method: "GET" }).handler(async () => {
  await requireUnlocked();
  const db = await admin();
  const [news, messages, applications, subscribers] = await Promise.all([
    db.from("corp_news").select("*").order("published_at", { ascending: false }),
    db.from("corp_contact_messages").select("*").order("created_at", { ascending: false }).limit(200),
    db.from("corp_job_applications").select("*").order("created_at", { ascending: false }).limit(200),
    db.from("corp_newsletter_subscribers").select("*").order("created_at", { ascending: false }).limit(500),
  ]);
  return {
    news: news.data ?? [],
    messages: messages.data ?? [],
    applications: applications.data ?? [],
    subscribers: subscribers.data ?? [],
  };
});

export const saveNews = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      id?: string;
      title: string;
      excerpt: string;
      content: string;
      category: string;
      image_url?: string;
      published: boolean;
      published_at: string;
    }) => {
      const title = String(data.title ?? "").trim();
      if (title.length < 3 || title.length > 300) throw new Error("Titre invalide (3-300 caractères)");
      return {
        id: data.id,
        title,
        excerpt: String(data.excerpt ?? "").trim().slice(0, 600),
        content: String(data.content ?? "").trim().slice(0, 20000),
        category: String(data.category ?? "Groupe").trim().slice(0, 60),
        image_url: data.image_url ? String(data.image_url).trim().slice(0, 600) : null,
        published: Boolean(data.published),
        published_at: data.published_at || new Date().toISOString(),
      };
    },
  )
  .handler(async ({ data }) => {
    await requireUnlocked();
    const db = await admin();
    const { id, ...row } = data;
    if (id) {
      const { error } = await db.from("corp_news").update(row).eq("id", id);
      if (error) throw new Error(error.message);
    } else {
      const { error } = await db.from("corp_news").insert(row);
      if (error) throw new Error(error.message);
    }
    return { ok: true as const };
  });

export const deleteNews = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string }) => ({ id: String(data.id) }))
  .handler(async ({ data }) => {
    await requireUnlocked();
    const db = await admin();
    const { error } = await db.from("corp_news").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const deleteRecord = createServerFn({ method: "POST" })
  .inputValidator((data: { table: string; id: string }) => {
    const allowed = ["corp_contact_messages", "corp_job_applications", "corp_newsletter_subscribers"];
    if (!allowed.includes(data.table)) throw new Error("Table non autorisée");
    return { table: data.table as (typeof allowed)[number], id: String(data.id) };
  })
  .handler(async ({ data }) => {
    await requireUnlocked();
    const db = await admin();
    const { error } = await db.from(data.table).delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });
