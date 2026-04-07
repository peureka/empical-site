import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const newsreaderData = await readFile(
    join(process.cwd(), "public/fonts/Newsreader-LightItalic.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1A1A1A",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            fontFamily: "Newsreader",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: 20,
            color: "#F5F0EB",
            marginTop: -2,
          }}
        >
          e
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
      ],
    }
  );
}
