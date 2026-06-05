import { useState } from "react";
import { toast } from "sonner";

interface Props {
  subject?: string;
}

export function ContactForm({ subject }: Props) {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message envoyé. Nous vous répondrons sous 48h.");
    }, 600);
  };

  const inputCls = "w-full bg-transparent border border-border focus:border-gold transition-colors px-4 py-3 text-sm focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input required name="name" placeholder="Nom complet" className={inputCls} maxLength={100} />
        <input required type="email" name="email" placeholder="Email" className={inputCls} maxLength={150} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input name="company" placeholder="Société (optionnel)" className={inputCls} maxLength={100} />
        <input name="phone" placeholder="Téléphone" className={inputCls} maxLength={30} />
      </div>
      <input required name="subject" defaultValue={subject} placeholder="Sujet" className={inputCls} maxLength={150} />
      <textarea required name="message" placeholder="Votre message" rows={5} className={inputCls} maxLength={2000} />
      <button
        type="submit"
        disabled={loading}
        className="px-7 py-4 bg-prestige text-white text-sm font-semibold tracking-wide hover:bg-gradient-gold hover:text-prestige transition-all disabled:opacity-60"
      >
        {loading ? "Envoi..." : "Envoyer le message"}
      </button>
    </form>
  );
}
