"use client";

import React, { useState } from "react";
import { submitContactForm } from "../../lib/api";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setStatusMsg("");
    setIsSuccess(false);

    try {
      const res = await submitContactForm(formData);
      if (res.status === "success") {
        setIsSuccess(true);
        setStatusMsg("Message sent successfully! Hrithik will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMsg(res.message || "Failed to send message.");
      }
    } catch (err: any) {
      console.error("Submit contact form error:", err);
      setStatusMsg(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative pt-20 pb-0 bg-[#0a0a0a] border-t border-[#262626] overflow-hidden">
      
      {/* Top half: Contact Form & Info Cards */}
      <div className="max-w-6xl mx-auto px-6 mb-20 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-[#3b82f6] uppercase">
            // 06. Get In Touch
          </span>
          <h2 className="text-3xl font-bold text-white mt-1">Let's Connect</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white font-mono">Reach out directly</h3>
            <p className="text-sm text-[#a3a3a3] leading-relaxed">
              Whether you want to discuss a new project, query details about my backend database configurations, or just say hello, my inbox is open!
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-xl border border-[#262626] bg-[#161616]/40 flex items-center gap-4 hover:border-[#3b82f6]/40 transition-colors">
                <span className="text-xl">✉️</span>
                <div>
                  <h4 className="text-xs font-mono text-[#a3a3a3] uppercase">Email</h4>
                  <a href="mailto:littlehrithik9594@gmail.com" className="text-sm font-semibold text-white hover:text-[#3b82f6] transition-colors">
                    littlehrithik9594@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl border border-[#262626] bg-[#161616]/40 flex items-center gap-4">
                <span className="text-xl">📍</span>
                <div>
                  <h4 className="text-xs font-mono text-[#a3a3a3] uppercase">Location</h4>
                  <span className="text-sm font-semibold text-white">
                    Hyderabad, Telangana, India
                  </span>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="p-4 rounded-xl border border-[#262626] bg-[#161616]/40 flex flex-col gap-3">
                <h4 className="text-xs font-mono text-[#a3a3a3] uppercase">Find me on</h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-md border border-[#262626] bg-[#0a0a0a] text-xs font-mono text-[#a3a3a3] hover:text-white hover:border-white/20 transition-all"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-md border border-[#262626] bg-[#0a0a0a] text-xs font-mono text-[#a3a3a3] hover:text-white hover:border-blue-500/20 transition-all"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 p-6 rounded-xl border border-[#262626] bg-[#161616]/20">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#a3a3a3] mb-1.5 uppercase">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#262626] bg-[#0a0a0a] text-sm text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a3a3a3] mb-1.5 uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#262626] bg-[#0a0a0a] text-sm text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a3a3a3] mb-1.5 uppercase">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Hrithik, let's collaborate..."
                  className="w-full px-4 py-2.5 rounded-lg border border-[#262626] bg-[#0a0a0a] text-sm text-white focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-lg text-xs font-semibold text-white bg-[#3b82f6] hover:bg-[#3b82f6]/90 disabled:bg-[#3b82f6]/60 disabled:cursor-not-allowed transition-colors shadow-lg shadow-blue-500/20"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>

              {statusMsg && (
                <div
                  className={`text-xs font-mono text-center p-2.5 rounded border ${
                    isSuccess
                      ? "border-green-500/20 bg-green-500/5 text-green-500"
                      : "border-red-500/20 bg-red-500/5 text-red-500"
                  }`}
                >
                  {statusMsg}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>

      {/* Footer Graphic: Anime landscape + git console box (eHarshit Style) */}
      <div className="relative w-full h-80 bg-gradient-to-t from-[#0d162d] to-[#0a0a0a] border-t border-[#262626] flex flex-col justify-end">
        {/* CSS/SVG Landscape background illustration */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          {/* Moon */}
          <div className="absolute top-12 right-24 w-12 h-12 rounded-full bg-white/40 blur-[2px]" />
          
          {/* Mountains/Hills silhouettes */}
          <svg className="absolute bottom-0 w-full h-32 text-[#080d1a]" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="0,100 0,60 25,80 50,55 75,70 100,50 100,100" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-0 w-full h-24 text-[#04060d]" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="0,100 0,75 35,65 70,85 100,70 100,100" fill="currentColor" />
          </svg>

          {/* Railway Tracks (Parallel lines projecting into center) */}
          <svg className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-24 text-white/5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="50" y1="0" x2="10" y2="100" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="0" x2="90" y2="100" stroke="currentColor" strokeWidth="2" />
            {/* Sleepers */}
            <line x1="45" y1="20" x2="55" y2="20" stroke="currentColor" strokeWidth="2" />
            <line x1="40" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="2" />
            <line x1="32" y1="60" x2="68" y2="60" stroke="currentColor" strokeWidth="2" />
            <line x1="22" y1="80" x2="78" y2="80" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Overlay Git Terminal prompt box */}
        <div className="relative z-10 max-w-sm mx-auto mb-16 w-[90%] p-4 rounded-lg border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-sm shadow-2xl font-mono text-[10px] sm:text-xs text-[#a3a3a3]">
          <div className="flex gap-1.5 mb-2.5 pb-2 border-b border-white/5">
            <span className="w-2 h-2 rounded-full bg-[#ef4444]/40" />
            <span className="w-2 h-2 rounded-full bg-[#eab308]/40" />
            <span className="w-2 h-2 rounded-full bg-[#22c55e]/40" />
          </div>
          <div>
            <span className="text-[#22c55e]">➜</span> <span className="text-white">~</span> <span className="text-[#3b82f6]">git commit -m "bye"</span>
            <p className="mt-1 text-white/60">[main 99c694f] bye</p>
            <p className="text-white/60"> 1 file changed, 1 insertion(+)</p>
            <p className="text-[#22c55e]">➜ <span className="text-white">~</span> <span className="animate-pulse">_</span></p>
          </div>
        </div>

        {/* Legal copyright footer */}
        <div className="relative z-10 py-6 border-t border-white/5 bg-[#080d1a]/80 text-center text-[10px] font-mono text-[#a3a3a3]/40">
          © {new Date().getFullYear()} Hrithik. All rights reserved.
        </div>
      </div>
      
    </section>
  );
}
