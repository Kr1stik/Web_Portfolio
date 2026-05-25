import { useState } from "react";
import { ReviewOnScroll } from "../ReviewOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faTimes, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import resumePDF from "../../assets/Barrera_Resume.pdf";
import { useTechSound } from "../../hooks/useTechSound";
import { motion } from "framer-motion";

export const Home = ({ setActiveSection }) => {
  const [showModal, setShowModal] = useState(false);
  const { playHoverSound } = useTechSound();
  const navItems = ["Home", "About", "Projects", "Contacts"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
      {/* Background Grid/Targeting Effect */}
      <motion.div 
        animate={{ 
          x: [-10, 10, -10],
          y: [-10, 10, -10],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1ed760_1px,transparent_1px),linear-gradient(to_bottom,#1ed760_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </motion.div>

      <ReviewOnScroll>
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center z-10 w-full max-w-4xl pt-20 pb-10">
          
          {/* Main Name */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-10 tracking-tight leading-tight font-orbitron">
            WENARD ROY BARRERA<span className="text-[#1ed760] text-glow-green">.</span>
          </h1>

          {/* Co-Founder Card */}
          <div 
            onMouseEnter={playHoverSound}
            className="flex flex-col text-center sm:text-left p-6 md:p-8 chamfered-card bg-[#111] border border-[#1ed760]/20 hover:border-[#1ed760]/50 transition-all duration-300 w-full max-w-2xl mx-auto mb-12 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white font-orbitron flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-2">
              CO-FOUNDER 
              <span className="text-gray-500 hidden sm:inline">•</span> 
              <span className="text-[#1ed760]">COS DEVS</span>
            </h3>
            
            <p className="text-gray-400 text-sm md:text-base mt-3 mb-5 leading-relaxed font-mono">
              Leading a team of passionate developers building innovative solutions for startups and MSMEs.
            </p>
            
            <a 
              href="https://cosedevs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="text-[#1ed760] text-sm md:text-base font-semibold hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2 group w-max mx-auto sm:mx-0 font-mono tracking-widest uppercase"
            >
              Access System 
              <FontAwesomeIcon icon={faChevronRight} className="text-xs group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* CV Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onMouseEnter={playHoverSound}
              onClick={() => setShowModal(true)}
              className="px-8 py-3 border-2 border-[#1ed760] text-[#1ed760] font-bold font-orbitron tracking-widest chamfered hover:bg-[#1ed760] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(30,215,96,0.1)] hover:shadow-[0_0_25px_rgba(30,215,96,0.4)]"
            >
              SCAN CV
            </button>

            <a 
              onMouseEnter={playHoverSound}
              href={resumePDF} 
              download="Wenard_Barrera_Resume.pdf"
              className="px-8 py-3 bg-white text-black font-bold font-orbitron tracking-widest chamfered hover:bg-[#1ed760] transition-all duration-300"
            >
              DOWNLOAD
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onMouseEnter={playHoverSound}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(`#${item.toLowerCase()}`);
                  section?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection(item.toLowerCase());
                }}
                className="text-gray-400 hover:text-[#1ed760] transition-all text-sm md:text-lg font-bold font-orbitron uppercase tracking-[0.2em] relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#1ed760] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 text-gray-500">
            {[
              { icon: faFacebook, link: "https://www.facebook.com/Kr1stik" },
              { icon: faInstagram, link: "https://www.instagram.com/kr1stikk?igsh=bWQwMm9uaTF1c2Nt" },
              { icon: faGithub, link: "https://github.com/Kr1stik" },
              { icon: faLinkedin, link: "https://www.linkedin.com/in/wenard-roy-barrera-570171290/" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.link} 
                target="_blank" 
                rel="noreferrer" 
                onMouseEnter={playHoverSound}
                className="hover:text-[#1ed760] hover:drop-shadow-[0_0_8px_#1ed760] transition-all hover:-translate-y-1 text-2xl"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>

        </div>
      </ReviewOnScroll>

      {/* THE PDF MODAL */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-[#111] border border-[#1ed760]/30 chamfered-card w-full max-w-5xl h-[85vh] flex flex-col shadow-[0_0_50px_rgba(0,0,0,1)] overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1ed760]/20 bg-[#0a0a0a]">
              <h3 className="text-xl font-bold text-white font-orbitron tracking-widest">DOSSIER_VIEW</h3>
              
              <div className="flex items-center gap-4">
                <a 
                  href={resumePDF} 
                  download="Wenard_Barrera_Resume.pdf"
                  onMouseEnter={playHoverSound}
                  className="px-4 py-2 bg-[#1ed760] text-black font-bold font-orbitron text-xs chamfered hover:bg-white transition-all flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span className="hidden sm:inline">EXTRACT</span>
                </a>
                
                <button 
                  onClick={() => setShowModal(false)}
                  onMouseEnter={playHoverSound}
                  className="text-gray-400 hover:text-[#1ed760] transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1ed760]/10"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-xl" />
                </button>
              </div>
            </div>
            
            {/* Modal Body */}
            <div className="flex-grow w-full h-full bg-[#181818] p-1">
              <iframe 
                src={`${resumePDF}#view=FitH`} 
                className="w-full h-full border-none grayscale contrast-125"
                title="Resume PDF"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
