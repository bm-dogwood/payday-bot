import type { Metadata } from "next";
import { buildMetadata, SEO_PAGES } from "@/app/lib/seo-config";
import { JsonLd, articleSchema, faqSchema, breadcrumbSchema } from "@/app/lib/schema";

export const metadata: Metadata = buildMetadata(SEO_PAGES.seo_consumer_protection);

const FAQS = [
  {
    question: "How do I report an illegal payday lender?",
    answer:
      "File complaints with: (1) Your state banking regulator—find yours at csbs.org/consumers, (2) The CFPB at consumerfinance.gov/complaint, (3) The FTC at reportfraud.ftc.gov, and (4) Your state attorney general. If the lender is online, also report to the Internet Crime Complaint Center (IC3) at ic3.gov if fraud is involved.",
  },
  {
    question: "Can a payday lender threaten me with jail?",
    answer:
      "No. It is illegal for a payday lender or debt collector to threaten criminal prosecution or arrest for failing to repay a payday loan. Defaulting on a payday loan is a civil matter, not a criminal one. Threats of arrest are a violation of the Fair Debt Collection Practices Act. Document the threat and report it immediately to the CFPB and FTC.",
  },
  {
    question: "What is the CFPB and how does it protect payday borrowers?",
    answer:
      "The Consumer Financial Protection Bureau (CFPB) is a federal agency that regulates financial products including payday loans. Its protections include requiring APR disclosures (via TILA), limiting debit attempts after two failures, taking enforcement actions against predatory lenders, and operating a free consumer complaint system at consumerfinance.gov/complaint.",
  },
  {
    question: "Can a payday lender take money from my bank account without permission?",
    answer:
      "No. The Electronic Fund Transfer Act (EFTA) prohibits lenders from requiring pre-authorized electronic debits as the sole condition of a loan. You must authorize any debit. The CFPB payment rule also requires lenders to obtain new authorization after two consecutive failed debit attempts rather than repeatedly attempting to withdraw funds.",
  },
  {
    question: "What can I do if I'm being harassed by a payday loan debt collector?",
    answer:
      "The FDCPA prohibits collectors from calling before 8 AM or after 9 PM, using profanity, threatening violence, or misrepresenting the debt. Send a certified letter requesting the collector cease contact ('cease and desist'). Once received, collectors may only contact you to confirm they'll stop or notify you of a lawsuit. Report violations to the CFPB and your state AG.",
  },
];

const RIGHTS = [
  {
    title: "Right to APR Disclosure (TILA)",
    description: "Before signing any loan agreement, you have the right to see the Annual Percentage Rate (APR), total dollar amount of fees, and complete repayment terms. This is required by federal law.",
    action: "If denied: File a complaint with the CFPB at consumerfinance.gov/complaint",
  },
  {
    title: "Right to Extended Payment Plans",
    description: "In many states (AL, AK, FL, ID, IL, IN, IA, KY, LA, MI, MN, MS, MO, NV, NM, ND, OK, OR, SC, UT, VA, WA), you have a legal right to request a free extended repayment plan if you cannot repay on the due date.",
    action: "If denied: Contact your state banking regulator and file a complaint.",
  },
  {
    title: "Right Against Unauthorized Debits",
    description: "No lender can take money from your bank account without your explicit authorization. After two consecutive failed debit attempts, they must get new authorization before trying again.",
    action: "If violated: Contact your bank to revoke authorization and file CFPB complaint.",
  },
  {
    title: "Right Against Harassment",
    description: "Debt collectors must follow the FDCPA—no harassment, threats, profanity, false statements, or repeated calls intended to annoy. This applies to the original lender and any third-party collector.",
    action: "If harassed: Send cease-and-desist letter, document everything, report to CFPB and FTC.",
  },
  {
    title: "Military Lending Act (Active Duty Only)",
    description: "Active-duty servicemembers and their dependents are protected by a 36% APR cap on payday loans, auto title loans, and other covered products. This is federal law and cannot be waived by any loan agreement.",
    action: "If violated: Contact your installation's JAG office and the CFPB Military Financial Protection Bureau.",
  },
  {
    title: "Right to Report and Seek Redress",
    description: "Every borrower has the right to file regulatory complaints against payday lenders who violate state or federal law. Penalties include fines, license revocation, loan voiding, and repayment of fees.",
    action: "Where to report: CFPB, your state banking regulator, state attorney general, FTC.",
  },
];

