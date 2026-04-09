import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const canelaData = await readFile(
    join(process.cwd(), "public/fonts/Canela-RegularItalic.otf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0F0F0F",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            fontFamily: "Canela",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: 20,
            color: "#E8E4DE",
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
          name: "Canela",
          data: canelaData,
          weight: 400,
          style: "italic",
        },
      ],
    }
  );
}
