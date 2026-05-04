import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Between Coasts Teak & Timber Co. — Built between the coasts. Built to last.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand colors, duplicated here as literals — this file runs on Next's edge
// runtime via Satori and cannot resolve CSS custom properties. Keep these
// values in sync with the matching tokens in src/app/globals.css.
const MIDNIGHT = "#0F0D0A";    // --color-midnight
const INK = "#1A1410";         // crest ink
const AMBER = "#C4852A";       // --color-amber
const BONE = "#F5EFE6";        // --color-bone
const BONE_2 = "#E8DFD0";      // --color-bone-2
const FOG = "#A89F92";         // --color-fog

// Inline crest mark — mirrors public/favicon.svg using Satori-supported
// nested divs (no SVG / binary fetching on edge).
function CrestMark({ size = 96 }: { size?: number }) {
  const ring = (r: number, fill: string) => ({
    position: "absolute" as const,
    top: (size - r) / 2,
    left: (size - r) / 2,
    width: r,
    height: r,
    borderRadius: r / 2,
    background: fill,
    display: "flex",
  });
  const stroke = (r: number) => ({
    position: "absolute" as const,
    top: (size - r) / 2,
    left: (size - r) / 2,
    width: r,
    height: r,
    borderRadius: r / 2,
    border: `1px solid ${INK}`,
    display: "flex",
  });
  return (
    <div style={{ position: "relative", width: size, height: size, display: "flex" }}>
      <div style={ring(size, INK)} />
      <div style={ring(size * 0.72, BONE)} />
      <div style={stroke(size * 0.58)} />
      <div style={stroke(size * 0.42)} />
      <div style={stroke(size * 0.26)} />
      <div style={ring(size * 0.1, INK)} />
    </div>
  );
}

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            `radial-gradient(ellipse at 50% 35%, rgba(196,133,42,0.35) 0%, rgba(196,133,42,0.08) 40%, ${MIDNIGHT} 75%), ${MIDNIGHT}`,
          color: BONE,
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <CrestMark size={88} />
            <div style={{ fontSize: 20, letterSpacing: 6, textTransform: "uppercase", color: AMBER }}>
              Between Coasts Teak & Timber Co.
            </div>
          </div>
          <div style={{ fontSize: 16, letterSpacing: 4, textTransform: "uppercase", color: FOG }}>
            Teak · Central American Cypress
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 76, lineHeight: 1.02, maxWidth: 960 }}>
            Built between the coasts.{" "}
            <span style={{ color: AMBER, fontStyle: "italic" }}>Built to last.</span>
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.35, maxWidth: 900, color: BONE_2 }}>
            Kiln-dried teak and Central American Cypress, direct from responsible
            plantation growers in Costa Rica. Wholesale to Midwest builders.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 16, color: FOG, letterSpacing: 3, textTransform: "uppercase" }}>
          <div>Waukee, Iowa</div>
          <div>CAFTA-DR · 0% duty · Direct import</div>
        </div>
      </div>
    ),
    size
  );
}
