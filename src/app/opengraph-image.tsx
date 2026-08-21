import { ImageResponse } from "next/og";

export const alt = "Cyber Heaven — Software built with purpose.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#080808",
        color: "#f5f5f5",
        padding: "72px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #202020",
          paddingBottom: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.04em",
          }}
        >
          CYBER HEAVEN
        </div>

        <div
          style={{
            display: "flex",
            color: "#8a8a8a",
            fontSize: 14,
            letterSpacing: "0.12em",
          }}
        >
          SOFTWARE COMPANY
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "900px",
            fontSize: 82,
            lineHeight: 0.95,
            fontWeight: 500,
            letterSpacing: "-0.055em",
          }}
        >
          Software built
          <br />
          with purpose.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "32px",
            color: "#b5b5b5",
            fontSize: 24,
          }}
        >
          Focused products for productivity, finance, business, and developers.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #202020",
          paddingTop: "24px",
          color: "#8a8a8a",
          fontSize: 14,
          letterSpacing: "0.12em",
        }}
      >
        <span>BUILD // SHIP // ITERATE</span>

        <span>CYBERHEAVEN.APP</span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
