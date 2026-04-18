type LogoProps = {
  className?: string;
};

/**
 * Between Coasts Supply Co. wordmark.
 * Two horizontal rules = two coasts. The amber plank between them = the middle.
 */
export default function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 220 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Between Coasts Supply Co."
    >
      <defs>
        <linearGradient id="plank" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* left coast */}
      <line x1="2" y1="18" x2="36" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.75" />
      {/* right coast */}
      <line x1="184" y1="18" x2="218" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.75" />

      {/* plank between the coasts */}
      <rect x="40" y="14" width="140" height="8" fill="url(#plank)" />
      <rect x="40" y="14" width="140" height="8" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.9" />

      {/* BCS monogram */}
      <text
        x="110" y="40"
        textAnchor="middle"
        fontFamily="'IBM Plex Mono', ui-monospace, monospace"
        fontSize="8"
        letterSpacing="0.35em"
        fill="currentColor"
        opacity="0.95"
      >
        BETWEEN COASTS
      </text>
    </svg>
  );
}
