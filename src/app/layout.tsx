import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { asset } from "@/lib/paths";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const description =
  "Shipfront helps eCommerce merchants scale by taking care of their logistics needs, so that they can focus on growing their business.";

export const viewport = {
  themeColor: "#000000",
  colorScheme: "dark" as const,
};

export const metadata: Metadata = {
  title: "Shipfront",
  description,
  metadataBase: new URL("https://davidtphung.github.io/shipfront-crate-os-black/"),
  icons: {
    icon: [{ url: asset("/icon.svg"), type: "image/svg+xml" }],
    apple: [{ url: asset("/apple-touch-icon.svg") }],
  },
  openGraph: {
    title: "Shipfront",
    description,
    url: "https://www.myshipfront.com/",
    siteName: "Shipfront",
    type: "website",
    images: [
      {
        url: "https://davidtphung.github.io/shipfront-crate-os-black/og.svg",
        alt: "Shipfront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipfront",
    description,
    images: [
      {
        url: "https://davidtphung.github.io/shipfront-crate-os-black/og.svg",
        alt: "Shipfront",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#000000] pb-[env(safe-area-inset-bottom)] font-sans text-[#f5f5f5]">
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-[90] focus-visible:rounded-[10px] focus-visible:bg-[#FF6A00] focus-visible:px-3 focus-visible:py-2 focus-visible:text-black"
        >
          Skip to Content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