const AGENCIES = [
  { name: "CFPB (Consumer Financial Protection Bureau)", url: "https://www.consumerfinance.gov/complaint", description: "Federal agency. File complaints about any financial product including payday loans. Most effective for federal violations." },
  { name: "FTC (Federal Trade Commission)", url: "https://reportfraud.ftc.gov", description: "Report deceptive or unfair practices, especially by online lenders. Also handles FDCPA violations." },
  { name: "CSBS (Conference of State Bank Supervisors)", url: "https://www.csbs.org/consumers", description: "Directory of state banking regulators. Find your state's regulator for state law violations." },
  { name: "NFCC (National Foundation for Credit Counseling)", url: "https://www.nfcc.org", description: "Free and low-cost nonprofit credit counseling. Helps negotiate with payday lenders and develop debt payoff plans." },
  { name: "IC3 (Internet Crime Complaint Center)", url: "https://www.ic3.gov", description: "FBI-affiliated. Report online payday loan fraud, phishing, and unlicensed internet lenders." },
  { name: "State Attorney General", url: "https://www.naag.org/find-my-ag", description: "File complaints about state consumer protection law violations. Can initiate enforcement actions against licensed and unlicensed lenders." },
];

const RED_FLAGS = [
  "Lender cannot or will not disclose APR",
  "Loan offered without any income verification",
  "Lender is not licensed in your state",
  "Required to pay upfront fees before receiving funds ('advance fee fraud')",
  "Lender threatens criminal prosecution or arrest for non-payment",
  "Lender claims to be a tribal lender immune from state law",
  "Unsolicited loan offer (email, text, or phone call)",
  "Pressure to decide immediately with no time to read terms",
  "Rollover is automatically applied without consent",
  "Debit attempts continue after two failures without new authorization",
];

export default function PaydayLoanConsumerProtectionPage() {
  const schemas = [
    articleSchema({
      title: "Payday Loan Consumer Protection – Know Your Rights",
      description: "Detailed guide to payday loan borrower rights under federal and state law.",
      url: "https://payday.bot/seo/payday-loan-consumer-protection",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    }),
    faqSchema(FAQS),
    breadcrumbSchema([
      { name: "Home", url: "https://payday.bot" },
      { name: "Consumer Protection", url: "https://payday.bot/consumer-protection" },
      { name: "Know Your Rights", url: "https://payday.bot/seo/payday-loan-consumer-protection" },
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
            <li><a href="/consumer-protection">Consumer Protection</a></li>
            <li>/</li>
            <li aria-current="page">Know Your Rights</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Payday Loan Consumer Protection – Know Your Borrower Rights (2025)
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <section className="prose max-w-none mb-10">
          <p>
            Payday borrowers have more legal protections than most realize. Federal and state laws restrict what
            lenders can charge, how they can collect, and what happens if they violate the rules. This guide covers
            every major borrower right, how to exercise them, and where to report violations.
          </p>
        </section>

        {/* Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Your Legal Rights as a Payday Loan Borrower</h2>
          <div className="space-y-4">
            {RIGHTS.map((right) => (
              <div key={right.title} className="border border-white/10 rounded-xl p-5">
                <h3 className="font-semibold mb-2">{right.title}</h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{right.description}</p>
                <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg px-4 py-2 text-xs text-blue-300">
                  {right.action}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Red flags */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Red Flags: Signs of a Predatory or Illegal Lender</h2>
          <div className="grid md:grid-cols-2 gap-2">
            {RED_FLAGS.map((flag) => (
              <div key={flag} className="flex gap-2 items-start py-2 px-3 bg-red-900/10 border border-red-500/10 rounded-lg">
                <span className="text-red-400 mt-0.5 flex-shrink-0 text-sm">⚠</span>
                <span className="text-sm text-gray-300">{flag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Agencies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Where to Report Payday Loan Violations</h2>
          <div className="space-y-3">
            {AGENCIES.map((agency) => (
              <div key={agency.name} className="border border-white/10 rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-3">
                <div className="flex-1">
                  <p className="font-semibold text-sm">{agency.name}</p>
                  <p className="text-gray-400 text-xs mt-1">{agency.description}</p>
                </div>
                <a href={agency.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex-shrink-0 text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg transition-colors text-center">
                  File Report →
                </a>
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
            <li>→ <a href="/seo/payday-loan-laws-by-state" className="text-blue-400 hover:underline">Payday loan laws by state</a></li>
            <li>→ <a href="/seo/payday-loan-alternatives" className="text-blue-400 hover:underline">Safer alternatives to payday loans</a></li>
            <li>→ <a href="/seo/emergency-loan-options" className="text-blue-400 hover:underline">Emergency loans for bad credit</a></li>
            <li>→ <a href="/consumer-protection" className="text-blue-400 hover:underline">Full consumer protection resource center</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}
