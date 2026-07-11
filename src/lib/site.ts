// Centralized site metadata. When the custom domain is purchased,
// update SITE_URL here and the change will propagate everywhere
// (canonical, og:url, sitemap, JSON-LD, robots.txt).
export const SITE_URL = "https://eburnie-corporation.lovable.app";
export const SITE_NAME = "Eburnie Corporation";
export const SITE_LOCALE = "fr_CI";
export const SITE_COUNTRY = "CI"; // Côte d'Ivoire
export const SITE_CITY = "Abidjan";
export const SITE_DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * Build canonical + hreflang link tags for a given route path.
 * The site is currently French (Côte d'Ivoire) only, so we emit a
 * self-referential fr-CI hreflang plus x-default. When new locales are
 * added later, extend this helper — every route will pick it up.
 */
export function seoLinks(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const href = `${SITE_URL}${clean === "/" ? "" : clean}`;
  return [
    { rel: "canonical", href },
    { rel: "alternate", hrefLang: "fr-CI", href },
    { rel: "alternate", hrefLang: "fr", href },
    { rel: "alternate", hrefLang: "x-default", href },
  ];
}
