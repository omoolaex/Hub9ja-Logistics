// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script"; // ✅ Required to embed GA script properly

// Font Setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Metadata – SEO friendly
export const metadata = {
  metadataBase: new URL("https://hub9jalogistics.markethub9ja.com"),
  title: {
    default: "Markethub9ja Logistics",
    template: "%s | Markethub9ja Logistics",
  },
  description: "Delivering Growth for Local Vendors",
  keywords: ["Logistics", "Ecommerce", "Nigeria", "Dispatch", "Vendors"],
  authors: [{ name: "Markethub9ja", url: "https://markethub9ja.com.ng" }],
  creator: "Markethub9ja Team",
  openGraph: {
    title: "Markethub9ja Logistics",
    description: "Delivering Growth for Local Vendors",
    url: "https://hub9jalogistics.markethub9ja.com",
    siteName: "Markethub9ja Logistics",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Markethub9ja Logistics",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markethub9ja Logistics",
    description: "Delivering Growth for Local Vendors",
    creator: "@Markethub9ja",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "xZGro4lB8lvz72WNGinTSoTOezqs4LSqp2jZrE8UXbU", // ✅ Google Site Verification Meta Tag
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Tag Manager Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-850KBDLBW4"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-850KBDLBW4');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <Analytics /> {/* ✅ Vercel Analytics */}
        <SpeedInsights /> {/* ✅ Real user performance tracking */}
      </body>
    </html>
  );
}
