"use client";

import React from "react";
import { motion } from "framer-motion";
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

const ServicesPage: React.FC = () => {
  const features = [
    {
      icon: HiPencil,
      title: "Desain Sesuai Kebutuhan",
      description:
        "Didesain khusus untuk identitas brand dan target pasar Anda agar dapat menarik audiens yang tepat.",
    },
    {
      icon: HiDeviceMobile,
      title: "Responsif & Mobile-Friendly",
      description:
        "Tampilan sempurna di semua perangkat, memastikan pengalaman pengguna yang konsisten dan nyaman.",
    },
    {
      icon: HiLightningBolt,
      title: "Optimalisasi Kecepatan",
      description:
        "Halaman yang dimuat dengan cepat untuk meningkatkan pengalaman pengguna dan peringkat di mesin pencari.",
    },
    {
      icon: HiSearch,
      title: "Siap untuk SEO",
      description:
        "Dibangun dengan praktik SEO terbaik untuk membantu Anda ditemukan oleh calon pelanggan di Google.",
    },
    {
      icon: HiChartBar,
      title: "Integrasi Analitik",
      description:
        "Pantau kinerja website Anda dengan data untuk mengambil keputusan bisnis yang lebih baik.",
    },
    {
      icon: HiSupport,
      title: "Dukungan Berkelanjutan",
      description:
        "Hubungan kita tidak berhenti setelah website selesai. Kami siap membantu Anda untuk pemeliharaan dan pengembangan selanjutnya.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">
                Layanan Landing Page & Website
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Semua yang Anda butuhkan untuk membangun kehadiran online yang
                kuat dan efektif.
              </p>
            </motion.div>
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
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default ServicesPage;
