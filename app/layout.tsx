import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://empical.com";
const title = "empical";
const description =
  "one question a day. hold to speak. miss it and it's gone.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "empical",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  other: {
    "theme-color": "#0F0F0F",
    "msapplication-TileColor": "#0F0F0F",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
