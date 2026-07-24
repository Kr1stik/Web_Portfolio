import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './App.css';
import "./index.css";
import { LoadingScreen } from "./components/loadingScreen"; 
import { Navbar } from "./components/navbar";
import { Home } from "./components/sections/home";
import { About } from "./components/sections/about";
import { Contacts } from "./components/sections/contacts";
import { Projects } from "./components/sections/project";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentView, setCurrentView] = useState("home");

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <Home setCurrentView={setCurrentView} />;
      case "about":
        return <About setCurrentView={setCurrentView} />;
      case "projects":
        return <Projects setCurrentView={setCurrentView} />;
      case "contacts":
        return <Contacts setCurrentView={setCurrentView} />;
      default:
        return <Home setCurrentView={setCurrentView} />;
    }
  };

  return ( 
    <div className="bg-[#0a0a0a] text-white h-screen w-screen overflow-hidden font-sans selection:bg-[#1ed760] selection:text-black flex flex-col justify-between relative">
      
      {/* 🌟 ISOLATED BACKGROUND ANIMATION (Outside AnimatePresence - Zero re-render lag) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,215,96,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,215,96,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Slow-moving Glowing Green Orb 1 */}
        <motion.div
          animate={{
            x: [0, 60, -50, 0],
            y: [0, -70, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#1ed760]/10 rounded-full blur-[140px] transform-gpu pointer-events-none"
        />

        {/* Slow-moving Glowing Green Orb 2 */}
        <motion.div
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 60, -60, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] transform-gpu pointer-events-none"
        />
      </div>

      {/* Loading Screen Overlay */}
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200]"
          >
            <LoadingScreen onComplete={() => setIsLoaded(true)} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Application Shell */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 h-full flex flex-col justify-between overflow-hidden"
      >
        {/* Top Minimalist IDE Header Bar */}
        <header className="px-6 py-3 border-b border-gray-800/80 bg-black/40 backdrop-blur-md flex items-center justify-between text-xs font-mono text-gray-400 shrink-0 z-20">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1ed760]/80 inline-block" />
            <span className="ml-2 text-gray-300 font-semibold">kr1stik@dev-portfolio</span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-[#1ed760] bg-[#1ed760]/10 px-2 py-0.5 rounded border border-[#1ed760]/30 text-[11px]">
              view: {currentView}.tsx
            </span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="hidden sm:inline text-gray-500">FULL-STACK DEVELOPER</span>
          </div>
        </header>

        {/* Center View Area (GPU Accelerated View Switching) */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-4 flex items-center justify-center overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full h-full flex items-center justify-center overflow-hidden gpu-layer"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom Centered macOS Dock Navigation */}
        <Navbar 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
        />
      </motion.div>
    </div>
  );
};

export default App;
