import { useState } from "react";
import { ReviewOnScroll } from "../ReviewOnScroll";
import emailjs from 'emailjs-com';

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

        // 🔍 DEBUGGING: Check if keys are loaded
        console.log("Service ID:", import.meta.env.VITE_SERVICE_ID);
        console.log("Template ID:", import.meta.env.VITE_TEMPLATE_ID);
        console.log("Public Key:", import.meta.env.VITE_PUBLIC_KEY);

        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
            alert("Message Sent!");
            setFormData({name: "", email: "", message: ""});
            setIsSubmitting(false);
        })
        .catch((error) => {
            console.log("FAILED...", error); // Logs the actual error to console
            alert("Failed to send. Check console for details.");
            setIsSubmitting(false);
        });
    };

    return ( 
        <section id="contacts" className="min-h-screen flex items-center justify-center py-20 bg-black text-white relative overflow-hidden">
            
            {/* Background Gradient Glow (Subtle Green) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#1ed760]/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <ReviewOnScroll>    
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        
                        {/* LEFT SIDE: Contact Info & Text */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    Let's work <br />
                                    <span className="text-[#1ed760]">together.</span>
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    I'm currently available for freelance work and open to new projects. 
                                    If you have an idea for a web application, feel free to drop a message!
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#1ed760]/10 p-3 rounded-full text-[#1ed760]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <a href="mailto:your.email@example.com" className="text-lg hover:text-[#1ed760] transition-colors">
                                        wenardroybarrera@gmail.com
                                    </a>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#1ed760]/10 p-3 rounded-full text-[#1ed760]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-lg text-gray-300">
                                        Bacolod, Philippines
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: The Form */}
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="name" 
                                        required 
                                        value={formData.name} 
                                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1ed760] focus:ring-1 focus:ring-[#1ed760] transition-all placeholder-gray-600" 
                                        placeholder="e.g. John Doe"
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Your Email</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email" 
                                        required 
                                        value={formData.email}
                                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1ed760] focus:ring-1 focus:ring-[#1ed760] transition-all placeholder-gray-600" 
                                        placeholder="e.g. john@example.com"
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                                    <textarea
                                        id="message"
                                        name="message" 
                                        required
                                        value={formData.message}
                                        rows={4}
                                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1ed760] focus:ring-1 focus:ring-[#1ed760] transition-all placeholder-gray-600 resize-none" 
                                        placeholder="Write your message here..."
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-[#1ed760] text-black font-bold py-3 px-6 rounded-lg transition-all hover:bg-[#1db954] hover:shadow-[0_0_20px_rgba(30,215,96,0.3)] hover:-translate-y-1 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </ReviewOnScroll>
        </section>  
    );
};