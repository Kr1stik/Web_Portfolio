import { useState } from "react";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export const Contacts = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
            alert("[STATUS: 200] Message transmitted successfully!");
            setFormData({name: "", email: "", message: ""});
            setIsSubmitting(false);
        })
        .catch((error) => {
            console.log("TRANSMISSION FAILED...", error);
            alert("Transmission failed. Check developer console.");
            setIsSubmitting(false);
        });
    };

    return ( 
        <div className="w-full h-full overflow-y-auto no-scrollbar max-h-[calc(100vh-140px)] p-2 sm:p-4">
            {/* 2-Column Split Pane Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto min-h-full py-4">
                
                {/* LEFT COLUMN: Context */}
                <div className="flex flex-col justify-between space-y-5 text-left h-full py-2">
                    <div className="space-y-3">
                        <div className="text-xs font-mono text-[#1ed760]">
                            // ESTABLISH_CONNECTION
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                            Get In <br />
                            <span className="text-[#1ed760]">Touch</span>
                        </h2>

                        <p className="text-sm text-neutral-300 leading-relaxed max-w-md">
                            Have a technical project, contract inquiry, or open engineering role? Transmit a message directly or email me.
                        </p>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                        <div className="p-3.5 bg-[#0c0c0e] border border-gray-800 rounded-xl flex items-center space-x-3">
                            <div className="p-2.5 rounded-lg bg-[#1ed760]/10 text-[#1ed760] border border-[#1ed760]/30">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div>
                                <span className="text-[10px] text-gray-500 block">DIRECT_EMAIL</span>
                                <a href="mailto:wenardroybarrera@gmail.com" className="text-white hover:text-[#1ed760] transition-colors font-semibold">
                                    wenardroybarrera@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="p-3.5 bg-[#0c0c0e] border border-gray-800 rounded-xl flex items-center space-x-3">
                            <div className="p-2.5 rounded-lg bg-[#1ed760]/10 text-[#1ed760] border border-[#1ed760]/30">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div>
                                <span className="text-[10px] text-gray-500 block">LOCATION_NODE</span>
                                <span className="text-white font-semibold">
                                    Bacolod City, Philippines
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="text-xs font-mono text-gray-500">
                        &gt; System status: Online // Response latency ~24hrs
                    </div>
                </div>

                {/* RIGHT COLUMN: Interactive Contact Form Panel */}
                <div className="flex flex-col justify-center h-full py-2">
                    <div className="bg-[#0c0c0e] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                        
                        <div className="flex items-center justify-between px-4 py-2.5 bg-[#141418] border-b border-gray-800 text-xs font-mono text-gray-400">
                            <div className="flex items-center space-x-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#1ed760]/80 inline-block" />
                            </div>
                            <span>message_payload.json — POST</span>
                            <span className="text-[#1ed760] text-[10px]">READY</span>
                        </div>

                        <form className="p-6 space-y-4 font-mono" onSubmit={handleSubmit}>
                            
                            <div className="space-y-1">
                                <label htmlFor="name" className="text-xs text-gray-400 flex items-center gap-1">
                                    <span className="text-[#1ed760]">&gt;_</span>
                                    <span>"sender_name":</span>
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name" 
                                    required 
                                    value={formData.name} 
                                    className="w-full bg-black/60 border border-gray-800 rounded-lg px-3 py-2 text-xs text-[#1ed760] focus:outline-none focus:border-[#1ed760] transition-all placeholder-gray-700 font-mono" 
                                    placeholder="e.g. Jane Doe"
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="email" className="text-xs text-gray-400 flex items-center gap-1">
                                    <span className="text-[#1ed760]">&gt;_</span>
                                    <span>"sender_email":</span>
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" 
                                    required 
                                    value={formData.email}
                                    className="w-full bg-black/60 border border-gray-800 rounded-lg px-3 py-2 text-xs text-[#1ed760] focus:outline-none focus:border-[#1ed760] transition-all placeholder-gray-700 font-mono" 
                                    placeholder="e.g. jane@example.com"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="message" className="text-xs text-gray-400 flex items-center gap-1">
                                    <span className="text-[#1ed760]">&gt;_</span>
                                    <span>"message_body":</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message" 
                                    required
                                    value={formData.message}
                                    rows={3}
                                    className="w-full bg-black/60 border border-gray-800 rounded-lg px-3 py-2 text-xs text-[#1ed760] focus:outline-none focus:border-[#1ed760] transition-all placeholder-gray-700 resize-none font-mono" 
                                    placeholder="Write your transmission content here..."
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-[#1ed760] text-black font-bold text-xs py-2.5 px-4 rounded-lg border border-[#1ed760] transition-all hover:bg-white hover:border-white shadow-[0_0_15px_rgba(30,215,96,0.3)] flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
                                <span>{isSubmitting ? "TRANSMITTING..." : ">_ EXECUTE_TRANSMISSION"}</span>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};