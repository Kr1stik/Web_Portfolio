import { useState } from "react";
import { ReviewOnScroll } from "../ReviewOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faTimes, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import resumePDF from "../../assets/Barrera_Resume.pdf";
// 👈 Removed the image import

export const Home = ({ setActiveSection }) => {
  const [showModal, setShowModal] = useState(false);
  const navItems = ["Home", "About", "Projects", "Contacts"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
      <ReviewOnScroll>
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center z-10 w-full max-w-4xl pt-20 pb-10">
          
          {/* Main Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 tracking-tight leading-tight">
            Wenard Roy Barrera<span className="text-[#1ed760]">.</span>
          </h1>

          {/* 👇 UPDATED: Text-Only Co-Founder Card UI 👇 */}
          <div className="flex flex-col text-center sm:text-left p-6 md:p-8 rounded-2xl bg-[#111] border border-white/10 hover:border-[#1ed760]/30 transition-all duration-300 w-full max-w-2xl mx-auto mb-12 shadow-lg">
            
            <h3 className="text-xl md:text-2xl font-bold text-white flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-2">
              Co-Founder 
              <span className="text-gray-500 hidden sm:inline">•</span> 
              <span className="text-[#1ed760]">COS Devs</span>
            </h3>
            
            <p className="text-gray-400 text-sm md:text-base mt-3 mb-5 leading-relaxed">
              Leading a team of passionate developers building innovative solutions for startups and MSMEs.
            </p>
            
            <a 
              href="https://cosedevs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#1ed760] text-sm md:text-base font-semibold hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2 group w-max mx-auto sm:mx-0"
            >
              Visit Website 
              <FontAwesomeIcon icon={faChevronRight} className="text-xs group-hover:translate-x-1 transition-transform" />
            </a>
            
          </div>
          {/* 👆 END: Text-Only Co-Founder Card UI 👆 */}

          {/* CV Buttons: Preview & Download */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setShowModal(true)}
              className="px-8 py-3 border-2 border-[#1ed760] text-[#1ed760] font-bold rounded-full hover:bg-[#1ed760] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(30,215,96,0.2)] hover:shadow-[0_0_25px_rgba(30,215,96,0.6)]"
            >
              Preview CV
            </button>

            <a 
              href={resumePDF} 
              download="Wenard_Barrera_Resume.pdf"
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300"
            >
              Download
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(`#${item.toLowerCase()}`);
                  section?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection(item.toLowerCase());
                }}
                className="text-gray-300 hover:text-[#1ed760] transition-colors text-xl md:text-2xl font-bold uppercase tracking-wide relative group"
              >
                {item}
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#1ed760] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 text-gray-400">
            <a href="https://www.facebook.com/Kr1stik" target="_blank" rel="noreferrer" className="hover:text-[#1ed760] transition hover:-translate-y-1 text-3xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/kr1stikk?igsh=bWQwMm9uaTF1c2Nt" target="_blank" rel="noreferrer" className="hover:text-[#1ed760] transition hover:-translate-y-1 text-3xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/Kr1stik" target="_blank" rel="noreferrer" className="hover:text-[#1ed760] transition hover:-translate-y-1 text-3xl">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/wenard-roy-barrera-570171290/" target="_blank" rel="noreferrer" className="hover:text-[#1ed760] transition hover:-translate-y-1 text-3xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

        </div>
      </ReviewOnScroll>

      {/* THE PDF MODAL */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#181818]">
              <h3 className="text-xl font-bold text-white">Curriculum Vitae</h3>
              
              <div className="flex items-center gap-4">
                <a 
                  href={resumePDF} 
                  download="Wenard_Barrera_Resume.pdf"
                  className="px-4 py-2 bg-[#1ed760]/10 text-[#1ed760] border border-[#1ed760]/30 font-semibold rounded-lg hover:bg-[#1ed760] hover:text-black transition-all flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span className="hidden sm:inline">Download</span>
                </a>
                
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-xl" />
                </button>
              </div>
            </div>
            
            {/* Modal Body */}
            <div className="flex-grow w-full h-full bg-[#181818]">
              <iframe 
                src={`${resumePDF}#view=FitH`} 
                className="w-full h-full border-none rounded-b-2xl"
                title="Resume PDF"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};