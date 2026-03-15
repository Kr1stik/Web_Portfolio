import { useState } from "react";
import { ReviewOnScroll } from "../ReviewOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faExternalLinkAlt, faCodeBranch, faImage } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// 👇 IMPORT YOUR PROJECT IMAGES HERE 👇
import metroImg from "../../assets/metro.jpg";
import mabelsImg from "../../assets/mabels.png";

// Helper to get badge color based on status
const getStatusColor = (status) => {
    switch(status) {
        case "Ongoing": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
        case "Coming Soon": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
        default: return "bg-[#1ed760]/10 text-[#1ed760] border-[#1ed760]/20"; // Completed
    }
};

// 👇 INDIVIDUAL CARD COMPONENT 👇
const ProjectCard = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        // Wrapper for 3D perspective
        <div 
            className="w-full [perspective:1000px] cursor-pointer group"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* Inner container that rotates */}
            <div className={`relative w-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* === FRONT OF CARD === */}
                <div className="relative w-full h-[450px] [backface-visibility:hidden] bg-[#181818] rounded-xl p-6 border border-white/5 hover:border-[#1ed760]/30 transition-colors duration-300 flex flex-col shadow-lg">
                    
                    {/* Header: Folder Icon + Status Badge */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="text-[#1ed760] text-3xl group-hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faFolderOpen} />
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                            {project.status === "Ongoing" && <FontAwesomeIcon icon={faCodeBranch} className="mr-1" />}
                            {project.status}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#1ed760] transition-colors">
                        {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto mb-4">
                        {project.techStack.map((tech, key) => (
                            <span key={key} className="text-xs font-mono text-[#1ed760] bg-[#1ed760]/10 px-2 py-1 rounded">
                                {tech}
                            </span>
                        ))}
                    </div>
                    
                    {/* Links & Flip Instruction */}
                    <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider group-hover:text-[#1ed760] transition-colors">
                            Click to view image
                        </span>
                        
                        {/* External Links */}
                        <div className="flex gap-4">
                            {/* Github Link */}
                            {project.github && project.github !== "#" && (
                                <a 
                                    href={project.github} 
                                    className="text-gray-400 hover:text-white transition-colors"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()} 
                                >
                                    <FontAwesomeIcon icon={faGithub} className="text-lg" />
                                </a>
                            )}
                            
                            {/* Live Site Link */}
                            {project.status !== "Coming Soon" && project.link !== "#" && (
                                <a 
                                    href={project.link} 
                                    className="text-gray-400 hover:text-white transition-colors"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()} 
                                >
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-lg" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* === BACK OF CARD (IMAGE) === */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#111] rounded-xl border border-[#1ed760]/50 overflow-hidden flex flex-col items-center justify-center shadow-[0_0_20px_rgba(30,215,96,0.15)]">
                    {project.image ? (
                        // 👇 UPDATED: Added padding (p-4) and flex-center to frame the image nicely
                        <div className="w-full h-full relative group/back flex items-center justify-center p-4">
                            <img 
                                src={project.image} 
                                alt={`${project.title} preview`} 
                                // 👇 UPDATED: Changed from object-cover to object-contain
                                className="w-full h-full object-contain opacity-80 group-hover/back:opacity-100 transition-opacity rounded-md"
                            />
                            {/* Overlay text */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/back:opacity-100 transition-opacity">
                                <span className="bg-black/80 text-white px-4 py-2 rounded-full font-medium border border-white/20">
                                    Click to flip back
                                </span>
                            </div>
                        </div>
                    ) : (
                        // Fallback if no image is provided yet
                        <div className="flex flex-col items-center justify-center text-gray-500">
                            <FontAwesomeIcon icon={faImage} className="text-5xl mb-4 opacity-50" />
                            <p className="font-medium tracking-widest uppercase text-[#1ed760]">Preview Unavailable</p>
                            <p className="text-xs mt-2 text-gray-600">Click to flip back</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

// 👇 MAIN COMPONENT 👇
export const Projects = () => {
    
    const projects = [
        {
            title: "Sentinels (Thesis)",
            description: "An educational 2D RPG game (Pokémon-style) designed to teach Cybersecurity Fundamentals. Players learn concepts by completing a task related to cyber threats. Includes a comprehensive Web Admin dashboard for instructors to manage users and track student progress.",
            techStack: ["Game Dev", "Tailwind CSS", "Django", "Python"],
            link: "#",
            github: "#",
            status: "Completed",
            image: null 
        },
        {
            title: "Metro Bacolod Connect",
            description: "A PropTech application facilitating connections in Bacolod. Recently updated to use TypeScript and Node.js for better scalability.",
            techStack: ["React", "Node.js", "Firebase", "TypeScript"],
            link: "https://metrobacolod.cosedevs.com/",
            github: "https://github.com/Kr1stik/Metro-Bacolod-Connect.git", 
            status: "Completed",
            image: metroImg 
        },
        {
            title: "Mabels",
            description: "A comprehensive Point of Sale system designed for retail management, featuring inventory tracking and sales reporting.",
            techStack: ["CSS", "Javascript", "Firebase"],
            link: "https://kr1stik.github.io/MABELS/",
            github: "#",
            status: "Completed",
            image: mabelsImg 
        },
        {
            title: "FilmRate",
            description: "A movie review application that allows users to rate, review, and discover new films. Built with a robust Django backend. (PS. This is my personal project just like letterboxd)",
            techStack: ["Python", "Django", "Tailwind CSS"],
            link: "#",
            github: "#",
            status: "Coming Soon",
            image: null 
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
            <ReviewOnScroll>
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Featured <span className="text-[#1ed760]">Projects</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#1ed760] rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>

                </div>
            </ReviewOnScroll>
        </section>
    );
};