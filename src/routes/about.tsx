import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-about.jpg";
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
      <PageHero image={heroImg}
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

      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.32em] text-gold">CE QUI NOUS GUIDE</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Mission, vision et valeurs.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-8">
                <v.icon className="text-gold" size={26} />
                <div className="mt-5 font-display font-bold text-lg">{v.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
