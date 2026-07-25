import { ProjectCard } from "../ProjectCards";

import metroImg from "../../assets/metro.jpg";
import mabelsImg from "../../assets/mabels.png";
import hredrdImg from "../../assets/hredrd-image.png";

export const Projects = () => {
    const projects = [
        {
            title: "HREDRD",
            description: "A comprehensive Housing and Real Estate Development Regulation Division system developed for DHSUD, engineered for offline-first data management and regional operations.",
            techStack: ["React", "TypeScript", "Django", "PostgreSQL"],
            link: "#",
            github: "#",
            status: "Completed",
            image: hredrdImg 
        },
        {
            title: "THE COuiz",
            description: "A gamified educational platform for developers. Users paste code snippets to receive AI explanations followed by an interactive quiz.",
            techStack: ["Next.js", "Django", "OpenAI API", "Tailwind CSS"],
            link: "#",
            github: "#",
            status: "Coming Soon",
            image: null 
        },
        {
            title: "Metro Bacolod Connect",
            description: "A PropTech application facilitating connections in Bacolod. Engineered with TypeScript and Node.js for scalability and real-time data handling.",
            techStack: ["React", "Node.js", "Firebase", "TypeScript"],
            link: "https://metrobacolod.cosedevs.com/",
            github: "https://github.com/Kr1stik/Metro-Bacolod-Connect.git", 
            status: "Completed",
            image: metroImg 
        },
        {
            title: "Mabels",
            description: "A Point of Sale system designed for retail management, featuring real-time inventory tracking and streamlined cashier UI.",
            techStack: ["CSS", "JavaScript", "Firebase"],
            link: "https://kr1stik.github.io/MABELS/",
            github: "#",
            status: "Completed",
            image: mabelsImg 
        },
        {
            title: "Sentinels (Thesis)",
            description: "An educational 2D RPG game designed to teach Cybersecurity Fundamentals with an instructor administrative dashboard.",
            techStack: ["Game Dev", "Tailwind CSS", "Django", "Python"],
            link: "#",
            github: "#",
            status: "Completed",
            image: null 
        },
        {
            title: "FilmRate",
            description: "A social movie review application allowing users to rate, review, and discover new films with a Django backend.",
            techStack: ["Python", "Django", "Tailwind CSS"],
            link: "#",
            github: "#",
            status: "Coming Soon",
            image: null 
        }
    ];

    return (
        <div className="w-full h-full overflow-y-auto no-scrollbar max-h-[calc(100vh-140px)] p-2 sm:p-4">
            {/* 2-Column Split Pane Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto min-h-full py-4">
                
                {/* LEFT COLUMN: Context */}
                <div className="flex flex-col justify-between space-y-4 text-left h-full py-2">
                    <div className="space-y-3">
                        <div className="text-xs font-mono text-[#1ed760]">
                            // DEPLOYED_APPLICATIONS
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                            Selected <br />
                            <span className="text-[#1ed760]">Projects</span>
                        </h2>

                        <p className="text-sm text-neutral-300 leading-relaxed max-w-md">
                            A curated showcase of production web applications, developer tools, and client platforms built with React, Vue, Django, and PostgreSQL.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 font-mono">
                        <div className="p-3 bg-[#0c0c0e] border border-gray-800 rounded-xl space-y-1">
                            <span className="text-[10px] text-gray-500 block">TOTAL_BUILDS</span>
                            <span className="text-xl font-bold text-white">06</span>
                        </div>
                        <div className="p-3 bg-[#0c0c0e] border border-gray-800 rounded-xl space-y-1">
                            <span className="text-[10px] text-gray-500 block">STATUS</span>
                            <span className="text-xl font-bold text-[#1ed760]">ONLINE</span>
                        </div>
                    </div>

                    <div className="text-xs font-mono text-gray-500">
                        &gt; Select any card on the right to inspect source or live demo
                    </div>
                </div>

                {/* RIGHT COLUMN: Interactive Projects Data Grid */}
                <div className="flex flex-col justify-center h-full py-2">
                    <div className="bg-[#0c0c0e] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl h-full max-h-[75vh] flex flex-col">
                        
                        <div className="flex items-center justify-between px-4 py-2.5 bg-[#141418] border-b border-gray-800 text-xs font-mono text-gray-400 shrink-0">
                            <div className="flex items-center space-x-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#1ed760]/80 inline-block" />
                            </div>
                            <span>deployments.json</span>
                            <span className="text-[#1ed760] text-[10px]">6 ITEMS</span>
                        </div>

                        <div className="p-4 space-y-4 overflow-y-auto no-scrollbar flex-1">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} project={project} />
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};
