import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-partners.jpg";
import { PageHero } from "@/components/PageHero";
import { Handshake, Landmark, Truck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partenaires — Eburnie Corporation" },
      { name: "description", content: "Devenez partenaire stratégique d'Eburnie Corporation." },
      { property: "og:title", content: "Partenaires — Eburnie Corporation" },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: PartnersPage,
});

const categories = [
  { icon: Handshake, t: "Partenaires stratégiques", d: "Alliances industrielles, commerciales et opérationnelles structurantes." },
  { icon: Landmark, t: "Institutions", d: "Coopération avec institutions publiques, ONG et organisations multilatérales." },
  { icon: Truck, t: "Fournisseurs", d: "Réseau de fournisseurs qualifiés sur l'ensemble de nos chaînes de valeur." },
];

function PartnersPage() {
  return (
    <>
      <PageHero image={heroImg}
        eyebrow="PARTENAIRES"
        title="Construisons ensemble un écosystème panafricain."
        subtitle="Eburnie Corporation s'appuie sur un réseau de partenaires triés pour leur excellence et leur engagement long-terme."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-px bg-border">
          {categories.map((c) => (
            <div key={c.t} className="bg-background p-10">
              <c.icon className="text-gold" size={28} />
              <div className="mt-6 font-display font-bold text-xl">{c.t}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-xs tracking-[0.32em] text-gold">DEVENIR PARTENAIRE</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Proposez votre collaboration.</h2>
          <div className="mt-10">
            <ContactForm subject="Demande de partenariat" />
          </div>
        </div>
      </section>
    </>
  );
}
