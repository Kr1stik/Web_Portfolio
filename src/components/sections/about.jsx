import { ReviewOnScroll } from "../ReviewOnScroll";

export const About = () => {
    
    // Skills Data
    const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Typescript", "Tailwind CSS"];
    const backendSkills = ["Python", "Django", "PHP", "Node.js", "PostgreSQL", "MySQL", "Firebase"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
            <ReviewOnScroll>
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    
                    {/* SECTION HEADER */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-orbitron uppercase tracking-widest">
                            Personnel <span className="text-[#1ed760] text-glow-green">Dossier</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#1ed760] shadow-[0_0_10px_#1ed760]"></div>
                    </div>

                    {/* MAIN GRID LAYOUT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        
                        {/* LEFT COLUMN: Bio & Skills */}
                        <div className="space-y-8">
                            
                            {/* Bio Card */}
                            <div className="p-8 chamfered-card border border-[#1ed760]/20 bg-[#111] hover:border-[#1ed760]/50 transition-all duration-300 shadow-xl">
                                <p className="text-gray-300 leading-relaxed text-base font-mono">
                                    I am a <span className="text-white font-bold font-orbitron tracking-tight">Full-Stack Software Developer</span> dedicated to engineering clean, efficient, and scalable web solutions. 
                                    With deep expertise across modern frameworks like <span className="text-[#1ed760]">React, Next.js, Django, and Node.js</span>, I handle everything from dynamic front-end interfaces to secure, data-heavy back-end architectures. 
                                    My development approach focuses on solving complex, real-world problems through technology. Whether I am architecting comprehensive monitoring platforms, developing centralized data registries, or building engaging, gamified user experiences, I manage the full project lifecycle from initial concept to final deployment. 
                                    I take pride in writing clean, maintainable code and prioritizing UI/UX best practices to ensure that even the most complex systems remain incredibly intuitive for the end-user.
                                </p>
                            </div>

                            {/* Skills Section */}
                            <div className="space-y-6">
                                {/* Frontend */}
                                <div>
                                    <h3 className="text-lg font-bold mb-4 text-white font-orbitron tracking-widest uppercase">Visual Interface</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {frontendSkills.map((tech, key) => (
                                            <span key={key}
                                                className="bg-[#1ed760]/5 text-[#1ed760] py-2 px-4 border border-[#1ed760]/20 text-xs font-mono uppercase tracking-widest hover:bg-[#1ed760]/20 hover:border-[#1ed760]/50 transition-all cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/* Backend */}
                                <div>
                                    <h3 className="text-lg font-bold mb-4 text-white font-orbitron tracking-widest uppercase">Core Logic</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {backendSkills.map((tech, key) => (
                                            <span key={key}
                                                className="bg-[#1ed760]/5 text-[#1ed760] py-2 px-4 border border-[#1ed760]/20 text-xs font-mono uppercase tracking-widest hover:bg-[#1ed760]/20 hover:border-[#1ed760]/50 transition-all cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* RIGHT COLUMN: Education & Experience */}
                        <div className="space-y-8">
                            
                            {/* Education */}
                            <div className="p-8 chamfered-card border border-[#1ed760]/20 bg-[#111] hover:border-[#1ed760]/50 transition-all duration-300 shadow-xl">
                                <h3 className="text-xl font-bold mb-6 flex items-center font-orbitron tracking-widest uppercase text-white">
                                    <span className="text-[#1ed760] mr-3 text-lg">01.</span> Education
                                </h3>
                                <div className="ml-2 border-l-2 border-[#1ed760]/20 pl-6 space-y-2">
                                    <h4 className="text-lg font-bold text-white font-orbitron uppercase tracking-tight">B.S. Computer Science</h4>
                                    <p className="text-[#1ed760] font-mono text-sm uppercase">STI West Negros University</p>
                                    <p className="text-xs text-gray-500 font-mono">2022 - 2026</p>
                                    <p className="text-gray-400 mt-2 text-xs font-mono">CORE: DATA STRUCTURES, ALGORITHMS, WEB ARCHITECTURE, DATABASE SYSTEMS</p>
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="p-8 chamfered-card border border-[#1ed760]/20 bg-[#111] hover:border-[#1ed760]/50 transition-all duration-300 shadow-xl">
                                <h3 className="text-xl font-bold mb-6 flex items-center font-orbitron tracking-widest uppercase text-white">
                                    <span className="text-[#1ed760] mr-3 text-lg">02.</span> Operational History
                                </h3>
                                <div className="space-y-8">

                                    {/* Job 2 */}
                                    <div className="ml-2 border-l-2 border-[#1ed760]/20 pl-6 relative">
                                        <div className="absolute w-3 h-3 bg-[#1ed760] rounded-full -left-[7px] top-2 shadow-[0_0_10px_#1ed760]"></div>
                                        <h4 className="text-lg font-bold text-white font-orbitron uppercase tracking-tight">Part-time Developer</h4>
                                        <p className="text-[#1ed760] font-mono text-xs mb-2 uppercase">COS Devs | 2026 - Present</p>
                                        <p className="text-gray-400 text-xs font-mono leading-relaxed uppercase">
                                            COLLABORATING ON SCALABLE WEB SOLUTIONS AND SECURE BACKEND ARCHITECTURES FOR ENTERPRISE CLIENTS.
                                        </p>
                                    </div>

                                    {/* Job 1 */}
                                    <div className="ml-2 border-l-2 border-[#1ed760]/20 pl-6 relative">
                                        <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[7px] top-2"></div>
                                        <h4 className="text-lg font-bold text-white font-orbitron uppercase tracking-tight">System Developer Intern</h4>
                                        <p className="text-[#1ed760] font-mono text-xs mb-2 uppercase">DHSUD | FEBRUARY 2026 – APRIL 2026</p>
                                        <p className="text-gray-400 text-xs font-mono leading-relaxed uppercase">
                                            ENGINEERING, OPTIMIZATION, AND MAINTENANCE OF CENTRALIZED GOVERNMENT DATA SYSTEMS.
                                        </p>
                                    </div>

                                    {/* Job 3 */}
                                    <div className="ml-2 border-l-2 border-[#1ed760]/20 pl-6 relative">
                                        <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[7px] top-2"></div>
                                        <h4 className="text-lg font-bold text-white font-orbitron uppercase tracking-tight">Assistant Programmer</h4>
                                        <p className="text-gray-500 font-mono text-xs mb-2 uppercase">DEVINNOVATE | 2024 - 2025</p>
                                        <p className="text-gray-400 text-xs font-mono leading-relaxed uppercase">
                                            ASSISTED IN ARCHITECTING BACKEND MODULES AND DATABASE SCHEMAS USING PYTHON/DJANGO ECOSYSTEM.
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    );
};
