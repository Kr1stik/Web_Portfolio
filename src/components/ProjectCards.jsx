import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faFolder } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const coreFeaturedSkills = ["React", "Vue", "TypeScript", "Django", "NestJS", "PostgreSQL"];

export const ProjectCard = ({ project }) => {
  const { title, description, techStack, link, github, image, status } = project;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col bg-white/5 border border-white/10 hover:border-[#1ed760]/50 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md shadow-xl"
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
          <div className="absolute top-3 left-3">
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md border ${
              status === 'Coming Soon'
                ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                : 'bg-[#1ed760]/10 text-[#1ed760] border-[#1ed760]/30'
            }`}>
              {status}
            </span>
          </div>
        )}
      </div>

      {/* Card Content Area */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        {/* Title & Action Links */}
        <div className="flex justify-between items-start gap-3">
          <h3 className="text-xl font-bold text-white group-hover:text-[#1ed760] transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-3 text-neutral-400 shrink-0">
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
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-300 leading-relaxed flex-grow">
          {description}
        </p>

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
  );
};
