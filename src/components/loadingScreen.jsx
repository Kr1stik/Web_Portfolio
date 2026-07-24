import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("INITIALIZING FULL-STACK ENVIRONMENT...");

  const bootLogs = [
    "INITIALIZING FULL-STACK ENVIRONMENT...",
    "MOUNTING REACT, TAILWIND & DJANGO KERNEL...",
    "CONNECTING POSTGRE & FIREBASE SCHEMAS...",
    "OPTIMIZING SINGLE-SCREEN SPA RENDERER...",
    "SYSTEM READY // ACCESS GRANTED"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400); // Quick instant cross-fade
          return 100;
        }
        const jump = Math.floor(Math.random() * 12) + 6;
        const nextVal = Math.min(prev + jump, 100);
        
        const logIdx = Math.min(
          Math.floor((nextVal / 100) * bootLogs.length),
          bootLogs.length - 1
        );
        setCurrentText(bootLogs[logIdx]);
        
        return nextVal;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0a0a] text-white font-sans overflow-hidden px-6">
      
      {/* Background Matrix Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,rgba(30,215,96,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,215,96,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Main Centered Content */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-xl z-10">
        
        {/* Terminal Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0c0c0e] border border-[#1ed760]/30 rounded text-xs font-mono text-gray-400">
          <span className="w-2 h-2 rounded-full bg-[#1ed760] animate-pulse" />
          <span className="text-[#1ed760] font-semibold">kr1stik@sys_init:~$</span>
          <span>./boot.sh</span>
        </div>

        {/* Counter & Wide Geometric Sans Title */}
        <div className="space-y-2">
          <div className="text-4xl sm:text-6xl font-extrabold text-[#1ed760] font-sans tracking-tight drop-shadow-[0_0_12px_rgba(30,215,96,0.4)]">
            {progress}%
          </div>

          <div className="text-xs sm:text-sm font-mono text-gray-300 tracking-wider h-6 flex items-center justify-center gap-2">
            <span className="text-[#1ed760]">&gt;_</span>
            <span>{currentText}</span>
          </div>
        </div>

        {/* Sleek Minimalist Glowing Neon Green Progress Bar */}
        <div className="w-full max-w-md bg-gray-900/80 h-1.5 rounded-full overflow-hidden border border-[#1ed760]/30 shadow-[0_0_10px_rgba(30,215,96,0.2)]">
          <motion.div 
            className="h-full bg-[#1ed760] shadow-[0_0_10px_#1ed760]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Monospace Stack Summary Data */}
        <div className="text-[11px] font-mono text-gray-500 tracking-widest uppercase pt-2">
          CORE: REACT • TAILWIND • DJANGO • POSTGRE • FIREBASE
        </div>

      </div>
    </div>
  );
};
