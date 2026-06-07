import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, image, children }: PageHeroProps) {
  return (
    <section
      className="relative pt-40 pb-24 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* 80% white overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
      {/* subtle grid accent */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--prestige) 1px, transparent 1px), linear-gradient(90deg, var(--prestige) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute -top-20 -right-32 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-prestige">
        <div className="text-xs tracking-[0.32em] font-semibold text-gold-bright animate-fade-up">
          {eyebrow}
        </div>
        <h1 className="mt-5 text-4xl md:text-6xl font-bold max-w-4xl leading-[1.05] animate-fade-up text-prestige">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-prestige/80 max-w-2xl animate-fade-up">{subtitle}</p>
        )}
        {children && <div className="mt-10 animate-fade-up">{children}</div>}
      </div>
    </section>
  );
}
