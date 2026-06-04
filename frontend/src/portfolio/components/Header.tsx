"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll height to add subtle shadow/border effects when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#262626]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo / Name */}
        <a
          href="#home"
          className="text-lg font-mono font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          ~/<span className="text-[#3b82f6]">hrithik</span>
        </a>

        {/* Desktop Floating Glass Capsule Menu */}
        <nav className="hidden md:flex items-center gap-1 rounded-full p-1 border border-[#262626] bg-[#161616]/40 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 text-xs font-medium text-[#a3a3a3] hover:text-white rounded-full transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action button (Contact) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-1.5 text-xs font-semibold rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md border border-[#262626] bg-[#161616] text-[#a3a3a3] hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-[#262626] px-6 py-4 flex flex-col gap-3 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-sm font-medium text-[#a3a3a3] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full text-center py-2 text-xs font-semibold rounded-md text-white bg-gradient-to-r from-pink-500 to-purple-600"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}
