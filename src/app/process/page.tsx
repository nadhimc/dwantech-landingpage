"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const ProcessPage: React.FC = () => {
  const steps = [
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
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">
                Alur Kerja Jelas & Transparan
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Kami percaya komunikasi adalah kunci. Anda akan selalu tahu
                setiap tahapan dalam proyek Anda.
              </p>
            </div>
            <div className="relative">
              {/* Desktop: Horizontal flow with connecting arrows */}
              <div className="hidden lg:block">
                <div className="flex items-start justify-between relative">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center relative"
                    >
                      {/* Connecting arrow (except for last step) */}
                      {index < steps.length - 1 && (
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
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      {/* Step number and connecting line */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#2F4F4F] to-[#1a3a3a] rounded-full flex items-center justify-center text-white text-lg font-bold relative">
                          <span className="text-lg">{step.icon}</span>
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#2F4F4F]">
                            {step.step}
                          </div>
                        </div>
                        {index < steps.length - 1 && (
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
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default ProcessPage;
