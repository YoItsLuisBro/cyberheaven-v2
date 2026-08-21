import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#080808",
        color: "#f5f5f5",
        border: "1px solid #202020",
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: "-0.08em",
      }}
    >
      CH
    </div>,
    {
      ...size,
    },
  );
}
