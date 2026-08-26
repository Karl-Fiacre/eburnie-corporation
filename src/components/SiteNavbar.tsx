import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoAsset from "@/assets/eburnie-logo.png.asset.json";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À Propos" },
  { to: "/subsidiaries", label: "Nos Filiales" },
  { to: "/investors", label: "Investisseurs" },
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

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-xl border-b ${
        scrolled ? "border-border shadow-md" : "border-border/60 shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group shrink-0" onClick={() => setOpen(false)}>
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

        <div className="hidden lg:flex items-center gap-2.5 ml-auto">
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
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden relative z-[60] p-2 rounded-xl bg-prestige text-white shadow-lg border border-white/10 hover:scale-105 active:scale-95 transition-transform"
          onClick={() => setOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </header>

    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-[55] bg-prestige/60 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <motion.div
            id="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="lg:hidden fixed top-0 right-0 h-screen z-[60] w-[min(85vw,20rem)] bg-gradient-to-b from-white via-white to-secondary/40 shadow-premium border-l border-border flex flex-col"
          >
            <div className="h-20 flex items-center justify-between px-6 border-b border-border bg-white/80 backdrop-blur-md">
              <span className="font-display font-bold text-sm tracking-[0.18em] text-prestige">MENU</span>
              <button
                aria-label="Fermer le menu"
                className="p-2 rounded-lg bg-prestige/10 text-prestige hover:bg-prestige hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="flex flex-col gap-3">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 24 }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      activeOptions={{ exact: l.to === "/" }}
                      className="group flex items-center justify-between rounded-xl px-4 py-3.5 font-semibold text-prestige bg-white border border-border shadow-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-gold hover:to-gold-bright hover:text-prestige hover:shadow-gold hover:translate-x-[-4px] hover:border-gold active:scale-[0.98] [&[aria-current='page']]:bg-prestige [&[aria-current='page']]:text-white [&[aria-current='page']]:border-prestige"
                      activeProps={{ className: "bg-prestige text-white border-prestige" }}
                    >
                      <span>{l.label}</span>
                      <ChevronRight
                        size={18}
                        className="text-corporate-gray group-hover:text-prestige group-hover:translate-x-1 transition-all"
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                className="mt-6"
              >
                <Link
                  to="/partners"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-full py-3.5 px-5 font-bold text-prestige bg-gradient-to-b from-gold-bright to-gold border border-gold shadow-gold hover:shadow-[0_0_24px_-4px_oklch(0.74_0.13_85/0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  Devenir partenaire
                  <ChevronRight size={18} />
                </Link>
              </motion.div>
            </nav>

            <div className="px-5 py-4 border-t border-border bg-white/80 backdrop-blur-md">
              <p className="text-xs text-center text-corporate-gray">
                © {new Date().getFullYear()} Eburnie Corporation
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </>
  );
}
