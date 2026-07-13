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
          <ValuesGrid />
        </div>
      </section>
    </>
  );
}

function ValuesGrid() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
      }}
    >
      {values.map((v, i) => (
        <motion.div
          key={v.title}
          variants={{
            hidden: { opacity: 0, y: reduce ? 0 : 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          whileHover={reduce ? undefined : { y: -6 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="group relative bg-background p-8 rounded-sm border border-border/60 hover:border-gold/60 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.18)] overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-gradient-gold origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ width: "100%" }}
          />
          <motion.div
            className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gold/5"
            whileHover={reduce ? undefined : { scale: 1.15, backgroundColor: "rgba(212,175,55,0.12)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <div className="absolute top-6 right-6 font-display text-xs tracking-[0.2em] text-muted-foreground/40 tabular-nums">
            0{i + 1}
          </div>
          <div className="relative">
            <motion.div
              className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20"
              whileHover={reduce ? undefined : { rotate: -6, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <v.icon className="text-gold" size={24} />
            </motion.div>
            <div className="mt-6 font-display font-bold text-xl">{v.title}</div>
            <motion.div
              className="mt-2 h-px bg-gold/60 origin-left"
              initial={{ width: 24 }}
              whileHover={reduce ? undefined : { width: 72 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            <motion.div
              className="mt-6 h-[3px] w-full rounded-full bg-border/60 overflow-hidden"
              aria-hidden
            >
              <motion.div
                className="h-full bg-gradient-gold origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
        </div>
      </section>
    </>
  );
}
