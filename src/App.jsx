import { useState, useEffect } from "react";
import './App.css';
import "./index.css";
import { Navbar } from "./components/navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/home";
import { About } from "./components/sections/about";
import { Contacts } from "./components/sections/contacts";
import { Projects } from "./components/sections/project";
import Footer from "./components/sections/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Remove any hash from the URL on initial load
    if (window.location.hash) {
      window.location.hash = "";
    }
  }, []);

  useEffect(() => {
  window.scrollTo(0, 0);
  if (window.location.hash) {
    window.location.hash = "";
  }
}, []);

  return ( 
    <>
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} 
        menuOpen={isMenuOpen} 
        setMenuOpen={setIsMenuOpen} />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Contacts setActiveSection={setActiveSection} />
        <Footer />
    </>
  );
};


export default App;