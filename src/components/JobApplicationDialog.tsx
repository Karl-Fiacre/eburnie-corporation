import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  fullName: z.string().trim().min(2, "Au moins 2 caractères.").max(100, "100 caractères maximum."),
  email: z.string().trim().email("Adresse email invalide.").max(150, "Email trop long."),
  phone: z
    .string()
    .trim()
    .max(30, "30 caractères maximum.")
    .regex(/^[+0-9 ().-]*$/, "Numéro de téléphone invalide.")
    .optional()
    .or(z.literal("")),
  linkedin: z
    .string()
    .trim()
    .max(300, "300 caractères maximum.")
    .url("Lien invalide (https://…).")
    .optional()
    .or(z.literal("")),
  coverLetter: z
    .string()
    .trim()
    .min(20, "Votre motivation doit contenir au moins 20 caractères.")
    .max(3000, "3000 caractères maximum."),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  position: string;
  triggerClassName?: string;
  triggerLabel?: string;
}

export function JobApplicationDialog({
  position,
  triggerClassName,
  triggerLabel = "Postuler",
}: Props) {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: { fullName: "", email: "", phone: "", linkedin: "", coverLetter: "" },
  });

  const letter = form.watch("coverLetter") ?? "";

  const onSubmit = async (values: FormValues) => {
    const { error } = await supabase.from("corp_job_applications").insert({
      position_title: position,
      full_name: values.fullName,
      email: values.email,
      phone: values.phone || null,
      linkedin_url: values.linkedin || null,
      cover_letter: values.coverLetter,
    });

    if (error) {
      toast.error("Candidature non envoyée", {
        description: "Une erreur est survenue. Merci de réessayer dans un instant.",
      });
      return;
    }

    toast.success("Candidature envoyée", {
      description: "Notre équipe RH revient vers vous sous 15 jours.",
    });
    form.reset();
    setOpen(false);
  };

  const loading = form.formState.isSubmitting;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className={
            triggerClassName ??
            "px-5 py-2.5 bg-prestige text-white text-sm font-semibold hover:bg-gradient-gold hover:text-prestige transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          }
          aria-label={`Postuler au poste : ${position}`}
        >
          {triggerLabel}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display">Postuler</DialogTitle>
          <DialogDescription>{position}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <FormField
              control={form.control}
              name="fullName"
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
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="email" inputMode="email" autoComplete="email" placeholder="nom@email.com" {...field} />
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
                      <Input type="tel" inputMode="tel" autoComplete="tel" placeholder="+225 01 02 03 04 05" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profil LinkedIn / portfolio</FormLabel>
                  <FormControl>
                    <Input type="url" placeholder="https://linkedin.com/in/…" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="coverLetter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Motivation <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea rows={5} placeholder="Pourquoi ce poste chez Eburnie Corporation ?" {...field} />
                  </FormControl>
                  <div className="flex items-center justify-between gap-4">
                    <FormMessage />
                    <span className="text-xs text-muted-foreground tabular-nums ml-auto">
                      {letter.length}/3000
                    </span>
                  </div>
                </FormItem>
              )}
            />
            <p className="text-xs text-muted-foreground">
              Envoyez votre CV à rh@eburniecorporation.com en rappelant l'intitulé du poste.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-prestige text-white text-sm font-semibold hover:bg-gradient-gold hover:text-prestige transition-all disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              {loading ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
              {loading ? "Envoi en cours…" : "Envoyer ma candidature"}
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
