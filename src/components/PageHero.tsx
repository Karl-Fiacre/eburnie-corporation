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
      {/* subtle dark gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute -top-20 -right-32 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl shadow-xl animate-fade-up">
          <div className="text-xs tracking-[0.32em] font-semibold text-gold">
            {eyebrow}
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-foreground/80 max-w-2xl">{subtitle}</p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}
