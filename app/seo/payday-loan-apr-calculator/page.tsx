import type { Metadata } from "next";
import { buildMetadata, SEO_PAGES } from "@/app/lib/seo-config";
import { JsonLd, articleSchema, faqSchema, breadcrumbSchema, softwareAppSchema } from "@/app/lib/schema";

export const metadata: Metadata = buildMetadata(SEO_PAGES.seo_apr_calculator);

const FAQS = [
  {
    question: "How is payday loan APR calculated?",
    answer:
      "Payday loan APR = (Fee / Loan Amount) × (365 / Loan Term in Days) × 100. For a $15 fee on $100 borrowed for 14 days: (15/100) × (365/14) × 100 = 391.07% APR. This formula is required by the Truth in Lending Act.",
  },
  {
    question: "Why is payday loan APR so much higher than credit card APR?",
    answer:
      "APR is an annualized rate. Credit cards spread interest over a full year; payday loans compress the same fee into 14 days. A $15 fee on $100 for 14 days is 15% for two weeks—which annualizes to 391%. A credit card at 24% APR charges only 0.92% for the same two-week period.",
  },
  {
    question: "Is APR a fair way to compare payday loans?",
    answer:
      "APR is the federally mandated comparison metric and the only standardized way to compare all credit products. Lenders sometimes argue APR is misleading for short-term products, but consumer advocates counter that APR correctly reflects the annualized cost of capital and allows apples-to-apples comparison with alternatives.",
  },
  {
    question: "What is a good APR for an emergency loan?",
    answer:
      "Credit union Payday Alternative Loans (PALs) are capped at 28% APR—an excellent rate for an emergency loan. Online personal loans typically range 6%–36% APR. Credit card cash advances run 20%–30% APR. Any rate under 36% APR is generally considered consumer-safe by policymakers.",
  },
  {
    question: "Do payday lenders have to disclose APR?",
    answer:
      "Yes. The federal Truth in Lending Act (TILA/Regulation Z) requires all lenders, including payday lenders, to clearly disclose the APR before the borrower signs. If a lender refuses to state the APR or obfuscates it, that is a federal violation you can report to the CFPB.",
  },
];

// APR comparison data
const APR_COMPARISONS = [
  { product: "Payday loan (no cap state)", apr: "391%–664%+", type: "danger" },
  { product: "Auto title loan", apr: "300%–400%", type: "danger" },
  { product: "Rent-to-own furniture", apr: "100%–300%", type: "warning" },
  { product: "Credit card cash advance", apr: "20%–30%", type: "ok" },
  { product: "Credit card purchases", apr: "15%–25%", type: "ok" },
  { product: "Online personal loan (bad credit)", apr: "18%–36%", type: "ok" },
  { product: "Online personal loan (good credit)", apr: "6%–18%", type: "good" },
  { product: "Credit union PAL", apr: "18%–28%", type: "good" },
  { product: "Credit union personal loan", apr: "7%–18%", type: "good" },
  { product: "Bank personal loan", apr: "6%–25%", type: "good" },
  { product: "Home equity loan", apr: "5%–9%", type: "best" },
  { product: "Employer payroll advance", apr: "0%", type: "best" },
];

// Common fee-to-APR reference table
const FEE_TABLE = [
  { fee: 10, term14: 260, term30: 122 },
  { fee: 12, term14: 313, term30: 146 },
  { fee: 15, term14: 391, term30: 183 },
  { fee: 17.50, term14: 456, term30: 213 },
  { fee: 20, term14: 521, term30: 243 },
  { fee: 25, term14: 652, term30: 304 },
  { fee: 30, term14: 782, term30: 365 },
];

