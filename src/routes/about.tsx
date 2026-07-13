import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-about.jpg";
import { PageHero } from "@/components/PageHero";
import { Target, Eye, Heart, Users, Building, Globe } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE_URL, seoLinks } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À Propos — Eburnie Corporation (Côte d'Ivoire)" },
      {
        name: "description",
        content:
          "Histoire, vision, mission, valeurs et gouvernance d'Eburnie Corporation, holding multisectorielle basée à Abidjan, Côte d'Ivoire.",
      },
      { property: "og:title", content: "À Propos — Eburnie Corporation" },
      {
        property: "og:description",
        content: "Holding ivoirienne — six filiales structurées sous une gouvernance unifiée à Abidjan.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
      { name: "twitter:title", content: "À Propos — Eburnie Corporation" },
      {
        name: "twitter:description",
        content: "Holding ivoirienne — six filiales structurées sous une gouvernance unifiée à Abidjan.",
      },
    ],
    links: seoLinks("/about"),
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Mission", text: "Catalyser le développement économique de la Côte d'Ivoire par des activités structurantes et durables." },
  { icon: Eye, title: "Vision", text: "Devenir une holding ivoirienne de référence, reconnue pour son excellence et son impact." },
  { icon: Heart, title: "Valeurs", text: "Intégrité, excellence opérationnelle, innovation, responsabilité et fierté ivoirienne." },
  { icon: Users, title: "Gouvernance", text: "Standards internationaux, comité stratégique multi-disciplinaire et reporting rigoureux." },
  { icon: Building, title: "Structure", text: "Six filiales spécialisées sous une holding mère unifiée et professionnelle." },
  { icon: Globe, title: "Ambition", text: "Consolider notre position en Côte d'Ivoire avant une expansion ciblée en Afrique de l'Ouest." },
];

function AboutPage() {
  return (
    <>
      <PageHero image={heroImg}
        eyebrow="À PROPOS"
        title="Un groupe ivoirien, une ambition régionale."
        subtitle="Eburnie Corporation est née d'une conviction : la Côte d'Ivoire mérite des champions économiques structurés, ambitieux et pérennes."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs tracking-[0.32em] text-gold">NOTRE HISTOIRE</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">D'une vision à un groupe multisectoriel.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Fondé avec l'ambition de transformer le paysage économique ivoirien, Eburnie Corporation a structuré progressivement six filiales complémentaires, chacune répondant à un besoin stratégique du pays.</p>
              <p>De l'e-commerce à la logistique, de l'immobilier aux échanges internationaux, le groupe s'appuie sur une gouvernance moderne pour bâtir un acteur de référence en Côte d'Ivoire, avant d'envisager une extension à l'Afrique de l'Ouest.</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-prestige rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(135deg, var(--gold) 0%, transparent 60%)" }} />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="text-5xl font-display font-bold text-gold">2024</div>
                <div className="mt-2 text-sm tracking-[0.2em] uppercase text-white/70">Année de fondation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.32em] text-gold">CE QUI NOUS GUIDE</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Mission, vision et valeurs.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Six piliers qui structurent notre manière de bâtir, décider et grandir en Côte d'Ivoire.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group relative bg-background p-8 rounded-sm border border-border/60 hover:border-gold/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] overflow-hidden"
              >
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-gold group-hover:w-full transition-all duration-500" />
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-colors" />
                <div className="absolute top-6 right-6 font-display text-xs tracking-[0.2em] text-muted-foreground/40 tabular-nums">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20 group-hover:from-gold/25 group-hover:to-gold/10 transition-colors">
                    <v.icon className="text-gold" size={24} />
                  </div>
                  <div className="mt-6 font-display font-bold text-xl">{v.title}</div>
                  <div className="mt-2 h-px w-10 bg-gold/40 group-hover:w-16 transition-all duration-500" />
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
