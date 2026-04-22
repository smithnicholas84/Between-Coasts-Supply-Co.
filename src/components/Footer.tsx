import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 bg-[var(--color-midnight-2)]">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <Logo className="h-8 w-auto text-[var(--color-amber)]" />
            <p className="mt-6 text-[var(--color-fog)] max-w-sm text-pretty">
              Kiln-dried plantation teak and Central American Cypress, imported direct from Costa Rica under CAFTA-DR 0% duty.
              Wholesale supply for builders, landscapers, and contractors from
              the Rockies to the Great Lakes.
            </p>
            <p className="mt-8 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-amber)]">
              Built between the coasts. Built to last.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-bone)] mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-[var(--color-fog)]">
              <li><Link href="/products/teak" className="hover:text-[var(--color-amber)]">Teak</Link></li>
              <li><Link href="/products/cypress" className="hover:text-[var(--color-amber)]">Central American Cypress</Link></li>
              <li><Link href="/applications" className="hover:text-[var(--color-amber)]">Applications</Link></li>
              <li><Link href="/sourcing" className="hover:text-[var(--color-amber)]">Sourcing</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-bone)] mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-[var(--color-fog)]">
              <li><Link href="/about" className="hover:text-[var(--color-amber)]">About</Link></li>
              <li><Link href="/trade" className="hover:text-[var(--color-amber)]">Trade Program</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-amber)]">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-bone)] mb-4">
              Trade Desk
            </h4>
            <ul className="space-y-3 text-sm text-[var(--color-fog)]">
              <li>
                <a href="mailto:trade@betweencoastssupply.com" className="hover:text-[var(--color-amber)]">
                  trade@betweencoastssupply.com
                </a>
              </li>
              <li>
                <a href="tel:+15155550199" className="hover:text-[var(--color-amber)]">
                  (515) 555-0199
                </a>
              </li>
              <li className="pt-1">Waukee, Iowa<br />Serving IA · NE · KS · MN · MO · WI · CO</li>
              <li className="pt-1">Mon–Fri · 7:30am–5:00pm CT</li>
            </ul>
          </div>
        </div>

        <div className="divider-amber my-12" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-fog)]">
            © {year} Between Coasts Teak & Timber Co. · All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">
            EIN XX-XXXXXXX · FSC-track sourcing · CAFTA-DR compliant · Phyto-certified imports
          </p>
        </div>
      </div>
    </footer>
  );
}
