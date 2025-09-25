export const Home = () => {
    return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#808080] to-[#3fada8] bg-clip-text text-transparent leading-right">
                Hi, I am Wenard Roy Barrera
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                A proficient web developer with skills in HTML, CSS, Django, 
                while developing more knowledge in coding and logical skills. 
                I am eager to contribute my knowledge to a collaborative team 
                while expanding my professional skills. I can also contribute my 
                proficiency in Figma and data management.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
                hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>

                <a href="#contacts" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all 
                duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10">Contact Me</a>

            </div>
        </div>
    </section>
    );  
};