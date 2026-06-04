"use client";

import React, { useState } from "react";

type WorkExperience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
};

type Achievement = {
  title: string;
  event: string;
  organizer: string;
  year: string;
  details: string;
};

export default function Experience() {
  const [activeAchievement, setActiveAchievement] = useState<number | null>(null);

  const workData: WorkExperience[] = [
    {
      role: "Software Engineering Contributor",
      company: "Scorely",
      period: "2025 - Present",
      description:
        "Developing robust APIs and frontend features using React, Next.js, and TypeScript. Participating in agile development environments, reviewing pull requests, and optimizing codebases for speed and security.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "Git"],
    },
    {
      role: "Full-Stack Project Developer",
      company: "Varun Reddy Sweet Foods Shop",
      period: "2024",
      description:
        "Designed, built, and launched a sweet shop ordering website with automated shopping cart checkout and order verification mechanisms to streamline sweets sales online.",
      tech: ["HTML5", "CSS3", "JavaScript", "Express.js", "MySQL"],
    },
    {
      role: "Frontend Developer Intern",
      company: "Blue Digital Media Pvt. Ltd.",
      period: "2024 (Remote)",
      description:
        "Contributed to building frontend user interfaces using React.js. Worked in collaborative environments with designers and developers to deploy clean and responsive layouts.",
      tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Git"],
    },
  ];

  const achievementsData: Achievement[] = [
    {
      title: "Winner (AI Domain)",
      event: "Techolution Hackathon 2025.V1",
      organizer: "Techolution",
      year: "2025",
      details: "Awarded first place for designing a multi-agent system solving industrial data lookup problems.",
    },
    {
      title: "Runner-up (Fintech Domain)",
      event: "EPITOME25",
      organizer: "Gokaraju Rangaraju Institute of Engineering",
      year: "2025",
      details: "Secured second place for building an automated transaction verification prototype for sweet vendors.",
    },
    {
      title: "Runner-up (AI Domain)",
      event: "Code4AI Hackathon",
      organizer: "Rajiv Gandhi Institute of Technology",
      year: "2024",
      details: "Awarded second place for building an automated smart education grader using local AI models.",
    },
    {
      title: "2nd Place (Smart Education)",
      event: "Zignasa2k23 Hackathon",
      organizer: "Brain O Vision",
      year: "2023",
      details: "Awarded second place for designing an inclusive learning platform with dyslexia-friendly features.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0a0a0a] border-t border-[#262626] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Work Experience Timeline */}
          <div>
            <div className="mb-12">
              <span className="text-xs font-mono tracking-widest text-[#3b82f6] uppercase">
                // 04. History
              </span>
              <h2 className="text-3xl font-bold text-white mt-1">Experience</h2>
            </div>

            <div className="relative pl-6 border-l border-[#262626] space-y-10">
              {workData.map((work, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#0a0a0a] bg-[#262626] group-hover:bg-[#3b82f6] group-hover:scale-125 transition-all duration-300" />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                      <div>
                        <h4 className="font-bold text-white text-base group-hover:text-[#3b82f6] transition-colors">
                          {work.role}
                        </h4>
                        <p className="text-xs text-[#a3a3a3] font-mono">{work.company}</p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#262626] bg-[#161616] text-[#a3a3a3]">
                        {work.period}
                      </span>
                    </div>
                    
                    <p className="text-xs text-[#a3a3a3] leading-relaxed">
                      {work.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {work.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[9px] font-mono border border-[#262626]/60 bg-[#161616]/30 text-[#a3a3a3]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Awards */}
          <div>
            <div className="mb-12">
              <span className="text-xs font-mono tracking-widest text-pink-500 uppercase">
                // 05. Milestones
              </span>
              <h2 className="text-3xl font-bold text-white mt-1">Hackathons & Awards</h2>
            </div>

            <div className="space-y-4">
              {achievementsData.map((award, idx) => {
                const isHovered = activeAchievement === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveAchievement(idx)}
                    onMouseLeave={() => setActiveAchievement(null)}
                    className={`p-5 rounded-xl border transition-all duration-300 cursor-default ${
                      isHovered
                        ? "border-pink-500/40 bg-[#161616]/80 shadow-lg shadow-pink-500/5 translate-x-1"
                        : "border-[#262626] bg-[#161616]/40"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4 flex-wrap mb-1">
                      <h4 className="font-bold text-white text-sm group-hover:text-pink-500">
                        {award.title}
                      </h4>
                      <span className="text-[10px] font-mono text-pink-500 font-semibold">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-xs text-[#a3a3a3] font-semibold">{award.event}</p>
                    <p className="text-[10px] text-[#a3a3a3]/60 font-mono mb-2">{award.organizer}</p>
                    
                    {/* Collapsible detail text showing on hover */}
                    <div
                      className={`text-xs text-[#a3a3a3] leading-relaxed transition-all duration-300 overflow-hidden ${
                        isHovered ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      {award.details}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
