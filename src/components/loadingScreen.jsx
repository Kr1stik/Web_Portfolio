import { useEffect, useState } from "react";
// Import your logo or profile picture for the center
import centerImage from "../assets/logo2.png"; 

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          // Wait half a second at 100% before triggering completion
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        // Randomly jump the progress bar by 5-15% to make it feel real
        return prevProgress + Math.floor(Math.random() * 10) + 5; 
      });
    }, 150); // Updates every 150ms

    return () => clearInterval(interval);
  }, [onComplete]);

  // SVG Circle Math for the progress ring
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black">
      
      {/* Loading Ring & Image Container */}
      <div className="relative flex items-center justify-center mb-6">
        
        {/* Background Track Circle */}
        <svg className="w-32 h-32 transform -rotate-90 absolute">
          <circle
            className="text-white/10"
            strokeWidth="6"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="64"
            cy="64"
          />
          
          {/* Animated Progress Circle */}
          <circle
            className="text-[#1ed760] transition-all duration-200 ease-out"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="64"
            cy="64"
          />
        </svg>

        {/* Center Image */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-black z-10 bg-[#111] flex items-center justify-center">
          <img 
            src={centerImage} 
            alt="Loading..." 
            className="w-full h-full object-cover p-2" 
          />
        </div>

      </div>

      {/* Loading Text */}
      <div className="text-white font-mono text-xl font-bold flex items-center gap-2">
        <span>{progress}%</span>
        <span className="text-gray-400 font-sans font-medium text-base tracking-widest uppercase">Loading...</span>
      </div>

    </div>
  );
};