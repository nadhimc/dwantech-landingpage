"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const AppsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 text-center lg:text-left"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">
                  Siap untuk Solusi yang Lebih Besar?
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Perluas jangkauan digital Anda dengan aplikasi web atau mobile
                  yang dibuat khusus. Kami membangun aplikasi yang intuitif,
                  terukur, dan kuat untuk melibatkan pengguna dan menumbuhkan
                  bisnis Anda.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="btn-secondary text-lg font-semibold py-3 px-8 rounded-lg shadow-xl"
                  >
                    Diskusikan Proyek Aplikasi
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2"
              >
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
                        Solusi Aplikasi Intuitif
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
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default AppsPage;
