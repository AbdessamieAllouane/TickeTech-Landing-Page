import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TickeTech - Revolutionary Event Management Platform",
  description:
    "Transform your event management experience with TickeTech. The all-in-one platform for event organizers, artists, and educators.",
  metadataBase: new URL("https://ticke-tech-landing.vercel.app/"), 
  openGraph: {
    title: "TickeTech - Revolutionary Event Management Platform",
    description:
      "Transform your event management experience with TickeTech. The all-in-one platform for event organizers, artists, and educators.",
    url: "https://ticke-tech-landing.vercel.app/", 
    siteName: "TickeTech",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "TickeTech Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TickeTech - Revolutionary Event Management Platform",
    description:
      "Transform your event management experience with TickeTech. The all-in-one platform for event organizers, artists, and educators.",
    images: ["/og-image.png"], 
    creator: "@AbdessamieAll", 
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
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
