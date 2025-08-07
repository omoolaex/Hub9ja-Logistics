// app/layout.jsx
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { ModalProvider } from "../components/ModalContext";

// Font Setup
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://hub9jalogistics.markethub9ja.com"),
  title: {
    default: "Hub9ja Logistics",
    template: "%s | Hub9ja Logistics",
  },
  description: "Reliable delivery services for vendors & customers in Lagos and across Nigeria.",
  keywords: ["Logistics Lagos", "Delivery Lagos", "Ecommerce dispatch", "Same-day delivery Nigeria", "Vendor shipping"],
  authors: [{ name: "Markethub9ja", url: "https://markethub9ja.com" }],
  creator: "Markethub9ja Global Ltd",
  openGraph: {
    title: "Hub9ja Logistics",
    description: "Fast & secure dispatch services for vendors and buyers in Lagos.",
    url: "https://hub9jalogistics.markethub9ja.com",
    siteName: "Hub9ja Logistics",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Hub9ja Logistics",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hub9ja Logistics",
    description: "Trusted logistics & delivery partner for vendors in Lagos.",
    creator: "@Hub9jaLogistics",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "xZGro4lB8lvz72WNGinTSoTOezqs4LSqp2jZrE8UXbU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-850KBDLBW4"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-850KBDLBW4');
          `}
        </Script>

        {/* ✅ Google Tag Manager - HEAD */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-55CLWM44');
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        {/* ✅ GTM NoScript must come FIRST inside <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55CLWM44"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <ModalProvider>{children}</ModalProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
