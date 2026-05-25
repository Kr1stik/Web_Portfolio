import { motion } from "framer-motion";
import { useTechSound } from "../hooks/useTechSound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCodeBranch, faImage } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const TechBadge = ({ tech }) => (
  <span className="bg-[#1ed760]/10 text-[#1ed760] py-1 px-3 border border-[#1ed760]/20 text-[10px] font-mono uppercase tracking-widest rounded-sm hover:bg-[#1ed760]/20 hover:border-[#1ed760]/50 transition-all">
    {tech}
  </span>
);

export const ProjectCard = ({ project }) => {
  const { playHoverSound } = useTechSound();
  const { title, description, techStack, link, github, image, status } = project;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={playHoverSound}
      className="group relative flex flex-col bg-[#111] border border-[#1ed760]/20 chamfered-card overflow-hidden transition-all duration-500 hover:border-[#1ed760]/50 hover:shadow-[0_0_30px_rgba(30,215,96,0.1)]"
    >
      {/* Project Image Area */}
      <div className="relative h-64 overflow-hidden bg-[#0a0a0a]">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-[#1ed760]/20">
            <FontAwesomeIcon icon={faImage} className="text-5xl mb-3" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Data Missing</span>
          </div>
        )}
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
           {status && (
             <div className="flex items-center gap-2 bg-black/80 border border-[#1ed760]/30 px-3 py-1 rounded-sm backdrop-blur-md">
                <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${status === 'Coming Soon' ? 'bg-yellow-500 shadow-[0_0_8px_#eab308]' : 'bg-[#1ed760] shadow-[0_0_8px_#1ed760]'}`} />
                <span className="text-[9px] font-mono text-white uppercase tracking-widest">{status}</span>
             </div>
           )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6">
           <h3 className="text-2xl font-bold text-white font-orbitron tracking-tight group-hover:text-glow-green transition-all">
             {title}
           </h3>
           <div className="flex gap-4">
             {github && github !== "#" && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-500 hover:text-[#1ed760] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faGithub} className="text-xl" />
                </a>
             )}
             {link && link !== "#" && (
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-500 hover:text-[#1ed760] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xl" />
                </a>
             )}
           </div>
        </div>

        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((tech, key) => (
            <TechBadge key={key} tech={tech} />
          ))}
        </div>
      </div>

      {/* Decorative Hardware Elements */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20">
         <div className="absolute top-4 right-4 w-8 h-[1px] bg-[#1ed760]" />
         <div className="absolute top-4 right-4 w-[1px] h-8 bg-[#1ed760]" />
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none opacity-20">
         <div className="absolute bottom-4 left-4 w-8 h-[1px] bg-[#1ed760]" />
         <div className="absolute bottom-4 left-4 w-[1px] h-8 bg-[#1ed760]" />
      </div>
    </motion.div>
  );
};
