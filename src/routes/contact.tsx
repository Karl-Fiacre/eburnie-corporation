import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-contact.jpg";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

import { SITE_URL, seoLinks } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eburnie Corporation (Abidjan, Côte d'Ivoire)" },
      {
        name: "description",
        content:
          "Contactez le groupe Eburnie Corporation à Abidjan, Côte d'Ivoire : téléphone, email, WhatsApp et formulaire en ligne.",
      },
      { property: "og:title", content: "Contact — Eburnie Corporation" },
      {
        property: "og:description",
        content: "Notre équipe à Abidjan vous répond sous 48h ouvrées.",
      },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { name: "twitter:title", content: "Contact — Eburnie Corporation" },
      {
        name: "twitter:description",
        content: "Notre équipe à Abidjan vous répond sous 48h ouvrées.",
      },
    ],
    links: seoLinks("/contact"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact — Eburnie Corporation",
          url: `${SITE_URL}/contact`,
          mainEntity: {
            "@type": "Organization",
            name: "Eburnie Corporation",
            email: "contact@eburniecorporation.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Abidjan",
              addressCountry: "CI",
            },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const infos = [
  { icon: MapPin, t: "Siège social", d: "Abidjan, Côte d'Ivoire" },
  { icon: Phone, t: "Téléphone", d: "+225 00 00 00 00" },
  { icon: Mail, t: "Email", d: "contact@eburniecorporation.com" },
  { icon: MessageCircle, t: "WhatsApp", d: "+225 00 00 00 00" },
];

function ContactPage() {
  return (
    <>
      <PageHero image={heroImg} eyebrow="CONTACT" title="Discutons de votre projet." subtitle="Notre équipe vous répond sous 48h ouvrées." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="text-xs tracking-[0.32em] text-gold">COORDONNÉES</div>
            <h2 className="mt-4 text-3xl font-bold">Eburnie Corporation</h2>
            <div className="mt-10 space-y-6">
              {infos.map((i) => (
                <div key={i.t} className="flex gap-4">
                  <div className="h-11 w-11 bg-secondary flex items-center justify-center shrink-0">
                    <i.icon className="text-gold" size={18} />
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{i.t}</div>
                    <div className="mt-1 font-medium">{i.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 aspect-[4/3] bg-secondary border border-border overflow-hidden">
              <iframe
                title="Carte"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-4.05%2C5.30%2C-3.95%2C5.36&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="border border-border p-8 lg:p-10 bg-background">
              <h3 className="font-display text-2xl font-bold">Formulaire de contact</h3>
              <p className="mt-2 text-sm text-muted-foreground">Tous les champs sont obligatoires.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
