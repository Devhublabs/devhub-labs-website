// Central SEO / site configuration.
//
// Production is deployed to Vercel at https://devhub-labs-website.vercel.app.
// Override the full site root with VITE_SITE_URL when moving to a custom
// domain (e.g. https://devhublabs.com) — no code changes required.
const DEFAULT_SITE_URL = "https://devhub-labs-website.vercel.app";

const siteUrl = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(
  /\/+$/,
  "",
);

export const SITE = {
  name: "DevHub Labs",
  // Absolute root of the deployed site (no trailing slash).
  url: siteUrl,
  // Vite base path — used for referencing public assets at runtime.
  base: import.meta.env.BASE_URL,
  defaultTitle: "DevHub Labs — We Build Intelligent Software",
  titleTemplate: "%s | DevHub Labs",
  description:
    "DevHub Labs is a software engineering team building scalable, premium digital products—AI solutions, SaaS platforms, web applications, and custom software for ambitious businesses.",
  locale: "en_US",
  twitterHandle: "@devhublabs",
  ogImage: "og-image.png",
};

/**
 * Build an absolute canonical URL for a route path (e.g. "/about").
 */
export function canonicalUrl(path = "/") {
  if (!path || path === "/") {
    return `${SITE.url}/`;
  }

  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Build an absolute URL for a public asset (e.g. "og-image.png").
 */
export function assetUrl(asset) {
  if (/^https?:\/\//.test(asset)) {
    return asset;
  }

  return `${SITE.url}/${asset.replace(/^\/+/, "")}`;
}
