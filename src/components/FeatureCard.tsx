import React from "react";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <div className="feature-card bg-gray-50 p-8 rounded-xl border border-gray-200/80">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#00C4CC]/20 mb-4">
        <Icon className="w-6 h-6 text-[#00C4CC]" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
