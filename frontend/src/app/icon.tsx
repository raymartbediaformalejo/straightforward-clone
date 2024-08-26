import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 56,
  height: 56,
};
export const contentType = "image/png";
const Icon = () => {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#89362D",
          color: "#FFFFFF",
        }}
      >
        S
      </div>
    ),
    {
      ...size,
    }
  );
};

export default Icon;
