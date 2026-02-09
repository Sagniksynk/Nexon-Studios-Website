"use client";

import { motion } from "framer-motion";
import {
    Terminal, Layers, Gamepad2, Package, Wand2, Megaphone,
    Layout, ShoppingCart, Cloud, Blocks, Cpu, Timer
} from "lucide-react";
import { cn } from "@/lib/utils";

const robloxServices = [
    { title: "Game Scripting", description: "Complex systems, data stores, and anti-cheat mechanics built for scale.", icon: Terminal },
    { title: "UI/UX Design", description: "Immersive, responsive user interfaces that enhance player engagement.", icon: Layers },
    { title: "Full Game Dev", description: "End-to-end production from initial concept to launch and live-ops.", icon: Gamepad2 },
    { title: "3D Modeling", description: "High-fidelity assets optimized for performance without sacrificing quality.", icon: Package },
    { title: "VFX & Animation", description: "Stunning particle effects and fluid character animations.", icon: Wand2 },
    { title: "Game Marketing", description: "User acquisition strategies, community management, and launch events.", icon: Megaphone },
];

const webServices = [
    { title: "Landing Pages", description: "High-converting, visually stunning landing pages designed for impact.", icon: Layout },
    { title: "E-commerce", description: "Custom Shopify and WooCommerce solutions that drive sales.", icon: ShoppingCart },
    { title: "SaaS Applications", description: "Scalable cloud-based software with robust backend architecture.", icon: Cloud },
    { title: "CMS Integration", description: "Seamless content management systems for easy updates and control.", icon: Blocks },
    { title: "API Development", description: "Building secure and efficient APIs to connect your services.", icon: Cpu },
    { title: "Performance", description: "Optimization for speed, SEO, and accessibility standards.", icon: Timer },
];

export function ServiceGrid() {
    return (
        <>
            {/* Roblox Section */}
            <section id="roblox" className="px-6 py-16 flex justify-center relative">
                <div className="max-w-6xl w-full flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Gamepad2 className="text-primary w-8 h-8" />
                                <h2 className="text-3xl font-bold text-white">Roblox Development</h2>
                            </div>
                            <p className="text-gray-400 max-w-md">Complete end-to-end production for immersive experiences on the Roblox platform.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {robloxServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-panel group flex flex-col gap-4 rounded-xl p-6 hover:-translate-y-1 transition-transform"
                            >
                                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-primary group-hover:bg-primary/20 group-hover:border-primary/20 transition-all duration-300">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-bold mb-1">{service.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Web Section */}
            <section id="web" className="px-6 py-16 flex justify-center relative">
                <div className="max-w-6xl w-full flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <GlobeIcon className="text-blue-500 w-8 h-8" />
                                <h2 className="text-3xl font-bold text-white">Web Development</h2>
                            </div>
                            <p className="text-gray-400 max-w-md">Modern, scalable web solutions tailored to your brand&apos;s digital presence.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {webServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-panel group flex flex-col gap-4 rounded-xl p-6 hover:-translate-y-1 transition-transform border-t-2 border-t-transparent hover:border-t-blue-500"
                            >
                                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-500/20 transition-all duration-300">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-bold mb-1">{service.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

function GlobeIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
    )
}
