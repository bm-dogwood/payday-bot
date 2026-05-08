import type { Metadata } from "next";
import { buildMetadata, SEO_PAGES } from "@/app/lib/seo-config";
import { JsonLd, articleSchema, faqSchema, breadcrumbSchema } from "@/app/lib/schema";

export const metadata: Metadata = buildMetadata(SEO_PAGES.seo_laws_by_state);

const STATE_LAWS = [
  { state: "Alabama", status: "Permitted", aprCap: "456%", maxLoan: "$500", maxTerm: "31 days", rollovers: "Banned", coolOff: "1 day", regulator: "ASBD" },
  { state: "Alaska", status: "Permitted", aprCap: "390%", maxLoan: "$500", maxTerm: "14 days", rollovers: "2 max", coolOff: "None", regulator: "DCCED" },
  { state: "Arizona", status: "Banned", aprCap: "36%", maxLoan: "N/A", maxTerm: "N/A", rollovers: "N/A", coolOff: "N/A", regulator: "DIFI" },
  { state: "Arkansas", status: "Banned", aprCap: "17%", maxLoan: "N/A", maxTerm: "N/A", rollovers: "N/A", coolOff: "N/A", regulator: "AFSR" },
  { state: "California", status: "Permitted", aprCap: "460%", maxLoan: "$300", maxTerm: "31 days", rollovers: "Banned", coolOff: "None", regulator: "DFPI" },
  { state: "Colorado", status: "Rate-Capped", aprCap: "36%", maxLoan: "$500", maxTerm: "6 months", rollovers: "Banned", coolOff: "None", regulator: "DORA" },
  { state: "Connecticut", status: "Banned", aprCap: "12%", maxLoan: "N/A", maxTerm: "N/A", rollovers: "N/A", coolOff: "N/A", regulator: "DOBS" },
  { state: "Delaware", status: "Permitted", aprCap: "None", maxLoan: "$1,000", maxTerm: "60 days", rollovers: "4 max", coolOff: "60 days", regulator: "OSBC" },
  { state: "Florida", status: "Permitted", aprCap: "304%", maxLoan: "$500", maxTerm: "31 days", rollovers: "Banned", coolOff: "24 hrs", regulator: "OFR" },
  { state: "Georgia", status: "Banned", aprCap: "16%", maxLoan: "N/A", maxTerm: "N/A", rollovers: "N/A", coolOff: "N/A", regulator: "DBF" },
  { state: "Illinois", status: "Rate-Capped", aprCap: "36%", maxLoan: "$1,000", maxTerm: "120 days", rollovers: "Banned", coolOff: "7 days", regulator: "IDFPR" },
  { state: "Indiana", status: "Permitted", aprCap: "390%", maxLoan: "$605", maxTerm: "None", rollovers: "Banned", coolOff: "7 days", regulator: "DFI" },
  { state: "Iowa", status: "Permitted", aprCap: "433%", maxLoan: "$500", maxTerm: "31 days", rollovers: "Banned", coolOff: "None", regulator: "IDB" },
  { state: "Kansas", status: "Permitted", aprCap: "391%", maxLoan: "$500", maxTerm: "30 days", rollovers: "Banned", coolOff: "None", regulator: "OSBC" },
  { state: "Kentucky", status: "Permitted", aprCap: "460%", maxLoan: "$500", maxTerm: "60 days", rollovers: "Banned", coolOff: "None", regulator: "DFI" },
  { state: "Louisiana", status: "Permitted", aprCap: "780%", maxLoan: "$350", maxTerm: "30 days", rollovers: "Permitted", coolOff: "None", regulator: "OFI" },
  { state: "Maine", status: "Restricted", aprCap: "30%", maxLoan: "$2,000", maxTerm: "None", rollovers: "Banned", coolOff: "None", regulator: "BFI" },
  { state: "Maryland", status: "Banned", aprCap: "33%", maxLoan: "N/A", maxTerm: "N/A", rollovers: "N/A", coolOff: "N/A", regulator: "DLLR" },
  { state: "Massachusetts", status: "Banned", aprCap: "23%", maxLoan: "N/A", maxTerm: "N/A", rollovers: "N/A", coolOff: "N/A", regulator: "DOB" },
  { state: "Michigan", status: "Permitted", aprCap: "369%", maxLoan: "$600", maxTerm: "31 days", rollovers: "Banned", coolOff: "None", regulator: "DIFS" },
  { state: "Minnesota", status: "Permitted", aprCap: "200%", maxLoan: "$350", maxTerm: "30 days", rollovers: "Banned", coolOff: "None", regulator: "DFI" },
  { state: "Mississippi", status: "Permitted", aprCap: "520%", maxLoan: "$500", maxTerm: "30 days", rollovers: "Permitted", coolOff: "None", regulator: "DBCF" },
  { state: "Missouri", status: "Permitted", aprCap: "1950%", maxLoan: "$500", maxTerm: "31 days", rollovers: "6 max", coolOff: "None", regulator: "DFI" },
  { state: "Montana", status: "Rate-Capped", aprCap: "36%", maxLoan: "$300", maxTerm: "31 days", rollovers: "Banned", coolOff: "None", regulator: "DOBS" },
  { state: "Nebraska", status: "Rate-Capped", aprCap: "36%", maxLoan: "$500", maxTerm: "34 days", rollovers: "Banned", coolOff: "None", regulator: "DFI" },
  { state: "Nevada", status: "Permitted", aprCap: "None", maxLoan: "25% income", maxTerm: "35 days", rollovers: "Permitted", coolOff: "90 days", regulator: "FID" },
  { state: "New Hampshire", status: "Rate-Capped", aprCap: "36%", maxLoan: "$500", maxTerm: "None", rollovers: "Banned", coolOff: "None", regulator: "DBT" },
  { state: "New Jersey", status: "Banned", aprCap: "30%", maxLoan: "N/A", maxTerm: "N/A", rollovers: "N/A", coolOff: "N/A", regulator: "DBI" },
  { state: "New Mexico", status: "Rate-Capped", aprCap: "36%", maxLoan: "$2,500", maxTerm: "None", rollovers: "Banned", coolOff: "None", regulator: "FID" },
  { state: "New York", status: "Banned", aprCap: "25%", maxLoan: "N/A", maxTerm: "N/A", rollovers: "N/A", coolOff: "N/A", regulator: "DFS" },
  { state: "North Carolina", status: "Banned", aprCap: "30%", maxLoan: "N/A", maxTerm: "N/A", rollovers: "N/A", coolOff: "N/A", regulator: "NCCOB" },
  { state: "North Dakota", status: "Permitted", aprCap: "520%", maxLoan: "$600", maxTerm: "60 days", rollovers: "Permitted", coolOff: "None", regulator: "DFI" },
  { state: "Ohio", status: "Rate-Capped", aprCap: "28%", maxLoan: "$1,000", maxTerm: "1 year", rollovers: "Banned", coolOff: "None", regulator: "DFI" },
  { state: "Oklahoma", status: "Permitted", aprCap: "390%", maxLoan: "$500", maxTerm: "45 days", rollovers: "Permitted", coolOff: "None", regulator: "ODCSC" },
  { state: "Oregon", status: "Rate-Capped", aprCap: "36%", maxLoan: "$50,000", maxTerm: "60 days min", rollovers: "2 max", coolOff: "7 days", regulator: "DFR" },
  { state: "Pennsylvania", status: "Banned", aprCap: "6%", maxLoan: "N/A", maxTerm: "N/A", rollovers: "N/A", coolOff: "N/A", regulator: "DBS" },
  { state: "South Carolina", status: "Permitted", aprCap: "390%", maxLoan: "$550", maxTerm: "31 days", rollovers: "Banned", coolOff: "1 day", regulator: "DCA" },
  { state: "South Dakota", status: "Rate-Capped", aprCap: "36%", maxLoan: "None", maxTerm: "None", rollovers: "Banned", coolOff: "None", regulator: "DL" },
  { state: "Tennessee", status: "Permitted", aprCap: "390%", maxLoan: "$500", maxTerm: "31 days", rollovers: "Banned", coolOff: "None", regulator: "TDFI" },
  { state: "Texas", status: "Permitted", aprCap: "664%+", maxLoan: "None", maxTerm: "None", rollovers: "Permitted", coolOff: "None", regulator: "OCCC" },
  { state: "Utah", status: "Permitted", aprCap: "None", maxLoan: "None", maxTerm: "None", rollovers: "Permitted", coolOff: "None", regulator: "DFI" },
  { state: "Virginia", status: "Rate-Capped", aprCap: "36%", maxLoan: "$2,500", maxTerm: "4 months min", rollovers: "Banned", coolOff: "45 days", regulator: "BFI" },
  { state: "Washington", status: "Permitted", aprCap: "390%", maxLoan: "$700", maxTerm: "45 days", rollovers: "Banned", coolOff: "90 days", regulator: "DFI" },
  { state: "West Virginia", status: "Banned", aprCap: "31%", maxLoan: "N/A", maxTerm: "N/A", rollovers: "N/A", coolOff: "N/A", regulator: "DFI" },
  { state: "Wisconsin", status: "Permitted", aprCap: "None", maxLoan: "None", maxTerm: "90 days max", rollovers: "Permitted", coolOff: "None", regulator: "DFI" },
  { state: "Wyoming", status: "Permitted", aprCap: "None", maxLoan: "None", maxTerm: "1 month", rollovers: "Permitted", coolOff: "None", regulator: "DFI" },
];

