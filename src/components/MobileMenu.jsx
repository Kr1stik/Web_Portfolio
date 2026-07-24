import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTechSound } from "../hooks/useTechSound";

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const { playHoverSound } = useTechSound();
  const menuItems = [
    { label: "Home", file: "home.jsx" },
    { label: "About", file: "about.tsx" },
    { label: "Projects", file: "projects.json" },
    { label: "Contacts", file: "contacts.sh" }
  ];

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
          className="fixed inset-0 z-[150] bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden border-l border-[#1ed760]/30 font-mono"
        >
          {/* Hardware/Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={playHoverSound}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-[#1ed760]/40 text-[#1ed760] text-2xl rounded bg-[#0c0c0e] hover:bg-[#1ed760]/10 transition-all active:scale-95 shadow-[0_0_10px_rgba(30,215,96,0.2)]"
            aria-label="Close Menu"
          >
            &times;
          </button>

          {/* Header prompt */}
          <div className="absolute top-8 left-6 text-xs text-gray-500 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
            <span className="text-[#1ed760] ml-2">sys_menu.sh</span>
          </div>

          <nav className="flex flex-col items-start space-y-6 z-10 w-full max-w-xs px-4">
            <div className="text-xs text-gray-500 border-b border-[#1ed760]/20 pb-2 w-full">
              // SELECT COMMAND MODULE
            </div>

            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={`#${item.label.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={playHoverSound}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group w-full flex items-center justify-between p-3 rounded border border-transparent hover:border-[#1ed760]/40 hover:bg-[#1ed760]/10 transition-all text-gray-300 hover:text-[#1ed760]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#1ed760] text-xs font-bold">&gt;_ 0{index + 1}</span>
                  <span className="text-xl font-bold uppercase tracking-wider">{item.label}</span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-[#1ed760]">
                  .{item.file.split('.')[1]}
                </span>
              </motion.a>
            ))}
          </nav>

          {/* System Footer Info */}
          <div className="absolute bottom-8 text-[10px] text-gray-500 font-mono tracking-widest uppercase flex flex-col items-center gap-1">
             <span className="text-[#1ed760]">DEV_ENV v2.5.0</span>
             <span>ROOT ACCESS GRANTED // READY</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
