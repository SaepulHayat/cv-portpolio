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

// Enhanced metadata
export const metadata: Metadata = {
  title: "Saepul Hayat - Full Stack Developer Portfolio",
  description: "Experienced Full Stack Developer specialized in React, Node.js, and PostgreSQL. RevoU graduate with 1+ years experience building scalable web applications.",
  keywords: ["Full Stack Developer", "React", "Node.js", "PostgreSQL", "JavaScript", "TypeScript", "Portfolio", "RevoU"],
  authors: [{ name: "Saepul Hayat" }],
  creator: "Saepul Hayat",
  publisher: "Saepul Hayat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://saepulhayat-portfolio.vercel.app",
    title: "Saepul Hayat - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specialized in React, Node.js, and PostgreSQL",
    siteName: "Saepul Hayat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saepul Hayat - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specialized in React, Node.js, and PostgreSQL",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
