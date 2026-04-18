import React from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "deep";
  className?: string;
  children?: React.ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className = "",
  children,
}: Props) {
  const bg = tone === "deep" ? "bg-[var(--color-midnight-2)]" : "bg-[var(--color-midnight)]";
  return (
    <section id={id} className={`relative ${bg} ${className}`}>
      <div className="container-x py-20 md:py-28">
        {(eyebrow || title || intro) && (
          <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && (
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] text-balance">
                {title}
              </h2>
            )}
            {intro && (
              <div className="mt-6 text-lg text-[var(--color-bone-2)] text-pretty leading-relaxed">
                {intro}
              </div>
            )}
          </div>
        )}
        <div className={(eyebrow || title || intro) ? "mt-14 md:mt-20" : ""}>{children}</div>
      </div>
    </section>
  );
}
