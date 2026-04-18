"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Reveal({
  delay = 0,
  y = 20,
  once = true,
  className = "",
  children,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0% -10% 0%" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : y }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
