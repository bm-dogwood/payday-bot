import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://payday.bot"),
  title: {
    default: "PAYDAY.BOT – Payday Loan Rate Comparison & Safer Alternatives",
    template: "%s | PAYDAY.BOT",
  },
  description:
    "Compare payday loan rates by state, find lower-cost alternatives, track state APR caps & bans, and use free debt calculators. Empowering borrowers with transparency.",
  keywords: [
    "payday loan comparison",
    "payday loan rates",
    "payday loan alternatives",
    "payday loan calculator",
    "payday loan laws by state",
    "emergency loans bad credit",
    "payday loan APR",
    "consumer protection",
  ],
  authors: [{ name: "PAYDAY.BOT", url: "https://payday.bot" }],
  creator: "PAYDAY.BOT",
  publisher: "PAYDAY.BOT",
  category: "Finance",
  classification: "Finance, Consumer Protection",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://payday.bot",
    siteName: "PAYDAY.BOT",
    title: "PAYDAY.BOT – Payday Loan Rate Comparison & Safer Alternatives",
    description:
      "Compare payday loan rates by state, find lower-cost alternatives, track state APR caps & bans, and use free debt calculators.",
    images: [
      {
        url: "https://payday.bot/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "PAYDAY.BOT – Payday Loan Rate Comparison & Safer Alternatives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@paydaybot",
    creator: "@paydaybot",
    title: "PAYDAY.BOT – Payday Loan Rate Comparison & Safer Alternatives",
    description:
      "Compare payday loan rates by state, find lower-cost alternatives, and protect yourself from predatory lending.",
    images: ["https://payday.bot/hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://payday.bot",
    languages: {
      "en-US": "https://payday.bot",
    },
  },
  icons: {
    icon: [
      { url: "/hero.jpeg", sizes: "16x16", type: "image/png" },
      { url: "/usa.jpeg", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/vault.jpeg", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/vault.jpeg", color: "#1a1a2e" }],
  },

  other: {
    // Preconnect hints for performance
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children} <SiteFooter />
      </body>
    </html>
  );
}
