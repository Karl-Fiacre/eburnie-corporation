import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-prestige text-white pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute -top-20 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-xs tracking-[0.32em] text-gold animate-fade-up">{eyebrow}</div>
        <h1 className="mt-5 text-4xl md:text-6xl font-bold max-w-4xl leading-[1.05] animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-white/70 max-w-2xl animate-fade-up">{subtitle}</p>
        )}
        {children && <div className="mt-10 animate-fade-up">{children}</div>}
      </div>
    </section>
  );
}
