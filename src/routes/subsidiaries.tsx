import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-subsidiaries.jpg";
import { PageHero } from "@/components/PageHero";
import { ShoppingBag, Car, Building2, Globe2, Truck, CalendarRange, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { SITE_URL, seoLinks } from "@/lib/site";

export const Route = createFileRoute("/subsidiaries")({
  head: () => ({
    meta: [
      { title: "Nos Filiales — Eburnie Corporation (Côte d'Ivoire)" },
      {
        name: "description",
        content:
          "Découvrez les six filiales du groupe Eburnie Corporation : Boutique, Auto, Immobilier, China Deals, Cargo, Event — basées à Abidjan, Côte d'Ivoire.",
      },
      { property: "og:title", content: "Nos Filiales — Eburnie Corporation" },
      {
        property: "og:description",
        content: "Six filiales ivoiriennes sous une gouvernance unifiée : e-commerce, mobilité, immobilier, import-export, logistique, événementiel.",
      },
      { property: "og:url", content: `${SITE_URL}/subsidiaries` },
      { name: "twitter:title", content: "Nos Filiales — Eburnie Corporation" },
      {
        name: "twitter:description",
        content: "Six filiales ivoiriennes : e-commerce, mobilité, immobilier, import-export, logistique, événementiel.",
      },
    ],
    links: seoLinks("/subsidiaries"),
  }),
  component: SubsidiariesPage,
});

const subs = [
  { icon: ShoppingBag, name: "Eburnie Boutique", tag: "E-COMMERCE", desc: "Plateforme e-commerce ivoirienne connectant marques et consommateurs avec une expérience d'achat moderne et sécurisée.", url: "https://boutique.eburniecorporation.com" },
  { icon: Car, name: "Eburnie Auto", tag: "AUTOMOBILE & MOBILITÉ", desc: "Distribution automobile, mobilité urbaine et solutions de transport adaptées au marché ivoirien.", url: "https://auto.eburniecorporation.com" },
  { icon: Building2, name: "Eburnie Immobilier", tag: "IMMOBILIER", desc: "Développement, gestion et commercialisation de projets immobiliers résidentiels et commerciaux haut de gamme à Abidjan.", url: "https://immobilier.eburniecorporation.com" },
  { icon: Globe2, name: "Eburnie China Deals", tag: "IMPORT-EXPORT & SOURCING", desc: "Sourcing stratégique en Chine et accompagnement complet des opérations d'import-export pour les entreprises ivoiriennes.", url: "https://chinadeals.eburniecorporation.com" },
  { icon: Truck, name: "Eburnie Cargo", tag: "LOGISTIQUE & TRANSPORT", desc: "Solutions logistiques intégrées : fret maritime, aérien, routier et dernière mile au départ et à destination de la Côte d'Ivoire.", url: "https://cargo.eburniecorporation.com" },
  { icon: CalendarRange, name: "Eburnie Event", tag: "VOYAGES & ÉVÉNEMENTIEL", desc: "Organisation de voyages d'affaires, rencontres professionnelles et événements corporate de grande envergure.", url: "https://event.eburniecorporation.com" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function SubsidiariesPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="NOS FILIALES"
        title="Six pôles, une vision unifiée."
        subtitle="Chaque filiale opère avec ses propres expertises et équipes, sous la gouvernance stratégique du groupe."
      />
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(var(--gold) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="pointer-events-none absolute -top-[10%] -right-[5%] h-[30%] w-[30%] rounded-full bg-gold blur-[150px] opacity-10" />
        <div className="pointer-events-none absolute -bottom-[10%] -left-[5%] h-[25%] w-[25%] rounded-full bg-prestige blur-[150px] opacity-5" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <span className="mb-4 block text-[10px] font-semibold tracking-[0.4em] text-gold uppercase">
              L'écosystème Eburnie
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Nos <span className="text-gold">Filiales</span>
            </h2>
            <div className="mx-auto mt-6 mb-8 h-[2px] w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
              L'excellence au service de votre ambition, portée par des pôles d'expertise spécialisés et complémentaires.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            role="list"
            aria-label="Liste des filiales du groupe Eburnie Corporation"
          >
            {subs.map((s) => (
              <motion.a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden border border-border bg-card p-10 transition-all duration-700 ease-out hover:-translate-y-3 hover:border-gold/30 hover:shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                variants={itemVariants}
                role="listitem"
                aria-label={`${s.name} — ${s.tag}. Ouvrir le site dans un nouvel onglet.`}
              >
                {/* Animated gold bottom border */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.32em] text-gold">{s.tag}</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-primary-foreground">
                      <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
                    </div>
                  </div>

                  <div className="mt-8 h-16 w-16 flex items-center justify-center rounded-sm border border-border bg-secondary text-prestige transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-primary-foreground">
                    <s.icon size={28} className="transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold tracking-wide text-card-foreground transition-colors duration-300 group-hover:text-gold">
                    {s.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>

                  <div className="mt-8 flex items-center text-[10px] font-bold tracking-[0.2em] text-gold opacity-0 transition-all duration-500 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                    Découvrir
                    <ArrowUpRight size={16} className="ml-2" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
