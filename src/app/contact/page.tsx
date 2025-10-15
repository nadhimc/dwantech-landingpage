"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: "Telepon",
      content: "+62 812-3456-7890",
      link: "tel:+6281234567890",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "hello@dwantech.com",
      link: "mailto:hello@dwantech.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Alamat",
      content: "Jakarta, Indonesia",
      link: "#",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      content: "+62 812-3456-7890",
      link: "https://wa.me/6281234567890",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-bg pt-32 pb-20 lg:pt-48 lg:pb-32">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold text-[#2F4F4F] leading-tight"
            >
              Mari Diskusikan <span className="gradient-text">Proyek Anda</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600"
            >
              Siap untuk memulai perjalanan digital Anda? Hubungi kami sekarang
              dan mari kita wujudkan visi Anda bersama.
            </motion.p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">
                Hubungi Kami
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Pilih cara yang paling nyaman untuk menghubungi kami.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="feature-card bg-gray-50 p-8 rounded-xl border border-gray-200/80 text-center group"
                  >
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#00C4CC]/20 mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-[#00C4CC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    <p className="text-gray-600 group-hover:text-[#00C4CC] transition-colors">
                      {info.content}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#2F4F4F]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami. Kami siap membantu mewujudkan
              visi digital Anda dengan solusi yang tepat dan profesional.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Dwan%20Tech."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg font-semibold py-3 px-8 rounded-lg shadow-xl"
              >
                Chat via WhatsApp
              </a>
              <a
                href="mailto:hello@dwantech.com"
                className="btn-secondary text-lg font-semibold py-3 px-8 rounded-lg shadow-xl"
              >
                Kirim Email
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default ContactPage;
