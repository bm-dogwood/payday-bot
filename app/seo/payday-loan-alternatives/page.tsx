import type { Metadata } from "next";
import { buildMetadata, SEO_PAGES } from "@/app/lib/seo-config";
import { JsonLd, articleSchema, faqSchema, breadcrumbSchema } from "@/app/lib/schema";

export const metadata: Metadata = buildMetadata(SEO_PAGES.seo_alternatives);

const ALTERNATIVES = [
  {
    rank: 1,
    name: "Credit Union Payday Alternative Loans (PALs)",
    apr: "28% max",
    amount: "$200–$2,000",
    speed: "1–3 business days",
    creditRequired: "Membership required",
    pros: "Federal APR cap, no rollover traps, builds credit history",
    cons: "Must be credit union member, limited availability",
    bestFor: "Anyone with access to a federal credit union",
  },
  {
    rank: 2,
    name: "Cash Advance Apps (Earned Wage Access)",
    apr: "0%–250%+ (tip-dependent)",
    amount: "$20–$750",
    speed: "Instant–3 days",
    creditRequired: "No credit check",
    pros: "No interest on base advance, fast, no credit check",
    cons: "Tips can inflate true cost; requires direct deposit link",
    bestFor: "Workers with regular direct deposit needing small amounts",
  },
  {
    rank: 3,
    name: "Personal Loans from Online Lenders",
    apr: "6%–36%",
    amount: "$1,000–$50,000",
    speed: "1–5 business days",
    creditRequired: "580+ FICO typical",
    pros: "Fixed payments, builds credit, much lower APR than payday",
    cons: "May require fair credit; longer application process",
    bestFor: "Borrowers with at least fair credit needing $1,000+",
  },
  {
    rank: 4,
    name: "Credit Card Cash Advances",
    apr: "20%–30% + fee",
    amount: "Up to credit limit",
    speed: "Immediate",
    creditRequired: "Existing credit card",
    pros: "Immediate access, no application, still far cheaper than payday",
    cons: "High APR vs purchases; cash advance fees apply immediately",
    bestFor: "Existing cardholders in a true emergency",
  },
  {
    rank: 5,
    name: "Employer Payroll Advances",
    apr: "0%",
    amount: "Varies by employer",
    speed: "1–3 days",
    creditRequired: "Employment only",
    pros: "Zero cost, no credit check, no debt trap risk",
    cons: "Requires employer participation; may be limited or unavailable",
    bestFor: "Employees whose companies offer advance programs",
  },
  {
    rank: 6,
    name: "BNPL (Buy Now Pay Later) Services",
    apr: "0% if paid on time",
    amount: "$50–$3,000",
    speed: "Immediate at checkout",
    creditRequired: "Soft check only",
    pros: "0% interest on short plans, widely accepted, instant approval",
    cons: "Only for purchases (not cash); late fees; can encourage overspending",
    bestFor: "Covering specific purchases rather than cash needs",
  },
  {
    rank: 7,
    name: "Nonprofit & Community Emergency Funds",
    apr: "0%–low",
    amount: "$100–$2,500",
    speed: "1–7 days",
    creditRequired: "Income verification",
    pros: "Low or zero cost, no debt trap, often includes counseling",
    cons: "Limited funding; eligibility requirements; slower process",
    bestFor: "Low-income borrowers facing true emergency hardship",
  },
  {
    rank: 8,
    name: "Peer-to-Peer (P2P) Lending",
    apr: "6%–36%",
    amount: "$1,000–$40,000",
    speed: "3–7 business days",
    creditRequired: "600+ FICO typical",
    pros: "Competitive rates, fixed terms, builds credit",
    cons: "Not instant; requires decent credit; origination fees",
    bestFor: "Borrowers with fair-to-good credit needing structured repayment",
  },
  {
    rank: 9,
    name: "401(k) or Retirement Account Loans",
    apr: "Prime rate + 1–2%",
    amount: "Up to 50% of balance",
    speed: "1–2 weeks",
    creditRequired: "No credit check",
    pros: "Low rates, interest paid to yourself, no credit impact",
    cons: "Risks retirement savings; taxes/penalties if job lost; opportunity cost",
    bestFor: "Last resort for those with 401(k) and a repayment plan",
  },
  {
    rank: 10,
    name: "Family or Friend Loans",
    apr: "0% (typically)",
    amount: "Varies",
    speed: "Immediate",
    creditRequired: "None",
    pros: "Zero cost, flexible terms, no credit impact",
    cons: "Can damage relationships; no formal protections for either party",
    bestFor: "Anyone with trusted personal networks willing to help",
  },
];

