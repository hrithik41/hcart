"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [visitorCount, setVisitorCount] = useState(1387);

  // Simulate a live visitor count increment when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisitorCount((prev) => prev + 1);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Profile Image - Desktop Only (Hidden on Mobile to prevent text overlap) */}
      <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/profile.png"
            alt="Developer Profile Background"
            fill
            priority
            className="object-contain object-right opacity-90 lg:opacity-100 select-none pointer-events-none"
            sizes="(max-width: 1024px) 1px, 50vw"
            style={{
              // Ellipse radial mask to blur/fade all four borders of the image into the background
              maskImage: "radial-gradient(45% 35% at 65% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "radial-gradient(45% 35% at 65% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Smooth left gradient overlay to guarantee text readability */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Global Dot Grid Overlay - covers the entire section */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 z-1 pointer-events-none" />

      {/* Hero content container */}
      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Hero Content Text (7 columns on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Visitor Count Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#262626] bg-[#161616]/80 backdrop-blur-md text-[11px] font-mono text-[#a3a3a3]">
            <svg
              className="w-3.5 h-3.5 text-[#3b82f6] animate-pulse"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0 1 10.089 18a11.374 11.374 0 0 1-5.089-1.242v-.109m15.089.109a11.3 11.3 0 0 1-5.089 1.242 11.3 11.3 0 0 1-5.089-1.242m0 0V19.13M4.089 18v-.003c0-1.113.285-2.16.786-3.07M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4.089 18a4.125 4.125 0 0 1 3.525-4.113l.006-.002" />
            </svg>
            <span>
              {visitorCount.toLocaleString()} visitors since Jun 5, 2026
            </span>
          </div>

          {/* Title Headers */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent hover:brightness-110 transition-all duration-300">
                Hrithik
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#a3a3a3] font-mono">
              Software Developer · Backend & Fintech
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-xl text-sm sm:text-base text-[#a3a3a3] leading-relaxed">
            I specialize in designing secure, scalable backend architectures, payment system integrations, and high-performance server logic. Focused on creating modern digital products that balance clean code with seamless user experiences.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
            >
              Let's Connect ✉
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#0072b1] hover:bg-[#0072b1]/90 transition-colors shadow-lg shadow-blue-500/10"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column: Holds the profile image on Mobile (below text) and acts as a spacer on Desktop */}
        <div className="lg:col-span-5 w-full flex justify-center mt-8 lg:mt-0 z-10">
          {/* Mobile Image - only visible on mobile/tablet (below text block), cropped & blended */}
          <div className="block lg:hidden relative w-64 h-64 mx-auto overflow-hidden bg-transparent">
            <Image
              src="/profile.png"
              alt="Developer Profile"
              fill
              priority
              className="object-cover object-[72%_center]"
              sizes="256px"
              style={{
                // Circular mask to fade out the borders completely and mix with background
                maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 85%)",
                WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 85%)"
              }}
            />
          </div>

          {/* Desktop spacer */}
          <div className="hidden lg:block h-20" />
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer relative z-10" onClick={handleScrollDown}>
        <span className="text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase opacity-60 hover:opacity-100 transition-opacity">
          Explore my work
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-[#262626] flex justify-center p-1">
          {/* Bouncing scroll wheel */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