export default function PaydayLoanAprCalculatorPage() {
  const schemas = [
    articleSchema({
      title: "Payday Loan APR Calculator – Convert Fees to Annual Rate",
      description: "Convert payday loan fees to APR instantly.",
      url: "https://payday.bot/seo/payday-loan-apr-calculator",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    }),
    faqSchema(FAQS),
    softwareAppSchema(
      "Payday Loan APR Calculator",
      "Convert payday loan flat fees to annual percentage rate (APR) for comparison",
      "https://payday.bot/debt-calculator"
    ),
    breadcrumbSchema([
      { name: "Home", url: "https://payday.bot" },
      { name: "Debt Calculator", url: "https://payday.bot/debt-calculator" },
      { name: "APR Calculator Guide", url: "https://payday.bot/seo/payday-loan-apr-calculator" },
    ]),
  ];

  const typeColor = (type: string) => ({
    danger: "text-red-400",
    warning: "text-orange-400",
    ok: "text-yellow-400",
    good: "text-green-400",
    best: "text-blue-400",
  }[type] || "text-gray-400");

  return (
    <>
      <JsonLd schema={schemas} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex gap-2">
            <li><a href="/">Home</a></li>
            <li>/</li>
            <li><a href="/debt-calculator">Calculator</a></li>
            <li>/</li>
            <li aria-current="page">APR Calculator Guide</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Payday Loan APR Calculator – Convert Fees to Annual Percentage Rate
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        {/* Formula Box */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-10 font-mono text-sm">
          <p className="text-gray-400 mb-2 font-sans font-semibold text-base">APR Formula (TILA Method)</p>
          <p className="text-blue-300 text-lg">APR = (Fee ÷ Loan Amount) × (365 ÷ Loan Term Days) × 100</p>
          <div className="mt-4 text-gray-400">
            <p className="font-sans text-sm font-medium mb-2">Example: $15 fee on $100 for 14 days</p>
            <p>= (15 ÷ 100) × (365 ÷ 14) × 100</p>
            <p>= 0.15 × 26.07 × 100</p>
            <p className="text-green-400 font-semibold">= 391.07% APR</p>
          </div>
        </div>

        <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-5 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold">Use our interactive APR & debt calculator</p>
            <p className="text-sm text-gray-400">Enter your loan details and get APR + total cost instantly.</p>
          </div>
          <a href="/debt-calculator"
             className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Open Calculator →
          </a>
        </div>

        {/* Fee-to-APR reference table */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Fee-to-APR Quick Reference Table</h2>
          <p className="text-sm text-gray-400 mb-4">
            APR values for common payday loan fees per $100 borrowed, for 14-day and 30-day terms.
          </p>
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-3 font-semibold">Fee per $100</th>
                  <th className="px-4 py-3 font-semibold">APR (14-day term)</th>
                  <th className="px-4 py-3 font-semibold">APR (30-day term)</th>
                </tr>
              </thead>
              <tbody>
                {FEE_TABLE.map((row, i) => (
                  <tr key={row.fee} className={i % 2 === 0 ? "bg-white/2" : ""}>
                    <td className="px-4 py-2">${row.fee}</td>
                    <td className="px-4 py-2 font-mono text-red-400">{row.term14}%</td>
                    <td className="px-4 py-2 font-mono text-orange-400">{row.term30}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* APR Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">APR Comparison: Payday Loans vs. Alternatives</h2>
          <div className="space-y-2">
            {APR_COMPARISONS.map((item) => (
              <div key={item.product} className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-sm text-gray-300">{item.product}</span>
                <span className={`text-sm font-mono font-semibold ${typeColor(item.type)}`}>{item.apr}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What the APR Reveals That Fees Hide</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Payday lenders market their products using flat fees (&quot;just $15 per $100&quot;) because fees sound small.
            $15 doesn&apos;t sound dangerous. 391% APR does—because it accurately reflects the cost of money over time.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The APR reveals that payday lending is more expensive than credit card cash advances by 13x–26x, more
            expensive than personal loans by 11x–65x, and more expensive than credit union PALs by 14x.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Federal law (Truth in Lending Act) requires lenders to disclose APR before you sign. If a lender only
            tells you the flat fee and refuses to state the APR, ask directly—or walk away. That&apos;s a red flag.
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
            <li>→ <a href="/seo/payday-loan-debt-calculator" className="text-blue-400 hover:underline">Payday loan debt trap calculator guide</a></li>
            <li>→ <a href="/seo/payday-loan-rates-by-state" className="text-blue-400 hover:underline">Payday loan APRs by state</a></li>
            <li>→ <a href="/seo/payday-loan-alternatives" className="text-blue-400 hover:underline">Lower APR loan alternatives</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}
