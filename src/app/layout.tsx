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
  title: {
    default: "Dwan Tech | Jasa Pembuatan Website & Aplikasi Murah di Indonesia",
    template: "%s | Dwan Tech - Jasa Website & Aplikasi"
  },
  description:
    "Dwan Tech menyediakan jasa pembuatan website prototype murah mulai Rp 1jt, aplikasi web custom, dan landing page berkinerja tinggi. Solusi digital untuk bisnis kecil hingga menengah di Indonesia.",
  keywords: [
    "jasa pembuatan website",
    "jasa website murah",
    "pembuatan website prototype",
    "jasa aplikasi web",
    "landing page murah",
    "website bisnis",
    "aplikasi custom",
    "web development Indonesia",
    "jasa SEO website",
    "responsive design",
    "website prototype",
    "aplikasi web custom",
    "digital marketing",
    "web developer Indonesia"
  ],
  authors: [{ name: "Dwan Tech", url: "https://dwantech.com" }],
  creator: "Dwan Tech",
  publisher: "Dwan Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dwantech.com"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://dwantech.com",
    siteName: "Dwan Tech",
    title: "Dwan Tech | Jasa Pembuatan Website & Aplikasi Murah di Indonesia",
    description:
      "Dwan Tech menyediakan jasa pembuatan website prototype murah mulai Rp 1jt, aplikasi web custom, dan landing page berkinerja tinggi. Solusi digital untuk bisnis kecil hingga menengah di Indonesia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dwan Tech - Jasa Pembuatan Website & Aplikasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwan Tech | Jasa Pembuatan Website & Aplikasi Murah di Indonesia",
    description:
      "Dwan Tech menyediakan jasa pembuatan website prototype murah mulai Rp 1jt, aplikasi web custom, dan landing page berkinerja tinggi.",
    images: ["/og-image.jpg"],
    creator: "@dwantech",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
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
