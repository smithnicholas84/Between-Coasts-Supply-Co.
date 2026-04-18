type Props = { items: string[] };

export default function Marquee({ items }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden border-y border-white/5 bg-[var(--color-midnight-2)]">
      <div className="marquee-track flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-5 px-8 py-4 font-mono text-[11px] tracking-[0.24em] uppercase text-[var(--color-bone-2)]"
          >
            <span className="text-[var(--color-amber)]">◆</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
