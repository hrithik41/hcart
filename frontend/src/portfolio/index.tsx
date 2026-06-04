"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import StartupAnimation from "./components/StartupAnimation";

export default function Portfolio() {
  const [hasBooted, setHasBooted] = useState(false);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white flex flex-col font-sans select-none antialiased">
      {/* Startup Typewriter & Glitch Overlay */}
      {!hasBooted && (
        <StartupAnimation onComplete={() => setHasBooted(true)} />
      )}

      {/* Main Portfolio Content - fades in once boot sequence completes */}
      <div
        className={`flex-1 flex flex-col transition-all duration-1000 ${
          hasBooted ? "opacity-100 blur-none" : "opacity-0 blur-sm pointer-events-none"
        }`}
      >
        {/* Navigation Floating Header */}
        <Header />

        <main className="flex-1">
          {/* Hero Banner Section */}
          <HeroSection />

          {/* About & Education Timeline */}
          <About />

          {/* Switched Tech Stack Grid */}
          <Skills />

          {/* Alternating Selected Projects Grid */}
          <Projects />

          {/* Professional & Award timelines */}
          <Experience />

          {/* Contact Form & Footer artwork */}
          <Contact />
        </main>
      </div>
    </div>
  );
}
