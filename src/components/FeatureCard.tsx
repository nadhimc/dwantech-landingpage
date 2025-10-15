import React from "react";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Simple icon design */}
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#00C4CC]/10 mb-4">
        <Icon className="w-6 h-6 text-[#00C4CC]" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-medium mb-3 text-[#2F4F4F]">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
