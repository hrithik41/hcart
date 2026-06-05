"use client";

import { useState, useEffect } from "react";
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
      className="relative min-h-screen lg:flex lg:items-center lg:justify-center pt-28 pb-20 bg-[#0a0a0a] overflow-hidden"
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
              className="w-4 h-4 text-[#3b82f6] animate-pulse"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3v2.25M14.25 3v2.25M3 9.75h2.25M18.75 9.75H21M3 14.25h2.25M18.75 14.25H21M9.75 18.75V21M14.25 18.75V21"
              />
              <rect
                x="7"
                y="7"
                width="10"
                height="10"
                rx="2"
                ry="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
              Software Developer
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-xl text-sm sm:text-base text-[#a3a3a3] leading-relaxed">
            Software Developer, Product Builder, and Technology Innovator focused on developing scalable platforms, intelligent systems, and next-generation digital experiences. From cloud infrastructure and secure payment solutions to AI-powered applications, I transform ambitious ideas into production-ready products engineered for growth, performance, and long-term success.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Build Something Together
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
            >
              Connect on LinkedIn
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Holds the profile image on Mobile (below text) and acts as a spacer on Desktop */}
        <div className="lg:col-span-5 w-full flex justify-center mt-8 lg:mt-0 z-10">
          {/* Mobile Image - only visible on mobile/tablet (below text block), cropped & blended */}
          <div className="block lg:hidden relative w-84 h-64 mx-auto overflow-hidden bg-transparent">
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
      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer relative z-10" onClick={handleScrollDown}>
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
