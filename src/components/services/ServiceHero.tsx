"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function ServiceHero() {
    return (
        <section className="relative px-6 py-24 md:py-32 flex justify-center overflow-hidden">
            {/* Background handled globally */}
            <div className="max-w-4xl w-full flex flex-col gap-6 text-center z-10 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-surface/50 border border-white/10 w-fit mx-auto backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Agency Services</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]"
                >
                    Building the future of <br />
                    <span className="text-shimmer">Play &amp; The Web</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
                >
                    We specialize in high-end Roblox experiences and cutting-edge web development. From immersive worlds to scalable platforms.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-8 flex justify-center gap-8"
                >
                    <a className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors border-b border-transparent hover:border-primary pb-1 group" href="#roblox">
                        Explore Roblox
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </a>
                    <a className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors border-b border-transparent hover:border-primary pb-1 group" href="#web">
                        Explore Web
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
