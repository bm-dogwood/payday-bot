import type { Metadata } from "next";
import { buildMetadata, SEO_PAGES } from "@/app/lib/seo-config";
import { JsonLd, articleSchema, faqSchema, breadcrumbSchema, howToSchema, softwareAppSchema } from "@/app/lib/schema";

export const metadata: Metadata = buildMetadata(SEO_PAGES.seo_debt_calculator);

const FAQS = [
  {
    question: "What is a payday loan debt trap?",
    answer:
      "A payday loan debt trap occurs when a borrower cannot repay the full loan amount plus fees on the due date and must roll over the loan—paying a new fee to extend it. Each rollover adds fees without reducing the principal. A $300 loan rolled over 8 times generates $360 in fees alone, more than the original loan, with the principal still outstanding.",
  },
  {
    question: "How many times can you roll over a payday loan?",
    answer:
      "It depends on your state. Many states ban rollovers entirely (California, Florida, Michigan). Others allow 2 rollovers (Alaska, Oregon), 4 rollovers (Delaware), 6 rollovers (Missouri), or have no legal limit (Texas, Nevada, Wisconsin). Always check your state's rules at our state law tracker.",
  },
  {
    question: "What happens if I can't repay a payday loan?",
    answer:
      "If you cannot repay, the lender may attempt to debit your bank account (potentially triggering NSF fees), offer a rollover, or refer the debt to a collection agency. Federal law (after the CFPB payment provisions) limits debit attempts to two before requiring new authorization. You can also request an extended repayment plan—several states require lenders to offer them.",
  },
  {
    question: "How do I get out of a payday loan debt cycle?",
    answer:
      "Strategies include: (1) Request an extended payment plan—many states require lenders to offer EPPs at no extra cost. (2) Contact a nonprofit credit counselor (NFCC member agencies). (3) Apply for a credit union PAL to pay off the payday loan. (4) Prioritize the payday loan over non-essential bills because the fee structure makes delay extremely costly.",
  },
  {
    question: "Is there a statute of limitations on payday loan debt?",
    answer:
      "Yes. Most states have a 2–6 year statute of limitations on collecting debts. After this period, collectors generally cannot successfully sue to collect. However, the clock resets if you make a payment or acknowledge the debt in writing. Check your state's specific statute of limitations for written contracts.",
  },
];

const HOW_TO_STEPS = [
  { name: "Enter your loan amount", text: "Input the amount you borrowed or plan to borrow. Payday loans typically range from $100 to $1,000 depending on your state." },
  { name: "Enter the fee or rate", text: "Input either the fee per $100 borrowed (e.g., $15) or the total flat fee charged. The calculator will convert this to APR automatically." },
  { name: "Enter your loan term", text: "Input the number of days until the loan is due. Most payday loans are 14 days (one pay period), though terms vary by state." },
  { name: "Set the number of rollovers", text: "If you expect to need rollovers, enter how many. Each rollover adds the same fee to your total cost without reducing principal." },
  { name: "Review your total cost", text: "The calculator shows: total fees paid, total amount repaid, effective APR, and a payoff timeline so you can see exactly when you'd be free of the debt." },
];

// Illustrative cost table
const COST_EXAMPLES = [
  { loan: 300, fee: 15, rollovers: 0, totalFees: 45, totalRepaid: 345, apr: 391 },
  { loan: 300, fee: 15, rollovers: 2, totalFees: 135, totalRepaid: 435, apr: 391 },
  { loan: 300, fee: 15, rollovers: 4, totalFees: 225, totalRepaid: 525, apr: 391 },
  { loan: 300, fee: 15, rollovers: 6, totalFees: 315, totalRepaid: 615, apr: 391 },
  { loan: 500, fee: 15, rollovers: 0, totalFees: 75, totalRepaid: 575, apr: 391 },
  { loan: 500, fee: 15, rollovers: 3, totalFees: 300, totalRepaid: 800, apr: 391 },
  { loan: 500, fee: 20, rollovers: 0, totalFees: 100, totalRepaid: 600, apr: 521 },
  { loan: 500, fee: 20, rollovers: 4, totalFees: 500, totalRepaid: 1000, apr: 521 },
];

