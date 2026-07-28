import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTerminal, 
  faPaperPlane, 
  faCompress,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

export const TerminalChat = ({ setCurrentView, onMinimize }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "System initialized. Welcome to Wenard's Terminal AI Assistant v2.5.0.\nType 'help' or ask any question about my technical stack, experience, projects, or workflow.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom on new messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle smart automated responses for developer portfolio queries
  const generateBotResponse = (query) => {
    const q = query.toLowerCase().trim();

    if (q === "help" || q === "commands" || q === "?") {
      return `[AVAILABLE COMMANDS & TOPICS]\n` +
        `• bio       - Profile, education & core specializations\n` +
        `• stack     - Web, mobile, backend & data management toolchain\n` +
        `• projects  - Key engineering systems (StainScan Web, SENTINELS, DHSUD)\n` +
        `• exp       - Employment history (DHSUD Internship, STI Data Encoder)\n` +
        `• contact   - Location & professional links\n` +
        `• clear     - Clear terminal output buffer\n\n` +
        `Or ask any technical question in plain English!`;
    }

    if (q.includes("bio") || q.includes("who") || q.includes("about") || q.includes("profile") || q.includes("wenard")) {
      return `[PROFESSIONAL PROFILE & PRIMARY FOCUS]\n` +
        `• Name: Wenard Roy F. Barrera\n` +
        `• Location: Bacolod City, Philippines\n` +
        `• Education: B.S. in Computer Science @ STI West Negros University\n` +
        `• Core Specializations: Software Development, Web Development, Mobile Development, and Data Management\n` +
        `• System Design: Expertise in building robust offline-first web and desktop applications.`;
    }

    if (q.includes("stack") || q.includes("tech") || q.includes("skills") || q.includes("language") || q.includes("framework") || q.includes("tool") || q.includes("data")) {
      return `[TECHNICAL CAPABILITIES & TOOLCHAIN]\n` +
        `• System Design: Offline-first web & desktop application architecture\n` +
        `• Web & Front-End: React, Vue, TypeScript, Tailwind CSS\n` +
        `• Back-End: Django, NestJS\n` +
        `• Databases: PostgreSQL, SQLite\n` +
        `• Developer & AI Tools: Git, GitHub, Antigravity CLI, Claude, OpenAI, Vercel, Vite, Figma, VS Code\n` +
        `• Administrative & Data Skills: Meticulous data entry, Microsoft 365, Google Workspace, Excel & Google Sheets`;
    }

    if (q.includes("stainscan") || q.includes("stain") || q.includes("project") || q.includes("sentinels") || q.includes("hredrd") || q.includes("hoa") || q.includes("work")) {
      return `[KEY PROJECTS & ENGINEERING IMPACT]\n` +
        `1. StainScan (Image Processing Web System):\n` +
        `   Engineered and deployed the complete web application system using Next.js, PostgreSQL, React, TypeScript, Tailwind CSS, and Vercel (designed alongside the project's mobile counterpart; web system developed exclusively by Wenard).\n` +
        `   • Live Deployment: https://stain-scan.vercel.app/\n` +
        `   • Source Code: https://github.com/Kr1stik/StainScan\n\n` +
        `2. DHSUD NIR Suite (Internship):\n` +
        `   Delivered two primary government registry systems — the Homeowners Association (HOA) Registry and the Environmental/Land Use Planning System using React, Vue, Django, NestJS, SQLite, and PostgreSQL.\n\n` +
        `3. SENTINELS (Academic Thesis):\n` +
        `   Core full-stack developer (role: devinnovate) over an intensive 1.5-year (18-month) engineering lifecycle handling full-stack integration and complex relational mapping.`;
    }

    if (q.includes("experience") || q.includes("exp") || q.includes("dhsud") || q.includes("sti") || q.includes("encoder") || q.includes("intern") || q.includes("job")) {
      return `[EMPLOYMENT & INTERNSHIP EXPERIENCE]\n` +
        `• Department of Human Settlements and Urban Development (DHSUD NIR - Internship):\n` +
        `  Sole formal software internship. Designed and deployed offline-first applications (HOA Registry & Environmental/Land Use Planning System).\n\n` +
        `• STI West Negros University (June 2025 - Data Encoder):\n` +
        `  Managed and encoded high volumes of student records into centralized university systems, streamlining digital enrollment workflows under strict data privacy protocols.\n\n` +
        `• Co-Founder & Developer @ COS Devs (2026 - Present):\n` +
        `  Directing software development teams & scalable client architectures.`;
    }

    if (q.includes("contact") || q.includes("location") || q.includes("bacolod") || q.includes("email") || q.includes("hire") || q.includes("social")) {
      return `[LOCATION & CONTACT]\n` +
        `• Location: Bacolod City, Philippines\n` +
        `• Education: STI West Negros University\n` +
        `• GitHub: github.com/Kr1stik\n` +
        `• LinkedIn: linkedin.com/in/wenard-roy-barrera-570171290/`;
    }

    // Command/Keyword Not Found Error Response
    return `[ERROR 404]: Keyword or command '${query}' not found in system registry.\n\n` +
      `Type 'help' or 'commands' to view supported topics (e.g., 'bio', 'stack', 'projects', 'exp', 'contact').`;
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!input.trim() || isTyping) return;

    const userQuery = input.trim();
    if (userQuery.toLowerCase() === "clear") {
      setMessages([]);
      setInput("");
      return;
    }

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: userQuery,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI network delay & typing response
    setTimeout(() => {
      const responseText = generateBotResponse(userQuery);
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-2 sm:p-4 font-sans">
      {/* Floating Terminal Window */}
      <div className="w-full max-w-4xl h-[75vh] min-h-[480px] max-h-[680px] bg-[#0a0a0a] border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl">
        
        {/* macOS Style Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#141418] border-b border-gray-800 text-xs font-mono text-gray-400 shrink-0">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setCurrentView ? setCurrentView("home") : (onMinimize && onMinimize())}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group transition-all cursor-pointer shadow-[0_0_6px_rgba(239,68,68,0.4)]"
              title="Close Terminal (Return to Home)"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[9px] font-bold text-red-950 leading-none select-none">✕</span>
            </button>
            <button 
              onClick={() => setCurrentView ? setCurrentView("home") : (onMinimize && onMinimize())}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center group transition-all cursor-pointer shadow-[0_0_6px_rgba(245,158,11,0.4)]"
              title="Minimize Terminal"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[9px] font-bold text-yellow-950 leading-none select-none">−</span>
            </button>
            <button 
              className="w-3 h-3 rounded-full bg-[#1ed760] hover:bg-emerald-400 flex items-center justify-center group transition-all cursor-pointer shadow-[0_0_6px_rgba(30,215,96,0.4)]"
              title="Maximize Terminal"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold text-emerald-950 leading-none select-none">+</span>
            </button>
          </div>

          <div className="flex items-center space-x-2 text-neutral-300 font-semibold">
            <FontAwesomeIcon icon={faTerminal} className="text-[#1ed760] text-xs" />
            <span>root@wenard-assistant:~ (zsh)</span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-[#1ed760] bg-[#1ed760]/10 px-2 py-0.5 rounded border border-[#1ed760]/30 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1ed760] animate-pulse" />
              ONLINE
            </span>
            {onMinimize && (
              <button 
                onClick={onMinimize} 
                className="text-gray-400 hover:text-white transition-colors p-1"
                title="Minimize Window"
              >
                <FontAwesomeIcon icon={faCompress} />
              </button>
            )}
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto no-scrollbar space-y-4 font-mono text-xs sm:text-sm">
          {messages.length === 0 && (
            <div className="text-gray-600 text-center py-8">
              // Terminal buffer cleared. Type a message or 'help' to start.
            </div>
          )}

          {messages.map((msg) => (
            <div 
              key={msg.id}
              className={`flex flex-col space-y-1 ${
                msg.sender === "user" ? "items-end text-right" : "items-start text-left"
              }`}
            >
              {/* Message Header Prompt */}
              <div className="flex items-center gap-2 text-[11px] text-gray-500 select-none">
                {msg.sender === "bot" ? (
                  <span className="text-[#1ed760] font-bold">root@wenard:~#</span>
                ) : (
                  <span className="text-neutral-400 font-bold">visitor@client:$</span>
                )}
                <span>[{msg.timestamp}]</span>
              </div>

              {/* Message Bubble Body */}
              <div 
                className={`max-w-[85%] sm:max-w-[75%] px-3.5 py-2.5 rounded-xl whitespace-pre-wrap leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-white/10 text-white border border-white/15 rounded-tr-none shadow-md font-sans"
                    : "bg-black/60 text-[#1ed760] border border-[#1ed760]/30 rounded-tl-none font-mono shadow-[0_0_12px_rgba(30,215,96,0.08)]"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Simulated Loading Indicator */}
          {isTyping && (
            <div className="flex flex-col items-start space-y-1">
              <div className="text-[11px] text-[#1ed760] select-none font-bold">
                root@wenard:~#
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-black/60 border border-[#1ed760]/30 text-[#1ed760] flex items-center gap-2">
                <span className="text-xs font-mono tracking-wider animate-pulse">Fetching data...</span>
                <span className="inline-block w-2 h-4 bg-[#1ed760] animate-ping" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Terminal Input Form */}
        <form 
          onSubmit={handleSend}
          className="p-3 sm:p-4 bg-[#0e0e12] border-t border-gray-800 flex items-center gap-2 shrink-0"
        >
          <div className="flex items-center text-[#1ed760] font-mono text-xs sm:text-sm pl-2 select-none shrink-0">
            <FontAwesomeIcon icon={faAngleRight} className="mr-1 text-neutral-500" />
            <span className="font-bold">input&gt;</span>
          </div>

          <input 
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command or question (e.g., 'stack', 'projects', 'exp')..."
            className="flex-1 bg-black/50 text-white font-mono text-xs sm:text-sm px-3 py-2 rounded-xl border border-gray-800 focus:border-[#1ed760] focus:shadow-[0_0_12px_rgba(30,215,96,0.3)] focus:outline-none transition-all placeholder:text-gray-600"
          />

          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="px-4 py-2 bg-[#1ed760] hover:bg-white text-black font-bold font-mono text-xs rounded-xl shadow-[0_0_12px_rgba(30,215,96,0.3)] hover:shadow-white/20 transition-all disabled:opacity-40 disabled:hover:bg-[#1ed760] disabled:cursor-not-allowed flex items-center gap-2 shrink-0"
          >
            <span>SEND</span>
            <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
          </button>
        </form>

      </div>
    </div>
  );
};
