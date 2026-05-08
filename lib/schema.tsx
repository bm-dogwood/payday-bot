// Schema.org JSON-LD helpers for PAYDAY.BOT

export const SITE_URL = "https://payday.bot";

// ─── WebSite Schema ───────────────────────────────────────────────
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PAYDAY.BOT",
    url: SITE_URL,
    description:
      "Payday loan rate comparison, state law tracker, alternative lending options, and consumer protection resources.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── FinancialService / LocalBusiness ────────────────────────────
export function financialServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "PAYDAY.BOT",
    url: SITE_URL,
    description: "Free payday loan comparison and consumer protection platform.",
    serviceType: "Loan Comparison",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Free Financial Tools",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Payday Loan Rate Comparison",
            description: "Compare payday loan rates and fees across all 50 states",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "State Law Tracker",
            description: "Real-time tracking of payday loan regulations by state",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Payday Loan Debt Calculator",
            description: "Calculate the true cost of payday loans including rollover fees",
          },
        },
      ],
    },
  };
}

// ─── FAQ Schema ───────────────────────────────────────────────────
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── HowTo Schema (for calculators/guides) ───────────────────────
export function howToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

// ─── BreadcrumbList Schema ────────────────────────────────────────
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Article Schema (for SEO content pages) ──────────────────────
export function articleSchema(params: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: {
      "@type": "Organization",
      name: params.authorName || "PAYDAY.BOT Editorial Team",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "PAYDAY.BOT",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
  };
}

// ─── SoftwareApplication Schema (for calculator tools) ───────────
export function softwareAppSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

// ─── Table/Dataset Schema (for state rate tables) ─────────────────
export function datasetSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name,
    description,
    url,
    creator: {
      "@type": "Organization",
      name: "PAYDAY.BOT",
      url: SITE_URL,
    },
    license: `${SITE_URL}/terms`,
    isAccessibleForFree: true,
    keywords: [
      "payday loan rates",
      "payday loan APR",
      "state lending laws",
      "payday loan fees",
    ],
  };
}

// ─── JSON-LD Renderer Component ────────────────────────────────────
// Usage in page.tsx: <JsonLd schema={faqSchema(faqs)} />
export function JsonLd({ schema }: { schema: object | object[] }) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
