"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";

/**
 * Cinematic parallax hero.
 * Layers: deep midnight wash → amber radial light → horizontal plank strata
 * (wood grain SVG, scrolls at different rates) → grain + ember particles → copy.
 */

// Illustration-only wood-grain midtones. Not brand tokens — they only exist
// inside the decorative SVG gradient here. Brand colors come from CSS vars.
const WOOD_GRAIN_MID = "#2A1E11";
const WOOD_GRAIN_WARM = "#5A3A1C";
export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yFar = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);
  const yNear = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 240]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);

  return (
    <section
      ref={ref}
      className="relative h-[100vh] min-h-[720px] w-full overflow-hidden bg-[var(--color-midnight)]"
    >
      {/* Layer 0 — base midnight wash */}
      <div className="absolute inset-0 bg-[var(--color-midnight)]" />

      {/* Layer 1 — far plank strata (slowest) */}
      <motion.div
        style={{ y: yFar, scale }}
        className="absolute inset-0 opacity-[0.35] grain"
        aria-hidden
      >
        <PlankStrata variant="far" />
      </motion.div>

      {/* Layer 2 — amber radial light well */}
      <motion.div
        style={{ y: yMid }}
        className="absolute inset-0 gradient-radial-amber"
        aria-hidden
      />

      {/* Layer 3 — mid plank strata with stronger grain */}
      <motion.div
        style={{ y: yMid }}
        className="absolute inset-0 opacity-[0.55]"
        aria-hidden
      >
        <PlankStrata variant="mid" />
      </motion.div>

      {/* Layer 4 — near foreground plank edge (fastest, crops bottom) */}
      <motion.div
        style={{ y: yNear }}
        className="absolute left-0 right-0 bottom-[-12%] h-[40%] opacity-[0.85]"
        aria-hidden
      >
        <PlankStrata variant="near" />
      </motion.div>

      {/* Layer 5 — floating embers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <Embers />
      </div>

      {/* Layer 6 — fade to page */}
      <div className="absolute inset-0 gradient-midnight-fade pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity, y: titleY }}
        className="relative z-10 h-full container-x flex flex-col justify-center"
      >
        <div className="max-w-4xl fade-up">
          <p className="eyebrow mb-6">
            Teak · Central American Cypress · Wholesale · Midwest Direct
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] tracking-[-0.02em] text-balance">
            Plantation hardwood from Costa Rica.
            <br />
            <span className="italic text-[var(--color-amber)]">Priced for the job site.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[var(--color-bone-2)] max-w-2xl text-pretty leading-relaxed">
            Kiln-dried plantation teak and Central American Cypress, imported
            direct from Costa Rica and landed in Iowa at 0% duty. Wholesale pricing for fence
            installers, landscapers, and contractors across the Midwest.
            No retail markup. No middle man.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <Link href="/products" className="btn-ghost">
              View Products
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 container-x flex items-end justify-between">
          <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-[var(--color-fog)] hidden md:block">
            Direct import · CAFTA-DR · 0% duty · Midwest delivery
          </p>
          <div className="flex items-center gap-3 text-[var(--color-fog)]">
            <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[var(--color-amber)] to-transparent" />
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase">Scroll</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ------- Plank strata — layered SVG wood-grain stripes ------- */

function PlankStrata({ variant }: { variant: "far" | "mid" | "near" }) {
  const count = variant === "near" ? 6 : variant === "mid" ? 11 : 18;
  const baseY = variant === "near" ? 0 : variant === "mid" ? 10 : 0;
  const height = variant === "near" ? 180 : variant === "mid" ? 90 : 55;

  return (
    <svg
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`wood-${variant}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" style={{ stopColor: "var(--color-midnight)" }} />
          <stop offset="0.12" stopColor={WOOD_GRAIN_MID} />
          <stop offset="0.45" stopColor={WOOD_GRAIN_WARM} />
          <stop offset="0.72" stopColor={WOOD_GRAIN_MID} />
          <stop offset="1" style={{ stopColor: "var(--color-midnight)" }} />
        </linearGradient>
        <linearGradient id={`wood-edge-${variant}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--color-amber)", stopOpacity: 0.35 }} />
          <stop offset="0.5" style={{ stopColor: "var(--color-amber)", stopOpacity: 0 }} />
          <stop offset="1" style={{ stopColor: "var(--color-midnight)", stopOpacity: 0.6 }} />
        </linearGradient>
        <filter id={`grain-${variant}`}>
          <feTurbulence baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 0.35  0 0 0 0 0.22  0 0 0 0 0.08  0 0 0 0.18 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      {Array.from({ length: count }).map((_, i) => {
        const y = baseY + i * height + (i % 2 ? 6 : 0);
        return (
          <g key={i}>
            <rect x="0" y={y} width="1920" height={height - 4} fill={`url(#wood-${variant})`} />
            <rect x="0" y={y} width="1920" height={height - 4} fill={`url(#wood-edge-${variant})`} />
            <rect x="0" y={y} width="1920" height={height - 4} filter={`url(#grain-${variant})`} opacity="0.6" />
            {/* seam */}
            <line x1="0" y1={y + height - 4} x2="1920" y2={y + height - 4} stroke="#000" strokeWidth="1.2" opacity="0.75" />
            <line x1="0" y1={y + height - 3.5} x2="1920" y2={y + height - 3.5} style={{ stroke: "var(--color-amber)" }} strokeWidth="0.4" opacity="0.2" />
          </g>
        );
      })}
    </svg>
  );
}

/* ------- Embers — slow floating amber motes ------- */

function Embers() {
  const dots = [
    { l: "8%", t: "30%", d: 0 },
    { l: "22%", t: "72%", d: 0.6 },
    { l: "41%", t: "18%", d: 1.2 },
    { l: "58%", t: "60%", d: 1.8 },
    { l: "74%", t: "35%", d: 2.4 },
    { l: "88%", t: "78%", d: 3.0 },
    { l: "15%", t: "55%", d: 3.6 },
    { l: "68%", t: "22%", d: 4.2 },
  ];
  return (
    <>
      {dots.map((d, i) => (
        <span
          key={i}
          className="ember absolute block rounded-full"
          style={{
            left: d.l,
            top: d.t,
            width: 3,
            height: 3,
            background: "var(--color-amber-2)",
            boxShadow: "0 0 18px 3px rgba(224, 160, 69, 0.55)",
            animationDelay: `${d.d}s`,
          }}
        />
      ))}
    </>
  );
}
