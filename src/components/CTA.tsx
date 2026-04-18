import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: React.ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CTA({
  eyebrow = "Talk to the Trade Desk",
  title = (
    <>
      Start a quote. <span className="italic text-[var(--color-amber)]">Move a container.</span>
    </>
  ),
  body = "Tell us your volume, your job, your timeline. We'll come back with landed pricing, lead times, and a delivery plan.",
  primaryHref = "/contact",
  primaryLabel = "Request a Quote",
  secondaryHref = "/products",
  secondaryLabel = "Browse Products",
}: Props) {
  return (
    <section className="relative bg-[var(--color-midnight)] overflow-hidden">
      <div className="absolute inset-0 gradient-radial-amber opacity-60" aria-hidden />
      <div className="container-x py-24 md:py-32 relative">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-balance">
            {title}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-bone-2)] max-w-2xl text-pretty leading-relaxed">
            {body}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
              <ArrowUpRight size={14} />
            </Link>
            <Link href={secondaryHref} className="btn-ghost">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
      <div className="divider-amber" />
    </section>
  );
}
