import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ayushk01.github.io";
const description =
  "Software engineer at DocPlix. Built a multi-tenant EHR from scratch. React, Node, React Native, AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayush Kashyap — Software Engineer",
    template: "%s · Ayush Kashyap",
  },
  description,
  openGraph: {
    title: "Ayush Kashyap — Software Engineer",
    description,
    url: siteUrl,
    siteName: "Ayush Kashyap",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kashyap — Software Engineer",
    description,
    creator: "@ayushhhkk_",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
