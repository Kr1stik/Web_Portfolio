import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faTimes, faFileAlt, faArrowUpRightFromSquare, faCode } from "@fortawesome/free-solid-svg-icons";
import resumePDF from "../../assets/Barrera_Resume (1).pdf";

export const Home = ({ setCurrentView }) => {
  const [showModal, setShowModal] = useState(false);

  const primaryCoreStack = ["React", "Tailwind CSS", "Django", "PostgreSQL", "Firebase"];

  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar max-h-[calc(100vh-140px)] p-2 sm:p-4 font-sans">
      {/* 2-Column Split Pane Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto min-h-full py-4">
        
        {/* LEFT COLUMN: Context */}
        <div className="flex flex-col justify-center space-y-6 text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-[#1ed760]/30 w-max shadow-[0_0_12px_rgba(30,215,96,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#1ed760] animate-pulse shadow-[0_0_8px_#1ed760]" />
            <span className="text-xs font-mono text-neutral-200">AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          {/* Main Title & Role */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Wenard Roy <br />
              <span className="text-[#1ed760]">Barrera</span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-neutral-300">
              Full-Stack Software Developer &amp; Architect
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              Engineering clean, scalable, and high-performance digital solutions with modern web frameworks.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a 
              href={resumePDF} 
              download="Barrera_Resume.pdf"
              className="px-5 py-2.5 bg-[#1ed760] hover:bg-white text-black font-bold text-xs rounded-xl shadow-[0_0_15px_rgba(30,215,96,0.3)] transition-all flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>DOWNLOAD CV</span>
            </a>

            <button 
              onClick={() => setShowModal(true)}
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-mono text-xs rounded-xl border border-white/15 hover:border-[#1ed760]/40 transition-all flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faFileAlt} className="text-[#1ed760]" />
              <span>PREVIEW CV</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 pt-2 text-neutral-400">
            {[
              { icon: faGithub, link: "https://github.com/Kr1stik", label: "GitHub" },
              { icon: faLinkedin, link: "https://www.linkedin.com/in/wenard-roy-barrera-570171290/", label: "LinkedIn" },
              { icon: faFacebook, link: "https://www.facebook.com/Kr1stik", label: "Facebook" },
              { icon: faInstagram, link: "https://www.instagram.com/kr1stikk?igsh=bWQwMm9uaTF1c2Nt", label: "Instagram" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.link} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#1ed760] transition-colors p-2 rounded-lg bg-white/5 border border-white/5 hover:border-[#1ed760]/30"
                title={social.label}
              >
                <FontAwesomeIcon icon={social.icon} className="text-base" />
              </a>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Data & IDE Panel */}
        <div className="flex flex-col justify-center">
          <div className="bg-[#0c0c0e] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#141418] border-b border-gray-800 text-xs font-mono text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#1ed760]/80 inline-block" />
              </div>
              <span>developer_profile.json</span>
              <span className="text-[#1ed760] text-[10px]">v2.5.0</span>
            </div>

            {/* Panel Body */}
            <div className="p-6 space-y-5">
              
              <div className="p-4 rounded-xl bg-black/50 border border-gray-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                  <span>// ORGANIZATION</span>
                  <span className="text-[#1ed760]">ACTIVE</span>
                </div>
                <h3 className="text-lg font-bold text-white flex items-center justify-between">
                  <span>COS Devs</span>
                  <a 
                    href="https://cosedevs.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[#1ed760] text-xs font-mono hover:underline flex items-center gap-1"
                  >
                    <span>visit</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
                  </a>
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Co-Founder directing software development teams building scalable web platforms for startups and enterprise clients.
                </p>
              </div>

              <div className="space-y-2 font-mono">
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <FontAwesomeIcon icon={faCode} className="text-[#1ed760]" />
                  <span>"primary_core_stack": [</span>
                </div>
                
                <div className="flex flex-wrap gap-2 pl-3">
                  {primaryCoreStack.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-[#1ed760]/10 text-[#1ed760] px-2.5 py-1 text-xs rounded border border-[#1ed760]/30 shadow-[0_0_8px_rgba(30,215,96,0.15)]"
                    >
                      "{tech}"
                    </span>
                  ))}
                </div>
                
                <div className="text-xs text-gray-500">]</div>
              </div>

              <div className="pt-2 border-t border-gray-800 flex justify-between items-center text-xs font-mono">
                <button 
                  onClick={() => setCurrentView("about")}
                  className="text-neutral-300 hover:text-[#1ed760] transition-colors flex items-center gap-1"
                >
                  <span>&gt;_ view_experience()</span>
                </button>
                <button 
                  onClick={() => setCurrentView("projects")}
                  className="text-neutral-300 hover:text-[#1ed760] transition-colors flex items-center gap-1"
                >
                  <span>&gt;_ view_projects()</span>
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* PDF Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 md:p-6"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-[#0c0c0e] border border-[#1ed760]/30 rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-black font-mono">
              <span className="text-xs text-white">Barrera_Resume.pdf</span>
              <div className="flex items-center gap-3">
                <a 
                  href={resumePDF} 
                  download="Barrera_Resume.pdf"
                  className="px-3.5 py-1.5 bg-[#1ed760] text-black font-bold font-mono text-xs rounded-lg transition-all hover:bg-white flex items-center gap-1.5"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span>EXTRACT</span>
                </a>
                <button onClick={() => setShowModal(false)} className="text-neutral-400 hover:text-white p-1">
                  <FontAwesomeIcon icon={faTimes} className="text-lg" />
                </button>
              </div>
            </div>
            <div className="flex-grow w-full h-full bg-[#0a0a0a]">
              <iframe src={`${resumePDF}#view=FitH`} className="w-full h-full border-none" title="Resume PDF" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
