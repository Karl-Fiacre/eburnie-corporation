import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { Lock, LogOut, Plus, Pencil, Trash2, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  adminStatus,
  adminLogin,
  adminLogout,
  adminDashboard,
  saveNews,
  deleteNews,
  deleteRecord,
} from "@/lib/admin.functions";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Espace d'administration — Eburnie Corporation" },
      { name: "description", content: "Espace réservé à l'administration du site Eburnie Corporation." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

const CATEGORIES = ["Groupe", "Boutique", "Auto", "Immobilier", "China Deals", "Cargo", "Event"];

type NewsRow = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image_url: string | null;
  published: boolean;
  published_at: string;
};

type Draft = {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image_url: string;
  published: boolean;
  published_at: string;
};

const emptyDraft = (): Draft => ({
  title: "",
  excerpt: "",
  content: "",
  category: "Groupe",
  image_url: "",
  published: true,
  published_at: new Date().toISOString().slice(0, 10),
});

function AdminPage() {
  const status = useQuery({ queryKey: ["admin-status"], queryFn: () => adminStatus() });

  if (status.isLoading) {
    return <div className="min-h-[60vh] grid place-items-center text-muted-foreground">Chargement…</div>;
  }
  return status.data?.unlocked ? <Dashboard /> : <PasswordWall />;
}

function PasswordWall() {
  const qc = useQueryClient();
  const login = useServerFn(adminLogin);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await login({ data: { password } });
      if (res.ok) {
        await qc.invalidateQueries({ queryKey: ["admin-status"] });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      setPassword("");
    }
  }

  return (
    <section className="min-h-[80vh] grid place-items-center bg-gradient-prestige px-6 py-20">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl border border-border"
      >
        <div className="mx-auto h-12 w-12 rounded-full bg-prestige grid place-items-center">
          <Lock size={20} className="text-gold-bright" />
        </div>
        <h1 className="mt-6 text-center font-display text-2xl font-bold text-prestige">Espace d'administration</h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Accès restreint. Saisissez le mot de passe d'administration.
        </p>
        <div className="mt-6 space-y-2">
          <Label htmlFor="admin-password">Mot de passe</Label>
          <Input
            id="admin-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-sm text-destructive">Mot de passe incorrect.</p>}
        </div>
        <Button type="submit" disabled={loading || password.length === 0} className="mt-6 w-full">
          {loading ? "Vérification…" : "Accéder au tableau de bord"}
        </Button>
      </form>
    </section>
  );
}

