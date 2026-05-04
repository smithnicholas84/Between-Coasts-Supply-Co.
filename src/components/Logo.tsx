import Image from "next/image";

type LogoProps = {
  className?: string;
  /**
   * "reverse" inverts the dark crest to a cream-on-ink rendering for dark
   * surfaces (Nav, Footer, hero sections). Defaults to "reverse" because
   * every shipped surface sits on midnight today. Switch to "primary" on
   * cream/parchment grounds.
   */
  variant?: "primary" | "reverse";
  width?: number;
  height?: number;
};

export default function Logo({
  className,
  variant = "reverse",
  width = 256,
  height = 256,
}: LogoProps) {
  return (
    <Image
      src="/brand/master-logo.png"
      alt="Between Coasts Timber Co."
      width={width}
      height={height}
      priority
      className={className}
      style={{
        filter: variant === "reverse" ? "invert(1)" : undefined,
        objectFit: "contain",
      }}
    />
  );
}
