import { useState, useEffect } from "react";

export const Navbar = ({ activeSection, setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navItems = ["Home", "About", "Projects", "Contacts"];

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only after scrolling down 100px (leaving the home area)
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } bg-black/90 backdrop-blur-md border-b border-white/10`}
    >
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        
        {/* Your Name/Logo (Optional) */}
        <div className="text-white font-bold text-xl tracking-tighter">Kr1stik.</div>

        <ul className="flex space-x-8">
          {navItems.map((item) => {
            const sectionId = item.toLowerCase();
            const isActive = activeSection === sectionId;
            
            return (
              <li key={item}>
                <a
                  href={`#${sectionId}`}
                  onClick={() => setActiveSection(sectionId)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-[#1ed760]" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};