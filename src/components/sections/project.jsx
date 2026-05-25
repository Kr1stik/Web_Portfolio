import { ReviewOnScroll } from "../ReviewOnScroll";
import { ProjectCard } from "../ProjectCards";

// 👇 IMPORT YOUR PROJECT IMAGES HERE 👇
import metroImg from "../../assets/metro.jpg";
import mabelsImg from "../../assets/mabels.png";
import hredrdImg from "../../assets/hredrd-image.png";

// 👇 MAIN COMPONENT 👇
export const Projects = () => {
    
    const projects = [
        {
            title: "HREDRD",
            description: "A comprehensive Human Resources and Centralized Data Registry system designed for high-performance data management and secure employee tracking. Architected with a focus on data integrity and administrative efficiency.",
            techStack: ["React", "TypeScript", "Django", "PostgreSQL"],
            link: "#",
            github: "#",
            status: "Completed",
            image: hredrdImg 
        },
        {
            title: "THE COuiz",
            description: "A gamified educational platform for developers. Users can paste code snippets to receive AI-powered explanations followed by an interactive quiz tailored to the logic of the provided code. Enhances learning through active recall.",
            techStack: ["Next.js", "Django", "OpenAI API", "Tailwind CSS"],
            link: "#",
            github: "#",
            status: "Coming Soon",
            image: null 
        },
        {
            title: "Metro Bacolod Connect",
            description: "A PropTech application facilitating connections in Bacolod. Recently updated to use TypeScript and Node.js for better scalability and real-time data handling.",
            techStack: ["React", "Node.js", "Firebase", "TypeScript"],
            link: "https://metrobacolod.cosedevs.com/",
            github: "https://github.com/Kr1stik/Metro-Bacolod-Connect.git", 
            status: "Completed",
            image: metroImg 
        },
        {
            title: "Mabels",
            description: "A comprehensive Point of Sale system designed for retail management, featuring real-time inventory tracking, sales reporting, and user-friendly interface for cashiers.",
            techStack: ["CSS", "JavaScript", "Firebase"],
            link: "https://kr1stik.github.io/MABELS/",
            github: "#",
            status: "Completed",
            image: mabelsImg 
        },
        {
            title: "Sentinels (Thesis)",
            description: "An educational 2D RPG game (Pokémon-style) designed to teach Cybersecurity Fundamentals. Players navigate a digital world, solving security-related challenges to progress. Includes an administrative dashboard for instructor oversight.",
            techStack: ["Game Dev", "Tailwind CSS", "Django", "Python"],
            link: "#",
            github: "#",
            status: "Completed",
            image: null 
        },
        {
            title: "FilmRate",
            description: "A social movie review application that allows users to rate, review, and discover new films. Features a robust backend for community interactions and movie data management.",
            techStack: ["Python", "Django", "Tailwind CSS"],
            link: "#",
            github: "#",
            status: "Coming Soon",
            image: null 
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-24 bg-black text-white">
            <ReviewOnScroll>
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    
                    <div className="mb-20 text-center md:text-left">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-orbitron tracking-widest uppercase">
                            Operational <span className="text-[#1ed760] text-glow-green">Deployments</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#1ed760] shadow-[0_0_15px_#1ed760] mx-auto md:mx-0"></div>
                        <p className="mt-6 text-gray-500 font-mono text-xs tracking-[0.4em] uppercase">System Archive: 2024-2026</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>

                </div>
            </ReviewOnScroll>
        </section>
    );
};
