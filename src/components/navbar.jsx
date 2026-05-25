import { useEffect, useState } from "react";
import logo from "../assets/logo2.png";
import { useTechSound } from "../hooks/useTechSound";
import { SoundToggle } from "./SoundToggle";

export const Navbar = ({ activeSection, setActiveSection, menuOpen, setMenuOpen, isMuted, onToggleSound }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { playHoverSound } = useTechSound();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-[#1ed760]/20 bg-black/80 backdrop-blur-md ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      } 
      py-2 px-6`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12">
        
        {/* Logo + Name Section */}
        <a 
          href="#home" 
          onMouseEnter={playHoverSound}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <img 
            src={logo} 
            alt="Logo" 
            className="w-8 h-8 object-contain transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#1ed760]"
          />
          
          <span className="text-xl font-bold text-white font-orbitron tracking-tighter">
            KR1STIK<span className="text-[#1ed760]">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["home", "about", "projects", "contacts"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onMouseEnter={playHoverSound}
              onClick={() => setActiveSection(section)}
              className={`text-xs font-bold transition-all hover:text-[#1ed760] font-orbitron uppercase tracking-widest ${
                activeSection === section ? "text-[#1ed760] text-glow-green" : "text-gray-400"
              }`}
            >
              {section}
            </a>
          ))}
          
          {/* Sound Toggle */}
          <SoundToggle isMuted={isMuted} onToggle={onToggleSound} />

          <a
            href="#contacts"
            onMouseEnter={playHoverSound}
            className="px-6 py-1.5 bg-[#1ed760] text-black text-xs font-bold font-orbitron uppercase tracking-widest chamfered hover:bg-white transition-all shadow-[0_0_15px_rgba(30,215,96,0.3)]"
          >
            INITIALIZE
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <SoundToggle isMuted={isMuted} onToggle={onToggleSound} />
          <button
            className="text-[#1ed760] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={playHoverSound}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};
