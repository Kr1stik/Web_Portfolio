import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowUpRightFromSquare, 
  faFolder, 
  faTriangleExclamation, 
  faLock, 
  faShieldHalved,
  faTimes,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const coreFeaturedSkills = ["React", "Next.js", "Vite", "TypeScript", "Django", "NestJS", "PostgreSQL"];

export const ProjectCard = ({ project }) => {
  const { title, description, techStack, link, github, image, status, isGovOnly, warningMsg } = project;
  const [showWarningModal, setShowWarningModal] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className={`group flex flex-col bg-white/5 border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md shadow-xl ${
          isGovOnly 
            ? "border-amber-500/30 hover:border-amber-500/60" 
            : "border-white/10 hover:border-[#1ed760]/50"
        }`}
      >
        {/* Image Preview Container */}
        <div className="relative h-52 overflow-hidden bg-[#050505]">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-neutral-600 gap-2">
              <FontAwesomeIcon icon={faFolder} className="text-4xl text-[#1ed760]/40" />
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Project Archive</span>
            </div>
          )}

          {/* Status Badge */}
          {status && (
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md border font-mono flex items-center gap-1.5 ${
                isGovOnly
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                  : status === 'Coming Soon'
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    : 'bg-[#1ed760]/10 text-[#1ed760] border-[#1ed760]/30'
              }`}>
                {isGovOnly && <FontAwesomeIcon icon={faLock} className="text-[10px] text-amber-400" />}
                {status}
              </span>
            </div>
          )}
        </div>

        {/* Card Content Area */}
        <div className="p-6 flex flex-col flex-grow space-y-4">
          {/* Title & Action Links */}
          <div className="flex justify-between items-start gap-3">
            <h3 className={`text-xl font-bold transition-colors ${
              isGovOnly ? "text-white group-hover:text-amber-400" : "text-white group-hover:text-[#1ed760]"
            }`}>
              {title}
            </h3>

            <div className="flex items-center gap-3 text-neutral-400 shrink-0">
              {isGovOnly ? (
                <button
                  onClick={() => setShowWarningModal(true)}
                  className="px-2 py-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all"
                  title="View Access Restrictions"
                >
                  <FontAwesomeIcon icon={faLock} className="text-xs" />
                  <span>RESTRICTED</span>
                </button>
              ) : (
                <>
                  {github && github !== "#" && (
                    <a 
                      href={github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="hover:text-[#1ed760] transition-colors p-1"
                      title="GitHub Repository"
                    >
                      <FontAwesomeIcon icon={faGithub} className="text-lg" />
                    </a>
                  )}
                  {link && link !== "#" && (
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="hover:text-[#1ed760] transition-colors p-1"
                      title="Live Deployment"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
                    </a>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-neutral-300 leading-relaxed flex-grow">
            {description}
          </p>

          {/* Government Restricted Warning Box */}
          {isGovOnly && (
            <div 
              onClick={() => setShowWarningModal(true)}
              className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono space-y-1 cursor-pointer hover:bg-amber-500/15 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-amber-400 text-[11px]">
                  <FontAwesomeIcon icon={faTriangleExclamation} />
                  <span>// GOV_RESTRICTED_ACCESS</span>
                </div>
                <FontAwesomeIcon icon={faInfoCircle} className="text-amber-400 opacity-80" />
              </div>
              <p className="text-[11px] text-amber-200/90 leading-relaxed">
                Developed for DHSUD. Source code and live demo are restricted to authorized government personnel.
              </p>
            </div>
          )}

          {/* Tech Stack Badges with Neon Green Highlights */}
          <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
            {techStack.map((tech, idx) => {
              const isCore = coreFeaturedSkills.includes(tech);
              return (
                <span 
                  key={idx} 
                  className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-lg border transition-colors ${
                    isCore 
                      ? "bg-[#1ed760]/15 text-[#1ed760] border-[#1ed760]/40 shadow-[0_0_8px_rgba(30,215,96,0.15)]"
                      : "bg-white/5 text-neutral-300 border-white/10"
                  }`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

      </motion.div>

      {/* Government Warning Modal Popup */}
      <AnimatePresence>
        {showWarningModal && (
          <div 
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            onClick={() => setShowWarningModal(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0c0c0e] border border-amber-500/40 rounded-2xl w-full max-w-lg shadow-[0_0_30px_rgba(245,158,11,0.15)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* IDE Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#141418] border-b border-gray-800 text-xs font-mono">
                <div className="flex items-center space-x-2 text-amber-400">
                  <FontAwesomeIcon icon={faShieldHalved} className="text-sm" />
                  <span className="font-bold">SECURITY_RESTRICTION_NOTICE</span>
                </div>
                <button 
                  onClick={() => setShowWarningModal(false)}
                  className="text-neutral-400 hover:text-white p-1 transition-colors"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-base" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 font-sans text-left">
                <div className="flex items-center gap-3 text-amber-400">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30">
                    <FontAwesomeIcon icon={faTriangleExclamation} className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-mono">{title} System</h4>
                    <span className="text-xs text-amber-400 font-mono">// Government-Only Deployment</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-amber-500/20 text-xs text-neutral-300 leading-relaxed font-mono space-y-2">
                  <p className="text-amber-200">
                    {warningMsg}
                  </p>
                  <p className="text-neutral-400 pt-1 text-[11px] border-t border-gray-800">
                    Department of Human Settlements and Urban Development (DHSUD) &bull; Regional Offline-First Operations System
                  </p>
                </div>

                <div className="flex justify-end pt-2">
                  <button 
                    onClick={() => setShowWarningModal(false)}
                    className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-xl font-mono text-xs font-bold transition-all shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                  >
                    &gt;_ ACKNOWLEDGE_NOTICE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

