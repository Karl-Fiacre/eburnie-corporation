import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-subsidiaries.jpg";
import { PageHero } from "@/components/PageHero";
import { ShoppingBag, Car, Building2, Globe2, Truck, CalendarRange, ArrowUpRight } from "lucide-react";

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

function SubsidiariesPage() {
  return (
    <>
      <PageHero image={heroImg}
        eyebrow="NOS FILIALES"
        title="Six pôles, une vision unifiée."
        subtitle="Chaque filiale opère avec ses propres expertises et équipes, sous la gouvernance stratégique du groupe."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-8">
          {subs.map((s) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-border p-10 hover:border-gold hover:shadow-premium transition-all duration-300 bg-background"
            >
              <div className="flex items-center justify-between">
                <div className="text-[10px] tracking-[0.32em] text-gold">{s.tag}</div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-gold group-hover:rotate-45 transition-all" size={22} />
              </div>
              <div className="mt-8 flex items-start gap-5">
                <div className="h-14 w-14 rounded-sm bg-secondary group-hover:bg-gradient-gold flex items-center justify-center transition-all shrink-0">
                  <s.icon size={26} className="text-prestige" />
                </div>
                <div>
                  <div className="font-display font-bold text-2xl">{s.name}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
