// components/SiteFooter.tsx
import Link from "next/link";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border bg-paper-deep">
      <div className="receipt-edge h-2 w-full" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo className="text-xl" />
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            An independent reference desk for short-term credit. We do not lend,
            we do not refer, and we are not paid by lenders. We just publish the
            receipts.
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-primary/80">
            Data sources: CFPB · NCSL · OpenStates · State regulators
          </p>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Tools
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/rates" className="hover:text-primary">
                Rate Atlas
              </Link>
            </li>
            <li>
              <Link href="/laws" className="hover:text-primary">
                Law Tracker
              </Link>
            </li>
            <li>
              <Link href="/calculator" className="hover:text-primary">
                Debt Lab
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Help
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/alternatives" className="hover:text-primary">
                Escape Hatch
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-primary">
                Survival Kit
              </Link>
            </li>
            <li>
              <a
                href="https://www.consumerfinance.gov/complaint/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                File a CFPB complaint
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-4 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} Payday.bot — Educational reference. Not
        legal or financial advice.
      </div>
    </footer>
  );
}
