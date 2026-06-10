import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-news.jpg";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { Search } from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Actualités — Eburnie Corporation (Côte d'Ivoire)" },
      {
        name: "description",
        content:
          "Actualités du groupe Eburnie Corporation et de ses filiales en Côte d'Ivoire : Boutique, Auto, Immobilier, China Deals, Cargo, Event.",
      },
      { property: "og:title", content: "Actualités — Eburnie Corporation" },
      {
        property: "og:description",
        content: "Suivez les dernières actualités du groupe Eburnie en Côte d'Ivoire.",
      },
      { property: "og:url", content: `${SITE_URL}/news` },
      { name: "twitter:title", content: "Actualités — Eburnie Corporation" },
      {
        name: "twitter:description",
        content: "Suivez les dernières actualités du groupe Eburnie en Côte d'Ivoire.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/news` }],
  }),
  component: NewsPage,
});

const categories = ["Tous", "Groupe", "Boutique", "Auto", "Immobilier", "China Deals", "Cargo", "Event"];

const articles = [
  { cat: "Groupe", title: "Eburnie Corporation officialise sa structure de holding multisectorielle en Côte d'Ivoire", date: "5 juin 2026", excerpt: "Le groupe finalise sa gouvernance et confirme son ancrage ivoirien." },
  { cat: "Cargo", title: "Eburnie Cargo renforce son réseau logistique au départ d'Abidjan", date: "28 mai 2026", excerpt: "Nouveaux corridors logistiques au départ du port d'Abidjan." },
  { cat: "Boutique", title: "Eburnie Boutique dépasse les 10 000 références produits", date: "20 mai 2026", excerpt: "Une croissance soutenue du catalogue sur le marché ivoirien." },
  { cat: "China Deals", title: "Mission de sourcing stratégique à Guangzhou", date: "12 mai 2026", excerpt: "Renforcement des partenariats fournisseurs chinois pour les importateurs ivoiriens." },
  { cat: "Immobilier", title: "Lancement du premier projet résidentiel premium à Abidjan", date: "1 mai 2026", excerpt: "Eburnie Immobilier ouvre la commercialisation de sa première résidence." },
  { cat: "Event", title: "Forum ivoirien des investisseurs 2026", date: "20 avril 2026", excerpt: "Eburnie Event accueille 500 décideurs économiques à Abidjan." },
];

function NewsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Tous");
  const filtered = articles.filter(
    (a) =>
      (cat === "Tous" || a.cat === cat) &&
      (a.title.toLowerCase().includes(q.toLowerCase()) || a.excerpt.toLowerCase().includes(q.toLowerCase())),
  );
  return (
    <>
      <PageHero image={heroImg} eyebrow="ACTUALITÉS" title="L'actualité du groupe et de ses filiales." />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 text-xs tracking-[0.18em] uppercase border transition-colors ${
                    cat === c ? "bg-prestige text-white border-prestige" : "border-border hover:border-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative max-w-sm w-full">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Rechercher un article"
                className="w-full border border-border pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors bg-background"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a) => (
              <article key={a.title} className="group cursor-pointer">
                <div className="aspect-[16/10] bg-gradient-prestige relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, var(--gold) 0%, transparent 50%)" }} />
                  <div className="absolute top-4 left-4 text-[10px] tracking-[0.25em] bg-gold text-prestige px-2.5 py-1">{a.cat.toUpperCase()}</div>
                </div>
                <div className="mt-5">
                  <div className="text-xs text-muted-foreground">{a.date}</div>
                  <h3 className="mt-2 font-display font-bold text-lg leading-snug group-hover:text-gold transition-colors">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">Aucun article ne correspond à votre recherche.</div>
          )}
        </div>
      </section>
    </>
  );
}
