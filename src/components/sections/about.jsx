import { ReviewOnScroll } from "../ReviewOnScroll";

export const About = () => {
    
    // Skills Data
    const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Typescript", "Tailwind CSS"];
    const backendSkills = ["Python", "Django", "PHP", "Node.js", "MySQL", "Firebase"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
            <ReviewOnScroll>
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    
                    {/* SECTION HEADER */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            About <span className="text-[#1ed760]">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#1ed760] rounded-full"></div>
                    </div>

                    {/* MAIN GRID LAYOUT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        
                        {/* LEFT COLUMN: Bio & Skills */}
                        <div className="space-y-8">
                            
                            {/* Bio Card */}
                            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-[#1ed760]/50 transition-colors duration-300">
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    I am <span className="text-white font-semibold">Wenard Roy Barrera</span>, a proficient web developer with a strong foundation in <span className="text-[#1ed760]">Computer Science</span>. 
                                    I specialize in building dynamic, user-centric web applications using modern technologies like React and Django.
                                </p>
                            </div>

                            {/* Skills Section */}
                            <div className="space-y-6">
                                {/* Frontend */}
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-200">Frontend</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {frontendSkills.map((tech, key) => (
                                            <span key={key}
                                                className="bg-white/5 text-gray-300 py-2 px-4 rounded-full text-sm font-medium border border-white/10 hover:border-[#1ed760]/50 hover:text-[#1ed760] transition-all cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/* Backend */}
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-200">Backend</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {backendSkills.map((tech, key) => (
                                            <span key={key}
                                                className="bg-white/5 text-gray-300 py-2 px-4 rounded-full text-sm font-medium border border-white/10 hover:border-[#1ed760]/50 hover:text-[#1ed760] transition-all cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* RIGHT COLUMN: Education & Experience (Timeline Look) */}
                        <div className="space-y-8">
                            
                            {/* Education */}
                            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-[#1ed760]/50 transition-colors duration-300">
                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                    <span className="text-[#1ed760] mr-3 text-xl">01.</span> Education
                                </h3>
                                <div className="ml-2 border-l-2 border-white/10 pl-6 space-y-2">
                                    <h4 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h4>
                                    <p className="text-[#1ed760] font-medium">STI West Negros University</p>
                                    <p className="text-sm text-gray-500">2022 - 2026</p>
                                    <p className="text-gray-400 mt-2 text-sm">Relevant Coursework: Data Structures, Web Development, Database Management</p>
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-[#1ed760]/50 transition-colors duration-300">
                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                    <span className="text-[#1ed760] mr-3 text-xl">02.</span> Experience
                                </h3>
                                <div className="space-y-8">
                                    
                                    {/* Job 1 */}
                                    <div className="ml-2 border-l-2 border-white/10 pl-6 relative">
                                        <div className="absolute w-3 h-3 bg-[#1ed760] rounded-full -left-[7px] top-2 shadow-[0_0_10px_#1ed760]"></div>
                                        <h4 className="text-xl font-semibold text-white">Assistant Programmer</h4>
                                        <p className="text-[#1ed760] font-medium text-sm mb-2">DEVINNOVATE | 2024 - Present</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Assisted in developing backend modules using Python and Django. Collaborated with the team to design database schemas and API endpoints.
                                        </p>
                                    </div>

                                    {/* Job 2 (Internship or Previous Role) */}
                                    <div className="ml-2 border-l-2 border-white/10 pl-6 relative">
                                        <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[7px] top-2"></div>
                                        <h4 className="text-xl font-semibold text-white">Lead A Group</h4>
                                        <p className="text-gray-500 font-medium text-sm mb-2">Despicable Me | Early 2024</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Gained hands-on experience in frontend and backend technologies like CSS, Javascript and Firebase working on client-side interfaces.
                                        </p>
                                    </div>

                                    <div className="ml-2 border-l-2 border-white/10 pl-6 relative">
                                        <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[7px] top-2"></div>
                                        <h4 className="text-xl font-semibold text-white">UI/UX</h4>
                                        <p className="text-gray-500 font-medium text-sm mb-2">Light Triad | Early 2024</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Had an experience in designing user interfaces and improving user experience for web applications using Figma.
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