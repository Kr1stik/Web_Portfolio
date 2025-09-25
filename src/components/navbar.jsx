import { useEffect } from "react";
export const Navbar = ({isMenuOpen, setIsMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }, [isMenuOpen]);

    return <nav className="fixed top-0 w-full z-40 bg-[#19183B] text-[#708993] backdrop-blur-md border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold group transition duration-300">
                {" "}
                <span className="text-blue-500 group-hover:text-white transition-colors duration-300">Wenard</span>
                <span className="text-white group-hover:text-blue-500 transition-colors duration-300">.Barrera</span>
                </a>
                
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                onClick={() => setIsMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition duration-300 font-mono">
                        {" "}Home{" "}
                    </a>

                    <a href="#about" className="text-gray-300 hover:text-white transition duration-300">
                        {" "}About{" "}
                    </a>
                    
                    <a href="#project" className="text-gray-300 hover:text-white transition duration-300">
                        {" "}Projects{" "}
                    </a>
                    
                    <a href="#contacts" className="text-gray-300 hover:text-white transition duration-300">
                        {" "}Contact{" "}
                    </a>
                </div>
            </div>
        </div>
    </nav>
}