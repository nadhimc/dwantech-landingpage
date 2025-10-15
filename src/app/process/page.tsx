"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import ProcessStep from "@/components/ProcessStep";

const ProcessPage: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: "Diskusi & Perencanaan",
      description:
        "Kami mulai dengan memahami tujuan dan tantangan bisnis Anda untuk menyusun strategi yang paling efektif.",
    },
    {
      step: 2,
      title: "Desain & Pengembangan",
      description:
        "Tim kami akan merancang dan membangun solusi digital sesuai dengan rencana yang telah kita sepakati bersama.",
    },
    {
      step: 3,
      title: "Peluncuran & Evaluasi",
      description:
        "Setelah peluncuran, kami memantau performa untuk memastikan semuanya berjalan sesuai harapan dan tujuan tercapai.",
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
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">
                Alur Kerja Jelas & Transparan
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Kami percaya komunikasi adalah kunci. Anda akan selalu tahu
                setiap tahapan dalam proyek Anda.
              </p>
            </motion.div>
            <div className="relative">
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                {steps.map((step, index) => (
                  <ProcessStep
                    key={index}
                    step={step.step}
                    title={step.title}
                    description={step.description}
                    delay={index * 0.2}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default ProcessPage;
