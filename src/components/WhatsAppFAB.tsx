import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFAB: React.FC = () => {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Dwan%20Tech."
      className="wa-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppFAB;
