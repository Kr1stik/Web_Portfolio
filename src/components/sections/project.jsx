import { ReviewOnScroll } from "../ReviewOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faExternalLinkAlt, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
    
    const projects = [
        {
            title: "Sentinels (Thesis)",
            description: "An educational 2D RPG game (Pokémon-style) designed to teach Cybersecurity Fundamentals. Players learn concepts by completing a task related to cyber threats. Includes a comprehensive Web Admin dashboard for instructors to manage users and track student progress.",
            techStack: ["Game Dev", "Tailwind CSS", "Django", "Python"],
            link: "#",
            github: "#",
            status: "Completed"
        },
        {
            title: "Metro Bacolod Connect",
            description: "A PropTech application facilitating connections in Bacolod. Recently updated to use TypeScript and Node.js for better scalability.",
            techStack: ["React", "Node.js", "Firebase", "TypeScript"],
            link: "#", 
            status: "Ongoing" // ✅ Added Status
        },
        {
            title: "Mabels",
            description: "A comprehensive Point of Sale system designed for retail management, featuring inventory tracking and sales reporting.",
            techStack: ["CSS", "Javascript", "Firebase"],
            link: "https://kr1stik.github.io/MABELS/",
            status: "Completed"
        },
        {
            title: "FilmRate",
            description: "A movie review application that allows users to rate, review, and discover new films. Built with a robust Django backend. (PS. This is my personal project just like letterboxd)",
            techStack: ["Python", "Django", "Tailwind CSS"],
            link: "#",
            status: "Coming Soon" // ✅ Added Status
        }
    ];

    // Helper to get badge color based on status
    const getStatusColor = (status) => {
        switch(status) {
            case "Ongoing": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
            case "Coming Soon": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
            default: return "bg-[#1ed760]/10 text-[#1ed760] border-[#1ed760]/20"; // Completed
        }
    };

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
                            <div 
                                key={index} 
                                className="group relative bg-[#181818] rounded-xl p-6 border border-white/5 hover:bg-[#282828] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                            >
                                {/* Header: Folder Icon + Status Badge */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-[#1ed760] text-3xl">
                                        <FontAwesomeIcon icon={faFolderOpen} />
                                    </div>
                                    
                                    {/* ✅ Status Badge */}
                                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                                        {project.status === "Ongoing" && <FontAwesomeIcon icon={faCodeBranch} className="mr-1" />}
                                        {project.status}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#1ed760] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                                    {project.techStack.map((tech, key) => (
                                        <span key={key} className="text-xs font-mono text-[#1ed760]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Link Button (Only show if not "Coming Soon") */}
                                {project.status !== "Coming Soon" && (
                                    <div className="pt-4 border-t border-white/5 flex justify-end">
                                        <a 
                                            href={project.link} 
                                            className="text-gray-400 hover:text-white transition-colors"
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </ReviewOnScroll>
        </section>
    );
};