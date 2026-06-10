import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-corporate.jpg";
import {
  ShoppingBag,
  Car,
  Building2,
  Globe2,
  Truck,
  CalendarRange,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eburnie Corporation — Construire les opportunités de demain" },
      {
        name: "description",
        content:
          "Groupe multisectoriel africain opérant dans le commerce, la mobilité, l'immobilier, la logistique, les échanges internationaux et l'événementiel.",
      },
      { property: "og:title", content: "Eburnie Corporation" },
      {
        property: "og:description",
        content: "Construire les opportunités de demain en Afrique.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  { value: "6", label: "Pôles d'activité" },
  { value: "15+", label: "Pays ciblés" },
  { value: "500+", label: "Collaborateurs visés" },
  { value: "2024", label: "Année de fondation" },
];

const subs = [
  { icon: ShoppingBag, name: "Eburnie Boutique", desc: "E-commerce panafricain", url: "https://boutique.eburniecorporation.com" },
  { icon: Car, name: "Eburnie Auto", desc: "Automobile & Mobilité", url: "https://auto.eburniecorporation.com" },
  { icon: Building2, name: "Eburnie Immobilier", desc: "Développement immobilier", url: "https://immobilier.eburniecorporation.com" },
  { icon: Globe2, name: "Eburnie China Deals", desc: "Import-Export & Sourcing", url: "https://chinadeals.eburniecorporation.com" },
  { icon: Truck, name: "Eburnie Cargo", desc: "Logistique & Transport", url: "https://cargo.eburniecorporation.com" },
  { icon: CalendarRange, name: "Eburnie Event", desc: "Voyages & Événementiel", url: "https://event.eburniecorporation.com" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-prestige text-white overflow-hidden">
        <img
          src={heroImg}
          alt="Skyline corporate africain au coucher du soleil"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-prestige via-prestige/85 to-prestige/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-prestige via-transparent to-prestige/40" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-56 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.32em] text-gold-bright animate-fade-up">
              <span className="h-px w-10 bg-gold" />
              GROUPE MULTISECTORIEL AFRICAIN
            </div>
            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.02] animate-fade-up">
              Construire les opportunités{" "}
              <span className="text-gold-bright">de demain</span> en Afrique.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed animate-fade-up">
              Eburnie Corporation est un groupe multisectoriel opérant dans le
              commerce, la mobilité, l'immobilier, la logistique, les échanges
              internationaux et l'événementiel.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
              <Link
                to="/subsidiaries"
                className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-gold text-prestige text-sm font-semibold tracking-wide shadow-gold hover:translate-y-[-2px] transition-transform rounded-sm"
              >
                Découvrir nos filiales <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 hover:border-gold-bright hover:text-gold-bright text-sm font-semibold tracking-wide transition-colors rounded-sm"
              >
                Devenir partenaire
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-prestige/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="py-6 md:py-8 border-l border-white/10 first:border-l-0 pl-6">
                <div className="text-3xl md:text-4xl font-display font-bold text-gold-bright">{s.value}</div>
                <div className="mt-2 inline-block px-2 py-1 text-xs tracking-[0.2em] text-white/90 uppercase font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="text-xs tracking-[0.32em] text-gold">LE GROUPE</div>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
              Un acteur structuré au service du développement africain.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              Eburnie Corporation rassemble six filiales stratégiques sous une
              gouvernance unifiée, conçue pour répondre aux besoins économiques,
              logistiques et institutionnels du continent africain.
            </p>
            <p>
              Notre ambition : bâtir une holding panafricaine de référence,
              capable de catalyser les flux commerciaux, mobiliser les
              investisseurs internationaux et accompagner la transformation
              durable des marchés.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              {[
                { icon: TrendingUp, t: "Croissance", d: "Stratégie panafricaine" },
                { icon: ShieldCheck, t: "Gouvernance", d: "Standards internationaux" },
                { icon: Compass, t: "Vision", d: "Long-terme & durable" },
              ].map((v) => (
                <div key={v.t} className="border-t-2 border-gold pt-4">
                  <v.icon className="text-gold" size={22} />
                  <div className="mt-3 font-display font-semibold text-foreground">{v.t}</div>
                  <div className="text-sm text-muted-foreground">{v.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUBSIDIARIES */}
      <section className="py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <div className="text-xs tracking-[0.32em] text-gold">FILIALES</div>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold">Six pôles d'activité.</h2>
            </div>
            <Link to="/subsidiaries" className="text-sm font-semibold inline-flex items-center gap-2 hover:text-gold transition-colors">
              Voir toutes les filiales <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {subs.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background p-8 hover:bg-prestige hover:text-white transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-sm bg-secondary group-hover:bg-gold flex items-center justify-center transition-colors">
                    <s.icon size={22} className="text-prestige" />
                  </div>
                  <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-gold transition-colors" />
                </div>
                <div className="mt-8 font-display font-bold text-xl">{s.name}</div>
                <div className="mt-2 text-sm opacity-70">{s.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DG MESSAGE */}
      <section className="py-28 bg-prestige text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <div className="text-xs tracking-[0.32em] text-gold">DIRECTION GÉNÉRALE</div>
          <blockquote className="mt-8 text-2xl md:text-4xl font-display font-medium leading-snug">
            « Notre vision est claire : faire d'Eburnie Corporation un pilier
            économique africain, ancré dans l'excellence, l'innovation et la
            création de valeur partagée. »
          </blockquote>
          <div className="mt-10">
            <div className="font-display font-semibold">La Direction Générale</div>
            <div className="text-sm text-white/60">Eburnie Corporation</div>
          </div>
        </div>
      </section>

      {/* CTA PARTNERSHIP */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden bg-gradient-gold p-12 md:p-20 rounded-sm">
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-prestige leading-tight">
                Investir, collaborer, bâtir ensemble.
              </h2>
              <p className="mt-5 text-prestige/80 text-lg">
                Rejoignez notre écosystème de partenaires stratégiques et
                participez à la construction d'une Afrique moderne et connectée.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/investors" className="px-7 py-4 bg-prestige text-white text-sm font-semibold tracking-wide hover:bg-black rounded-sm">
                  Espace investisseurs
                </Link>
                <Link to="/partners" className="px-7 py-4 border border-prestige text-prestige text-sm font-semibold tracking-wide hover:bg-prestige hover:text-white rounded-sm transition-colors">
                  Devenir partenaire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
