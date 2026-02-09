import Link from "next/link";
import { Zap, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative z-10 glass-panel border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {/* Brand */}
                    <div className="col-span-1 flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <Zap className="w-5 h-5 fill-current" />
                            </div>
                            <span className="font-bold text-xl text-white">Nexon Studios</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium digital experiences for the modern web and metaverse. We build the future.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Services</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-400">
                            <li><Link href="/services#roblox" className="hover:text-primary transition-colors">Roblox Development</Link></li>
                            <li><Link href="/services#web" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Consulting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-400">
                            <li><Link href="/work" className="hover:text-primary transition-colors">Our Work</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Legal</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Nexon Studios. All rights reserved.</p>
                    <p>Designed with passion in the Metaverse.</p>
                </div>
            </div>
        </footer>
    );
}
