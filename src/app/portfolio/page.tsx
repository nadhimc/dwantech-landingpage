"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import PortfolioCard from "@/components/PortfolioCard";

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      title: "Landing Page E-commerce",
      description:
        "Landing page dengan tingkat konversi tinggi untuk sebuah brand fashion baru, fokus untuk mendorong penjualan.",
      image: "https://placehold.co/600x400/00C4CC/FFFFFF?text=Proyek+Satu",
      tags: ["Landing Page"],
    },
    {
      title: "Aplikasi Platform SaaS",
      description:
        "Aplikasi web yang responsif untuk perusahaan penyedia layanan software (SaaS).",
      image: "https://placehold.co/600x400/2F4F4F/FFFFFF?text=Proyek+Dua",
      tags: ["Web App"],
    },
    {
      title: "Aplikasi Kebugaran Mobile",
      description:
        "Aplikasi mobile yang intuitif untuk melacak jadwal olahraga dan nutrisi harian.",
      image: "https://placehold.co/600x400/FF7F50/FFFFFF?text=Proyek+Tiga",
      tags: ["Mobile App"],
    },
    {
      title: "Portal Properti",
      description:
        "Portal web kaya fitur untuk agensi properti, lengkap dengan daftar properti dan pencarian.",
      image: "https://placehold.co/600x400/00C4CC/FFFFFF?text=Proyek+Empat",
      tags: ["Landing Page", "Web App"],
    },
    {
      title: "Website Perusahaan",
      description:
        "Website profesional untuk firma konsultan keuangan ternama.",
      image: "https://placehold.co/600x400/2F4F4F/FFFFFF?text=Proyek+Lima",
      tags: ["Website"],
    },
    {
      title: "Aplikasi Tiket Event",
      description:
        "Pengalaman mobile yang lancar untuk mencari dan membeli tiket acara.",
      image: "https://placehold.co/600x400/FF7F50/FFFFFF?text=Proyek+Enam",
      tags: ["Mobile App"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#2F4F4F]">
                Hasil Kerja Kami
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Beberapa contoh solusi digital yang telah kami bangun untuk
                klien kami.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <PortfolioCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
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

export default PortfolioPage;
