import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Between Coasts Supply Co. — Built between the coasts. Built to last.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
            "radial-gradient(ellipse at 50% 35%, rgba(196,133,42,0.35) 0%, rgba(196,133,42,0.08) 40%, #0F0D0A 75%), #0F0D0A",
          color: "#F5EFE6",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 20, letterSpacing: 6, textTransform: "uppercase", color: "#C4852A" }}>
            Between Coasts Supply Co.
          </div>
          <div style={{ fontSize: 16, letterSpacing: 4, textTransform: "uppercase", color: "#A89F92" }}>
            Teak · Cypress
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 76, lineHeight: 1.02, maxWidth: 960 }}>
            Built between the coasts.{" "}
            <span style={{ color: "#C4852A", fontStyle: "italic" }}>Built to last.</span>
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.35, maxWidth: 900, color: "#E8DFD0" }}>
            Kiln-dried teak and cypress, direct from responsible plantation growers
            in Costa Rica. Wholesale to Midwest builders.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 16, color: "#A89F92", letterSpacing: 3, textTransform: "uppercase" }}>
          <div>Indianola, Iowa</div>
          <div>CAFTA-DR · 0% duty · Direct import</div>
        </div>
      </div>
    ),
    size
  );
}
