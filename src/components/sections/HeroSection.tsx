"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-4 md:px-8 overflow-hidden">
            {/* Background Effects - Moved to global layout */}

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium text-gray-300 border-white/10"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Now accepting new clients for Q4
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] max-w-5xl"
                >
                    We Build Digital <br />
                    <span className="text-shimmer">Experiences</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
                >
                    Nexon Studios is a premium creative agency specializing in immersive Roblox experiences and high-performance web applications for forward-thinking brands.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-4 mt-4"
                >
                    <Link
                        href="/contact"
                        className={cn(buttonVariants({ size: "lg" }), "rounded-xl text-lg h-14 px-8 group flex items-center gap-2")}
                    >
                        Get a Quote
                        <Zap className="w-5 h-5 fill-current" />
                    </Link>
                    <Link
                        href="/work"
                        className={cn(buttonVariants({ variant: "glass", size: "lg" }), "rounded-xl text-lg h-14 px-8 flex items-center gap-2")}
                    >
                        View Work
                        <Play className="w-5 h-5 fill-current" />
                    </Link>
                </motion.div>

                {/* Hero Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full h-[300px] md:h-[500px] mt-10 rounded-3xl overflow-hidden relative border border-white/10 glass-panel shadow-2xl"
                >
                    <div
                        className="absolute inset-0 opacity-60 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6KIBRYB03fT21kmu5MW8ddYdCqIq-Ix0SAv-iLg5OlpJ3mQfxocfB8n8wK5KJjUfJdxgrM0VkewTi7YsmKbPGySdHwAudFNTn5kO_p5qPYr03w2rH86iOMxVkSGalK82rkqAcnQtH1JgZUPqJIns3hKDNrd3XXhdJJhHPl0eQgpMKR9e8EjOJpfTGVM53NbCl1quRKDamfpPrIY4Y8Kzj2KNTcOqW7ZErHayeP7DVVLsKys2Ps8EZaVX8aquO9WAtZvVdaYTt0pk')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-center">
                        <div className="flex gap-8 md:gap-16 text-center glass-panel px-8 py-4 rounded-2xl border-white/5 bg-black/40 backdrop-blur-md">
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-white">20+</p>
                                <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Projects</p>
                            </div>
                            <div className="w-px bg-white/10 h-10 self-center"></div>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-white">10+</p>
                                <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Clients</p>
                            </div>
                            <div className="w-px bg-white/10 h-10 self-center"></div>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-white">1000+</p>
                                <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Visits</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
