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
  title: "Dwan Tech | Direction One for Digital Success",
  description:
    "Kami spesialis dalam membangun landing page berkinerja tinggi yang memikat audiens Anda dan menghasilkan hasil. Bangun kehadiran online yang kuat dengan desain yang disesuaikan dengan visi Anda.",
  keywords:
    "landing page, website, aplikasi web, aplikasi mobile, digital marketing, SEO, responsive design",
  authors: [{ name: "Dwan Tech" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Dwan Tech | Direction One for Digital Success",
    description:
      "Kami spesialis dalam membangun landing page berkinerja tinggi yang memikat audiens Anda dan menghasilkan hasil.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
