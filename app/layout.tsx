import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ayushk01.github.io";
const title = "Ayush Kashyap — SaaS engineer for hire";
const description =
  "I help startups ship production-ready SaaS — multi-tenant web + iOS/Android on AWS — and rescue half-built apps that don't hold up yet. 3+ years building and scaling a production EHR.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Ayush Kashyap",
  },
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Ayush Kashyap",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
