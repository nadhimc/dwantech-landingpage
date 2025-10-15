"use client";

import React from "react";
import Link from "next/link";
import {
  HiPencil,
  HiDeviceMobile,
  HiLightningBolt,
  HiSearch,
  HiChartBar,
  HiSupport,
} from "react-icons/hi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import FeatureCard from "@/components/FeatureCard";
import ProcessStep from "@/components/ProcessStep";

const HomePage: React.FC = () => {
  const features = [
    {
      icon: HiPencil,
      title: "Prototype Cepat & Murah",
      description:
        "Dapatkan website prototype dalam 7 hari dengan investasi minimal. Coba konsep bisnis Anda tanpa risiko besar.",
    },
    {
      icon: HiDeviceMobile,
      title: "Test di Semua Perangkat",
      description:
        "Lihat bagaimana bisnis Anda berjalan di desktop, tablet, dan smartphone. Validasi konsep sebelum investasi lebih besar.",
    },
    {
      icon: HiLightningBolt,
      title: "Hasil Cepat Terlihat",
      description:
        "Dalam 1-2 minggu, Anda sudah bisa melihat apakah konsep bisnis Anda berhasil menarik pelanggan atau tidak.",
    },
    {
      icon: HiSearch,
      title: "SEO Dasar Gratis",
      description:
        "Website prototype sudah include SEO dasar agar mudah ditemukan di Google. Upgrade ke advanced SEO jika hasilnya bagus.",
    },
    {
      icon: HiChartBar,
      title: "Data Real untuk Keputusan",
      description:
        "Lihat data nyata: berapa visitor, dari mana mereka datang, dan apa yang mereka lakukan di website Anda.",
    },
    {
      icon: HiSupport,
      title: "Upgrade Sesuai Hasil",
      description:
        "Jika prototype berhasil, kami bantu upgrade ke website penuh. Jika tidak, Anda hanya kehilangan investasi kecil.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section - Modern 2024 Design */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Modern background with glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00C4CC]/5 via-white to-[#2F4F4F]/5"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-2 h-2 bg-[#00C4CC]/20 rounded-full"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-[#00C4CC]/30 rounded-full"></div>
            <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-[#00C4CC]/25 rounded-full"></div>
            <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-[#00C4CC]/20 rounded-full"></div>
          </div>

          {/* Floating glassmorphism elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#00C4CC]/20 to-[#00C4CC]/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-[#2F4F4F]/15 to-[#2F4F4F]/5 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-[#00C4CC]/10 to-transparent rounded-full blur-lg animate-pulse delay-2000"></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            {/* Elegant headline */}
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              <span className="text-[#2F4F4F] font-medium">Coba Dulu,</span>
              <br />
              <span className="text-[#00C4CC] font-semibold">
                Baru Investasi Besar
              </span>
            </h1>

            {/* Elegant subtitle */}
            <div className="relative mb-10">
              <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-6 shadow-lg border border-white/20 max-w-3xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Takut investasi besar untuk website? Kami hadir dengan solusi
                  prototype mulai Rp 1jt untuk mencoba konsep bisnis Anda
                  terlebih dahulu.
                  <span className="block mt-2 font-medium text-[#00C4CC]">
                    Risiko minimal, hasil maksimal!
                  </span>
                </p>
              </div>
            </div>

            {/* Elegant CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#00C4CC] text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:bg-[#00AAB2] transition-all duration-300"
              >
                Mulai Sekarang
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 backdrop-blur-sm bg-white/80 text-[#2F4F4F] font-medium rounded-lg border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Trust indicators - simple design */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00C4CC] rounded-full"></div>
                <span>⚡ Prototype siap dalam 7 hari</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00C4CC] rounded-full"></div>
                <span>💰 Mulai Rp 1jt</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00C4CC] rounded-full"></div>
                <span>🛡️ Garansi 30 hari</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Modern Design */}
        <section
          id="services"
          className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-3 h-3 bg-[#00C4CC]/10 rounded-full"></div>
            <div className="absolute top-40 right-40 w-2 h-2 bg-[#00C4CC]/15 rounded-full"></div>
            <div className="absolute bottom-20 left-1/2 w-2.5 h-2.5 bg-[#00C4CC]/10 rounded-full"></div>
            <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-[#00C4CC]/15 rounded-full"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-[#2F4F4F] mb-4">
                Mulai dengan Prototype, Skala Sesuai Hasil
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tidak perlu langsung investasi besar. Mulai dengan website
                prototype untuk menguji konsep bisnis Anda, lalu upgrade sesuai
                kebutuhan dan hasil.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">
                Mulai dari Prototype, Upgrade Sesuai Hasil
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Tidak perlu langsung investasi besar. Mulai dengan prototype
                murah untuk menguji konsep, lalu upgrade jika hasilnya bagus.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Paket Starter */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#2F4F4F] mb-2">
                    Website Prototype
                  </h3>
                  <div className="text-4xl font-bold text-[#00C4CC] mb-4">
                    Rp 1jt
                  </div>
                  <p className="text-gray-600 mb-6">
                    Coba konsep bisnis Anda dengan investasi minimal.
                    <span className="font-semibold text-[#00C4CC]">
                      Risiko kecil, peluang besar!
                    </span>
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>1 Halaman Website</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Desain Responsif</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Hosting & Domain 1 Tahun</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Form Kontak</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>WhatsApp Integration</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="w-full bg-gray-200 text-[#2F4F4F] font-semibold py-3 px-6 rounded-lg text-center block hover:bg-gray-300 transition"
                >
                  Pilih Paket Ini
                </Link>
              </div>

              {/* Paket Professional */}
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-[#00C4CC] relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#00C4CC] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Paling Populer
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#2F4F4F] mb-2">
                    Website Lengkap
                  </h3>
                  <div className="text-4xl font-bold text-[#00C4CC] mb-4">
                    Rp 2.5jt
                  </div>
                  <p className="text-gray-600 mb-6">
                    Upgrade dari prototype yang berhasil.
                    <span className="font-semibold text-[#00C4CC]">
                      Investasi yang sudah teruji!
                    </span>
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Hingga 5 Halaman Website</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Desain Custom & Responsif</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>SEO Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Google Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Hosting & Domain 1 Tahun</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Maintenance 3 Bulan</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="w-full bg-[#00C4CC] text-white font-semibold py-3 px-6 rounded-lg text-center block hover:bg-[#00B8B8] transition"
                >
                  Pilih Paket Ini
                </Link>
              </div>

              {/* Paket Aplikasi */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#2F4F4F] mb-2">
                    Aplikasi Custom
                  </h3>
                  <div className="text-4xl font-bold text-[#00C4CC] mb-4">
                    Rp 4jt
                  </div>
                  <p className="text-gray-600 mb-6">
                    Untuk bisnis yang sudah terbukti berhasil dan butuh
                    <span className="font-semibold text-[#00C4CC]">
                      {" "}
                      fitur khusus
                    </span>
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Aplikasi Web Custom</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Database & Admin Panel</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>User Management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>API Integration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Hosting & Domain 1 Tahun</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Maintenance 6 Bulan</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="w-full bg-gray-200 text-[#2F4F4F] font-semibold py-3 px-6 rounded-lg text-center block hover:bg-gray-300 transition"
                >
                  Konsultasi Dulu
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                <span className="font-semibold text-[#00C4CC]">
                  Garansi 30 Hari
                </span>{" "}
                - Tidak puas? Uang kembali 100%
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          id="process"
          className="py-20 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">
                Langkah Sederhana Menuju Kesuksesan Digital
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Proses yang mudah dan terstruktur untuk mewujudkan visi bisnis
                Anda.
              </p>
            </div>

            {/* Desktop: Horizontal flow with connecting arrows */}
            <div className="hidden lg:block">
              <div className="flex items-start justify-between relative">
                {[
                  {
                    step: 1,
                    title: "Konsultasi & Screening",
                    description:
                      "Kami diskusi kebutuhan bisnis Anda, jelaskan layanan & pricing, pastikan scope sesuai paket. Gratis konsultasi untuk memahami problem bisnis Anda.",
                    icon: "💬",
                  },
                  {
                    step: 2,
                    title: "Proposal & Agreement",
                    description:
                      "Kirim proposal lengkap (fitur, harga, timeline, scope). Setelah setuju, tandatangan kontrak & bayar DP 50% untuk memulai project.",
                    icon: "📋",
                  },
                  {
                    step: 3,
                    title: "Design & Development",
                    description:
                      "Buat draft/demo sesuai kebutuhan. Kirim untuk feedback (max 2x revisi minor). Proses iterasi hingga hasil final sesuai ekspektasi.",
                    icon: "⚡",
                  },
                  {
                    step: 4,
                    title: "Delivery & Launch",
                    description:
                      "Deploy website/aplikasi live. Klien cek & tanda tangan BAST. Bayar sisa 50% atau aktivasi langganan. Project resmi berjalan.",
                    icon: "🚀",
                  },
                  {
                    step: 5,
                    title: "Maintenance & Support",
                    description:
                      "Handle domain, hosting, update kecil, bug fixing sesuai paket. Support via WA jam kerja sesuai SLA yang disepakati.",
                    icon: "🔧",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center relative"
                  >
                    {/* Connecting arrow (except for last step) */}
                    {index < 4 && (
                      <div className="absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#2F4F4F] to-[#2F4F4F]/30 z-0">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#2F4F4F] border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                      </div>
                    )}

                    <div className="relative z-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-64 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#2F4F4F] to-[#1a3a3a] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative">
                        <span className="text-2xl">{step.icon}</span>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#2F4F4F]">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-[#2F4F4F] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile & Tablet: Vertical flow */}
            <div className="lg:hidden">
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Konsultasi & Screening",
                    description:
                      "Kami diskusi kebutuhan bisnis Anda, jelaskan layanan & pricing, pastikan scope sesuai paket. Gratis konsultasi untuk memahami problem bisnis Anda.",
                    icon: "💬",
                  },
                  {
                    step: 2,
                    title: "Proposal & Agreement",
                    description:
                      "Kirim proposal lengkap (fitur, harga, timeline, scope). Setelah setuju, tandatangan kontrak & bayar DP 50% untuk memulai project.",
                    icon: "📋",
                  },
                  {
                    step: 3,
                    title: "Design & Development",
                    description:
                      "Buat draft/demo sesuai kebutuhan. Kirim untuk feedback (max 2x revisi minor). Proses iterasi hingga hasil final sesuai ekspektasi.",
                    icon: "⚡",
                  },
                  {
                    step: 4,
                    title: "Delivery & Launch",
                    description:
                      "Deploy website/aplikasi live. Klien cek & tanda tangan BAST. Bayar sisa 50% atau aktivasi langganan. Project resmi berjalan.",
                    icon: "🚀",
                  },
                  {
                    step: 5,
                    title: "Maintenance & Support",
                    description:
                      "Handle domain, hosting, update kecil, bug fixing sesuai paket. Support via WA jam kerja sesuai SLA yang disepakati.",
                    icon: "🔧",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {/* Step number and connecting line */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F4F4F] to-[#1a3a3a] rounded-full flex items-center justify-center text-white text-lg font-bold relative">
                        <span className="text-lg">{step.icon}</span>
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#2F4F4F]">
                          {step.step}
                        </div>
                      </div>
                      {index < 4 && (
                        <div className="w-0.5 h-8 bg-gradient-to-b from-[#2F4F4F] to-[#2F4F4F]/30 mt-2"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-lg font-bold text-[#2F4F4F] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">
                Prototype yang Berhasil Menjadi Bisnis Nyata
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Banyak bisnis yang mulai dengan prototype murah, lalu berkembang
                menjadi bisnis besar setelah melihat hasil nyata.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00C4CC] mb-2">
                  50+
                </div>
                <div className="text-lg font-semibold text-[#2F4F4F] mb-1">
                  Website Berhasil
                </div>
                <div className="text-gray-600">
                  Dibuat untuk berbagai jenis bisnis
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00C4CC] mb-2">
                  4.9/5
                </div>
                <div className="text-lg font-semibold text-[#2F4F4F] mb-1">
                  Rating Klien
                </div>
                <div className="text-gray-600">Kepuasan klien yang tinggi</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00C4CC] mb-2">
                  7 Hari
                </div>
                <div className="text-lg font-semibold text-[#2F4F4F] mb-1">
                  Pengerjaan Rata-rata
                </div>
                <div className="text-gray-600">
                  Website siap online dengan cepat
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <div className="bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto">
                <div className="text-2xl text-[#2F4F4F] font-semibold mb-4">
                  "Mulai dengan prototype Rp 1jt, sekarang bisnis saya sudah
                  omzet 50jt/bulan. Investasi kecil, hasil besar!"
                </div>
                <div className="text-gray-600">
                  - <span className="font-semibold">Budi Santoso</span>, Owner
                  Toko Elektronik (Upgrade dari Prototype ke Website Lengkap)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Development Section */}
        <section id="apps" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">
                  Siap Melangkah Lebih Jauh dari Website?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Website hanyalah permulaan. Perluas kehadiran digital Anda
                  dengan aplikasi web atau mobile custom. Kami membangun
                  aplikasi yang intuitif, scalable, dan powerful untuk
                  melibatkan pengguna dan mengembangkan bisnis Anda.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="btn-secondary text-lg font-semibold py-3 px-8 rounded-lg shadow-xl"
                  >
                    Jelajahi Layanan Aplikasi
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                {/* Placeholder for an app image/mockup */}
                <div className="bg-gray-200 rounded-lg p-8">
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                    <div className="p-4 bg-gray-100 border-b flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-sm text-gray-500">Aplikasi Anda</div>
                    </div>
                    <div className="p-6 h-64 flex flex-col items-center justify-center bg-gray-50 space-y-4">
                      <svg
                        className="w-16 h-16 text-[#00C4CC]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m0 0l-2-1m2 1V7M4 7l2 1M4 7l2-1M4 7v2.5M12 21v-2.5M12 18.5l-2 1m2-1l2 1M12 18.5V14M4 14l2 1m2-1l2-1m-4 2V14m12 2.5l2 1m-2-1l-2-1m4 2V14"
                        />
                      </svg>
                      <p className="font-semibold text-gray-700">
                        Solusi Aplikasi yang Intuitif
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-[#00C4CC] h-2.5 rounded-full"
                          style={{ width: "45%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-[#2F4F4F]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Takut Investasi Besar? Coba Prototype Dulu!
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Mulai dengan prototype Rp 1jt untuk menguji konsep bisnis Anda.
              Jika berhasil, upgrade ke website lengkap. Jika tidak, Anda hanya
              kehilangan investasi kecil.
              <span className="font-semibold text-white">
                Konsultasi GRATIS
              </span>{" "}
              untuk prototype Anda!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-lg font-semibold py-3 px-8 rounded-lg shadow-xl"
              >
                Coba Prototype Rp 1jt
              </Link>
              <Link
                href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Dwan%20Tech."
                className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-xl transition"
              >
                Chat WhatsApp
              </Link>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              ⚡ Prototype siap dalam 7 hari • 💰 Mulai Rp 1jt • 🛡️ Garansi 30
              hari
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default HomePage;
