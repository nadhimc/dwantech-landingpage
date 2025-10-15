"use client";

import React from "react";
import { motion } from "framer-motion";
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
      title: "Custom Design",
      description:
        "Tailored to your brand&apos;s unique identity, our designs are crafted to engage your audience and drive conversions.",
    },
    {
      icon: HiDeviceMobile,
      title: "Fully Responsive",
      description:
        "Your landing page will look and function flawlessly on all devices, from desktops to smartphones.",
    },
    {
      icon: HiLightningBolt,
      title: "Optimized for Speed",
      description:
        "We build fast-loading pages that reduce bounce rates and keep your visitors engaged from the first second.",
    },
    {
      icon: HiSearch,
      title: "SEO-Ready",
      description:
        "Built with SEO best practices to help you rank higher in search results and attract more organic traffic.",
    },
    {
      icon: HiChartBar,
      title: "Analytics Integration",
      description:
        "Track your success with integrated analytics. Understand your visitors and optimize for better performance.",
    },
    {
      icon: HiSupport,
      title: "Ongoing Support",
      description:
        "Our partnership doesn&apos;t end at launch. We offer ongoing support to ensure your page remains optimized and effective.",
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
              Crafting Digital Experiences that{" "}
              <span className="gradient-text">Connect & Convert</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600"
            >
              We specialize in building high-performance landing pages that
              captivate your audience and drive results. Establish a powerful
              online presence with a design that&apos;s tailored to your vision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex justify-center space-x-4"
            >
              <Link
                href="/contact"
                className="btn-primary text-lg font-semibold py-3 px-8 rounded-lg shadow-xl"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="btn-secondary text-lg font-semibold py-3 px-8 rounded-lg shadow-xl"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">
                Your Vision, Our Expertise: The Perfect Landing Page
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We provide everything you need to launch a successful landing
                page.
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

        {/* Process Section */}
        <section id="process" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">
                Simple Steps to Digital Success
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our streamlined process makes it easy to bring your vision to
                life.
              </p>
            </motion.div>
            <div className="relative">
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                <ProcessStep
                  step={1}
                  title="Discover & Strategize"
                  description="We start by understanding your business, audience, and goals to create a winning strategy."
                  delay={0}
                />
                <ProcessStep
                  step={2}
                  title="Design & Develop"
                  description="Our team designs and develops a beautiful, functional, and high-performing page just for you."
                  delay={0.2}
                />
                <ProcessStep
                  step={3}
                  title="Launch & Optimize"
                  description="We deploy your page and monitor its performance, making data-driven optimizations for success."
                  delay={0.4}
                />
              </div>
            </div>
          </div>
        </section>

        {/* App Development Section */}
        <section id="apps" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 text-center lg:text-left"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">
                  Ready to Go Beyond a Landing Page?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  A landing page is just the beginning. Expand your digital
                  footprint with a custom web or mobile application. We build
                  intuitive, scalable, and powerful apps that engage your users
                  and grow your business.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="btn-secondary text-lg font-semibold py-3 px-8 rounded-lg shadow-xl"
                  >
                    Explore App Services
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
                      <div className="text-sm text-gray-500">Your App</div>
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
                        Intuitive App Solutions
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

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-[#2F4F4F]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let&apos;s Build Your Digital Success Story
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to elevate your online presence? Contact us today for a
              free, no-obligation quote and let&apos;s discuss how we can help
              you achieve your goals.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-primary text-lg font-semibold py-3 px-8 rounded-lg shadow-xl"
              >
                Get Your Free Quote
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default HomePage;
