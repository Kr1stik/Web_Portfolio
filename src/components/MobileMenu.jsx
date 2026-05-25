import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTechSound } from "../hooks/useTechSound";

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const { playHoverSound } = useTechSound();
  const menuItems = ["Home", "About", "Projects", "Contacts"];

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center md:hidden border-l-4 border-[#1ed760]"
        >
          {/* Hardware Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={playHoverSound}
            className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center border border-[#1ed760]/30 text-[#1ed760] text-3xl chamfered hover:bg-[#1ed760]/10 transition-all active:scale-90"
            aria-label="Close Menu"
          >
            &times;
          </button>

          {/* Background Decorative Element */}
          <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
             <div 
               className="w-96 h-96 bg-[#1ed760]" 
               style={{ clipPath: "polygon(20% 0%, 80% 0%, 50% 50%, 80% 100%, 20% 100%, 50% 50%)" }}
             />
          </div>

          <nav className="flex flex-col items-center space-y-12 z-10">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={playHoverSound}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group relative text-3xl font-bold text-white font-orbitron uppercase tracking-[0.3em] transition-all hover:text-[#1ed760]"
              >
                {/* Glitch Effect on Hover */}
                <span className="relative z-10 group-hover:animate-pulse">
                  {item}
                </span>
                
                {/* Underline Accents */}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#1ed760] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#1ed760]" />
                
                {/* Scanning Light Effect */}
                <span className="absolute -inset-x-4 -inset-y-2 bg-[#1ed760]/0 group-hover:bg-[#1ed760]/5 border border-transparent group-hover:border-[#1ed760]/20 chamfered transition-all pointer-events-none" />
              </motion.a>
            ))}
          </nav>

          {/* System Footer Info */}
          <div className="absolute bottom-10 text-[10px] text-gray-600 font-mono tracking-[0.5em] uppercase">
             Omnitrix_OS v1.0.4 // Unauthorized Access Prohibited
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
