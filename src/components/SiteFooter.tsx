import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

const subsidiaries = [
  { name: "Eburnie Boutique", url: "https://boutique.eburniecorporation.com" },
  { name: "Eburnie Auto", url: "https://auto.eburniecorporation.com" },
  { name: "Eburnie Immobilier", url: "https://immobilier.eburniecorporation.com" },
  { name: "Eburnie China Deals", url: "https://chinadeals.eburniecorporation.com" },
  { name: "Eburnie Cargo", url: "https://cargo.eburniecorporation.com" },
  { name: "Eburnie Event", url: "https://event.eburniecorporation.com" },
];

const quickLinks = [
  { to: "/about", label: "À Propos" },
  { to: "/subsidiaries", label: "Nos Filiales" },
  { to: "/investors", label: "Investisseurs" },
  { to: "/partners", label: "Partenaires" },
  { to: "/news", label: "Actualités" },
  { to: "/careers", label: "Carrières" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-prestige text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-sm bg-gradient-gold flex items-center justify-center">
              <span className="text-prestige font-display font-bold text-lg">E</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold tracking-[0.18em]">EBURNIE</div>
              <div className="text-[10px] tracking-[0.32em] text-white/60">CORPORATION</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/65 leading-relaxed max-w-sm">
            Groupe multisectoriel africain bâtissant les opportunités de demain à
            travers six pôles d'activité stratégiques.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Facebook, Instagram, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-sm border border-white/15 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-prestige transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs tracking-[0.25em] text-gold mb-5">GROUPE</h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/70 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs tracking-[0.25em] text-gold mb-5">FILIALES</h4>
          <ul className="space-y-3 text-sm">
            {subsidiaries.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs tracking-[0.25em] text-gold mb-5">NEWSLETTER</h4>
          <p className="text-sm text-white/65 mb-4">
            Recevez nos actualités corporate et opportunités d'investissement.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border border-white/15 focus-within:border-gold transition-colors"
          >
            <input
              type="email"
              required
              placeholder="Votre email"
              className="flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none"
            />
            <button className="px-5 bg-gradient-gold text-prestige text-sm font-semibold">
              OK
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Eburnie Corporation. Tous droits réservés.</div>
          <div className="tracking-[0.2em]">CONSTRUIRE L'AFRIQUE DE DEMAIN</div>
        </div>
      </div>
    </footer>
  );
}
