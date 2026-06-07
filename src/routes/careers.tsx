import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-careers.jpg";
import { PageHero } from "@/components/PageHero";
import { Briefcase, GraduationCap, FileText, MapPin } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Carrières — Eburnie Corporation" },
      { name: "description", content: "Rejoignez les équipes du groupe Eburnie Corporation." },
      { property: "og:title", content: "Carrières — Eburnie Corporation" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const jobs = [
  { title: "Directeur Logistique — Eburnie Cargo", type: "CDI", loc: "Abidjan, CI" },
  { title: "Responsable E-commerce — Eburnie Boutique", type: "CDI", loc: "Abidjan, CI" },
  { title: "Acheteur International — China Deals", type: "CDI", loc: "Guangzhou, CN" },
  { title: "Chargé de partenariats — Corporate", type: "CDI", loc: "Abidjan, CI" },
  { title: "Stage — Communication & Marque", type: "Stage", loc: "Abidjan, CI" },
];

function CareersPage() {
  return (
    <>
      <PageHero image={heroImg}
        eyebrow="CARRIÈRES"
        title="Rejoignez ceux qui construisent l'Afrique de demain."
        subtitle="Nous recrutons des talents engagés, ambitieux et passionnés par l'impact."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Briefcase, t: "Offres d'emploi", d: "Postes ouverts dans toutes nos filiales." },
            { icon: GraduationCap, t: "Stages", d: "Programmes pour jeunes diplômés et étudiants." },
            { icon: FileText, t: "Candidature spontanée", d: "Envoyez-nous votre CV à tout moment." },
          ].map((c) => (
            <div key={c.t} className="p-8 border border-border hover:border-gold transition-colors">
              <c.icon className="text-gold" size={26} />
              <div className="mt-5 font-display font-bold text-lg">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-2xl font-bold mb-8">Postes ouverts</h2>
          <div className="border border-border divide-y divide-border">
            {jobs.map((j) => (
              <div key={j.title} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-secondary transition-colors">
                <div>
                  <div className="font-display font-semibold">{j.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground flex items-center gap-3">
                    <span>{j.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} />{j.loc}</span>
                  </div>
                </div>
                <button className="px-5 py-2.5 bg-prestige text-white text-sm font-semibold hover:bg-gradient-gold hover:text-prestige transition-all">
                  Postuler
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold">Candidature spontanée</h2>
          <p className="mt-3 text-muted-foreground">Envoyez votre CV à <a className="text-gold underline" href="mailto:rh@eburniecorporation.com">rh@eburniecorporation.com</a></p>
        </div>
      </section>
    </>
  );
}
