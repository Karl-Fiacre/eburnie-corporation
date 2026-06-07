import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-investors.jpg";
import { PageHero } from "@/components/PageHero";
import { TrendingUp, BarChart3, Globe, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investisseurs — Eburnie Corporation" },
      { name: "description", content: "Opportunités d'investissement et stratégie de croissance d'Eburnie Corporation." },
      { property: "og:title", content: "Investisseurs — Eburnie Corporation" },
      { property: "og:url", content: "/investors" },
    ],
    links: [{ rel: "canonical", href: "/investors" }],
  }),
  component: InvestorsPage,
});

const pillars = [
  { icon: TrendingUp, t: "Stratégie de croissance", d: "Expansion progressive sur 15+ marchés africains à horizon 2030." },
  { icon: BarChart3, t: "Vision financière", d: "Discipline opérationnelle, transparence et création de valeur long-terme." },
  { icon: Globe, t: "Secteurs d'investissement", d: "Commerce, logistique, immobilier, mobilité, échanges internationaux." },
  { icon: ShieldCheck, t: "Gouvernance", d: "Standards internationaux, reporting rigoureux et comité stratégique." },
];

function InvestorsPage() {
  return (
    <>
      <PageHero image={heroImg}
        eyebrow="INVESTISSEURS"
        title="Co-construire la prochaine génération de champions africains."
        subtitle="Eburnie Corporation ouvre son capital et ses opportunités à des partenaires partageant notre vision long-terme."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {pillars.map((p) => (
            <div key={p.t} className="bg-background p-8">
              <p.icon className="text-gold" size={26} />
              <div className="mt-5 font-display font-bold">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-xs tracking-[0.32em] text-gold">CONTACT INVESTISSEURS</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Parlons de votre projet.</h2>
          <p className="mt-4 text-muted-foreground">Notre équipe relations investisseurs vous répond sous 48h.</p>
          <div className="mt-10">
            <ContactForm subject="Demande investisseur" />
          </div>
        </div>
      </section>
    </>
  );
}
