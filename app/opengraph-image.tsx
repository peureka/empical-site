import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "empical — one question a day. speak your answer. miss it and it's gone.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const newsreaderData = await readFile(
    join(process.cwd(), "public/fonts/Newsreader-LightItalic.ttf")
  );
  const interData = await readFile(
    join(process.cwd(), "public/fonts/Inter-Light.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F5F0EB",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            fontFamily: "Newsreader",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: 42,
            lineHeight: 1.7,
            color: "#1A1A1A",
            textAlign: "center",
            maxWidth: 700,
            marginBottom: 40,
          }}
        >
          What did your father teach you without saying a word?
        </div>
        <div
          style={{
            fontFamily: "Inter",
            fontWeight: 300,
            fontSize: 16,
            color: "rgba(26,26,26,0.35)",
            letterSpacing: "0.12em",
            marginBottom: 40,
          }}
        >
          24 hours left.
        </div>
        <div
          style={{
            width: 30,
            height: 1,
            background: "#C4841D",
            marginBottom: 24,
          }}
        />
        <div
          style={{
            fontFamily: "Inter",
            fontWeight: 300,
            fontSize: 13,
            color: "#1A1A1A",
            letterSpacing: "0.35em",
          }}
        >
          empical
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Newsreader",
          data: newsreaderData,
          weight: 300,
          style: "italic",
        },
        {
          name: "Inter",
          data: interData,
          weight: 300,
          style: "normal",
        },
      ],
    }
  );
}
