import React from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import Logo from "./Logo";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: FaTwitter,
      href: "#",
      label: "Twitter",
    },
    {
      icon: FaLinkedin,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: FaFacebook,
      href: "#",
      label: "Facebook",
    },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
            <Logo size="sm" />
            <span className="font-montserrat text-xl font-bold text-slate-800">
              Dwan Tech
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            &copy; 2024 Dwan Tech. Solusi Digital untuk Bisnis Anda.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-500 hover:text-[#00C4CC] transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
