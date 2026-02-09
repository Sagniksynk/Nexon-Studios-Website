"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        content: "Nexon Studios transformed our vague idea into a top-charting Roblox game. Their attention to detail in scripting and UI is unmatched.",
        author: "Alex Chen",
        role: "CEO, GameStudios",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIlUNdTTXYT9s-8yBm23FsSwHpz-U69IGWL8gCHj_yGu1sAl8OxPOHXJn1RCkP5ZHZ1xLflmDUUEIyrT-n-pRzGk9QaAhNid1axsGh9gY9ad_PrWJrrUGYdtty96oZQ93qUQM89NaHGrd-mAGvQrT-AIZlHM0lIGfNqQ0KGvvIjGAw7s7VQvobnld5y4LkkUQFz5dwjMzFkkKzi4B-vpjRKD7VAino12OUlTpLsayuEdEAsNwSeYD3WMUMsve5FqwoTvjdhKnOZNk"
    },
    {
        content: "The web application they built for our crypto startup is flawless. It handles high traffic effortlessly and looks incredible.",
        author: "Sarah Jenkins",
        role: "Founder, BlockChainX",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCw4ThCJxVNTE94Q_lYu9ZgLhtkrwYzmmQr2iZgqPbkdRktKBw_k45y-L9nJJuMm28NdNd4Tb03UaEdhIC2hlXrnzgnK1OTY0d8SDZTNN_RaA0zAHzPeHqDuby0zLPiz4fLvblmwuxsnAeCBS7VSrWOYaRwyyBqKbzIX54T-YHfPWJJprFryiTKF10mDJXm8nBwJPPPc8bibjz9vkez46pfuPcNkMHTDNskOD9qTSgv9xuPDK2iq8UdC4zYPKRVAXw067ukZGDHx9s",
        highlight: true
    },
    {
        content: "Professional, timely, and incredibly talented. They understood our brand vision immediately.",
        author: "Marcus Thorne",
        role: "Director, Thorne Creative",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWLusUJMlwvVscUmdzjE0RpIrMZ_2AI8qg7AUgmyZy02VSrf-bAsYgMoX1jUq_5iIUtDiq411rNvGT6-dCG-ackE2SF0hIfSJdHEAO6s_fBgIaob4HibhD94tBtQlylZBetU8W80APgq3Pjm4ZQUmGxVr2HWDPCEmpFBg6Dtu_CEKHV0YnFb7ei18hUuomiUV0IAaTmnPVRNuOQbj-c0I7T3Cc7SuFw9hMH_bDk4Kzna5NzZGOgSYRVTvfg9_TT0n_47Z8YC7r98A"
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Client Stories</h2>

            <div className="flex flex-col md:flex-row gap-8 md:gap-6">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`flex-1 glass-panel p-8 rounded-2xl relative mt-8 md:mt-0 hover:-translate-y-2 transition-transform duration-300 ${item.highlight ? 'bg-white/5' : ''}`}
                    >
                        <div className="absolute -top-6 left-8 bg-background p-2 rounded-full border border-white/10">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={item.avatar}
                                alt={item.author}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        </div>

                        <div className="mt-6">
                            <div className="flex text-primary mb-4 gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-300 italic mb-6 leading-relaxed">&quot;{item.content}&quot;</p>

                            <div>
                                <p className="font-bold text-white">{item.author}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">{item.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
