import { useState, useEffect } from "react";
import './App.css';
import "./index.css";
// 👇 Import the new Loading Screen
import { LoadingScreen } from "./components/loadingScreen"; 
import { Navbar } from "./components/navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/home";
import { About } from "./components/sections/about";
import { Contacts } from "./components/sections/contacts";
import { Projects } from "./components/sections/project";
import Footer from "./components/sections/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false); // Controls the loading screen
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.location.hash = "";
    }
  }, []);

  return ( 
    <>
      {/* 👇 Show loading screen until isLoaded is true */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      {/* 👇 Wrap the main app in a div that fades in once loading is complete */}
      <div 
        className={`transition-opacity duration-700 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0 h-screen overflow-hidden"
        }`}
      >
        <Navbar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          menuOpen={isMenuOpen} 
          setMenuOpen={setIsMenuOpen} 
        />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Contacts setActiveSection={setActiveSection} />
        <Footer />
      </div>
    </>
  );
};

export default App;