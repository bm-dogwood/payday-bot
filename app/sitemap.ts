import { MetadataRoute } from "next";

// Auto-generated sitemap for PAYDAY.BOT
// All URLs are included — SEO content pages ARE in sitemap but not in main nav.

const BASE_URL = "https://payday.bot";

// Static US states for state-specific pages
const US_STATES = [
  "alabama", "alaska", "arizona", "arkansas", "california", "colorado",
  "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho",
  "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana",
  "maine", "maryland", "massachusetts", "michigan", "minnesota",
  "mississippi", "missouri", "montana", "nebraska", "nevada",
  "new-hampshire", "new-jersey", "new-mexico", "new-york",
  "north-carolina", "north-dakota", "ohio", "oklahoma", "oregon",
  "pennsylvania", "rhode-island", "south-carolina", "south-dakota",
  "tennessee", "texas", "utah", "vermont", "virginia", "washington",
  "west-virginia", "wisconsin", "wyoming",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  // ── Main navigation pages ──────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/payday-loan-rates`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/state-laws`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/alternatives`,
      lastModified: lastWeek,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/debt-calculator`,
      lastModified: lastWeek,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/consumer-protection`,
      lastModified: lastWeek,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: lastWeek,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: lastWeek,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: lastWeek,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: lastWeek,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: lastWeek,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // ── Hidden SEO content pages (in sitemap, NOT in navigation) ──
  const seoContentPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/seo/payday-loan-rates-by-state`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/seo/payday-loan-alternatives`,
      lastModified: lastWeek,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/seo/payday-loan-laws-by-state`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/seo/payday-loan-debt-calculator`,
      lastModified: lastWeek,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/seo/payday-loan-apr-calculator`,
      lastModified: lastWeek,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/seo/online-payday-loan-requirements`,
      lastModified: lastWeek,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/seo/payday-loan-consumer-protection`,
      lastModified: lastWeek,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/seo/emergency-loan-options`,
      lastModified: lastWeek,
      changeFrequency: "weekly",
      priority: 0.75,
    },
  ];

  // ── State-specific rate & law pages ───────────────────────────
  const statePages: MetadataRoute.Sitemap = US_STATES.flatMap((state) => [
    {
      url: `${BASE_URL}/state/${state}/rates`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/state/${state}/laws`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]);

  return [...corePages, ...seoContentPages, ...statePages];
}
