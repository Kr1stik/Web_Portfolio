import { useEffect } from "react";

export const MobileMenu = ({isMenuOpen, setIsMenuOpen}) => {
    return (
        <div 
        className={`fixed top-0 w-full bg-[#1C352D] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
                    ${
                        isMenuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
                        `}>

        <button onClick={() => setIsMenuOpen(false)} 
        className="absolute top-6 right-6 text-3xl text-white cursor-pointer"
            aria-label="Close Menu">
            &times;
        </button>
        
        <div className="flex flex-col items-center space-y-10">
        <a href="#home" 
            onClick={() => setIsMenuOpen(false)}
            className={`text-2xl font-semibold text-white focus:outline-none cursor-pointer
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}>
            Home
        </a>

        <a href="#about" 
            onClick={() => setIsMenuOpen(false)}
            className={`text-2xl font-semibold text-white focus:outline-none cursor-pointer
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}>
            About
        </a>

        <a href="#project" 
            onClick={() => setIsMenuOpen(false)}
            className={`text-2xl font-semibold text-white focus:outline-none cursor-pointer
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}>
            Projects
        </a>

        <a href="#contacts" 
            onClick={() => setIsMenuOpen(false)}
            className={`text-2xl font-semibold text-white focus:outline-none cursor-pointer
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5s"}
            `}>
            Contact
        </a>


        </div>
    </div>

    );
};