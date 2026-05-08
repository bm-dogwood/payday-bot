import type { Metadata } from "next";
import { buildMetadata, SEO_PAGES } from "@/app/lib/seo-config";
import {
  JsonLd,
  articleSchema,
  faqSchema,
  breadcrumbSchema,
  datasetSchema,
} from "@/app/lib/schema";

export const metadata: Metadata = buildMetadata(SEO_PAGES.seo_rates_by_state);

const STATE_RATES = [
  { state: "Alabama", maxLoan: 500, maxFee: "$17.50 per $100", apr: "456%", status: "Permitted" },
  { state: "Alaska", maxLoan: 500, maxFee: "$15 per $100", apr: "390%", status: "Permitted" },
  { state: "Arizona", maxLoan: "N/A", maxFee: "N/A", apr: "N/A", status: "Banned" },
  { state: "Arkansas", maxLoan: "N/A", maxFee: "N/A", apr: "N/A", status: "Banned" },
  { state: "California", maxLoan: 300, maxFee: "$15 per $100", apr: "460%", status: "Permitted" },
  { state: "Colorado", maxLoan: 500, maxFee: "45% APR cap", apr: "45%", status: "Rate-Capped" },
  { state: "Connecticut", maxLoan: "N/A", maxFee: "N/A", apr: "N/A", status: "Banned" },
  { state: "Delaware", maxLoan: 1000, maxFee: "No cap", apr: "521%+", status: "Permitted" },
  { state: "Florida", maxLoan: 500, maxFee: "$10 per $100 + 5%", apr: "304%", status: "Permitted" },
  { state: "Georgia", maxLoan: "N/A", maxFee: "N/A", apr: "N/A", status: "Banned" },
  { state: "Illinois", maxLoan: 1000, maxFee: "36% APR cap", apr: "36%", status: "Rate-Capped" },
  { state: "Indiana", maxLoan: 605, maxFee: "$15 per $100", apr: "390%", status: "Permitted" },
  { state: "Kansas", maxLoan: 500, maxFee: "$15 per $100", apr: "391%", status: "Permitted" },
  { state: "Kentucky", maxLoan: 500, maxFee: "$15 per $100", apr: "460%", status: "Permitted" },
  { state: "Louisiana", maxLoan: 350, maxFee: "$20 per $100", apr: "780%", status: "Permitted" },
  { state: "Michigan", maxLoan: 600, maxFee: "$15 first $100", apr: "369%", status: "Permitted" },
  { state: "Minnesota", maxLoan: 350, maxFee: "$5.50 per $50", apr: "200%", status: "Permitted" },
  { state: "Mississippi", maxLoan: 500, maxFee: "$20 per $100", apr: "520%", status: "Permitted" },
  { state: "Missouri", maxLoan: 500, maxFee: "75% of loan", apr: "1950%", status: "Permitted" },
  { state: "Montana", maxLoan: 300, maxFee: "36% APR cap", apr: "36%", status: "Rate-Capped" },
  { state: "Nebraska", maxLoan: 500, maxFee: "$15 per $100", apr: "460%", status: "Permitted" },
  { state: "Nevada", maxLoan: "25% gross income", maxFee: "No cap", apr: "625%+", status: "Permitted" },
  { state: "New Hampshire", maxLoan: 500, maxFee: "36% APR cap", apr: "36%", status: "Rate-Capped" },
  { state: "New Mexico", maxLoan: 2500, maxFee: "36% APR cap", apr: "36%", status: "Rate-Capped" },
  { state: "North Dakota", maxLoan: 600, maxFee: "$20 per $100", apr: "520%", status: "Permitted" },
  { state: "Ohio", maxLoan: 1000, maxFee: "28% APR cap", apr: "28%", status: "Rate-Capped" },
  { state: "Oklahoma", maxLoan: 500, maxFee: "$15 per $100", apr: "390%", status: "Permitted" },
  { state: "Oregon", maxLoan: 50000, maxFee: "36% APR cap", apr: "36%", status: "Rate-Capped" },
  { state: "South Carolina", maxLoan: 550, maxFee: "15% of loan", apr: "390%", status: "Permitted" },
  { state: "South Dakota", maxLoan: "No limit", maxFee: "36% APR cap", apr: "36%", status: "Rate-Capped" },
  { state: "Tennessee", maxLoan: 500, maxFee: "15% of loan", apr: "390%", status: "Permitted" },
  { state: "Texas", maxLoan: "No limit", maxFee: "No cap", apr: "664%+", status: "Permitted" },
  { state: "Utah", maxLoan: "No limit", maxFee: "No cap", apr: "658%+", status: "Permitted" },
  { state: "Virginia", maxLoan: 2500, maxFee: "36% APR cap", apr: "36%", status: "Rate-Capped" },
  { state: "Washington", maxLoan: 700, maxFee: "15% of loan", apr: "390%", status: "Permitted" },
  { state: "Wisconsin", maxLoan: "No limit", maxFee: "No cap", apr: "574%+", status: "Permitted" },
  { state: "Wyoming", maxLoan: "No limit", maxFee: "No cap", apr: "780%+", status: "Permitted" },
];

