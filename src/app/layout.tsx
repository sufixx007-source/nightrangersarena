import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Night Rangers Arena | High-Performance Mobile Game Studio",
  description: "Night Rangers Arena is a premier mobile game development studio crafting high-fidelity simulations and immersive gaming experiences. Explore our collection of world-class mobile titles.",
  keywords: ["Night Rangers Arena", "Mobile Games", "Android Games", "Google Play Developer", "Game Studio", "Simulators"],
  openGraph: {
    title: "Night Rangers Arena | Premier Mobile Game Developer",
    description: "Immersive mobile gaming experiences built for the ultimate player.",
    url: "https://nightrangersarena.com",
    siteName: "Night Rangers Arena",
    images: [
      {
        url: "/og-image.png", // User would need to provide this or I can generate a placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Night Rangers Arena | Premier Mobile Game Developer",
    description: "Immersive mobile gaming experiences built for the ultimate player.",
    creator: "@NightRangersArena",
  },
  icons: {
    icon: "/companyIcon.png",
    apple: "/companyIcon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
