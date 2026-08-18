import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z
  .string()
  .trim()
  .min(5, "Email requis.")
  .email("Adresse email invalide.")
  .max(150, "Email trop long.");

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Adresse email invalide.");
      return;
    }
    setError(null);
    setLoading(true);
    const { error: dbError } = await supabase
      .from("corp_newsletter_subscribers")
      .insert({ email: parsed.data.toLowerCase() });
    setLoading(false);

    if (dbError) {
      if (dbError.code === "23505") {
        toast.success("Vous êtes déjà inscrit à notre newsletter.");
        setEmail("");
        return;
      }
      toast.error("Inscription impossible", { description: "Merci de réessayer dans un instant." });
      return;
    }

    setEmail("");
    toast.success("Inscription confirmée", {
      description: "Vous recevrez nos actualités corporate.",
    });
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        noValidate
        className="flex border border-white/15 focus-within:border-gold transition-colors"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Votre adresse email
        </label>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? "newsletter-error" : undefined}
          placeholder="Votre email"
          className="flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          aria-label="S'inscrire à la newsletter"
          className="px-5 bg-gradient-gold text-prestige text-sm font-semibold disabled:opacity-60 inline-flex items-center justify-center"
        >
          {loading ? <Loader2 className="animate-spin" size={16} /> : "OK"}
        </button>
      </form>
      {error && (
        <p id="newsletter-error" role="alert" className="mt-2 text-xs text-gold-bright">
          {error}
        </p>
      )}
    </div>
  );
}
