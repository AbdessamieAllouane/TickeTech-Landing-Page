import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TickeTech - The Future of Event Management in Algeria",
  description:
    "TickeTech revolutionizes event management in Algeria with secure digital ticketing, QR validation, smart promotion, and comprehensive analytics.",
  keywords:
    "event management, ticketing, Algeria, digital tickets, QR validation, event promotion",
  authors: [{ name: "Abdessamie Allouane" }],
  openGraph: {
    title: "TickeTech - The Future of Event Management in Algeria",
    description:
      "Revolutionizing event management in Algeria with secure digital ticketing and smart promotion.",
    url: "https://ticketech.dz",
    siteName: "TickeTech",
    images: [
      {
        url: "/og-image.png", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "TickeTech Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TickeTech - The Future of Event Management in Algeria",
    description:
      "Revolutionizing event management in Algeria with secure digital ticketing and smart promotion.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add this when you have it
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      
        <meta name="theme-color" content="#4F46E5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
