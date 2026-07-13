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
  { icon: Target, emoji: "🎯", title: "Mission", text: "Catalyser le développement économique de la Côte d'Ivoire par des activités structurantes et durables." },
  { icon: Eye, emoji: "👁️", title: "Vision", text: "Devenir une holding ivoirienne de référence, reconnue pour son excellence et son impact." },
  { icon: Heart, emoji: "❤️", title: "Valeurs", text: "Intégrité, excellence opérationnelle, innovation, responsabilité et fierté ivoirienne." },
  { icon: Users, emoji: "🤝", title: "Gouvernance", text: "Standards internationaux, comité stratégique multi-disciplinaire et reporting rigoureux." },
  { icon: Building, emoji: "🏛️", title: "Structure", text: "Six filiales spécialisées sous une holding mère unifiée et professionnelle." },
  { icon: Globe, emoji: "🌍", title: "Ambition", text: "Consolider notre position en Côte d'Ivoire avant une expansion ciblée en Afrique de l'Ouest." },
];

function AboutPage() {
  return (
    <>
      <PageHero image={heroImg}
        eyebrow="À PROPOS"
        title="Un groupe ivoirien, une ambition régionale."
        subtitle="Eburnie Corporation est née d'une conviction : la Côte d'Ivoire mérite des champions économiques structurés, ambitieux et pérennes."
      />
      <section aria-labelledby="about-histoire" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="text-xs tracking-[0.32em] text-gold">NOTRE HISTOIRE</div>
            <h2 id="about-histoire" className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold">D'une vision à un groupe multisectoriel.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Fondé avec l'ambition de transformer le paysage économique ivoirien, Eburnie Corporation a structuré progressivement six filiales complémentaires, chacune répondant à un besoin stratégique du pays.</p>
              <p>De l'e-commerce à la logistique, de l'immobilier aux échanges internationaux, le groupe s'appuie sur une gouvernance moderne pour bâtir un acteur de référence en Côte d'Ivoire, avant d'envisager une extension à l'Afrique de l'Ouest.</p>
            </div>
          </div>
          <div className="relative">
            <div role="img" aria-label="Année de fondation d'Eburnie Corporation : 2024" className="aspect-[4/5] bg-gradient-prestige rounded-sm relative overflow-hidden">
              <div aria-hidden="true" className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(135deg, var(--gold) 0%, transparent 60%)" }} />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="text-5xl font-display font-bold text-gold-bright">2024</div>
                <div className="mt-2 text-sm tracking-[0.2em] uppercase text-white/85">Année de fondation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-valeurs" className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 relative">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.32em] text-gold">CE QUI NOUS GUIDE</div>
            <h2 id="about-valeurs" className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold">Mission, vision et valeurs.</h2>
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
    <motion.ul
      aria-label="Nos six piliers"
      className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 list-none p-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
      }}
    >
      {values.map((v, i) => {
        const num = String(i + 1).padStart(2, "0");
        return (
          <motion.li
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
            tabIndex={0}
            aria-labelledby={`value-${i}-title`}
            aria-describedby={`value-${i}-desc`}
            className="group relative bg-background p-5 sm:p-6 md:p-8 rounded-sm border border-border/60 hover:border-gold/60 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.18)] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
          >
            <motion.div
              aria-hidden="true"
              className="absolute top-0 left-0 h-[2px] w-full bg-gradient-gold origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute -top-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gold/5"
              whileHover={reduce ? undefined : { scale: 1.15, backgroundColor: "rgba(212,175,55,0.12)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <div
              aria-hidden="true"
              className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 font-display text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground/70 tabular-nums"
            >
              {num}
            </div>
            <div className="relative">
              <motion.div
                className="inline-flex items-center gap-2 h-12 w-auto min-w-12 sm:h-14 sm:min-w-14 px-3 rounded-sm bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20"
                whileHover={reduce ? undefined : { rotate: -6, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <v.icon className="text-gold" size={22} aria-hidden="true" />
                <span className="text-xl leading-none" role="img" aria-label={`Emoji ${v.title}`}>{v.emoji}</span>
              </motion.div>
              <div id={`value-${i}-title`} className="mt-5 sm:mt-6 font-display font-bold text-lg sm:text-xl pr-10">{v.title}</div>
              <motion.div
                aria-hidden="true"
                className="mt-2 h-px bg-gold/60 origin-left"
                initial={{ width: 24 }}
                whileHover={reduce ? undefined : { width: 72 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <p id={`value-${i}-desc`} className="mt-3 sm:mt-4 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              <motion.div
                className="mt-5 sm:mt-6 h-[3px] w-full rounded-full bg-border/60 overflow-hidden"
                aria-hidden="true"
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
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