function Dashboard() {
  const qc = useQueryClient();
  const logout = useServerFn(adminLogout);
  const dash = useQuery({ queryKey: ["admin-dashboard"], queryFn: () => adminDashboard() });
  const [draft, setDraft] = useState<Draft | null>(null);

  const save = useMutation({
    mutationFn: (d: Draft) =>
      saveNews({
        data: {
          ...(d.id ? { id: d.id } : {}),
          title: d.title,
          excerpt: d.excerpt,
          content: d.content,
          category: d.category,
          image_url: d.image_url,
          published: d.published,
          published_at: new Date(d.published_at).toISOString(),
        },
      }),
    onSuccess: async () => {
      toast.success("Actualité enregistrée");
      setDraft(null);
      await qc.invalidateQueries({ queryKey: ["admin-dashboard"] });
    },
    onError: (e: Error) => toast.error(e.message || "Enregistrement impossible"),
  });

  const removeNews = useMutation({
    mutationFn: (id: string) => deleteNews({ data: { id } }),
    onSuccess: async () => {
      toast.success("Actualité supprimée");
      await qc.invalidateQueries({ queryKey: ["admin-dashboard"] });
    },
  });

  const removeRow = useMutation({
    mutationFn: (v: { table: "corp_contact_messages" | "corp_job_applications" | "corp_newsletter_subscribers"; id: string }) =>
      deleteRecord({ data: v }),
    onSuccess: async () => {
      toast.success("Entrée supprimée");
      await qc.invalidateQueries({ queryKey: ["admin-dashboard"] });
    },
  });

  const news = (dash.data?.news ?? []) as unknown as NewsRow[];
  const messages = dash.data?.messages ?? [];
  const applications = dash.data?.applications ?? [];
  const subscribers = dash.data?.subscribers ?? [];

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <p className="text-xs tracking-[0.25em] text-gold uppercase">Administration</p>
            <h1 className="mt-1 font-display text-3xl font-bold text-prestige">Gestion du site</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => dash.refetch()}>
              <RefreshCw size={15} className="mr-2" /> Actualiser
            </Button>
            <Button
              variant="secondary"
              onClick={async () => {
                await logout({});
                await qc.invalidateQueries();
              }}
            >
              <LogOut size={15} className="mr-2" /> Se déconnecter
            </Button>
          </div>
        </header>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat label="Actualités" value={news.length} />
          <Stat label="Messages" value={messages.length} />
          <Stat label="Candidatures" value={applications.length} />
          <Stat label="Abonnés newsletter" value={subscribers.length} />
        </div>

        <Tabs defaultValue="news" className="mt-10">
          <TabsList>
            <TabsTrigger value="news">Actualités</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="jobs">Candidatures</TabsTrigger>
            <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="mt-6">
            <div className="flex justify-end">
              <Button onClick={() => setDraft(emptyDraft())}>
                <Plus size={15} className="mr-2" /> Nouvelle actualité
              </Button>
            </div>

            {draft && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  save.mutate(draft);
                }}
                className="mt-6 rounded-xl border border-border p-6 space-y-4 bg-card"
              >
                <h2 className="font-display text-lg font-bold text-prestige">
                  {draft.id ? "Modifier l'actualité" : "Nouvelle actualité"}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="n-title">Titre</Label>
                    <Input
                      id="n-title"
                      value={draft.title}
                      onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                      required
                      maxLength={300}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="n-cat">Catégorie</Label>
                    <select
                      id="n-cat"
                      value={draft.category}
                      onChange={(e) => setDraft({ ...draft, category: e.target.value })}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="n-date">Date de publication</Label>
                    <Input
                      id="n-date"
                      type="date"
                      value={draft.published_at.slice(0, 10)}
                      onChange={(e) => setDraft({ ...draft, published_at: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="n-img">Image (URL, optionnel)</Label>
                    <Input
                      id="n-img"
                      value={draft.image_url}
                      onChange={(e) => setDraft({ ...draft, image_url: e.target.value })}
                      placeholder="https://…"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="n-excerpt">Extrait</Label>
                    <Textarea
                      id="n-excerpt"
                      value={draft.excerpt}
                      onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })}
                      maxLength={600}
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="n-content">Contenu</Label>
                    <Textarea
                      id="n-content"
                      value={draft.content}
                      onChange={(e) => setDraft({ ...draft, content: e.target.value })}
                      rows={6}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Switch
                    id="n-pub"
                    checked={draft.published}
                    onCheckedChange={(v) => setDraft({ ...draft, published: v })}
                  />
                  <Label htmlFor="n-pub">Publié sur le site</Label>
                </div>
                <div className="flex gap-2">
                  <Button type="submit" disabled={save.isPending}>
                    {save.isPending ? "Enregistrement…" : "Enregistrer"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setDraft(null)}>
                    Annuler
                  </Button>
                </div>
              </form>
            )}

            <ul className="mt-6 divide-y divide-border rounded-xl border border-border">
              {news.map((a) => (
                <li key={a.id} className="flex flex-wrap items-center gap-3 p-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="bg-gold/15 text-gold px-2 py-0.5 tracking-[0.15em] uppercase">{a.category}</span>
                      <span>{new Date(a.published_at).toLocaleDateString("fr-FR")}</span>
                      {!a.published && <span className="text-destructive">Brouillon</span>}
                    </div>
                    <p className="mt-1 font-medium text-prestige truncate">{a.title}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      setDraft({
                        id: a.id,
                        title: a.title,
                        excerpt: a.excerpt ?? "",
                        content: a.content ?? "",
                        category: a.category,
                        image_url: a.image_url ?? "",
                        published: a.published,
                        published_at: a.published_at.slice(0, 10),
                      })
                    }
                  >
                    <Pencil size={14} className="mr-1.5" /> Modifier
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-destructive"
                    onClick={() => {
                      if (confirm("Supprimer cette actualité ?")) removeNews.mutate(a.id);
                    }}
                  >
                    <Trash2 size={14} />
                  </Button>
                </li>
              ))}
              {news.length === 0 && <li className="p-6 text-sm text-muted-foreground">Aucune actualité.</li>}
            </ul>
          </TabsContent>

          <TabsContent value="messages" className="mt-6 space-y-3">
            {messages.map((m) => (
              <article key={m.id} className="rounded-xl border border-border p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span className="uppercase tracking-[0.15em] text-gold">{m.kind}</span>
                  <span>{new Date(m.created_at).toLocaleString("fr-FR")}</span>
                </div>
                <p className="mt-2 font-medium text-prestige">
                  {m.name} — {m.email}
                  {m.company ? ` · ${m.company}` : ""}
                  {m.phone ? ` · ${m.phone}` : ""}
                </p>
                {m.subject && <p className="text-sm font-medium mt-1">{m.subject}</p>}
                <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line">{m.message}</p>
                <Button
                  size="sm"
                  variant="ghost"
                  className="mt-3 text-destructive"
                  onClick={() => removeRow.mutate({ table: "corp_contact_messages", id: m.id })}
                >
                  <Trash2 size={14} className="mr-1.5" /> Supprimer
                </Button>
              </article>
            ))}
            {messages.length === 0 && <p className="text-sm text-muted-foreground">Aucun message.</p>}
          </TabsContent>

          <TabsContent value="jobs" className="mt-6 space-y-3">
            {applications.map((c) => (
              <article key={c.id} className="rounded-xl border border-border p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span className="uppercase tracking-[0.15em] text-gold">{c.position_title}</span>
                  <span>{new Date(c.created_at).toLocaleString("fr-FR")}</span>
                </div>
                <p className="mt-2 font-medium text-prestige">
                  {c.full_name} — {c.email}
                  {c.phone ? ` · ${c.phone}` : ""}
                </p>
                {c.linkedin_url && (
                  <a href={c.linkedin_url} target="_blank" rel="noreferrer" className="text-sm text-gold underline">
                    Profil LinkedIn
                  </a>
                )}
                <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line">{c.cover_letter}</p>
                <Button
                  size="sm"
                  variant="ghost"
                  className="mt-3 text-destructive"
                  onClick={() => removeRow.mutate({ table: "corp_job_applications", id: c.id })}
                >
                  <Trash2 size={14} className="mr-1.5" /> Supprimer
                </Button>
              </article>
            ))}
            {applications.length === 0 && <p className="text-sm text-muted-foreground">Aucune candidature.</p>}
          </TabsContent>

          <TabsContent value="newsletter" className="mt-6">
            <ul className="divide-y divide-border rounded-xl border border-border">
              {subscribers.map((s) => (
                <li key={s.id} className="flex items-center justify-between gap-3 p-3 text-sm">
                  <span className="text-prestige">{s.email}</span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(s.created_at).toLocaleDateString("fr-FR")}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-destructive"
                    onClick={() => removeRow.mutate({ table: "corp_newsletter_subscribers", id: s.id })}
                  >
                    <Trash2 size={14} />
                  </Button>
                </li>
              ))}
              {subscribers.length === 0 && <li className="p-6 text-sm text-muted-foreground">Aucun abonné.</li>}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-border p-5">
      <div className="font-display text-3xl font-bold text-prestige">{value}</div>
      <div className="mt-1 text-xs tracking-[0.15em] uppercase text-muted-foreground">{label}</div>
    </div>
  );
}
