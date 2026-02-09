"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl py-20 px-6 text-center border border-white/10 glass-panel"
            >
                {/* Background Gradients */}
                <div className="absolute inset-0 bg-primary/10"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/40 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight">Ready to Level Up?</h2>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Let&apos;s build something extraordinary together. Whether it&apos;s the next hit Roblox game or a scalable web platform.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-xl w-full sm:w-auto">
                            Start Your Project
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-xl border-white/20 bg-transparent hover:bg-white/5 text-white w-full sm:w-auto">
                            Schedule a Call
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
