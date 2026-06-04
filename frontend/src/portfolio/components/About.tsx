"use client";

import React from "react";

export default function About() {
  const coreAreas = [
    "Backend Architecture",
    "API Development (REST / RPC)",
    "Payment Integration (Razorpay)",
    "Database Management (MySQL / Prisma)",
    "Security & Authentication",
    "Next.js & React Frontend",
    "TypeScript & Express",
    "Redis Caching Systems",
  ];

  const educationTimeline = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Keshav Memorial Institute Of Technology",
      period: "Nov 2022 - Feb 2026",
      details: "Focused on Software Engineering, Database Management Systems, and Web Application Security. CGPA: 8.5/10.0",
    },
    {
      degree: "Intermediate Education (MPC)",
      institution: "Keshav Smarak Junior College",
      period: "2020 - 2022",
      details: "Specialized in Mathematics, Physics, and Chemistry. Score: 977/1000",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Gowtham Model School",
      period: "2020",
      details: "General high school curriculum. CGPA: 10.0/10.0",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0a] border-t border-[#262626] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-[#3b82f6] uppercase">
            // 01. About Me
          </span>
          <h2 className="text-3xl font-bold text-white mt-1">Who I Am & Education</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Intro & Badges */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm sm:text-base text-[#a3a3a3] leading-relaxed">
              I am a software engineer focused on building secure, robust, and highly performant web applications. With strong foundations in backend systems and transaction logic, I enjoy solving complex scalability problems, configuring secure payment workflows, and bringing interfaces to life with premium UI styling.
            </p>
            <p className="text-sm sm:text-base text-[#a3a3a3] leading-relaxed">
              I love engineering workflows that connect robust APIs, relational database queries, and caching layers to create lightning-fast response times. My goals are always aligned with building clean, maintainable code architectures.
            </p>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white uppercase font-mono tracking-wider">
                Core Competencies:
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

          {/* Right Column: Academic Timeline */}
          <div className="lg:col-span-6 space-y-6 relative pl-6 border-l border-[#262626]">
            <h3 className="text-sm font-semibold text-white uppercase font-mono tracking-wider mb-8">
              Education Timeline
            </h3>

            {educationTimeline.map((item, idx) => (
              <div key={idx} className="relative group mb-8 last:mb-0">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#0a0a0a] bg-[#262626] group-hover:bg-[#3b82f6] group-hover:scale-125 transition-all duration-300" />
                
                {/* Education card */}
                <div className="p-5 rounded-xl border border-[#262626] bg-[#161616]/40 hover:border-[#262626]/80 hover:bg-[#161616]/70 transition-all duration-300">
                  <div className="flex justify-between items-start gap-4 flex-wrap mb-2">
                    <h4 className="font-bold text-white text-base group-hover:text-[#3b82f6] transition-colors">
                      {item.degree}
                    </h4>
                    <span className="text-[10px] font-mono text-[#a3a3a3]">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-[#3b82f6] font-medium mb-2">{item.institution}</p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.details}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
