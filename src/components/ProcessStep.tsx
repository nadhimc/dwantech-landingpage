import * as React from "react";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
}) => {
  return (
    <div className="text-center">
      <div className="relative mb-4 inline-block">
        <div className="w-16 h-16 bg-[#00C4CC] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProcessStep;
