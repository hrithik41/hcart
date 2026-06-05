"use client";

import React, { useState } from "react";

type Skill = {
  name: string;
  level: string;
  icon: string;
};

type SkillsMap = {
  [key: string]: Skill[];
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("backend");

  const categories = [
    { id: "backend", label: "Backend Development" },
    { id: "frontend", label: "Frontend Development" },
    { id: "languages", label: "Languages" },
    { id: "cloud", label: "Cloud & Databases" },
  ];

  const skillsData: SkillsMap = {
    backend: [
      { name: "Node.js", level: "Advanced", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express.js", level: "Advanced", icon: "https://cdn.simpleicons.org/express/white" },
      { name: "REST APIs", level: "Expert", icon: "https://cdn.simpleicons.org/postman" },
      { name: "Prisma ORM", level: "Advanced", icon: "https://cdn.simpleicons.org/prisma/white" },
      { name: "Redis / Valkey", level: "Intermediate", icon: "https://cdn.simpleicons.org/redis" },
      { name: "Socket.io", level: "Intermediate", icon: "https://cdn.simpleicons.org/socketdotio/white" },
    ],
    frontend: [
      { name: "React", level: "Advanced", icon: "https://cdn.simpleicons.org/react" },
      { name: "Next.js", level: "Advanced", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "Tailwind CSS", level: "Advanced", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "TypeScript", level: "Advanced", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "HTML5", level: "Advanced", icon: "https://cdn.simpleicons.org/html5" },
      { name: "CSS3", level: "Advanced", icon: "https://cdn.simpleicons.org/css" }, // FIXED
    ],
    languages: [
      { name: "JavaScript", level: "Advanced", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "TypeScript", level: "Advanced", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Python", level: "Intermediate", icon: "https://cdn.simpleicons.org/python" },
      { name: "Java", level: "Intermediate", icon: "https://cdn.simpleicons.org/openjdk" }, // FIXED
      { name: "SQL", level: "Advanced", icon: "https://cdn.simpleicons.org/mysql" },
    ],
    cloud: [
      { name: "MySQL", level: "Advanced", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "PostgreSQL", level: "Intermediate", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "AWS", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},
      { name: "Docker", level: "Intermediate", icon: "https://cdn.simpleicons.org/docker" },
      { name: "CI / CD", level: "Intermediate", icon: "https://cdn.simpleicons.org/githubactions" },
      { name: "Git", level: "Advanced", icon: "https://cdn.simpleicons.org/git" },
    ],
  };

  const auxiliaryTools = [
    "Git",
    "GitHub",
    "Postman",
    "LangChain",
    "CrewAI",
    "FastMCP",
    "Gemini APIs",
    "Ngrok",
    "Nodemailer",
    "Resend API",
    "Linux Commands",
    "Vercel",
    "Render",
  ];

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] border-t border-[#262626] relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest text-[#3b82f6] uppercase">
            // 02. Technologies
          </span>
          <h2 className="text-3xl font-bold text-white mt-1">My Tech Stack</h2>
        </div>

        {/* Tab Buttons */}
        <div className="mb-10 border-b border-[#262626] pb-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 w-max md:w-auto">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-4 py-2 text-xs font-semibold font-mono rounded-md transition-all duration-300 ${activeTab === tab.id
                  ? "bg-[#3b82f6] text-white shadow-lg shadow-blue-500/25"
                  : "border border-[#262626] bg-[#161616]/40 text-[#a3a3a3] hover:text-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {skillsData[activeTab].map((skill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-[#262626] bg-[#161616]/40 flex flex-col items-center text-center group hover:border-[#3b82f6]/40 hover:bg-[#161616]/80 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Official Brand Logo SVG */}
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="w-8 h-8 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
              />

              <h4 className="font-bold text-sm text-white group-hover:text-[#3b82f6] transition-colors">
                {skill.name}
              </h4>
              <p className="text-[10px] text-[#a3a3a3] font-mono mt-1">{skill.level}</p>
            </div>
          ))}
        </div>

        {/* Auxiliary Tools Section */}
        <div className="p-6 rounded-xl border border-[#262626] bg-[#161616]/20">
          <h3 className="text-xs font-semibold text-white font-mono uppercase tracking-wider mb-4">
            Other Tools & Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {auxiliaryTools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-full text-xs font-mono border border-[#262626] bg-[#161616]/40 text-[#a3a3a3] hover:border-[#262626]/80 hover:text-white transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
