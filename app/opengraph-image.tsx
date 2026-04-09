import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "empical — one question a day. hold to speak. miss it and it's gone.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const canelaData = await readFile(
    join(process.cwd(), "public/fonts/Canela-RegularItalic.otf")
  );
  const sohneData = await readFile(
    join(process.cwd(), "public/fonts/Sohne-Buch.otf")
  );
  const monoData = await readFile(
    join(process.cwd(), "public/fonts/SohneMono-Buch.otf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0F0F0F",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            fontFamily: "Canela",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: 42,
            lineHeight: 1.7,
            color: "#C4622D",
            textAlign: "center",
            maxWidth: 700,
            marginBottom: 40,
          }}
        >
          what are you pretending isn't bothering you?
        </div>
        <div
          style={{
            fontFamily: "Sohne Mono",
            fontWeight: 400,
            fontSize: 14,
            color: "#5C5753",
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
            background: "#C4622D",
            marginBottom: 24,
          }}
        />
        <div
          style={{
            fontFamily: "Sohne Mono",
            fontWeight: 400,
            fontSize: 13,
            color: "#9A9590",
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
          name: "Canela",
          data: canelaData,
          weight: 400,
          style: "italic",
        },
        {
          name: "Sohne",
          data: sohneData,
          weight: 400,
          style: "normal",
        },
        {
          name: "Sohne Mono",
          data: monoData,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
