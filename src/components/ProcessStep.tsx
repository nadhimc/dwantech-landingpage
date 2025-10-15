import * as React from "react";
import { motion } from "framer-motion";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="relative mb-4 inline-block">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-[#00C4CC] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg"
        >
          {step}
        </motion.div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ProcessStep;
