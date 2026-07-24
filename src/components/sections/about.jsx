import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap, faCodeBranch, faTerminal } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
    
    // Primary Core Stack
    const primaryCoreStack = ["React", "Tailwind CSS", "Django", "PostgreSQL", "Firebase"];

    // Full Capabilities List categorized by Frontend and Backend/Logic
    const frontendCapabilities = ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"];
    const backendCapabilities = ["Python", "Django", "PHP", "Node.js", "PostgreSQL", "MySQL", "Firebase"];

    const experiences = [
        {
            role: "Co-Founder & Part-time Developer",
            company: "COS Devs",
            period: "2026 - Present",
            description: "Directing software development teams building high-performance web applications, scalable client architectures, and custom digital solutions for startups and enterprise clients.",
            highlight: "Full-Stack & Leadership"
        },
        {
            role: "System Developer Intern",
            company: "Department of Human Settlements and Urban Development (DHSUD)",
            period: "February 2026 – April 2026",
            description: "Engineered a suite of offline-first software applications, including the Homeowners Association (HOA) registry and the Environmental, Land Use, and Urban Planning and Development division system to optimize regional operations and data synchronization.",
            highlight: "Sole Internship / Offline-First Systems"
        },
        {
            role: "Assistant Programmer",
            company: "Devinnovate",
            period: "2024 - 2025",
            description: "Assisted in architecting backend services, RESTful API endpoints, and database schemas within Python and Django ecosystems.",
            highlight: "Backend Engineering"
        }
    ];

    return (
        <div className="w-full h-full overflow-y-auto no-scrollbar max-h-[calc(100vh-140px)] p-2 sm:p-4 font-sans">
            {/* 2-Column Split Pane Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto min-h-full py-4">
                
                {/* LEFT COLUMN: Context & Full Capabilities */}
                <div className="flex flex-col justify-between space-y-5 text-left h-full py-2">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#1ed760]">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span>// CAREER_TRAJECTORY</span>
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                            Experience &amp; <br />
                            <span className="text-[#1ed760]">Capabilities</span>
                        </h2>

                        <p className="text-sm text-neutral-300 leading-relaxed max-w-md">
                            Full-stack engineer dedicated to building clean, resilient, and scalable digital solutions across frontend and backend ecosystems.
                        </p>
                    </div>

                    {/* Primary Core Stack Box */}
                    <div className="bg-[#0c0c0e] border border-[#1ed760]/30 rounded-xl p-4 space-y-2">
                        <div className="text-xs font-mono text-[#1ed760] flex items-center gap-1.5">
                            <FontAwesomeIcon icon={faTerminal} />
                            <span>PRIMARY CORE STACK</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 font-mono pt-1">
                            {primaryCoreStack.map((tech) => (
                                <span 
                                    key={tech}
                                    className="bg-[#1ed760]/15 text-[#1ed760] px-2.5 py-1 text-xs rounded border border-[#1ed760]/40 font-bold shadow-[0_0_8px_rgba(30,215,96,0.15)]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Full Capabilities List */}
                    <div className="space-y-3 font-mono">
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                            <FontAwesomeIcon icon={faCodeBranch} className="text-[#1ed760]" />
                            <span>"extended_capabilities": &#123;</span>
                        </div>
                        
                        <div className="pl-3 space-y-2 text-xs">
                            <div>
                                <span className="text-gray-400 block text-[11px] mb-1">// Visual Interface (Frontend):</span>
                                <div className="flex flex-wrap gap-1.5">
                                    {frontendCapabilities.map((item) => (
                                        <span key={item} className="bg-white/5 text-neutral-200 px-2 py-0.5 rounded border border-white/10">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <span className="text-gray-400 block text-[11px] mb-1">// Core Logic (Backend &amp; DB):</span>
                                <div className="flex flex-wrap gap-1.5">
                                    {backendCapabilities.map((item) => (
                                        <span key={item} className="bg-white/5 text-neutral-200 px-2 py-0.5 rounded border border-white/10">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="text-xs text-gray-500">&#125;</div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Detailed Experience Panel (DHSUD sole internship) */}
                <div className="flex flex-col justify-center h-full py-2">
                    <div className="bg-[#0c0c0e] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col">
                        
                        {/* IDE Window Title Bar */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-[#141418] border-b border-gray-800 text-xs font-mono text-gray-400 shrink-0">
                            <div className="flex items-center space-x-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#1ed760]/80 inline-block" />
                            </div>
                            <span>experience_history.git</span>
                            <span className="text-[#1ed760] text-[10px]">3 COMMITS</span>
                        </div>

                        {/* Experience Entries List */}
                        <div className="p-5 space-y-4 overflow-y-auto no-scrollbar flex-1">
                            {experiences.map((exp, idx) => (
                                <div 
                                    key={idx} 
                                    className="p-4 rounded-xl bg-black/60 border border-gray-800 hover:border-[#1ed760]/40 transition-all space-y-2 group"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                        <h4 className="text-base font-bold text-white group-hover:text-[#1ed760] transition-colors font-sans">
                                            {exp.role}
                                        </h4>
                                        <span className="text-xs text-[#1ed760] font-mono shrink-0">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <div className="text-xs font-semibold text-neutral-300 font-sans">
                                        {exp.company}
                                    </div>

                                    <p className="text-xs text-neutral-300 leading-relaxed pt-1">
                                        {exp.description}
                                    </p>

                                    <div className="pt-2 flex justify-between items-center text-[11px] font-mono">
                                        <span className="text-gray-500">// {exp.highlight}</span>
                                        <span className="text-[#1ed760] opacity-80">VERIFIED ✓</span>
                                    </div>
                                </div>
                            ))}

                            {/* Education Brief */}
                            <div className="p-4 rounded-xl bg-black/40 border border-gray-800/60 space-y-1 font-mono text-xs">
                                <div className="flex justify-between text-gray-500 text-[10px]">
                                    <span className="flex items-center gap-1 text-gray-400">
                                        <FontAwesomeIcon icon={faGraduationCap} className="text-[#1ed760]" />
                                        EDUCATION
                                    </span>
                                    <span>2022 - 2026</span>
                                </div>
                                <h5 className="font-bold text-white font-sans">B.S. Computer Science</h5>
                                <p className="text-[#1ed760]">STI West Negros University</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};
