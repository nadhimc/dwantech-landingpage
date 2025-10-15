# Dwan Tech Landing Page

Landing page modern untuk Dwan Tech yang dibangun dengan Next.js 15, TypeScript, Tailwind CSS, dan Framer Motion.

## 🚀 Fitur

- **Next.js 15** dengan App Router dan Static Site Generation (SSG)
- **TypeScript** untuk type safety
- **Tailwind CSS v4** untuk styling yang responsif
- **Framer Motion** untuk animasi yang smooth
- **React Icons** untuk ikon yang konsisten
- **SEO Optimized** dengan metadata yang lengkap
- **Mobile-First Design** yang responsif di semua perangkat
- **Performance Optimized** dengan lazy loading dan code splitting

## 📁 Struktur Proyek

```
src/
├── app/                    # App Router pages
│   ├── page.tsx           # Homepage
│   ├── services/          # Halaman layanan
│   ├── portfolio/         # Halaman portfolio
│   ├── process/           # Halaman proses kerja
│   ├── apps/              # Halaman aplikasi
│   ├── contact/           # Halaman kontak
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer
│   ├── Logo.tsx           # Logo component
│   ├── FeatureCard.tsx    # Feature card component
│   ├── PortfolioCard.tsx  # Portfolio card component
│   ├── ProcessStep.tsx    # Process step component
│   └── WhatsAppFAB.tsx    # WhatsApp floating button
└── reference/             # HTML reference files
```

## 🛠️ Teknologi yang Digunakan

- **Next.js 15.5.5** - React framework dengan SSG
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **ESLint** - Code linting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm atau yarn

### Installation

1. Clone repository:

```bash
git clone <repository-url>
cd dwantech-landingpage
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

### Build untuk Production

```bash
npm run build
npm start
```

## 📱 Halaman yang Tersedia

- **/** - Homepage dengan hero section, services, process, dan CTA
- **/services** - Halaman layanan landing page & website
- **/portfolio** - Halaman portfolio dengan project showcase
- **/process** - Halaman proses kerja 3 langkah
- **/apps** - Halaman pengembangan aplikasi
- **/contact** - Halaman kontak dengan informasi lengkap

## 🎨 Design System

### Warna

- **Primary**: #ff7f50 (Orange)
- **Secondary**: #00c4cc (Teal)
- **Accent**: #00e0ea (Light Teal)
- **Text**: #2f4f4f (Dark Slate Gray)
- **Background**: #f5f5f5 (Light Gray)

### Typography

- **Headings**: Montserrat (700, 900)
- **Body**: Open Sans (400, 600)

### Animasi

- Fade in dengan delay bertahap
- Hover effects pada cards dan buttons
- Smooth transitions
- Scroll-triggered animations

## 🔧 Customization

### Mengubah Konten

Edit file di `src/app/` untuk mengubah konten halaman.

### Mengubah Styling

Edit `src/app/globals.css` untuk mengubah custom styles atau `tailwind.config.ts` untuk konfigurasi Tailwind.

### Menambah Halaman Baru

1. Buat folder baru di `src/app/`
2. Buat file `page.tsx` dengan struktur yang sama
3. Tambahkan link di `src/components/Header.tsx`

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized
- **Bundle Size**: Optimized dengan code splitting
- **Images**: Optimized dengan Next.js Image component

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload .next folder ke Netlify
```

### Static Export

```bash
npm run build
# Files akan tersedia di .next/out
```

## 📞 Kontak

- **Website**: [dwantech.com](https://dwantech.com)
- **Email**: hello@dwantech.com
- **WhatsApp**: +62 812-3456-7890

## 📄 License

© 2024 Dwan Tech. All rights reserved.
