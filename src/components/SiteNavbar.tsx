import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/eburnie-logo.png.asset.json";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À Propos" },
  { to: "/subsidiaries", label: "Nos Filiales" },
  { to: "/investors", label: "Investisseurs" },
  { to: "/partners", label: "Partenaires" },
  { to: "/news", label: "Actualités" },
  { to: "/careers", label: "Carrières" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-xl border-b ${
        scrolled ? "border-border shadow-md" : "border-border/60 shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img src={logoAsset.url} alt="Eburnie Corporation" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display font-bold text-sm tracking-[0.18em] text-foreground">
              EBURNIE
            </div>
            <div className="text-[10px] tracking-[0.32em] text-muted-foreground">
              CORPORATION
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-2.5">
          <nav className="flex items-center gap-2.5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="btn-3d-prestige"
                activeProps={{ className: "btn-3d-active" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/partners"
            className="inline-flex btn-3d-gold"
          >
            Devenir partenaire
          </Link>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/98 border-t border-border px-4 py-3">
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="btn-3d-mobile mb-2 last:mb-0"
                activeProps={{ className: "btn-3d-active" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
