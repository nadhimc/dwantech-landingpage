"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioData } from "@/data/portfolio";

const PortfolioPage: React.FC = () => {
  const realProjects = portfolioData.filter((item) => item.isRealProject);
  const conceptProjects = portfolioData.filter((item) => !item.isRealProject);

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#2F4F4F]">
                Portfolio & Case Studies
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Hasil nyata dari proyek real dan konsep inovasi yang telah kami
                kembangkan.
              </p>
            </div>

            {/* Real Projects Section */}
            {realProjects.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-[#2F4F4F] mb-8 text-center">
                  Proyek Real & Case Studies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {realProjects.map((project, index) => (
                    <PortfolioCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tags={project.tags}
                      isRealProject={project.isRealProject}
                      metrics={project.metrics}
                      challenges={project.challenges}
                      solutions={project.solutions}
                      techStack={project.techStack}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Concept Projects Section */}
            {conceptProjects.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-[#2F4F4F] mb-8 text-center">
                  Concept Work & Mock Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {conceptProjects.map((project, index) => (
                    <PortfolioCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tags={project.tags}
                      isRealProject={project.isRealProject}
                      techStack={project.techStack}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default PortfolioPage;