const FAQS = [
  {
    question: "Which states have banned payday loans?",
    answer:
      "As of 2025, payday loans are effectively banned or heavily restricted in: Arizona, Arkansas, Connecticut, Georgia, Maryland, Massachusetts, New Jersey, New York, North Carolina, Pennsylvania, Vermont, West Virginia, and the District of Columbia. These states enforce rate caps so low (typically under 36%) that traditional payday lending is unprofitable.",
  },
  {
    question: "What is the CFPB payday loan rule?",
    answer:
      "The Consumer Financial Protection Bureau (CFPB) issued a payday lending rule in 2017 requiring ability-to-repay assessments. The rule was significantly scaled back in 2020 and portions remain in legal limbo. The payment provisions (limiting debit attempts after two failures) remain in effect. Check cfpb.gov for the latest status.",
  },
  {
    question: "Can a payday lender sue me if I can't repay?",
    answer:
      "Yes. Payday lenders can pursue civil court action for unpaid debts. However, many states limit how lenders can collect. They cannot threaten criminal prosecution for bad checks unless you acted fraudulently. If sued, you have the right to appear in court and raise defenses including state law violations by the lender.",
  },
  {
    question: "What happens if a payday lender violates state law?",
    answer:
      "Violations of state payday lending laws can result in the loan being void and uncollectable, refund of fees paid, regulatory action against the lender's license, and civil damages in some states. Report violations to your state banking regulator and the CFPB.",
  },
  {
    question: "Do federal laws protect payday loan borrowers?",
    answer:
      "Yes. Key federal protections include: Truth in Lending Act (requires APR disclosure), Electronic Fund Transfer Act (limits debit authorization), Fair Debt Collection Practices Act (restricts collectors), Military Lending Act (36% APR cap for active-duty servicemembers and dependents), and CFPB payment provisions.",
  },
];

