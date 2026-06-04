"use client";

import React from "react";
import { Wallet, Terminal, Eye, Sparkles, ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tech: string[];
  color: string; // Used for aesthetic color accents/background gradients
  link: string;
};

export default function Projects() {
  const projectsData: Project[] = [
    {
      title: "WealthWise",
      subtitle: "AI-Powered Financial Planning & Investment Guide",
      description:
        "An AI-driven personal finance application that automates investment advice and assists users in mastering financial literacy.",
      bullets: [
        "Developed custom algorithms and AI Agents to provide personalized stock, mutual fund, and fixed deposit recommendation portfolios.",
        "Built a Retrieval-Augmented Generation (RAG) chatbot supplying real-time financial insights and customized educational lessons.",
        "Created a savings optimizer and expense tracker helping users reduce unnecessary costs by up to 20%.",
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "CrewAI"],
      color: "from-blue-600/30 via-indigo-600/20 to-transparent",
      link: "https://github.com",
    },
    {
      title: "Vercel Clone",
      subtitle: "Cloud Deployment Platform with CI/CD Pipelines",
      description:
        "A simplified developer platform designed to clone Vercel's automated repository deployment and static site hosting pipelines.",
      bullets: [
        "Built a pipeline allowing direct project upload from Git repositories, building dynamic builds, and hosting them on AWS S3.",
        "Implemented real-time build logging and event states backed by Redis message queues and WebSockets.",
        "Optimized asset delivery times globally by routing built project builds through cloud storage containers.",
      ],
      tech: ["TypeScript", "Node.js", "Redis", "AWS S3", "Docker", "Vite"],
      color: "from-red-600/30 via-rose-600/20 to-transparent",
      link: "https://github.com",
    },
    {
      title: "SiteEase",
      subtitle: "Accessibility-First Browser Extension for Inclusive Web",
      description:
        "A Chrome browser extension designed to optimize website layouts dynamically for users with visual, motor, or cognitive impairments.",
      bullets: [
        "Built accessibility toggles for colorblind-friendly color filters (Protanopia, Deuteranopia, Tritanopia).",
        "Integrated dynamic DOM parsing to convert custom web pages into dyslexia-friendly formats (spacing, special fonts).",
        "Utilized Chrome Extension Storage APIs to preserve accessibility settings state persistently across browser tabs.",
      ],
      tech: ["JavaScript", "HTML5", "CSS3", "Chrome APIs", "Tailwind CSS"],
      color: "from-emerald-600/30 via-teal-600/20 to-transparent",
      link: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] border-t border-[#262626] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-[#3b82f6] uppercase">
            // 03. Selected Work
          </span>
          <h2 className="text-3xl font-bold text-white mt-1">Stuff I Built</h2>
        </div>

        {/* Projects Grid List */}
        <div className="space-y-24">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                
                {/* Visual Preview Block (Alternating Column Order) */}
                <div
                  className={`lg:col-span-6 flex justify-center ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative w-full aspect-video rounded-xl border border-[#262626] bg-[#161616] p-1 overflow-hidden group">
                    {/* Color accents gradient backdrop */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                    />
                    
                    {/* Outer frame styling */}
                    <div className="w-full h-full rounded-lg bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#262626] p-6 flex flex-col justify-between overflow-hidden relative">
                      <div className="absolute inset-0 bg-dot-grid opacity-20" />
                      
                      {/* Fake browser bar */}
                      <div className="flex justify-between items-center pb-4 border-b border-[#262626]/60 relative z-10">
                        <div className="flex gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#ef4444]/60" />
                          <span className="w-2 h-2 rounded-full bg-[#eab308]/60" />
                          <span className="w-2 h-2 rounded-full bg-[#22c55e]/60" />
                        </div>
                        <div className="px-3 py-0.5 rounded text-[8px] font-mono text-[#a3a3a3] border border-[#262626] bg-[#161616]/80">
                          {project.title.toLowerCase()}.dev
                        </div>
                      </div>

                      {/* Mock Graphic Visual */}
                      <div className="flex-1 flex flex-col items-center justify-center py-6 relative z-10">
                        {idx === 0 ? (
                          <Wallet className="w-12 h-12 text-[#3b82f6] filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
                        ) : idx === 1 ? (
                          <Terminal className="w-12 h-12 text-rose-500 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.3)]" />
                        ) : (
                          <Eye className="w-12 h-12 text-emerald-500 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                        )}
                        <span className="text-[10px] font-mono text-[#a3a3a3] mt-2 select-none">
                          [ preview_placeholder.png ]
                        </span>
                      </div>

                      {/* Technical specifications in footer */}
                      <div className="flex justify-between items-center text-[9px] font-mono text-[#a3a3a3]/50 relative z-10 pt-2 border-t border-[#262626]/40">
                        <span>SIZE: 1,412 KB</span>
                        <span>STATUS: PRODUCTION_READY</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content Block */}
                <div
                  className={`lg:col-span-6 flex flex-col space-y-4 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-white font-mono">{project.title}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-md border border-[#262626] bg-[#161616] text-[#a3a3a3] hover:text-white hover:border-[#3b82f6]/40 transition-colors"
                    >
                      Check out
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                  
                  <h3 className="text-sm font-semibold text-[#3b82f6] font-mono">
                    {project.subtitle}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2">
                    {project.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2 text-xs text-[#a3a3a3]">
                        {/* Sparkle list bullet icon */}
                        <Sparkles className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border border-[#262626]/80 bg-[#161616]/20 text-[#a3a3a3]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
