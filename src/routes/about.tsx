import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Target, Eye, Heart, Users, Building, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À Propos — Eburnie Corporation" },
      { name: "description", content: "Histoire, vision, mission, valeurs et gouvernance d'Eburnie Corporation." },
      { property: "og:title", content: "À Propos — Eburnie Corporation" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Mission", text: "Catalyser le développement économique africain par des activités structurantes et durables." },
  { icon: Eye, title: "Vision", text: "Devenir une holding panafricaine de référence, reconnue pour son excellence et son impact." },
  { icon: Heart, title: "Valeurs", text: "Intégrité, excellence opérationnelle, innovation, responsabilité et fierté africaine." },
  { icon: Users, title: "Gouvernance", text: "Standards internationaux, comité stratégique multi-disciplinaire et reporting rigoureux." },
  { icon: Building, title: "Structure", text: "Six filiales spécialisées sous une holding mère unifiée et professionnelle." },
  { icon: Globe, title: "Ambition", text: "Déployer notre modèle sur 15+ marchés africains à horizon 2030." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À PROPOS"
        title="Un groupe africain, une ambition continentale."
        subtitle="Eburnie Corporation est née d'une conviction : l'Afrique mérite des champions économiques structurés, ambitieux et pérennes."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs tracking-[0.32em] text-gold">NOTRE HISTOIRE</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">D'une vision à un groupe multisectoriel.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Fondé avec l'ambition de transformer le paysage économique africain, Eburnie Corporation a structuré progressivement six filiales complémentaires, chacune répondant à un besoin stratégique du continent.</p>
              <p>De l'e-commerce à la logistique, de l'immobilier aux échanges internationaux, le groupe s'appuie sur une gouvernance moderne pour bâtir un acteur de référence.</p>
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

      <section className="relative py-28 bg-prestige overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.32em] text-gold">CE QUI NOUS GUIDE</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
              Mission, vision <span className="text-gold">et valeurs.</span>
            </h2>
            <p className="mt-5 text-white/70 max-w-xl leading-relaxed">
              Les fondations qui orientent chacune de nos décisions et alimentent notre ambition panafricaine.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 overflow-hidden transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.07] hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at top right, var(--gold) 0%, transparent 60%)", mixBlendMode: "overlay" }}
                />
                <div className="absolute top-6 right-6 font-display text-5xl font-bold text-white/5 group-hover:text-gold/20 transition-colors duration-500">
                  0{i + 1}
                </div>

                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 group-hover:from-gold group-hover:to-gold-bright group-hover:border-gold transition-all duration-500">
                    <v.icon className="text-gold group-hover:text-prestige transition-colors duration-500" size={26} />
                  </div>
                  <div className="mt-6 font-display font-bold text-xl text-white">{v.title}</div>
                  <div className="mt-3 h-px w-10 bg-gold/40 group-hover:w-20 transition-all duration-500" />
                  <p className="mt-4 text-sm text-white/65 leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