const FAQS = [
  {
    question: "What is the best alternative to a payday loan?",
    answer:
      "The best alternative depends on your situation. Credit union Payday Alternative Loans (PALs) offer the strongest consumer protections with a federal 28% APR cap. For smaller amounts, cash advance apps like Earnin or Dave offer interest-free advances. For larger needs with fair credit, online personal lenders like LendingClub or Avant are far cheaper than payday loans.",
  },
  {
    question: "Can I get emergency cash with bad credit and no payday loan?",
    answer:
      "Yes. Options include credit union PALs (credit unions often consider members beyond just credit scores), cash advance apps with no credit check, employer payroll advances, nonprofit emergency funds, and secured personal loans using collateral.",
  },
  {
    question: "Are cash advance apps really free?",
    answer:
      "They can be, but it depends. Apps like Earnin use voluntary tips, which can translate to high effective APRs on small amounts. Apps like Chime SpotMe charge zero fees for advances. Always calculate the true cost by dividing the tip/fee by the advance amount and annualizing it.",
  },
  {
    question: "How quickly can I get a payday loan alternative?",
    answer:
      "Cash advance apps can fund in minutes. Credit card cash advances are immediate. Online personal lenders can fund in 1–2 business days. Credit union PALs typically take 1–3 business days. Nonprofit emergency funds may take 3–7 days due to verification requirements.",
  },
  {
    question: "Will using a payday loan alternative hurt my credit score?",
    answer:
      "Most cash advance apps and employer advances don't affect your credit score. Personal loans from online lenders do a hard credit pull that may temporarily lower your score by a few points. However, successfully repaying a personal loan builds credit history, which payday loans generally do not.",
  },
];

export default function PaydayLoanAlternativesPage() {
  const schemas = [
    articleSchema({
      title: "10 Best Payday Loan Alternatives That Won't Trap You in Debt",
      description:
        "Discover 10 proven payday loan alternatives including PAL loans, BNPL, gig economy tips, and fintech lenders.",
      url: "https://payday.bot/seo/payday-loan-alternatives",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    }),
    faqSchema(FAQS),
    breadcrumbSchema([
      { name: "Home", url: "https://payday.bot" },
      { name: "Alternatives", url: "https://payday.bot/alternatives" },
      { name: "10 Best Payday Loan Alternatives", url: "https://payday.bot/seo/payday-loan-alternatives" },
    ]),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex gap-2">
            <li><a href="/">Home</a></li>
            <li>/</li>
            <li><a href="/alternatives">Alternatives</a></li>
            <li>/</li>
            <li aria-current="page">10 Best Alternatives</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          10 Best Payday Loan Alternatives That Won&apos;t Trap You in Debt (2025)
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <section className="prose max-w-none mb-10">
          <p>
            The average payday loan carries a 391% APR. That means a $300 two-week loan costs $45 in fees—and if you
            can&apos;t repay it, each rollover adds another $45. The good news: there are 10 legitimate alternatives that
            provide emergency cash at a fraction of the cost. This guide ranks them by total cost, speed, and
            accessibility.
          </p>
          <p>
            <strong>Bottom line:</strong> Before taking a payday loan, check whether you qualify for a credit union PAL,
            a cash advance app, or an online personal loan. Even a high-rate personal loan at 36% APR costs 90% less
            than the typical payday loan.
          </p>
        </section>

        {/* Alternatives list */}
        <section className="mb-12 space-y-8">
          {ALTERNATIVES.map((alt) => (
            <article key={alt.rank} className="border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400">
                  {alt.rank}
                </span>
                <div>
                  <h2 className="text-xl font-semibold">{alt.name}</h2>
                  <p className="text-sm text-gray-400 mt-1">{alt.bestFor}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { label: "Typical APR", value: alt.apr },
                  { label: "Loan Amount", value: alt.amount },
                  { label: "Funding Speed", value: alt.speed },
                  { label: "Credit Required", value: alt.creditRequired },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-green-400 font-medium mb-1">✓ Pros</p>
                  <p className="text-gray-400">{alt.pros}</p>
                </div>
                <div>
                  <p className="text-red-400 font-medium mb-1">✗ Cons</p>
                  <p className="text-gray-400">{alt.cons}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Comparison context */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Payday Loan Alternatives Are So Much Cheaper</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A payday loan charges $15 per $100 borrowed for a 14-day term. Expressed as an APR, that&apos;s 391%. A credit
            union PAL at 28% APR on the same $300 for 14 days costs just $3.23 in interest—a savings of $41.77 on a
            single loan.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The difference compounds dramatically when borrowers roll over loans. A payday borrower who rolls over a
            $300 loan 6 times pays $270 in fees alone—90% of the original principal—before ever touching the
            principal balance. A PAL borrower with the same $300 over 6 months pays roughly $25 in total interest.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question} className="border-l-2 border-blue-500/30 pl-4">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 bg-white/5 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>→ <a href="/seo/payday-loan-rates-by-state" className="text-blue-400 hover:underline">Payday loan rates by state</a></li>
            <li>→ <a href="/seo/payday-loan-laws-by-state" className="text-blue-400 hover:underline">Payday loan laws by state</a></li>
            <li>→ <a href="/seo/emergency-loan-options" className="text-blue-400 hover:underline">Emergency loan options for bad credit</a></li>
            <li>→ <a href="/debt-calculator" className="text-blue-400 hover:underline">Payday loan debt calculator</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}
