"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Layanan" },
    { href: "/portfolio", label: "Portofolio" },
    { href: "/process", label: "Proses Kerja" },
    { href: "/apps", label: "Aplikasi" },
    { href: "/contact", label: "Kontak" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo size="md" />
            <span className="font-montserrat text-2xl font-bold text-slate-800">
              Dwan Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-[#00C4CC] font-semibold border-b-2 border-[#00C4CC] pb-1"
                      : "text-gray-600 hover:text-[#00C4CC]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:inline-block btn-primary font-semibold py-2 px-5 rounded-lg shadow-md"
          >
            Minta Penawaran
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden overflow-hidden">
          <div className="mt-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 px-4 text-sm rounded transition-colors ${
                    isActive
                      ? "bg-[#00C4CC] text-white font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="block mt-2 text-center w-full btn-primary font-semibold py-2 px-5 rounded-lg shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Minta Penawaran
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
