import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a quote with Between Coasts Supply Co. Wholesale teak and cypress, delivered across the Midwest and Rocky Mountains.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-radial-amber opacity-40 pointer-events-none" />
        <div className="container-x relative">
          <p className="eyebrow mb-5">Contact</p>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] tracking-[-0.02em] text-balance max-w-5xl">
            Open the trade desk.{" "}
            <span className="italic text-[var(--color-amber)]">We&rsquo;ll get back fast.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-bone-2)] max-w-3xl text-pretty leading-relaxed">
            Tell us your job, your volume, and your timeline. Real quotes usually
            come back within one business day.
          </p>
          <div className="divider-amber mt-14" />
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          <div className="lg:col-span-5 space-y-10">
            <ContactBlock
              eyebrow="Trade Desk"
              title="Quotes & orders"
              lines={[
                { label: "Email", value: "trade@betweencoastssupply.com", href: "mailto:trade@betweencoastssupply.com" },
                { label: "Phone", value: "(515) 555-0199", href: "tel:+15155550199" },
                { label: "Hours", value: "Mon–Fri · 7:30am–5:00pm CT" },
              ]}
            />
            <ContactBlock
              eyebrow="Yard & Pickup"
              title="Indianola, Iowa"
              lines={[
                { label: "Staging yard", value: "Des Moines-area · by appointment" },
                { label: "Region", value: "IA · NE · KS · MN · MO · WI · CO" },
              ]}
            />
            <ContactBlock
              eyebrow="Architects & Specifiers"
              title="Specification support"
              lines={[
                { label: "Email", value: "spec@betweencoastssupply.com", href: "mailto:spec@betweencoastssupply.com" },
                { label: "Looking for", value: "Species/grade recs, sample kits, CAD profiles, Lacey docs" },
              ]}
            />
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactBlock({
  eyebrow, title, lines,
}: {
  eyebrow: string; title: string;
  lines: { label: string; value: string; href?: string }[];
}) {
  return (
    <div>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h3 className="font-serif text-3xl mb-5">{title}</h3>
      <dl className="space-y-3 border-t border-white/10 pt-5">
        {lines.map((l) => (
          <div key={l.label} className="flex justify-between gap-4">
            <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">
              {l.label}
            </dt>
            <dd className="text-right text-[var(--color-bone-2)]">
              {l.href ? (
                <a href={l.href} className="hover:text-[var(--color-amber)]">
                  {l.value}
                </a>
              ) : (
                l.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
