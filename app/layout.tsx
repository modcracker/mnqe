import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mnqe.com"),
  title: {
    default: "MNQE.com | Monique Vanity Name & Premium 4-Letter Domain Asset",
    template: "%s | MNQE.com"
  },
  description: "Acquire MNQE.com, a rare 4-letter LLLL .com domain. Perfect as a premium personal vanity brand for 'Monique', or a high-growth corporate corporate identity in technology, luxury fashion, and biotech.",
  keywords: [
    "MNQE",
    "mnqe.com",
    "Monique domain",
    "4-letter domain",
    "premium .com domain for sale",
    "vanity domain asset",
    "buy LLLL .com",
    "Monique vanity name",
    "domain escrow acquisition",
    "Monique brand asset",
    "premium corporate domain"
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "MNQE.com | Monique Vanity Name & Premium 4-Letter Domain Asset",
    description: "Acquire MNQE.com, a rare 4-letter LLLL .com domain. Perfect as a premium personal vanity brand for 'Monique', or a high-growth corporate corporate identity in technology, luxury fashion, and biotech.",
    url: "https://www.mnqe.com",
    siteName: "MNQE.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MNQE.com | Monique Vanity Name & Premium 4-Letter Domain Asset",
    description: "Acquire MNQE.com, a rare 4-letter LLLL .com domain. Perfect as a premium personal vanity brand for 'Monique', or a high-growth corporate corporate identity in technology, luxury fashion, and biotech.",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
