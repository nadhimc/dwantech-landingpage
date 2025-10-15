import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  delay?: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
  tags,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="portfolio-card bg-white rounded-lg shadow-md overflow-hidden group"
    >
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                tag === "Landing Page"
                  ? "bg-teal-100 text-teal-800"
                  : tag === "Web App"
                  ? "bg-gray-200 text-gray-800"
                  : tag === "Mobile App"
                  ? "bg-orange-100 text-orange-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