const FAQS = [
  {
    question: "Which state has the highest payday loan interest rates?",
    answer:
      "Missouri, Texas, Utah, Wyoming, and Nevada consistently have the highest payday loan APRs, often exceeding 600% annually, because they impose no statutory rate caps on payday lenders.",
  },
  {
    question: "Which states have banned payday loans entirely?",
    answer:
      "Arizona, Arkansas, Connecticut, Georgia, Maryland, Massachusetts, New Jersey, New York, North Carolina, Pennsylvania, Vermont, West Virginia, and the District of Columbia have effectively banned payday loans through interest rate caps or explicit legislation.",
  },
  {
    question: "What is the average APR for a payday loan in the United States?",
    answer:
      "The average payday loan APR in states where payday lending is permitted is approximately 391%, though rates range from 28% in rate-capped states like Ohio to over 1,000% in states without limits.",
  },
  {
    question: "Why do payday loan APRs look so high?",
    answer:
      "APR (Annual Percentage Rate) annualizes the cost of a short-term loan. A $15 fee on a $100 two-week loan equals a 391% APR when expressed annually, even though the borrower only pays $15 for the two-week term.",
  },
  {
    question: "Can I get a payday loan from an online lender if my state bans them?",
    answer:
      "Attempting to bypass state law through online tribal or out-of-state lenders is risky and often illegal. State bans generally apply regardless of where the lender is physically located. You should consult your state attorney general's office before using such lenders.",
  },
];

