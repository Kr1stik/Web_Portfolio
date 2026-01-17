import { useState } from "react"; // 1. Import useState
import { ReviewOnScroll } from "../ReviewOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import pfpImg from "../../assets/pfp.png"; 

export const Home = ({ setActiveSection }) => {
  // 2. State to track if the image is flipped
  const [isFlipped, setIsFlipped] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contacts"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
      <ReviewOnScroll>
        <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0">
          
          {/* LEFT SIDE: TEXT */}
          <div className="md:w-1/2 z-10 text-center md:text-left mt-10 md:mt-0">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
              Wenard Roy <br /> Barrera
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-6 font-medium">
              Aspiring <span className="text-[#1ed760] font-bold">Web Developer</span> from Philippines
            </p>

            <div className="flex justify-center md:justify-start space-x-6 mb-10">
                {navItems.map((item) => (
                    <a 
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={(e) => {
                            e.preventDefault();
                            const section = document.querySelector(`#${item.toLowerCase()}`);
                            section?.scrollIntoView({ behavior: "smooth" });
                            setActiveSection(item.toLowerCase());
                        }}
                        className="text-gray-400 hover:text-white transition-colors text-lg font-medium relative group"
                    >
                        {item}
                        <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#1ed760] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </a>
                ))}
            </div>

            <div className="flex justify-center md:justify-start space-x-6 text-gray-400">
               <a href="#" className="hover:text-[#1ed760] transition text-2xl"><FontAwesomeIcon icon={faFacebook} /></a>
               <a href="#" className="hover:text-[#1ed760] transition text-2xl"><FontAwesomeIcon icon={faInstagram} /></a>
               <a href="#" className="hover:text-[#1ed760] transition text-2xl"><FontAwesomeIcon icon={faGithub} /></a>
               <a href="#" className="hover:text-[#1ed760] transition text-2xl"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="w-[300px] md:w-[450px] relative z-10">
                <img 
                  src={pfpImg} 
                  alt="Wenard Roy Barrera" 
                  // 3. Add onClick handler
                  onClick={() => setIsFlipped(!isFlipped)}
                  // 4. Update className to include transform logic
                  className={`
                    w-full h-auto object-contain 
                    grayscale hover:grayscale-0 
                    transition-all duration-700 ease-in-out drop-shadow-2xl cursor-pointer
                    ${isFlipped ? "scale-x-[-1]" : ""} 
                  `}
                />
            </div>
          </div>

        </div>
      </ReviewOnScroll>
    </section>
  );
};