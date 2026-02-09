"use client";

import { motion } from "framer-motion";

const steps = [
    { number: "01", title: "Discovery", description: "We dive deep into your goals, audience, and requirements to build a solid foundation." },
    { number: "02", title: "Planning", description: "Creating detailed roadmaps, wireframes, and design systems for approval." },
    { number: "03", title: "Development", description: "Our experts bring the designs to life with clean, efficient, and scalable code." },
    { number: "04", title: "Delivery", description: "Testing, deployment, and handover with comprehensive documentation." },
];

export function ProcessSection() {
    return (
        <section className="px-6 py-20 flex justify-center relative overflow-hidden bg-black/20">
            <div className="max-w-6xl w-full flex flex-col gap-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">We follow a structured approach to ensure quality and transparency at every stage of development.</p>
                </div>

                <div className="relative mt-8">
                    <div className="absolute top-8 left-0 w-full h-1 bg-white/10 hidden md:block"></div>
                    <div className="absolute top-8 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div
                                    className={`w-16 h-16 rounded-full bg-[#1a1a1a] border-2 flex items-center justify-center font-bold text-xl mb-6 z-10 relative transition-all duration-300
                            ${index === 0
                                            ? 'border-primary text-primary shadow-[0_0_20px_rgba(255,110,66,0.2)]'
                                            : 'border-white/10 group-hover:border-primary text-white group-hover:text-primary'}`}
                                >
                                    {step.number}
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm px-4">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
