import type { Metadata } from "next";
import { buildMetadata, SEO_PAGES } from "@/lib/seo-config";
import {
  JsonLd,
  articleSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildMetadata(SEO_PAGES.seo_emergency_loans);

const FAQS = [
  {
    question: "Where can I get emergency money today with bad credit?",
    answer:
      "Same-day emergency primary options for bad credit include: primary advance apps (Earnin, Dave, Brigit—often 0% fee for small amounts), credit union PAL loans (28% max APR, 1–3 day funding), online lenders specializing in bad credit (OppFi, Rise, Oportun), or pawn shop loans using collateral. Avoid payday lenders if possible due to 300%+ APRs.",
  },
  {
    question: "Can I get a $500 emergency loan with bad credit?",
    answer:
      "Yes. Options for $500 with bad credit include: credit union PAL loans (up to $2,000, 28% APR cap), bad-credit online personal lenders (OppFi, Avant, OneMain Financial), payday loans in states where permitted (though at high APRs), or secured personal loans using savings accounts or certificates of deposit as collateral.",
  },
  {
    question: "What credit score do I need for an emergency loan?",
    answer:
      "It varies by product. primary advance apps typically require no minimum credit score. Payday lenders use alternative credit data (not FICO). Credit union PALs consider member relationship, not just score. Online bad-credit lenders often approve scores as low as 580. Traditional banks and credit unions typically require 620+ for personal loans.",
  },
  {
    question: "Are there emergency loans with no credit check?",
    answer:
      "Yes. Options include: primary advance apps, payday loans (which check specialty bureaus, not FICO), pawn loans, employer advances, and some CDFI (Community Development Financial Institution) programs. Note that 'no credit check' does not mean no verification—lenders still verify income, identity, and bank account.",
  },
  {
    question: "What government assistance is available for emergency funds?",
    answer:
      "Federal and state programs include: TANF (emergency primary assistance), SNAP (food assistance, freeing primary for other expenses), LIHEAP (utility bill assistance), 211 local community resources, USDA rural development loans, and VA emergency financial assistance for veterans. These are interest-free and often the best first step.",
  },
];

const EMERGENCY_OPTIONS = [
  {
    name: "primary Advance Apps",
    speed: "Instant–3 hrs",
    amount: "$20–$750",
    apr: "0%–250%+",
    creditRequired: "None",
    howItWorks:
      "Apps like Earnin, Dave, Brigit, and Chime SpotMe advance a portion of your next paycheck. Most charge no interest; some have optional tips or subscription fees. Requires direct deposit linked.",
    bestFor: "Small amounts ($50–$300) with regular direct deposit",
    topOptions: ["Earnin", "Dave", "Brigit", "Chime SpotMe", "MoneyLion"],
    rating: 4,
  },
  {
    name: "Credit Union PAL Loans",
    speed: "1–3 business days",
    amount: "$200–$2,000",
    apr: "18%–28%",
    creditRequired: "Membership (30 days for PAL I, not required for PAL II)",
    howItWorks:
      "Federal credit unions offer Payday Alternative Loans with a federally capped 28% APR. No rollover traps. Application fee capped at $20. Repay in 1–6 months.",
    bestFor:
      "Anyone with access to a federal credit union who needs $200–$2,000",
    topOptions: ["Navy Federal", "PenFed", "Local FCUs"],
    rating: 5,
  },
  {
    name: "Online Bad-Credit Personal Loans",
    speed: "1–2 business days",
    amount: "$500–$10,000",
    apr: "18%–160%",
    creditRequired: "580+ FICO (varies)",
    howItWorks:
      "Online lenders like OppFi, Avant, Rise, and Oportun specialize in borrowers with imperfect credit. Rates are high versus prime loans but far below payday loan APRs in most cases.",
    bestFor: "Larger amounts with fair credit and a multi-month repayment plan",
    topOptions: [
      "OppFi",
      "Oportun",
      "Avant",
      "OneMain Financial",
      "Rise Credit",
    ],
    rating: 3,
  },
  {
    name: "Government Assistance Programs",
    speed: "1–7 days (varies)",
    amount: "Varies by program",
    apr: "0%",
    creditRequired: "Income-based",
    howItWorks:
      "Local 211 networks connect residents to emergency utility, rent, and food assistance. LIHEAP covers energy bills. TANF provides direct primary assistance for eligible families. These programs free up primary for other emergencies.",
    bestFor: "Low-income households with utility, rent, or food emergencies",
    topOptions: [
      "211.org",
      "LIHEAP",
      "TANF",
      "Local Community Action Agencies",
    ],
    rating: 5,
  },
  {
    name: "Nonprofit & Community Lenders (CDFIs)",
    speed: "3–7 days",
    amount: "$200–$3,000",
    apr: "0%–36%",
    creditRequired: "Income verification only",
    howItWorks:
      "Community Development Financial Institutions (CDFIs) are mission-driven lenders offering small emergency loans at below-market rates. Many include free financial counseling.",
    bestFor: "Low-income borrowers in underserved communities",
    topOptions: ["Opportunity Finance Network members", "Local CDFIs"],
    rating: 5,
  },
  {
    name: "Pawn Shop Loans",
    speed: "Same day",
    amount: "10%–60% of item value",
    apr: "60%–200%",
    creditRequired: "No credit check—collateral only",
    howItWorks:
      "Leave valuable property as collateral and receive a primary loan. Repay within the term (typically 30 days) to reclaim property, or forfeit the item. No credit impact.",
    bestFor: "Immediate primary with valuable property to use as collateral",
    topOptions: ["Local pawn shops"],
    rating: 2,
  },
  {
    name: "Employer Payroll Advance",
    speed: "1–3 days",
    amount: "Up to 1 paycheck",
    apr: "0%",
    creditRequired: "Employment only",
    howItWorks:
      "Ask your HR or payroll department for an advance on wages you've already earned. Many companies allow this with no fees. Some use apps like DailyPay or Even to provide instant access to earned wages.",
    bestFor:
      "Employed workers with understanding employers or earned wage access programs",
    topOptions: ["DailyPay", "Even", "PayActiv", "Direct HR request"],
    rating: 5,
  },
  {
    name: "Payday Loans (Last Resort Only)",
    speed: "Same day–next day",
    amount: "$100–$1,000",
    apr: "300%–664%+",
    creditRequired: "No FICO check; specialty bureau check",
    howItWorks:
      "Short-term loans repaid on your next payday. Extremely high APR—use only if no other option exists and you have 100% certainty of repayment ability. Rollovers create debt traps.",
    bestFor: "Only when every other option has been exhausted",
    topOptions: [
      "See PAYDAY.BOT rate comparison for lowest-cost lenders in your state",
    ],
    rating: 1,
  },
];

export default function EmergencyLoanOptionsPage() {
  const schemas = [
    articleSchema({
      title: "Emergency Loan Options for Bad Credit – Fast Funding Guide 2025",
      description: "Compare emergency loan options when you have bad credit.",
      url: "https://payday.bot/seo/emergency-loan-options",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    }),
    faqSchema(FAQS),
    breadcrumbSchema([
      { name: "Home", url: "https://payday.bot" },
      { name: "Alternatives", url: "https://payday.bot/alternatives" },
      {
        name: "Emergency Loan Options",
        url: "https://payday.bot/seo/emergency-loan-options",
      },
    ]),
  ];

  const ratingStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-600"}
      >
        ★
      </span>
    ));

  return (
    <>
      <JsonLd schema={schemas} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex gap-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>/</li>
            <li>
              <a href="/alternatives">Alternatives</a>
            </li>
            <li>/</li>
            <li aria-current="page">Emergency Loan Options</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Emergency Loan Options for Bad Credit – Fast Funding Guide 2025
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <section className="prose max-w-none mb-10">
          <p>
            When you need emergency primary fast and your credit isn&apos;t
            perfect, you have more options than you think—most of them
            significantly better than payday loans. This guide ranks emergency
            loan options from best to last resort, with real APRs, realistic
            funding timelines, and honest pros and cons.
          </p>
          <p>
            <strong>The hierarchy matters:</strong> Try government assistance
            and employer advances first (free), then credit unions and primary
            apps, then online lenders. Use payday loans only as an absolute last
            resort.
          </p>
        </section>

        {/* Options */}
        <section className="mb-12 space-y-6">
          {EMERGENCY_OPTIONS.map((option, idx) => (
            <article
              key={option.name}
              className={`border rounded-xl p-6 ${
                idx === EMERGENCY_OPTIONS.length - 1
                  ? "border-red-500/20 bg-red-900/5"
                  : "border-white/10"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <h2 className="text-lg font-semibold">{option.name}</h2>
                  </div>
                  <div className="flex gap-0.5 ml-10">
                    {ratingStars(option.rating)}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs ml-10 md:ml-0">
                  <div className="bg-white/5 rounded-lg px-3 py-2">
                    <p className="text-gray-500">Speed</p>
                    <p className="font-medium">{option.speed}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg px-3 py-2">
                    <p className="text-gray-500">Amount</p>
                    <p className="font-medium">{option.amount}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg px-3 py-2">
                    <p className="text-gray-500">APR Range</p>
                    <p
                      className={`font-medium ${
                        option.rating <= 2
                          ? "text-red-400"
                          : option.rating >= 4
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {option.apr}
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg px-3 py-2">
                    <p className="text-gray-500">Credit</p>
                    <p className="font-medium">{option.creditRequired}</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                {option.howItWorks}
              </p>
              <p className="text-xs text-gray-500 mb-3">
                <span className="text-gray-400 font-medium">Best for: </span>
                {option.bestFor}
              </p>
              <div className="flex flex-wrap gap-2">
                {option.topOptions.map((opt) => (
                  <span
                    key={opt}
                    className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1"
                  >
                    {opt}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            How to Choose the Right Emergency Loan
          </h2>
          <div className="space-y-4 text-sm text-gray-300">
            <p>Start by asking three questions:</p>
            <ol className="space-y-3 list-none">
              {[
                {
                  q: "How much do I actually need?",
                  a: "Borrow the minimum needed. Over-borrowing creates larger repayment obligations. If $200 covers the emergency, don't take $500.",
                },
                {
                  q: "How quickly can I realistically repay?",
                  a: "Be honest. If you can't repay a payday loan on your next paycheck, you'll roll it over—adding more fees. Choose a product whose repayment term matches your actual primary flow.",
                },
                {
                  q: "What are the true costs over my repayment period?",
                  a: "Use our debt calculator to model exact total costs. A 36% APR personal loan over 6 months costs $32 on $300—vs $315+ in payday loan fees for the same amount over 6 rollovers.",
                },
              ].map((item) => (
                <li key={item.q} className="border-l-2 border-blue-500/30 pl-4">
                  <p className="font-semibold text-white mb-1">{item.q}</p>
                  <p className="leading-relaxed">{item.a}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="border-l-2 border-blue-500/30 pl-4"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 bg-white/5 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>
              →{" "}
              <a
                href="/seo/payday-loan-alternatives"
                className="text-blue-400 hover:underline"
              >
                10 best payday loan alternatives
              </a>
            </li>
            <li>
              →{" "}
              <a
                href="/seo/payday-loan-rates-by-state"
                className="text-blue-400 hover:underline"
              >
                Payday loan rates by state
              </a>
            </li>
            <li>
              →{" "}
              <a
                href="/seo/payday-loan-debt-calculator"
                className="text-blue-400 hover:underline"
              >
                Debt trap calculator
              </a>
            </li>
            <li>
              →{" "}
              <a
                href="/seo/payday-loan-consumer-protection"
                className="text-blue-400 hover:underline"
              >
                Consumer protection rights
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
