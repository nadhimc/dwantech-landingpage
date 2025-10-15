"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="hero-bg pt-32 pb-20 lg:pt-48 lg:pb-32">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <h1 className="text-6xl md:text-8xl font-extrabold text-[#2F4F4F] mb-4">
                404
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2F4F4F] mb-6">
                Halaman Tidak Ditemukan
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Maaf, halaman yang Anda cari tidak ditemukan. Mungkin halaman
                tersebut telah dipindahkan atau dihapus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="btn-primary text-lg font-semibold py-3 px-8 rounded-lg shadow-xl"
                >
                  Kembali ke Beranda
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary text-lg font-semibold py-3 px-8 rounded-lg shadow-xl"
                >
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default NotFound;
