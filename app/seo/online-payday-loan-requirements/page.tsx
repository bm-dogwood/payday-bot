import type { Metadata } from "next";
import { buildMetadata, SEO_PAGES } from "@/app/lib/seo-config";
import { JsonLd, articleSchema, faqSchema, breadcrumbSchema } from "@/app/lib/schema";

export const metadata: Metadata = buildMetadata(SEO_PAGES.seo_requirements);

const FAQS = [
  {
    question: "Can I get a payday loan with no credit check?",
    answer:
      "Many payday lenders advertise 'no credit check' loans. In practice, most use alternative data providers (like Clarity Services or Teletrack) rather than the three major bureaus (Equifax, Experian, TransUnion). A hard inquiry won't appear on your credit report, but your borrowing history with payday lenders is tracked in specialty databases.",
  },
  {
    question: "What income qualifies for a payday loan?",
    answer:
      "Payday lenders accept various income types: employment wages (most common), Social Security benefits, SSI/SSDI, pension income, and sometimes self-employment income with bank statement verification. The minimum is typically $800–$1,000 per month in regular deposits. Most lenders verify income via bank statement review or payroll provider connection rather than requiring pay stubs.",
  },
  {
    question: "Do I need a bank account for a payday loan?",
    answer:
      "For online payday loans, yes—a checking account is required for direct deposit of funds and automatic repayment. Some storefront payday lenders offer prepaid debit card options as an alternative, but these typically carry additional fees. Credit unions and some fintechs offer alternatives that may not require a traditional bank account.",
  },
  {
    question: "How long does payday loan approval take?",
    answer:
      "Online payday loan applications typically take 5–15 minutes to complete. Approval decisions are usually instant or within 1 hour during business hours. Funding typically arrives via direct deposit within 1 business day, though some lenders offer same-day funding for an additional fee. ACH transfers can take 1–2 business days on weekends or holidays.",
  },
  {
    question: "Can non-citizens get payday loans?",
    answer:
      "Requirements vary by lender. Most require a valid government ID (state ID, driver's license, or passport). Some lenders accept ITIN (Individual Taxpayer Identification Number) as an alternative to a Social Security Number. Undocumented individuals without SSN or ITIN may face limited options; credit unions serving immigrant communities may be a better alternative.",
  },
];

const REQUIREMENTS = [
  {
    category: "Identity",
    icon: "🪪",
    required: ["Government-issued photo ID (driver's license, state ID, or passport)", "Social Security Number or ITIN", "Must be 18+ (21+ in Alabama)"],
    optional: ["Secondary ID may be requested for larger loans"],
  },
  {
    category: "Residency",
    icon: "🏠",
    required: ["Must reside in a state where payday lending is legal", "Proof of address may be required (utility bill, lease)"],
    optional: ["P.O. Box typically not accepted; physical address required"],
  },
  {
    category: "Income",
    icon: "💰",
    required: ["Regular income (employment, benefits, or other verifiable source)", "Minimum $800–$1,000/month in most cases", "Recent pay stubs or bank statements showing income deposits"],
    optional: ["Self-employment income accepted by some lenders with bank statement verification"],
  },
  {
    category: "Bank Account",
    icon: "🏦",
    required: ["Active checking account in good standing", "Account must support direct deposit and ACH debit", "Account typically must be open 30–90 days"],
    optional: ["Savings account sometimes accepted but less common", "Prepaid debit cards rarely accepted for online loans"],
  },
  {
    category: "Contact Information",
    icon: "📱",
    required: ["Working phone number (cell preferred)", "Valid email address", "Ability to receive verification calls or texts"],
    optional: [],
  },
  {
    category: "Existing Loans",
    icon: "📋",
    required: ["Many states restrict having multiple payday loans simultaneously", "Lenders check specialty databases (Teletrack, Clarity, DataX) for existing loans", "Outstanding defaults or unpaid payday loans often result in denial"],
    optional: [],
  },
];

// State-by-state eligibility highlights
const STATE_ELIGIBILITY = [
  { state: "California", minAge: 18, minLoan: "$100", maxLoan: "$300", idRequired: "State ID/DL or Passport" },
  { state: "Florida", minAge: 18, minLoan: "$100", maxLoan: "$500", idRequired: "State ID/DL or Passport" },
  { state: "Texas", minAge: 18, minLoan: "$100", maxLoan: "No limit", idRequired: "State ID/DL or Passport" },
  { state: "Illinois", minAge: 18, minLoan: "$100", maxLoan: "$1,000", idRequired: "State ID/DL or Passport" },
  { state: "Michigan", minAge: 18, minLoan: "$50", maxLoan: "$600", idRequired: "State ID/DL or Passport" },
  { state: "Ohio", minAge: 18, minLoan: "$100", maxLoan: "$1,000", idRequired: "State ID/DL or Passport" },
  { state: "Washington", minAge: 18, minLoan: "$50", maxLoan: "$700", idRequired: "State ID/DL or Passport" },
  { state: "Alabama", minAge: 21, minLoan: "$100", maxLoan: "$500", idRequired: "State ID/DL or Passport" },
];

