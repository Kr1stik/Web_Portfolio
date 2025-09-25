export const Projects = () => {
    return ( 
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#808080] to-[#3fada8] bg-clip-text text-transparent">
                My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">POS SYSTEM</h3>
                        <p className="text-gray-400 mb-4">
                           A web-based Point of Sale (POS) system built with HTML, CSS and Javascript
                        </p>
                        <div>
                            {["React", "Django", "Tailwind CSS"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                {tech}
                                </span>    
                            ))}
                        </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Movieboxd</h3>
                        <p className="text-gray-400 mb-4">
                           A web-based movie review application built with Django, Python and Tailwind CSS
                        </p>
                        <div>
                             {["Python", "Django", "Tailwind CSS"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                {tech}
                                </span>    
                            ))}
                        </div>
                        <div>
                            <a href="#" className="text-blue-400 hover:text"></a>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    );
};

                    