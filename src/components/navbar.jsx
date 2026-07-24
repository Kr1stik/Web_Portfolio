import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, 
  faUser, 
  faFolderOpen, 
  faEnvelope, 
  faFilePdf 
} from "@fortawesome/free-solid-svg-icons";
import resumePDF from "../assets/Barrera_Resume (1).pdf";

export const Navbar = ({ currentView, setCurrentView }) => {
  const mouseX = useMotionValue(Infinity);
  const [isHoverSupported, setIsHoverSupported] = useState(true);

  // Disable hover magnification on mobile / touch devices
  useEffect(() => {
    const checkHoverSupport = () => {
      const hasHover = window.matchMedia("(hover: hover)").matches && window.innerWidth >= 640;
      setIsHoverSupported(hasHover);
    };

    checkHoverSupport();
    window.addEventListener("resize", checkHoverSupport);
    return () => window.removeEventListener("resize", checkHoverSupport);
  }, []);

  const dockItems = [
    { id: "home", label: "Home", icon: faHome },
    { id: "about", label: "Experience", icon: faUser },
    { id: "projects", label: "Projects", icon: faFolderOpen },
    { id: "contacts", label: "Contact", icon: faEnvelope },
    { id: "resume", label: "Resume", icon: faFilePdf, href: resumePDF, download: true }
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto flex justify-center max-w-[95vw]">
      <motion.div
        onMouseMove={(e) => isHoverSupported && mouseX.set(e.pageX)}
        onMouseLeave={() => isHoverSupported && mouseX.set(Infinity)}
        className="bg-white/5 backdrop-blur-xl rounded-2xl flex items-center gap-2 sm:gap-3 px-2.5 py-2 sm:px-4 sm:py-2.5 border border-[#1ed760]/30 shadow-[0_10px_30px_rgba(0,0,0,0.9),0_0_20px_rgba(30,215,96,0.15)]"
      >
        {dockItems.map((item) => (
          <DockIcon 
            key={item.id} 
            item={item} 
            mouseX={mouseX} 
            isHoverSupported={isHoverSupported}
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
        ))}
      </motion.div>
    </div>
  );
};

function DockIcon({ item, mouseX, isHoverSupported, currentView, setCurrentView }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Fast, transform-based scale factor (No layout repaints!)
  const scaleSync = useTransform(distance, [-120, 0, 120], [1, 1.35, 1]);
  const animatedScale = useSpring(scaleSync, { mass: 0.1, stiffness: 220, damping: 14 });

  const isActive = currentView === item.id;

  const handleClick = (e) => {
    if (item.download) return;
    e.preventDefault();
    setCurrentView(item.id);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Tooltip on Hover */}
      <AnimatePresence>
        {hovered && isHoverSupported && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.12 }}
            className="absolute -top-10 px-2.5 py-1 bg-neutral-900/95 border border-[#1ed760]/30 text-white text-[11px] font-mono rounded-lg shadow-xl whitespace-nowrap pointer-events-none backdrop-blur-md z-50"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        ref={ref}
        href={item.href || `#${item.id}`}
        download={item.download ? "Barrera_Resume.pdf" : undefined}
        target={item.download ? "_blank" : undefined}
        rel={item.download ? "noopener noreferrer" : undefined}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={isHoverSupported ? { scale: animatedScale } : undefined}
        className={`w-10 h-10 sm:w-11 sm:h-11 relative flex items-center justify-center rounded-xl transition-colors duration-200 gpu-layer ${
          item.id === 'resume'
            ? 'bg-[#1ed760] text-black font-bold shadow-[0_0_12px_rgba(30,215,96,0.4)] hover:bg-white'
            : isActive 
              ? 'bg-white text-black shadow-md shadow-white/20' 
              : 'bg-white/10 text-neutral-300 hover:bg-[#1ed760]/20 hover:text-[#1ed760] border border-white/5'
        }`}
      >
        <FontAwesomeIcon icon={item.icon} className="text-sm sm:text-base" />

        {/* macOS Active Dot Indicator */}
        {isActive && !item.download && (
          <motion.span
            layoutId="activeDot"
            className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-[#1ed760] shadow-[0_0_8px_#1ed760]"
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
          />
        )}
      </motion.a>
    </div>
  );
}
