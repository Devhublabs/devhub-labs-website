import { SITE, assetUrl, canonicalUrl } from "@/config/site.js";

/**
 * Per-page document metadata. Relies on React 19's native hoisting of
 * <title>, <meta> and <link> into <head>, so no external head-manager
 * dependency is needed. Also emits optional Breadcrumb / custom JSON-LD.
 */
export default function Seo({
  title,
  description = SITE.description,
  path = "/",
  image = SITE.ogImage,
  type = "website",
  noindex = false,
  breadcrumbs,
  jsonLd,
}) {
  const fullTitle = title
    ? SITE.titleTemplate.replace("%s", title)
    : SITE.defaultTitle;
  const canonical = canonicalUrl(path);
  const imageUrl = assetUrl(image);

  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: canonicalUrl(crumb.path),
          })),
        }
      : null;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noindex ? "noindex,follow" : "index,follow"}
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={SITE.locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {breadcrumbSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      ) : null}
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </>
  );
}
