import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FREEZEGOD™ — Premium Ice Liquid",
  description:
    "Premium Ice Liquid dengan sensasi dingin ekstrem, rasa bersih, dan kualitas premium untuk pengalaman vaping yang maksimal.",
  keywords: ["vape", "liquid", "ice", "freezegod", "premium", "mint"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-[100dvh] bg-bg-deep text-text overflow-x-hidden">
        {children}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
