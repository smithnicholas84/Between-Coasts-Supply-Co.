export default function ChipStrip({ chips }: { chips: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {chips.map((c) => (
        <li
          key={c}
          className="font-mono text-[11px] leading-none tracking-[0.18em] uppercase px-3 py-2 border border-[var(--color-amber)]/60 text-[var(--color-amber)]"
        >
          {c}
        </li>
      ))}
    </ul>
  );
}
