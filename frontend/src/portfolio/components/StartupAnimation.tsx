"use client";

import React, { useState, useEffect } from "react";

interface StartupAnimationProps {
  onComplete: () => void;
}

export default function StartupAnimation({ onComplete }: StartupAnimationProps) {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const fullText = "ERROR 404: Conventional developer not found.";

  // Typewriter effect logic
  useEffect(() => {
    let currentIdx = 0;
    const typingInterval = setInterval(() => {
      if (currentIdx < fullText.length) {
        setTypedText(fullText.substring(0, currentIdx + 1));
        currentIdx++;
      } else {
        clearInterval(typingInterval);

        // Text is fully typed. Wait 1 second, then trigger the glitch effect.
        setTimeout(() => {
          setIsGlitching(true);

          // Glitch runs for 600ms, then trigger the fade out.
          setTimeout(() => {
            setIsFadingOut(true);

            // Fade-out transition takes 700ms, then signal completion.
            setTimeout(() => {
              onComplete();
            }, 700);
          }, 600);
        }, 1000);
      }
    }, 50); // Speed of typing (50ms per character)

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  // Blink cursor logic
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 450);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50 select-none transition-all duration-700 ${isFadingOut ? "opacity-0 pointer-events-none scale-98" : "opacity-100"
        }`}
    >
      <div className="absolute inset-0 bg-dot-grid opacity-25" />

      {/* Glitch-slicing text container */}
      <div
        className={`relative max-w-lg w-[90%] text-center px-4 font-mono ${isGlitching ? "animate-glitch" : ""
          }`}
      >
        {/* Color duplication layers for horizontal chromatic aberration glitch */}
        {isGlitching && (
          <>
            <div className="absolute inset-0 text-red-500/80 animate-glitch-layer-1 clip-glitch opacity-80">
              <span className="text-pink-500 font-semibold">➜</span>{" "}
              <span className="text-white">~</span> {typedText}
              <span className={showCursor ? "opacity-100" : "opacity-0"}>_</span>
            </div>
            <div className="absolute inset-0 text-blue-500/80 animate-glitch-layer-2 clip-glitch opacity-80">
              <span className="text-[#3b82f6] font-semibold">➜</span>{" "}
              <span className="text-white">~</span> {typedText}
              <span className={showCursor ? "opacity-100" : "opacity-0"}>_</span>
            </div>
          </>
        )}

        {/* Primary boot/terminal output text */}
        <div className="text-sm sm:text-base md:text-lg text-white font-semibold">
          <span className="text-[#22c55e]">➜</span>{" "}
          <span className="text-[#a3a3a3]">~</span> {typedText}
          <span
            className={`inline-block w-2.5 h-4 ml-1 bg-[#3b82f6] align-middle ${showCursor ? "opacity-100" : "opacity-0"
              }`}
          />
        </div>
      </div>

      {/* Injecting CSS animations for glitching inside the component */}
      <style jsx global>{`
        @keyframes glitch {
          0% { transform: skew(0deg); }
          10% { transform: skew(-1deg); }
          20% { transform: skew(0.5deg); }
          30% { transform: skew(-0.5deg) scaleY(0.98); }
          40% { transform: skew(0deg); }
          50% { transform: skew(1.5deg); }
          60% { transform: skew(-1.5deg) scaleY(1.02); }
          70% { transform: skew(0deg); }
          80% { transform: skew(0.5deg); }
          90% { transform: skew(-0.5deg); }
          100% { transform: skew(0deg); }
        }

        @keyframes glitch-layer-1 {
          0% { clip-path: inset(10% 0 85% 0); transform: translate(-3px, -2px); }
          20% { clip-path: inset(65% 0 10% 0); transform: translate(3px, 2px); }
          40% { clip-path: inset(30% 0 50% 0); transform: translate(-2px, 3px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -3px); }
          80% { clip-path: inset(5% 0 90% 0); transform: translate(-3px, 1px); }
          100% { clip-path: inset(45% 0 45% 0); transform: translate(3px, -1px); }
        }

        @keyframes glitch-layer-2 {
          0% { clip-path: inset(85% 0 10% 0); transform: translate(3px, 2px); }
          20% { clip-path: inset(10% 0 65% 0); transform: translate(-3px, -2px); }
          40% { clip-path: inset(50% 0 30% 0); transform: translate(2px, -3px); }
          60% { clip-path: inset(5% 0 80% 0); transform: translate(-2px, 3px); }
          80% { clip-path: inset(90% 0 5% 0); transform: translate(3px, -1px); }
          100% { clip-path: inset(45% 0 45% 0); transform: translate(-3px, 1px); }
        }

        .animate-glitch {
          animation: glitch 0.3s infinite linear alternate-reverse;
        }

        .animate-glitch-layer-1 {
          animation: glitch-layer-1 0.2s infinite linear alternate-reverse;
        }

        .animate-glitch-layer-2 {
          animation: glitch-layer-2 0.25s infinite linear alternate-reverse;
        }

        .clip-glitch {
          background: #0a0a0a;
        }
      `}</style>
    </div>
  );
}
