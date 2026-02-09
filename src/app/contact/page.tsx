import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { Globe } from "@/components/ui/globe";

export default function ContactPage() {
    return (
        <main className="min-h-screen relative flex flex-col">
            <Navbar />
            <div className="flex-grow pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">Let&apos;s Build Together</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                            <span className="text-white">Get in </span>
                            <span className="text-primary">Touch</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Ready to elevate your digital presence? Whether it&apos;s a Roblox experience or a high-performance web platform, we&apos;re here to help.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Left Column: Form */}
                        <div className="bg-surface/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
                            <div className="flex justify-between items-start mb-8">
                                <h2 className="text-2xl font-bold text-primary">Send a Message</h2>
                            </div>

                            <form className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <input
                                            type="text"
                                            className="bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <input
                                            type="email"
                                            className="bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 relative">
                                    <label className="text-xs font-bold text-primary uppercase ml-1">Service Interest</label>
                                    <select className="bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all cursor-pointer">
                                        <option value="" className="bg-surface text-gray-400">Select a service...</option>
                                        <option value="roblox" className="bg-surface">Roblox Development</option>
                                        <option value="web" className="bg-surface">Web Development</option>
                                        <option value="ui" className="bg-surface">UI/UX Design</option>
                                    </select>
                                    <div className="absolute right-4 bottom-3.5 pointer-events-none text-gray-500">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <textarea
                                        rows={5}
                                        className="bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all resize-none"
                                        placeholder="Tell us about your project"
                                    ></textarea>
                                </div>

                                <Button size="lg" className="w-fit mt-2 rounded-full px-8 py-6 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
                                    Send Message
                                    <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                </Button>
                            </form>
                        </div>

                        {/* Right Column: Info Cards */}
                        <div className="flex flex-col gap-6">
                            <div className="mb-2">
                                <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
                                <p className="text-gray-400 text-sm">Reach out directly through our priority channels.</p>
                            </div>

                            {/* Email Card */}
                            <div className="group bg-surface/30 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/5 transition-all cursor-pointer">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-lg">Email Us</p>
                                        <p className="text-gray-400 text-sm mb-1">contact@nexonstudios.com</p>
                                        <p className="text-xs text-gray-500">Response typically within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            {/* Discord Card */}
                            <div className="group bg-surface/30 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/5 transition-all cursor-pointer">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-full bg-[#5865F2]/10 flex items-center justify-center text-[#5865F2] group-hover:bg-[#5865F2] group-hover:text-white transition-colors">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-lg">Join Discord</p>
                                        <p className="text-gray-400 text-sm mb-1">Nexon Community Server</p>
                                        <p className="text-xs text-gray-500">Open a direct support ticket</p>
                                    </div>
                                </div>
                            </div>

                            {/* HQ Card */}

                            <div className="bg-black/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl relative overflow-hidden h-64 flex items-end">
                                {/* Dot Pattern Background */}
                                <div className="absolute inset-0 pointer-events-none z-0 opacity-20" style={{
                                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                                    backgroundSize: '20px 20px'
                                }}></div>

                                {/* Globe Background */}
                                <div className="absolute inset-0 z-10 flex items-center justify-center">
                                    <Globe className="w-full h-full scale-[1.5] translate-y-12" />
                                </div>

                                {/* Content */}
                                <div className="relative z-20 pointer-events-none flex items-center gap-3 w-full">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 backdrop-blur-sm border border-primary/20">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-lg">Digital Headquarters</p>
                                        <p className="text-sm text-gray-500">Global Remote Agency</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
