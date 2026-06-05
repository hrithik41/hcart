"use client";

import React from "react";

export default function About() {
  const coreAreas = [
    "System Architecture",
    "Full-Stack Development",
    "Next.js & React",
    "Node.js & Express",
    "TypeScript",
    "REST APIs",
    "Prisma ORM",
    "MySQL & PostgreSQL",
    "Redis Caching",
    "Authentication & Security",
    "Payment Integration",
    "Performance Optimization",
  ];

  const journeyTimeline = [
    {
      degree: "Software Development Intern",
      institution: "Enpointe Technologies",
      period: "2025 - Present",
      details:
        "Contributing to modern web applications, backend services, API integrations, database-driven solutions, and scalable software systems. Working with production-ready development practices and secure application architectures.",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Niranjana's Majethia College of Commerce and Science",
      period: "2020 - 2023",
      details:
        "Graduated with a CGPA of 7.80. Built strong foundations in software engineering, database systems, networking, object-oriented programming, and modern web technologies.",
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Durgadevi Saraf College of Commerce and Science",
      period: "2020",
      details:
        "Completed Science stream with 79%, developing strong analytical and problem-solving skills through Mathematics, Physics, and Chemistry.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-[#0a0a0a] border-t border-[#262626] relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-[#3b82f6] uppercase">
            // 01. About
          </span>

          <h2 className="text-3xl font-bold text-white mt-1">
            Building Technology That Creates Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm sm:text-base text-[#a3a3a3] leading-relaxed">
              A Software Developer passionate
              about building scalable web applications, secure backend systems,
              and modern digital products. I enjoy transforming complex ideas
              into reliable, high-performance software solutions through clean
              architecture and intuitive user experiences.
            </p>

            <p className="text-sm sm:text-base text-[#a3a3a3] leading-relaxed">
              My expertise spans React, Next.js, Node.js, TypeScript, Prisma,
              relational databases, authentication systems, payment
              integrations, and performance optimization. I focus on creating
              maintainable software that balances technical excellence with real
              business value.
            </p>

            <p className="text-sm sm:text-base text-[#a3a3a3] leading-relaxed">
              Beyond development, I'm passionate about entrepreneurship,
              product innovation, and building technology-driven ventures. My
              goal is to create impactful digital products that solve
              real-world problems while delivering exceptional user
              experiences.
            </p>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white uppercase font-mono tracking-wider">
                Core Expertise
              </h3>

              <div className="flex flex-wrap gap-2">
                {coreAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-[#262626] bg-[#161616] text-[#a3a3a3] hover:border-[#3b82f6]/40 hover:text-white transition-all cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-6 relative pl-6 border-l border-[#262626]">
            <h3 className="text-sm font-semibold text-white uppercase font-mono tracking-wider mb-8">
              Professional Journey
            </h3>

            {journeyTimeline.map((item, idx) => (
              <div key={idx} className="relative group mb-8 last:mb-0">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#0a0a0a] bg-[#262626] group-hover:bg-[#3b82f6] group-hover:scale-125 transition-all duration-300" />

                {/* Timeline Card */}
                <div className="p-5 rounded-xl border border-[#262626] bg-[#161616]/40 hover:border-[#262626]/80 hover:bg-[#161616]/70 transition-all duration-300">
                  <div className="flex justify-between items-start gap-4 flex-wrap mb-2">
                    <h4 className="font-bold text-white text-base group-hover:text-[#3b82f6] transition-colors">
                      {item.degree}
                    </h4>

                    <span className="text-[10px] font-mono text-[#a3a3a3]">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs text-[#3b82f6] font-medium mb-2">
                    {item.institution}
                  </p>

                  <p className="text-xs text-[#a3a3a3] leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}