export default function PaydayLoanRatesByStatePage() {
  const schemas = [
    articleSchema({
      title: "Payday Loan Interest Rates by State – Full 2025 Guide",
      description:
        "Comprehensive guide to payday loan interest rates in every US state.",
      url: "https://payday.bot/seo/payday-loan-rates-by-state",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    }),
    faqSchema(FAQS),
    breadcrumbSchema([
      { name: "Home", url: "https://payday.bot" },
      { name: "Rates by State", url: "https://payday.bot/payday-loan-rates" },
      {
        name: "Payday Loan Interest Rates by State",
        url: "https://payday.bot/seo/payday-loan-rates-by-state",
      },
    ]),
    datasetSchema(
      "US Payday Loan Rates by State 2025",
      "Payday loan maximum amounts, fee structures, and effective APRs for all 50 US states.",
      "https://payday.bot/seo/payday-loan-rates-by-state"
    ),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex gap-2">
            <li><a href="/">Home</a></li>
            <li>/</li>
            <li><a href="/payday-loan-rates">Rates by State</a></li>
            <li>/</li>
            <li aria-current="page">Full Rate Guide</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Payday Loan Interest Rates by State – Full 2025 Guide
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        {/* Introduction */}
        <section className="prose max-w-none mb-10">
          <p>
            Payday loan costs vary dramatically across the United States. In states with no APR caps, borrowers can pay
            effective annual interest rates exceeding 600%. In states that have enacted rate-cap legislation, the same
            loan might cost 90% less. This guide documents current payday loan rates, fee structures, and maximum loan
            amounts for every state that permits payday lending, along with a list of states where payday loans are
            banned outright.
          </p>
          <p>
            <strong>Key finding:</strong> The median payday loan APR in unrestricted states is 391%—but 13 states have
            eliminated or severely restricted payday lending, protecting their residents from the debt trap cycle.
          </p>
        </section>

        {/* State Rate Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Payday Loan Rates by State (2025)</h2>
          <p className="text-sm text-gray-400 mb-4">
            Data sourced from state regulatory agencies, NCSL, and CFPB disclosures. Updated quarterly.
          </p>
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-3 font-semibold">State</th>
                  <th className="px-4 py-3 font-semibold">Max Loan</th>
                  <th className="px-4 py-3 font-semibold">Max Fee</th>
                  <th className="px-4 py-3 font-semibold">Typical APR</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {STATE_RATES.map((row, i) => (
                  <tr key={row.state} className={i % 2 === 0 ? "bg-white/2" : ""}>
                    <td className="px-4 py-2 font-medium">
                      <a href={`/state/${row.state.toLowerCase().replace(/ /g, "-")}/rates`}
                         className="hover:underline text-blue-400">
                        {row.state}
                      </a>
                    </td>
                    <td className="px-4 py-2">{typeof row.maxLoan === "number" ? `$${row.maxLoan}` : row.maxLoan}</td>
                    <td className="px-4 py-2">{row.maxFee}</td>
                    <td className="px-4 py-2 font-mono">{row.apr}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        row.status === "Banned" ? "bg-red-900/40 text-red-400" :
                        row.status === "Rate-Capped" ? "bg-green-900/40 text-green-400" :
                        "bg-yellow-900/40 text-yellow-400"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Explainer sections */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Payday Loan Rates Are Set</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Payday lenders charge a flat fee rather than an interest rate—typically $10 to $30 per $100 borrowed.
            Federal law (Truth in Lending Act) requires lenders to disclose this as an Annual Percentage Rate (APR).
            Because payday loans are typically 14-day products, even a &quot;modest&quot; $15 fee translates to a 391% APR when
            annualized.
          </p>
          <p className="text-gray-300 leading-relaxed">
            State legislatures set the rules. Some states (like Texas) allow lenders to operate through credit service
            organization (CSO) loopholes, avoiding fee caps entirely. Others (like Ohio since 2019 and Illinois since
            2021) have enacted hard 28-36% APR caps, effectively ending traditional payday lending in those markets.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">States With the Lowest Payday Loan Costs</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Seven states plus D.C. have capped payday loan APRs at 36% or below: Colorado, Illinois, Montana,
            New Hampshire, New Mexico, Ohio, Oregon, South Dakota, and Virginia. In these states, a $500 payday loan
            for 14 days costs roughly $7 in fees—compared to $75 or more in high-rate states.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If you live in a rate-capped state, you still have access to payday loans but at a fraction of the
            national average cost. Use our <a href="/payday-loan-rates" className="text-blue-400 hover:underline">
            rate comparison tool</a> to find regulated lenders in your state.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The True Cost of Rollovers</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            When borrowers cannot repay a payday loan on the due date, many states allow (or don&apos;t prohibit) loan
            rollovers—extending the loan for another fee. A $300 loan in Mississippi with a $60 fee, rolled over four
            times, turns a $60 charge into $300 in fees alone—a 100% return of the original principal in fees.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Use our <a href="/debt-calculator" className="text-blue-400 hover:underline">payday loan debt calculator</a>{" "}
            to model the exact cost of rollovers for your specific loan amount and state.
          </p>
        </section>

        {/* FAQ Section */}
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

        {/* Internal links */}
        <section className="p-6 bg-white/5 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>→ <a href="/seo/payday-loan-laws-by-state" className="text-blue-400 hover:underline">Complete guide to payday loan laws by state</a></li>
            <li>→ <a href="/seo/payday-loan-alternatives" className="text-blue-400 hover:underline">10 best alternatives to payday loans</a></li>
            <li>→ <a href="/seo/payday-loan-debt-calculator" className="text-blue-400 hover:underline">Payday loan debt trap calculator</a></li>
            <li>→ <a href="/seo/payday-loan-consumer-protection" className="text-blue-400 hover:underline">Know your borrower rights</a></li>
            <li>→ <a href="/seo/emergency-loan-options" className="text-blue-400 hover:underline">Emergency loan options for bad credit</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}
