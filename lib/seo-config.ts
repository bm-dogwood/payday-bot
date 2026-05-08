export const SITE_CONFIG = {
  name: "PAYDAY.BOT",
  url: "https://payday.bot",
  description:
    "Compare payday loan rates by state, find safer alternatives, track state lending laws, and protect yourself with free consumer resources.",
  twitterHandle: "@paydaybot",
  logo: "https://payday.bot/logo.png",
};

export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  keywords: string[];
  ogImage?: string;
  schema?: object | object[];
  noindex?: boolean;
}

export const SEO_PAGES: Record<string, PageSEO> = {
  home: {
    title: "PAYDAY.BOT – Payday Loan Rate Comparison & Safer Alternatives",
    description:
      "Compare payday loan rates by state, find lower-cost alternatives, check state APR caps & bans, use our free debt calculator. Empowering borrowers since 2024.",
    canonical: "https://payday.bot",
    keywords: [
      "payday loan comparison",
      "payday loan alternatives",
      "payday loan rates",
      "payday loan calculator",
      "emergency loans",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "PAYDAY.BOT",
      url: "https://payday.bot",
      description:
        "Payday loan rate comparison, state law tracker, and consumer protection resources.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://payday.bot/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  },

  rateComparison: {
    title: "Payday Loan Rate Comparison by State 2025 | PAYDAY.BOT",
    description:
      "Compare payday loan APRs across all 50 states. Find the lowest rates, understand fee structures, and see which states have the best consumer protections.",
    canonical: "https://payday.bot/payday-loan-rates",
    keywords: [
      "payday loan rates by state",
      "payday loan APR comparison",
      "cheapest payday loans",
      "payday loan fee comparison",
      "short term loan rates",
    ],
  },

  stateLaws: {
    title: "Payday Loan Laws by State 2025 – APR Caps & Bans | PAYDAY.BOT",
    description:
      "Track payday lending laws in every state. See APR caps, loan amount limits, rollover rules, and states where payday loans are banned or restricted.",
    canonical: "https://payday.bot/state-laws",
    keywords: [
      "payday loan laws by state",
      "payday loan regulations",
      "payday loan banned states",
      "payday loan APR cap",
      "state lending laws",
    ],
  },

  alternatives: {
    title: "Best Payday Loan Alternatives 2025 – Low-Cost Emergency Loans | PAYDAY.BOT",
    description:
      "Find safer, cheaper alternatives to payday loans: credit union PALs, cash advance apps, personal loans, and more. Compare rates and get out of the debt trap.",
    canonical: "https://payday.bot/alternatives",
    keywords: [
      "payday loan alternatives",
      "alternatives to payday loans",
      "emergency loan options",
      "cash advance apps",
      "credit union payday loans",
    ],
  },

  debtCalculator: {
    title: "Payday Loan Debt Calculator – See Your True Cost | PAYDAY.BOT",
    description:
      "Calculate the true cost of your payday loan including fees, rollovers, and APR. See how quickly debt compounds and find a payoff plan.",
    canonical: "https://payday.bot/debt-calculator",
    keywords: [
      "payday loan calculator",
      "payday loan cost calculator",
      "payday loan debt calculator",
      "loan fee calculator",
      "payday loan APR calculator",
    ],
  },

  consumerProtection: {
    title: "Payday Loan Consumer Protection Resources | PAYDAY.BOT",
    description:
      "Know your rights as a borrower. Report illegal lenders, find free financial counseling, and access CFPB resources to protect yourself from predatory lending.",
    canonical: "https://payday.bot/consumer-protection",
    keywords: [
      "payday loan consumer protection",
      "payday loan rights",
      "predatory lending help",
      "CFPB payday loans",
      "report payday lender",
    ],
  },

  // Hidden SEO Pages
  seo_rates_by_state: {
    title: "Payday Loan Interest Rates by State – Full 2025 Guide | PAYDAY.BOT",
    description:
      "Comprehensive guide to payday loan interest rates in every US state. Learn what APR limits exist, average fees per $100 borrowed, and how to compare lenders.",
    canonical: "https://payday.bot/seo/payday-loan-rates-by-state",
    keywords: [
      "payday loan interest rates by state",
      "payday loan rates 2025",
      "average payday loan APR",
      "payday loan fees by state",
      "payday loan cost per state",
      "highest payday loan rates",
      "lowest payday loan rates",
    ],
    noindex: false,
  },

  seo_alternatives: {
    title: "10 Best Payday Loan Alternatives That Won't Trap You in Debt | PAYDAY.BOT",
    description:
      "Discover 10 proven payday loan alternatives including PAL loans, BNPL, gig economy tips, and fintech lenders. Compare real APRs and eligibility requirements.",
    canonical: "https://payday.bot/seo/payday-loan-alternatives",
    keywords: [
      "best payday loan alternatives",
      "payday loan substitutes",
      "no payday loan options",
      "emergency cash alternatives",
      "payday loan replacement",
      "fast cash alternatives payday",
      "avoid payday loans",
    ],
    noindex: false,
  },

  seo_laws_by_state: {
    title: "Payday Loan Laws & Regulations by State – 2025 Complete Guide | PAYDAY.BOT",
    description:
      "Every state's payday lending law explained: APR caps, maximum loan amounts, rollover limits, cooling-off periods. See which states ban payday loans entirely.",
    canonical: "https://payday.bot/seo/payday-loan-laws-by-state",
    keywords: [
      "payday loan laws by state 2025",
      "payday lending regulations",
      "state payday loan laws",
      "payday loan legal requirements",
      "payday loan banned states list",
      "payday loan rollover laws",
      "payday loan maximum amount by state",
    ],
    noindex: false,
  },

  seo_debt_calculator: {
    title: "Payday Loan Debt Trap Calculator – Know Before You Borrow | PAYDAY.BOT",
    description:
      "See exactly how much a payday loan will cost over time. Our debt trap calculator shows rollover costs, total fees, and escape strategies for payday debt cycles.",
    canonical: "https://payday.bot/seo/payday-loan-debt-calculator",
    keywords: [
      "payday loan debt trap calculator",
      "payday loan rollover calculator",
      "how much does a payday loan cost",
      "payday loan total cost",
      "payday loan cycle calculator",
      "payday loan true cost",
      "payday loan payoff calculator",
    ],
    noindex: false,
  },

  seo_apr_calculator: {
    title: "Payday Loan APR Calculator – Convert Fees to Annual Rate | PAYDAY.BOT",
    description:
      "Convert payday loan fees to APR instantly. Understand what $15 per $100 really costs annually. Compare payday APR vs credit cards, personal loans, and alternatives.",
    canonical: "https://payday.bot/seo/payday-loan-apr-calculator",
    keywords: [
      "payday loan APR calculator",
      "convert payday loan fee to APR",
      "payday loan annual percentage rate",
      "payday loan APR comparison",
      "payday loan vs credit card APR",
      "calculate payday loan interest rate",
      "payday loan effective interest rate",
    ],
    noindex: false,
  },

  seo_requirements: {
    title: "Online Payday Loan Requirements – What You Need to Qualify | PAYDAY.BOT",
    description:
      "Everything required to get an online payday loan: income minimums, bank account requirements, credit score rules, and state eligibility. Avoid wasted applications.",
    canonical: "https://payday.bot/seo/online-payday-loan-requirements",
    keywords: [
      "online payday loan requirements",
      "payday loan eligibility",
      "what do you need for a payday loan",
      "payday loan credit score requirement",
      "payday loan income requirements",
      "qualify for payday loan",
      "payday loan application requirements",
    ],
    noindex: false,
  },

  seo_consumer_protection: {
    title: "Payday Loan Consumer Protection – Know Your Rights | PAYDAY.BOT",
    description:
      "Detailed guide to payday loan borrower rights under federal and state law. How to file complaints, spot illegal lenders, and get free debt relief resources.",
    canonical: "https://payday.bot/seo/payday-loan-consumer-protection",
    keywords: [
      "payday loan consumer rights",
      "payday loan borrower protection",
      "illegal payday lender",
      "payday loan complaint",
      "CFPB payday loan rules",
      "payday loan debt relief",
      "payday loan scam protection",
    ],
    noindex: false,
  },

  seo_emergency_loans: {
    title: "Emergency Loan Options for Bad Credit – Fast Funding Guide 2025 | PAYDAY.BOT",
    description:
      "Compare emergency loan options when you have bad credit: online lenders, credit unions, cash apps, and government assistance programs. Get funds fast without a payday trap.",
    canonical: "https://payday.bot/seo/emergency-loan-options",
    keywords: [
      "emergency loans bad credit",
      "emergency loan options",
      "fast emergency loans",
      "bad credit emergency cash",
      "same day emergency loans",
      "emergency loan no credit check",
      "quick emergency loan approval",
    ],
    noindex: false,
  },
};

export function buildMetadata(pageSEO: PageSEO) {
  return {
    title: pageSEO.title,
    description: pageSEO.description,
    keywords: pageSEO.keywords.join(", "),
    alternates: {
      canonical: pageSEO.canonical,
    },
    openGraph: {
      title: pageSEO.title,
      description: pageSEO.description,
      url: pageSEO.canonical,
      siteName: SITE_CONFIG.name,
      type: "website",
      images: [
        {
          url: pageSEO.ogImage || "https://payday.bot/og-default.png",
          width: 1200,
          height: 630,
          alt: pageSEO.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageSEO.title,
      description: pageSEO.description,
      site: SITE_CONFIG.twitterHandle,
      images: [pageSEO.ogImage || "https://payday.bot/og-default.png"],
    },
    robots: pageSEO.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  };
}