export default function PaydayLoanDebtCalculatorPage() {
  const schemas = [
    articleSchema({
      title: "Payday Loan Debt Trap Calculator – Know Before You Borrow",
      description: "See exactly how much a payday loan will cost over time with rollover fees.",
      url: "https://payday.bot/seo/payday-loan-debt-calculator",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    }),
    faqSchema(FAQS),
    howToSchema(
      "How to Use the Payday Loan Debt Calculator",
      "Calculate the true total cost of a payday loan including rollover fees",
      HOW_TO_STEPS
    ),
    softwareAppSchema(
      "Payday Loan Debt Calculator",
      "Calculate total payday loan cost including fees, rollovers, and effective APR",
      "https://payday.bot/debt-calculator"
    ),
    breadcrumbSchema([
      { name: "Home", url: "https://payday.bot" },
      { name: "Debt Calculator", url: "https://payday.bot/debt-calculator" },
      { name: "Debt Trap Calculator Guide", url: "https://payday.bot/seo/payday-loan-debt-calculator" },
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
            <li><a href="/debt-calculator">Debt Calculator</a></li>
            <li>/</li>
            <li aria-current="page">Debt Trap Calculator Guide</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Payday Loan Debt Trap Calculator – Know Before You Borrow
        </h1>
        <p className="text-gray-400 text-sm mb-2">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        {/* CTA to actual tool */}
        <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-5 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold">Ready to calculate your loan cost?</p>
            <p className="text-sm text-gray-400">Use our interactive calculator to see exact costs in real time.</p>
          </div>
          <a href="/debt-calculator"
             className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Open Calculator →
          </a>
        </div>

        <section className="prose max-w-none mb-10">
          <p>
            Most payday loan borrowers focus on the fee—$15 per $100 doesn&apos;t sound catastrophic. The danger is in
            rollovers. The CFPB found that 80% of payday loans are rolled over or renewed within 14 days, and the
            median borrower takes out 10 payday loans per year. Our debt calculator shows you exactly what happens
            to your total cost when you can&apos;t repay on time.
          </p>
          <p>
            <strong>Key insight:</strong> A $300 payday loan with six rollovers costs $315 in fees—more than the
            original loan—and you still owe the $300 principal. Total repayment: $615 for a $300 advance.
          </p>
        </section>

        {/* Cost examples table */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Payday Loan True Cost Examples</h2>
          <p className="text-sm text-gray-400 mb-4">
            Based on $15/$20 per $100 fee structure (most common in permitted states). Principal is not reduced during rollovers.
          </p>
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-3 font-semibold">Loan Amount</th>
                  <th className="px-4 py-3 font-semibold">Fee/100</th>
                  <th className="px-4 py-3 font-semibold">Rollovers</th>
                  <th className="px-4 py-3 font-semibold">Total Fees</th>
                  <th className="px-4 py-3 font-semibold">Total Repaid</th>
                  <th className="px-4 py-3 font-semibold">APR</th>
                </tr>
              </thead>
              <tbody>
                {COST_EXAMPLES.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/2" : ""}>
                    <td className="px-4 py-2">${row.loan}</td>
                    <td className="px-4 py-2">${row.fee}</td>
                    <td className="px-4 py-2">{row.rollovers}</td>
                    <td className="px-4 py-2 text-red-400 font-medium">${row.totalFees}</td>
                    <td className="px-4 py-2 font-semibold">${row.totalRepaid}</td>
                    <td className="px-4 py-2 font-mono">{row.apr}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How to use */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Use the Payday Loan Debt Calculator</h2>
          <ol className="space-y-4">
            {HOW_TO_STEPS.map((step, i) => (
              <li key={step.name} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sm font-bold text-blue-400">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-sm">{step.name}</p>
                  <p className="text-gray-400 text-sm mt-1">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Escape the Payday Loan Debt Cycle</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Request an Extended Payment Plan (EPP)", desc: "Many states require lenders to offer a free EPP. This lets you repay in 4 equal installments without additional fees. Available in Alabama, Alaska, Florida, Idaho, Illinois, Indiana, Iowa, Kentucky, Louisiana, Michigan, Minnesota, Mississippi, Missouri, Nevada, New Mexico, North Dakota, Oklahoma, Oregon, South Carolina, Utah, Virginia, Washington." },
              { title: "Apply for a Credit Union PAL", desc: "Use a $200–$2,000 Payday Alternative Loan (PAL) from a federal credit union to pay off your payday loan. PAL APR is capped at 28%—a fraction of payday loan costs. You'll need to be a member for at least one month at most credit unions." },
              { title: "Contact a Nonprofit Credit Counselor", desc: "NFCC member agencies offer free or low-cost payday loan debt counseling. They can negotiate directly with lenders, set up debt management plans, and provide free financial coaching. Find an agency at nfcc.org." },
              { title: "Prioritize Payoff Over Other Discretionary Spending", desc: "Due to the compounding fee structure, payday loans are often the most expensive debt you'll ever hold. Prioritize eliminating the principal before any new rollovers add more fees. Even partial payments to reduce principal help." },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 rounded-xl p-5">
                <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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
            <li>→ <a href="/seo/payday-loan-apr-calculator" className="text-blue-400 hover:underline">APR calculator – convert fees to annual rate</a></li>
            <li>→ <a href="/seo/payday-loan-alternatives" className="text-blue-400 hover:underline">10 best alternatives to payday loans</a></li>
            <li>→ <a href="/seo/payday-loan-consumer-protection" className="text-blue-400 hover:underline">Consumer protection rights</a></li>
            <li>→ <a href="/debt-calculator" className="text-blue-400 hover:underline">Interactive debt calculator tool</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}
