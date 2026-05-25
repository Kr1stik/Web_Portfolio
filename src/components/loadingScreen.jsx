import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFinished(true);
          // Small delay for the visual "Hero Time" reveal before unmounting
          setTimeout(onComplete, 1500);
          return 100;
        }
        const jump = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + jump, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key="loading"
            exit={{ 
              scale: 1.2, 
              opacity: 0, 
              filter: "brightness(2) blur(5px)",
            }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center"
          >
            {/* Target Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="w-[300px] h-[300px] border-2 border-[#1ed760]/20 rounded-full border-dashed"
              />
            </div>

            {/* Omnitrix Hourglass */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#1ed760] rounded-full opacity-10 blur-2xl animate-pulse" />
              <div className="relative w-full h-full bg-[#111] rounded-full border-4 border-[#222] flex items-center justify-center overflow-hidden">
                <div 
                  className="w-32 h-32 bg-[#1ed760] transition-all duration-300 shadow-[0_0_15px_#1ed760]"
                  style={{
                    clipPath: "polygon(20% 0%, 80% 0%, 50% 50%, 80% 100%, 20% 100%, 50% 50%)",
                    opacity: 0.2 + (progress / 100) * 0.8
                  }}
                />
                <div 
                  className="absolute inset-0 bg-black/70 transition-all duration-300"
                  style={{ height: `${100 - progress}%` }}
                />
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="text-[#1ed760] font-orbitron text-5xl font-bold tracking-[0.2em] mb-3 text-glow-green">
                {progress}%
              </div>
              <div className="text-gray-500 font-mono text-[10px] tracking-[0.5em] uppercase">
                Calibrating Omnitrix...
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="reveal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
                scale: [0.8, 1.1, 1], 
                opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <motion.div 
              animate={{ 
                boxShadow: ["0 0 20px #1ed760", "0 0 60px #1ed760", "0 0 20px #1ed760"],
              }}
              transition={{ duration: 0.4, repeat: Infinity }}
              className="w-64 h-64 bg-[#1ed760] flex items-center justify-center rounded-full mb-8 shadow-[0_0_40px_#1ed760]"
              style={{
                clipPath: "polygon(20% 0%, 80% 0%, 50% 50%, 80% 100%, 20% 100%, 50% 50%)"
              }}
            />
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-[#1ed760] text-6xl font-bold font-orbitron text-glow-green tracking-widest"
            >
              HERO TIME
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
