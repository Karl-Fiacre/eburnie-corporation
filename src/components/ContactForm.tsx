import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .max(100, "Le nom ne peut dépasser 100 caractères."),
  email: z
    .string()
    .trim()
    .min(5, "Email requis.")
    .email("Adresse email invalide.")
    .max(150, "Email trop long."),
  company: z.string().trim().max(120, "120 caractères maximum.").optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .max(30, "30 caractères maximum.")
    .regex(/^[+0-9 ().-]*$/, "Numéro de téléphone invalide.")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(3, "Le sujet doit contenir au moins 3 caractères.")
    .max(150, "150 caractères maximum."),
  message: z
    .string()
    .trim()
    .min(10, "Votre message doit contenir au moins 10 caractères.")
    .max(2000, "2000 caractères maximum."),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  subject?: string;
  kind?: "contact" | "partenariat" | "investisseur";
}

export function ContactForm({ subject = "", kind = "contact" }: Props) {
  const [sent, setSent] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: { name: "", email: "", company: "", phone: "", subject, message: "" },
  });

  const messageValue = form.watch("message") ?? "";

  const onSubmit = async (values: FormValues) => {
    const { error } = await supabase.from("corp_contact_messages").insert({
      kind,
      name: values.name,
      email: values.email,
      company: values.company || null,
      phone: values.phone || null,
      subject: values.subject,
      message: values.message,
    });

    if (error) {
      toast.error("Envoi impossible", {
        description: "Une erreur est survenue. Merci de réessayer dans un instant.",
      });
      return;
    }

    form.reset({ name: "", email: "", company: "", phone: "", subject, message: "" });
    setSent(true);
    toast.success("Message envoyé", {
      description: "Notre équipe vous répond sous 48h ouvrées.",
    });
  };

  const loading = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Nom complet <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input autoComplete="name" placeholder="Ex. Aya Koffi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email professionnel <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="nom@societe.ci"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Société</FormLabel>
                <FormControl>
                  <Input autoComplete="organization" placeholder="Optionnel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+225 01 02 03 04 05"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Sujet <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Objet de votre demande" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Message <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Textarea rows={6} placeholder="Décrivez votre projet ou votre demande…" {...field} />
              </FormControl>
              <div className="flex items-center justify-between gap-4">
                <FormMessage />
                <span className="text-xs text-muted-foreground tabular-nums ml-auto">
                  {messageValue.length}/2000
                </span>
              </div>
            </FormItem>
          )}
        />

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-7 py-4 bg-prestige text-white text-sm font-semibold tracking-wide hover:bg-gradient-gold hover:text-prestige transition-all disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            {loading ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
            {loading ? "Envoi en cours…" : "Envoyer le message"}
          </button>
          {sent && !loading && (
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground" role="status">
              <CheckCircle2 size={16} className="text-gold" />
              Message bien reçu.
            </span>
          )}
        </div>
        <FormDescription>
          Les champs marqués d'un astérisque sont obligatoires. Vos données ne sont utilisées que pour
          traiter votre demande.
        </FormDescription>
      </form>
    </Form>
  );
}
