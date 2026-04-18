import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { APPLICATIONS, CATEGORIES } from "@/data/applications";

export const metadata: Metadata = {
  title: "Applications — Full Spectrum",
  description:
    "Every application we ship into: exterior fencing, decking, cladding, pergolas, hospitality cladding, marine trim, millwork, and specialty components. Phase 1, 2, and 3 roadmap.",
};

export default function ApplicationsPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-radial-amber opacity-40 pointer-events-none" />
        <div className="container-x relative">
          <p className="eyebrow mb-5">Application Spectrum</p>
          <h1 className="font-serif text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-[-0.02em] text-balance max-w-5xl">
            Every place a plank makes the{" "}
            <span className="italic text-[var(--color-amber)]">project better.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-bone-2)] max-w-3xl text-pretty leading-relaxed">
            {APPLICATIONS.length} applications, organized by vertical and phase.
            Phase 1 is the container lane we&rsquo;re starting with. Phase 2 opens
            interior millwork and hospitality. Phase 3 is specialty and marine.
          </p>
          <div className="divider-amber mt-14" />
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((c) => {
            const count = APPLICATIONS.filter((a) => a.category === c).length;
            return (
              <a
                key={c}
                href={`#cat-${c.toLowerCase()}`}
                className="px-5 py-3 border border-white/10 hover:border-[var(--color-amber)] hover:text-[var(--color-amber)] transition-colors font-mono text-[11px] tracking-[0.22em] uppercase"
              >
                {c}{" "}
                <span className="text-[var(--color-fog)] ml-2">{count}</span>
              </a>
            );
          })}
        </div>

        {CATEGORIES.map((cat) => {
          const apps = APPLICATIONS.filter((a) => a.category === cat);
          return (
            <div key={cat} id={`cat-${cat.toLowerCase()}`} className="mt-20 first:mt-0">
              <div className="flex items-baseline justify-between mb-10">
                <h2 className="font-serif text-3xl md:text-5xl">{cat}</h2>
                <span className="font-mono text-[11px] tracking-[0.24em] uppercase text-[var(--color-fog)]">
                  {apps.length} applications
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {apps.map((a, i) => (
                  <Reveal key={a.slug} delay={i * 0.04}>
                    <article id={a.slug} className="card p-7 h-full scroll-mt-24">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--color-amber)]">
                          Phase {a.phase}
                        </span>
                        <div className="flex gap-2">
                          {a.species.map((s) => (
                            <span
                              key={s}
                              className={`font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-1 border ${
                                s === "Teak"
                                  ? "border-[var(--color-teak)] text-[var(--color-cypress)]"
                                  : "border-[var(--color-cypress)] text-[var(--color-cypress)]"
                              }`}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl leading-snug mb-3">
                        {a.name}
                      </h3>
                      <p className="text-[var(--color-bone-2)] text-pretty leading-relaxed mb-5">
                        {a.pitch}
                      </p>
                      <dl className="border-t border-white/10 pt-4 space-y-2">
                        <div className="flex justify-between gap-4">
                          <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">Buyer</dt>
                          <dd className="text-sm text-[var(--color-bone-2)] text-right">{a.buyer}</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">Pricing</dt>
                          <dd className="text-sm text-[var(--color-amber)] text-right font-mono">{a.pricing}</dd>
                        </div>
                      </dl>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </Section>

      <CTA
        eyebrow="Specify a project"
        title={
          <>
            Have a job in mind?{" "}
            <span className="italic text-[var(--color-amber)]">Let&rsquo;s spec it.</span>
          </>
        }
        body="Share the application, square footage or linear feet, and timeline. We'll come back with species recommendation, grade, and landed pricing."
      />
    </>
  );
}
