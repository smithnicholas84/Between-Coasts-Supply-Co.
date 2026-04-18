"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/sourcing", label: "Sourcing" },
  { href: "/trade", label: "Trade" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[rgba(15,13,10,0.85)] backdrop-blur-xl border-b border-white/5"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
      style={{ transitionTimingFunction: "var(--ease-cinema)" }}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link href="/" aria-label="Between Coasts Supply Co." className="flex items-center gap-3 group">
          <Logo className="h-7 w-auto text-[var(--color-amber)] group-hover:text-[var(--color-amber-2)] transition-colors" />
          <span className="hidden md:inline font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)] group-hover:text-[var(--color-bone)] transition-colors">
            Between Coasts Supply Co.
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-bone-2)] hover:text-[var(--color-amber)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-[11px]">
            Request a Quote
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[var(--color-bone)] p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[rgba(15,13,10,0.98)] backdrop-blur-xl">
          <div className="container-x py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-bone-2)] hover:text-[var(--color-amber)]"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-fit">
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
