import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-corporate.jpg";
import { Reveal, RevealStagger, RevealItem, itemVariants } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
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

const marqueeWords = [
  "EXCELLENCE",
  "INNOVATION",
  "PANAFRICAIN",
  "GOUVERNANCE",
  "CROISSANCE",
  "DURABILITÉ",
  "VISION",
  "IMPACT",
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-prestige text-white overflow-hidden"
      >
        <motion.img
          src={heroImg}
          alt="Skyline corporate africain au coucher du soleil"
          width={1920}
          height={1080}
          style={{ y: imgY, scale: imgScale }}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-prestige via-prestige/85 to-prestige/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-prestige via-transparent to-prestige/40" />
        <div className="absolute inset-0 bg-gradient-aurora pointer-events-none" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-[120px] animate-float-slow pointer-events-none" />
        <div
          className="absolute bottom-1/4 -right-32 h-[32rem] w-[32rem] rounded-full bg-prestige/40 blur-[140px] animate-float-slow pointer-events-none"
          style={{ animationDelay: "-6s" }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-32 w-full"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 text-xs tracking-[0.32em] text-gold"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-px w-10 bg-gold origin-left"
              />
              GROUPE MULTISECTORIEL AFRICAIN
            </motion.div>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.02]">
              {["Construire", "les opportunités"].map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                <span className="text-gradient-gold">de demain</span> en Afrique.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed"
            >
              Eburnie Corporation est un groupe multisectoriel opérant dans le
              commerce, la mobilité, l'immobilier, la logistique, les échanges
              internationaux et l'événementiel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/subsidiaries"
                className="group relative inline-flex items-center gap-2 px-7 py-4 bg-gradient-gold text-prestige text-sm font-semibold tracking-wide shadow-gold rounded-sm overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Découvrir nos filiales{" "}
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <span className="absolute inset-0 animate-shimmer" />
              </Link>
              <Link
                to="/partners"
                className="group relative inline-flex items-center gap-2 px-7 py-4 border border-white/30 hover:border-gold text-sm font-semibold tracking-wide rounded-sm overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-prestige transition-colors duration-300">
                  Devenir partenaire
                </span>
                <span className="absolute inset-0 bg-gradient-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
              </Link>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-12 right-10 hidden md:flex flex-col items-center gap-3 text-[10px] tracking-[0.4em] text-white/50"
          >
            <span>SCROLL</span>
            <span className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-prestige/70 backdrop-blur-xl">
          <RevealStagger className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <RevealItem
                variants={itemVariants}
                key={s.label}
                className="py-6 md:py-8 border-l border-white/10 first:border-l-0 pl-6"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="mt-1 text-xs tracking-[0.2em] text-white/60 uppercase">{s.label}</div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-10 bg-prestige-2 border-y border-white/5 overflow-hidden" style={{ backgroundColor: "var(--prestige-2)" }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              className="mx-10 text-4xl md:text-6xl font-display font-bold tracking-tight text-white/[0.06] hover:text-gold/40 transition-colors"
            >
              {w} <span className="text-gold/40">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 relative">
          <Reveal className="lg:col-span-5">
            <div className="text-xs tracking-[0.32em] text-gold">LE GROUPE</div>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
              Un acteur structuré au service du{" "}
              <span className="text-gradient-gold">développement africain</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7 space-y-6 text-base text-muted-foreground leading-relaxed">
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
            <RevealStagger className="grid sm:grid-cols-3 gap-6 pt-6">
              {[
                { icon: TrendingUp, t: "Croissance", d: "Stratégie panafricaine" },
                { icon: ShieldCheck, t: "Gouvernance", d: "Standards internationaux" },
                { icon: Compass, t: "Vision", d: "Long-terme & durable" },
              ].map((v) => (
                <RevealItem
                  variants={itemVariants}
                  key={v.t}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="border-t-2 border-gold pt-4 cursor-default"
                >
                  <v.icon className="text-gold" size={22} />
                  <div className="mt-3 font-display font-semibold text-foreground">{v.t}</div>
                  <div className="text-sm text-muted-foreground">{v.d}</div>
                </RevealItem>
              ))}
            </RevealStagger>
          </Reveal>
        </div>
      </section>

      {/* SUBSIDIARIES */}
      <section className="py-28 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, var(--prestige) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <div className="text-xs tracking-[0.32em] text-gold">FILIALES</div>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Six pôles <span className="text-gradient-gold">d'activité</span>.
              </h2>
            </div>
            <Link
              to="/subsidiaries"
              className="text-sm font-semibold inline-flex items-center gap-2 hover:text-gold transition-colors group"
            >
              Voir toutes les filiales{" "}
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Reveal>
          <RevealStagger stagger={0.06} className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {subs.map((s) => (
              <RevealItem
                variants={itemVariants}
                key={s.url}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative bg-background"
              >
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block p-8 overflow-hidden h-full"
                >
                  <span className="absolute inset-0 bg-gradient-prestige translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-gold transition-all duration-500" />

                  <div className="relative flex items-start justify-between">
                    <div className="h-14 w-14 rounded-sm bg-secondary group-hover:bg-gradient-gold flex items-center justify-center transition-all duration-300 group-hover:rotate-[-6deg]">
                      <s.icon size={24} className="text-prestige" />
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="text-muted-foreground group-hover:text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <div className="relative mt-10 font-display font-bold text-xl group-hover:text-white transition-colors duration-300">
                    {s.name}
                  </div>
                  <div className="relative mt-2 text-sm text-muted-foreground group-hover:text-white/70 transition-colors duration-300">
                    {s.desc}
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* DG MESSAGE */}
      <section className="py-32 bg-prestige text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-aurora opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

        <Reveal className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <div className="text-xs tracking-[0.32em] text-gold">DIRECTION GÉNÉRALE</div>
          <div className="mt-6 inline-block text-7xl font-display text-gold/40">"</div>
          <blockquote className="mt-2 text-2xl md:text-4xl font-display font-medium leading-snug">
            Notre vision est claire : faire d'Eburnie Corporation un{" "}
            <span className="text-gradient-gold">pilier économique africain</span>,
            ancré dans l'excellence, l'innovation et la création de valeur partagée.
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <div>
              <div className="font-display font-semibold">La Direction Générale</div>
              <div className="text-sm text-white/60">Eburnie Corporation</div>
            </div>
            <span className="h-px w-12 bg-gold" />
          </div>
        </Reveal>
      </section>

      {/* CTA PARTNERSHIP */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden bg-gradient-gold p-12 md:p-20 rounded-sm shadow-gold">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 20%, var(--prestige) 0, transparent 50%)",
                }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -top-32 -right-32 h-96 w-96 border border-prestige/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 h-72 w-72 border border-prestige/10 rounded-full"
              />

              <div className="relative max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-prestige leading-tight">
                  Investir, collaborer, bâtir ensemble.
                </h2>
                <p className="mt-5 text-prestige/80 text-lg">
                  Rejoignez notre écosystème de partenaires stratégiques et
                  participez à la construction d'une Afrique moderne et connectée.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/investors"
                    className="px-7 py-4 bg-prestige text-white text-sm font-semibold tracking-wide hover:bg-black rounded-sm transition-all hover:-translate-y-0.5 shadow-premium"
                  >
                    Espace investisseurs
                  </Link>
                  <Link
                    to="/partners"
                    className="px-7 py-4 border border-prestige text-prestige text-sm font-semibold tracking-wide hover:bg-prestige hover:text-white rounded-sm transition-all hover:-translate-y-0.5"
                  >
                    Devenir partenaire
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