export default function OnlinePaydayLoanRequirementsPage() {
  const schemas = [
    articleSchema({
      title: "Online Payday Loan Requirements – What You Need to Qualify",
      description: "Everything required to get an online payday loan.",
      url: "https://payday.bot/seo/online-payday-loan-requirements",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    }),
    faqSchema(FAQS),
    breadcrumbSchema([
      { name: "Home", url: "https://payday.bot" },
      { name: "How Payday Loans Work", url: "https://payday.bot/alternatives" },
      { name: "Loan Requirements Guide", url: "https://payday.bot/seo/online-payday-loan-requirements" },
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
            <li aria-current="page">Loan Requirements Guide</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Online Payday Loan Requirements – What You Need to Qualify (2025)
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <section className="prose max-w-none mb-10">
          <p>
            Payday loans have among the most lenient approval requirements of any credit product—by design. Lenders
            target borrowers with limited credit options. But knowing exactly what&apos;s required lets you gather
            documents upfront, avoid unnecessary hard inquiries on specialty bureaus, and decide whether a payday
            loan or a better alternative is your best path.
          </p>
          <p>
            <strong>Before applying:</strong> Check whether your state permits payday lending. If you&apos;re in a
            banned or restricted state, online lenders claiming to serve your state may be operating illegally.
            Use our <a href="/state-laws" className="text-blue-400 hover:underline">state law tracker</a> to verify.
          </p>
        </section>

        {/* Requirements grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Standard Online Payday Loan Requirements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {REQUIREMENTS.map((req) => (
              <div key={req.category} className="border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{req.icon}</span>
                  <h3 className="font-semibold">{req.category}</h3>
                </div>
                <ul className="space-y-2">
                  {req.required.map((item) => (
                    <li key={item} className="flex gap-2 text-sm">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                  {req.optional.map((item) => (
                    <li key={item} className="flex gap-2 text-sm">
                      <span className="text-gray-500 mt-0.5 flex-shrink-0">ℹ</span>
                      <span className="text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Application process */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">The Online Application Process Step by Step</h2>
          <ol className="space-y-4">
            {[
              { title: "Check state eligibility", desc: "Confirm payday lending is legal in your state. If banned, your application will be rejected or, worse, you may be dealing with an illegal lender." },
              { title: "Compare lenders before applying", desc: "Use PAYDAY.BOT's rate comparison tool to find the lowest fee lender in your state. Avoid applying to multiple lenders simultaneously, as this creates multiple records in specialty credit databases." },
              { title: "Gather required documents", desc: "Have ready: government ID, SSN/ITIN, bank account info (routing + account number), most recent pay stub or bank statement showing income." },
              { title: "Complete the online application (5–15 min)", desc: "Applications ask for personal info, employment details, income amount and frequency, and bank account details for direct deposit and repayment." },
              { title: "Bank account verification", desc: "Most lenders use Plaid or similar bank connectivity tools for instant income and account verification. Some require manual bank statement upload." },
              { title: "Review loan agreement before signing", desc: "Federal law requires the lender to disclose APR, total fees, and repayment terms. Never sign without seeing these disclosures. The APR on a payday loan is typically 300%–664%." },
              { title: "Receive funds", desc: "Approved loans are typically funded via ACH within 1 business day. Some lenders offer same-day funding for a fee ($10–$30 typically)." },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sm font-bold text-blue-400">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-sm">{step.title}</p>
                  <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* State eligibility */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Eligibility Requirements by State (Selected)</h2>
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-3 font-semibold">State</th>
                  <th className="px-4 py-3 font-semibold">Min Age</th>
                  <th className="px-4 py-3 font-semibold">Min Loan</th>
                  <th className="px-4 py-3 font-semibold">Max Loan</th>
                  <th className="px-4 py-3 font-semibold">ID Required</th>
                </tr>
              </thead>
              <tbody>
                {STATE_ELIGIBILITY.map((row, i) => (
                  <tr key={row.state} className={i % 2 === 0 ? "bg-white/2" : ""}>
                    <td className="px-4 py-2 font-medium text-blue-400">{row.state}</td>
                    <td className="px-4 py-2">{row.minAge}+</td>
                    <td className="px-4 py-2">{row.minLoan}</td>
                    <td className="px-4 py-2">{row.maxLoan}</td>
                    <td className="px-4 py-2 text-gray-400">{row.idRequired}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * Alabama requires applicants to be 21+. All other states listed require 18+.
            Check <a href="/state-laws" className="text-blue-400 hover:underline">state law tracker</a> for complete details.
          </p>
        </section>

        {/* Warning */}
        <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-5 mb-10">
          <h3 className="font-semibold text-amber-400 mb-2">⚠️ Before You Apply: Consider Alternatives</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Meeting payday loan requirements doesn&apos;t mean a payday loan is your best option. If you qualify for
            a payday loan, you likely also qualify for cheaper alternatives including credit union PALs (28% max APR),
            cash advance apps (often 0% for small amounts), or online personal loans (6%–36% APR). A payday loan&apos;s
            391%+ APR can cost 10x more for the same borrowing need.
          </p>
          <a href="/seo/payday-loan-alternatives" className="inline-block mt-3 text-sm text-blue-400 hover:underline">
            See 10 alternatives with lower requirements and lower costs →
          </a>
        </div>

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
            <li>→ <a href="/seo/payday-loan-alternatives" className="text-blue-400 hover:underline">10 payday loan alternatives with easier requirements</a></li>
            <li>→ <a href="/seo/payday-loan-laws-by-state" className="text-blue-400 hover:underline">Is payday lending legal in your state?</a></li>
            <li>→ <a href="/seo/emergency-loan-options" className="text-blue-400 hover:underline">Emergency loans for bad credit</a></li>
            <li>→ <a href="/seo/payday-loan-consumer-protection" className="text-blue-400 hover:underline">Know your borrower rights</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}
