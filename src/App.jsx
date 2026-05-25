import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './App.css';
import "./index.css";
import { LoadingScreen } from "./components/loadingScreen"; 
import { Navbar } from "./components/navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/home";
import { About } from "./components/sections/about";
import { Contacts } from "./components/sections/contacts";
import { Projects } from "./components/sections/project";
import Footer from "./components/sections/Footer";

const BGM_PATH = "/ben10-theme.mp3";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMuted, setIsMuted] = useState(false);
  const [isAudioUnlocked, setIsAudioUnlocked] = useState(false);
  
  const bgmRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Initialize BGM from public folder
    bgmRef.current = new Audio("/ben10-theme.mp3");
    bgmRef.current.loop = true;
    bgmRef.current.volume = 0.2;

    const startAudio = () => {
      if (bgmRef.current.paused) {
        bgmRef.current.play()
          .then(() => {
            setIsAudioUnlocked(true);
            ["mousedown", "keydown", "touchstart", "scroll"].forEach(e => 
              window.removeEventListener(e, startAudio)
            );
          })
          .catch(err => console.log("Playback delayed:", err));
      }
    };

    ["mousedown", "keydown", "touchstart", "scroll"].forEach(e => 
      window.addEventListener(e, startAudio)
    );

    return () => {
      ["mousedown", "keydown", "touchstart", "scroll"].forEach(e => 
        window.removeEventListener(e, startAudio)
      );
      if (bgmRef.current) {
        bgmRef.current.pause();
        bgmRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (bgmRef.current) {
      const newMutedState = !isMuted;
      bgmRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      
      // If user clicks toggle, we try to ensure it's playing
      if (!newMutedState && bgmRef.current.paused) {
        bgmRef.current.play().catch(e => console.error("Toggle play failed:", e));
      }
    }
  };

  return ( 
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="fixed inset-0 z-[200]"
          >
            <LoadingScreen onComplete={() => setIsLoaded(true)} />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0
        }}
        transition={{ duration: 0.8, ease: "linear" }}
        className={`${!isLoaded ? "h-screen overflow-hidden" : ""}`}
      >
        <Navbar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          menuOpen={isMenuOpen} 
          setMenuOpen={setIsMenuOpen}
          isMuted={isMuted}
          onToggleSound={toggleMute}
        />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Contacts setActiveSection={setActiveSection} />
        <Footer />
      </motion.div>
    </>
  );
};

export default App;
