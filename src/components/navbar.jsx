import { useEffect, useState } from "react";
import logo from "../assets/logo2.png"; // 👈 Import the logo

export const Navbar = ({ activeSection, setActiveSection, menuOpen, setMenuOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

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
      className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-white/10 bg-black/90 backdrop-blur-md ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      } 
      py-2 px-6`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12">
        
        {/* Logo + Name Section */}
        <a 
          href="#home" 
          className="flex items-center gap-2 cursor-pointer group" // 👈 Added flex and gap
        >
          {/* Logo Image */}
          <img 
            src={logo} 
            alt="Logo" 
            className="w-8 h-8 object-contain transition-transform group-hover:scale-110" // 👈 Size and hover effect
          />
          
          {/* Text Name */}
          <span className="text-xl font-bold text-white">
            kr1stik<span className="text-green-500">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["home", "about", "projects", "contacts"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setActiveSection(section)}
              className={`text-sm font-medium transition-colors hover:text-green-400 capitalize ${
                activeSection === section ? "text-green-500" : "text-gray-300"
              }`}
            >
              {section}
            </a>
          ))}
          <a
            href="#contacts"
            className="px-4 py-1.5 bg-green-500 text-black text-sm font-semibold rounded-full hover:bg-green-400 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
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