// app/resources/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Survival Kit — Consumer Protection Resources | PAYDAY.BOT",
  description:
    "Free legal aid, complaint links, debt collector scripts, and federal protections.",
};

const RIGHTS = [
  {
    law: "Truth in Lending Act",
    what: "Lender must disclose APR, finance charge, and total of payments — in writing — before you sign.",
    who: "All lenders",
  },
  {
    law: "Military Lending Act",
    what: "36% all-in APR cap on most consumer loans for active-duty service members and dependents.",
    who: "Active military",
  },
  {
    law: "Fair Debt Collection Practices Act",
    what: "Collectors can't call before 8am, after 9pm, at work after you say no, or use threats / profanity.",
    who: "Everyone",
  },
  {
    law: "Electronic Fund Transfer Act",
    what: "You can revoke ACH authorization for a payday loan at any time, in writing, to your bank.",
    who: "Everyone",
  },
];

const SCRIPTS = [
  {
    title: "Stop the ACH withdrawals",
    body: `"Effective immediately, I am revoking authorization for [LENDER] to debit my account ending in ____. Please block all future ACH transactions from this originator. I am providing this notice in writing under the Electronic Fund Transfer Act, Regulation E."`,
    to: "Send to your bank",
  },
  {
    title: "Validate the debt",
    body: `"I dispute this debt. Under 15 U.S.C. § 1692g, please cease all collection activity and send written verification of the debt, the original creditor, and your authority to collect."`,
    to: "Send to the collector within 30 days",
  },
  {
    title: "Ask for an Extended Payment Plan",
    body: `"Before this loan rolls over, I am requesting an Extended Payment Plan as permitted under state law. Please send me the EPP terms in writing today."`,
    to: "Many states require lenders to offer one — free.",
  },
];

const RESOURCES = [
  {
    name: "CFPB Complaint Portal",
    url: "https://www.consumerfinance.gov/complaint/",
    desc: "File a federal complaint. Lenders must respond within 15 days.",
  },
  {
    name: "Dial 2-1-1 (United Way)",
    url: "https://www.211.org/",
    desc: "Free 24/7 referrals to local rent, utility, and food assistance.",
  },
  {
    name: "Find a Federal Credit Union",
    url: "https://mapping.ncua.gov/",
    desc: "Locate a credit union near you that offers PAL loans.",
  },
  {
    name: "Legal Services Corp",
    url: "https://www.lsc.gov/about-lsc/what-legal-aid/get-legal-help",
    desc: "Free civil legal aid by ZIP code.",
  },
  {
    name: "NCLC Consumer Rights",
    url: "https://library.nclc.org/",
    desc: "National Consumer Law Center — plain-English guides.",
  },
  {
    name: "OpenStates Legislation Tracker",
    url: "https://openstates.org/",
    desc: "Watch payday-related bills in your state legislature.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
        // 06 — Survival Kit
      </p>
      <h1 className="display mt-3 text-5xl sm:text-7xl">
        Know your <span className="etched">rights.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Federal law gives you more leverage than most lenders advertise. Here's
        the toolkit.
      </p>

      {/* Rights */}
      <section className="mt-14">
        <h2 className="display text-3xl">Your federal protections</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {RIGHTS.map((r) => (
            <div
              key={r.law}
              className="rounded-2xl border border-border bg-card/60 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg">{r.law}</h3>
                <span className="rounded-full border border-primary/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                  {r.who}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{r.what}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scripts */}
      <section className="mt-16">
        <h2 className="display text-3xl">Copy / paste scripts</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Word these exactly. They invoke the right statutes.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {SCRIPTS.map((s) => (
            <div
              key={s.title}
              className="receipt-edge rounded-xl bg-ink/70 p-1"
            >
              <div className="rounded-md bg-card p-5">
                <h3 className="display text-xl text-primary">{s.title}</h3>
                <pre className="mt-3 whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground/90">
                  {s.body}
                </pre>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.to}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="mt-16">
        <h2 className="display text-3xl">Direct links</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {RESOURCES.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="lift group flex items-center justify-between gap-4 rounded-xl border border-border bg-card/40 p-5"
            >
              <div>
                <div className="font-display text-lg group-hover:text-primary">
                  {r.name}
                </div>
                <div className="text-sm text-muted-foreground">{r.desc}</div>
              </div>
              <span className="text-primary transition group-hover:translate-x-1">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
