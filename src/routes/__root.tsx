import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNavbar } from "../components/SiteNavbar";
import { SiteFooter } from "../components/SiteFooter";
import { Toaster } from "sonner";
import { SITE_URL, SITE_NAME, SITE_LOCALE } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Eburnie Corporation — Groupe multisectoriel ivoirien (Abidjan)" },
      {
        name: "description",
        content:
          "Eburnie Corporation est un groupe multisectoriel basé en Côte d'Ivoire, opérant dans le commerce, la mobilité, l'immobilier, la logistique, les échanges internationaux et l'événementiel.",
      },
      { name: "author", content: "Eburnie Corporation" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "French" },
      { name: "geo.region", content: "CI" },
      { name: "geo.placename", content: "Abidjan" },
      { name: "geo.position", content: "5.3600;-4.0083" },
      { name: "ICBM", content: "5.3600, -4.0083" },
      { property: "og:title", content: "Eburnie Corporation" },
      {
        property: "og:description",
        content:
          "Groupe multisectoriel ivoirien : commerce, mobilité, immobilier, logistique, import-export, événementiel. Construire les opportunités de demain en Côte d'Ivoire.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: SITE_LOCALE },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Eburnie Corporation" },
      {
        name: "twitter:description",
        content: "Groupe multisectoriel ivoirien — commerce, mobilité, immobilier, logistique, import-export, événementiel.",
      },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Eburnie Corporation",
          alternateName: "Eburnie",
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.png`,
          description:
            "Groupe multisectoriel ivoirien opérant dans le commerce, la mobilité, l'immobilier, la logistique, les échanges internationaux et l'événementiel.",
          foundingDate: "2024",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Abidjan",
            addressCountry: "CI",
          },
          areaServed: { "@type": "Country", name: "Côte d'Ivoire" },
          sameAs: [],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Eburnie Corporation",
          url: SITE_URL,
          inLanguage: "fr-CI",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr-CI">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteNavbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}