export default function PaydayLoanLawsByStatePage() {
  const schemas = [
    articleSchema({
      title: "Payday Loan Laws & Regulations by State – 2025 Complete Guide",
      description: "Every state's payday lending law explained.",
      url: "https://payday.bot/seo/payday-loan-laws-by-state",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    }),
    faqSchema(FAQS),
    breadcrumbSchema([
      { name: "Home", url: "https://payday.bot" },
      { name: "State Laws", url: "https://payday.bot/state-laws" },
      { name: "Laws by State Guide", url: "https://payday.bot/seo/payday-loan-laws-by-state" },
    ]),
  ];

  const statusColor = (status: string) => {
    if (status === "Banned") return "bg-red-900/40 text-red-400";
    if (status === "Rate-Capped") return "bg-green-900/40 text-green-400";
    if (status === "Restricted") return "bg-yellow-900/40 text-yellow-400";
    return "bg-orange-900/40 text-orange-400";
  };

  return (
    <>
      <JsonLd schema={schemas} />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex gap-2">
            <li><a href="/">Home</a></li>
            <li>/</li>
            <li><a href="/state-laws">State Laws</a></li>
            <li>/</li>
            <li aria-current="page">Laws by State Guide</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Payday Loan Laws & Regulations by State – 2025 Complete Guide
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        {/* Summary stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "States Permitting", value: "27", color: "text-orange-400" },
            { label: "States Banned/Restricted", value: "16", color: "text-red-400" },
            { label: "Rate-Capped States", value: "10", color: "text-green-400" },
            { label: "Federal APR Cap (Military)", value: "36%", color: "text-blue-400" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 rounded-xl p-4 text-center">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <section className="prose max-w-none mb-10">
          <p>
            Payday loan regulation in the United States is a patchwork of state laws with no federal interest rate cap
            (except for military borrowers). The result is extreme variation: borrowers in Texas or Missouri face
            virtually unlimited fees, while those in Ohio or Colorado are protected by hard APR caps. This guide
            documents the key regulatory parameters for every state.
          </p>
        </section>

        {/* State Laws Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">State-by-State Payday Loan Law Reference</h2>
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-3 py-3 font-semibold">State</th>
                  <th className="px-3 py-3 font-semibold">Status</th>
                  <th className="px-3 py-3 font-semibold">APR Cap</th>
                  <th className="px-3 py-3 font-semibold">Max Loan</th>
                  <th className="px-3 py-3 font-semibold">Rollovers</th>
                  <th className="px-3 py-3 font-semibold">Cool-Off Period</th>
                </tr>
              </thead>
              <tbody>
                {STATE_LAWS.map((row, i) => (
                  <tr key={row.state} className={i % 2 === 0 ? "bg-white/2" : ""}>
                    <td className="px-3 py-2 font-medium">
                      <a href={`/state/${row.state.toLowerCase().replace(/ /g, "-")}/laws`}
                         className="hover:underline text-blue-400">{row.state}</a>
                    </td>
                    <td className="px-3 py-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusColor(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-3 py-2 font-mono">{row.aprCap}</td>
                    <td className="px-3 py-2">{row.maxLoan}</td>
                    <td className="px-3 py-2">{row.rollovers}</td>
                    <td className="px-3 py-2">{row.coolOff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Key Federal Protections for All Borrowers</h2>
          <div className="space-y-4">
            {[
              { name: "Truth in Lending Act (TILA)", detail: "Requires disclosure of APR, total fees, and loan terms before you sign. Violations can make loans unenforceable." },
              { name: "Military Lending Act (MLA)", detail: "Caps APR at 36% for active-duty servicemembers and their dependents. Applies to payday loans, auto title loans, and other covered products." },
              { name: "Electronic Fund Transfer Act (EFTA)", detail: "Prohibits lenders from requiring automatic repayment via electronic debit as a condition of the loan." },
              { name: "CFPB Payment Provisions", detail: "After two failed debit attempts, lenders must get new authorization before attempting again. Protects borrowers from cascading NSF fees." },
              { name: "Fair Debt Collection Practices Act (FDCPA)", detail: "Debt collectors cannot harass, threaten, or deceive you. Applies when a third-party collector is pursuing payday loan debt." },
            ].map((law) => (
              <div key={law.name} className="flex gap-4 border border-white/10 rounded-lg p-4">
                <div className="flex-shrink-0 w-2 bg-blue-500/40 rounded-full" />
                <div>
                  <h3 className="font-semibold text-sm">{law.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{law.detail}</p>
                </div>
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
            <li>→ <a href="/seo/payday-loan-rates-by-state" className="text-blue-400 hover:underline">Payday loan rates by state (APR comparison)</a></li>
            <li>→ <a href="/seo/payday-loan-consumer-protection" className="text-blue-400 hover:underline">Know your consumer protection rights</a></li>
            <li>→ <a href="/seo/payday-loan-alternatives" className="text-blue-400 hover:underline">Safer alternatives to payday loans</a></li>
            <li>→ <a href="/state-laws" className="text-blue-400 hover:underline">Interactive state law tracker</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}
