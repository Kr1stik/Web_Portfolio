import { useState, useEffect } from "react";
import './App.css';
import { LoadingScreen } from "./components/loadingScreen";
import "./index.css";
import { Navbar } from "./components/navbar";
import { MobileMenu } from "./components/mobileMenu";
import { Home } from "./components/sections/home";
import { About } from "./components/sections/about";
import { Contacts } from "./components/sections/contacts";
import { Projects } from "./components/sections/project";

function App() {
  const[isLoaded, setIsLoaded] = useState(false)
  const[isMenuOpen, setIsMenuOpen] = useState(false)

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
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{""}
        <div className={`min-h-screen transition-opacity duration-700 
          ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>

            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Home/>
            <About/>
            <Projects/>
            <Contacts/>
          </div>
      </>

  );
};


export default App;