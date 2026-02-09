"use client";

import { motion } from "framer-motion";
import { Gamepad2, Code2, Globe, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Roblox Development",
        description: "Full-cycle game production, Luau scripting, 3D modeling, and immersive environment design for the metaverse.",
        icon: Gamepad2,
        className: "md:col-span-6 lg:col-span-7",
        color: "text-primary",
        bgColor: "bg-primary/20",
        borderColor: "border-primary/20",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0mpPHUwzR4EmN6qBabdEfdcoSZScS62M0j_k07YbiuJFIQaJ8u_8S-eX8AdYg_vq2nBWHSGJkiTn8tcA232w72sF1obrtz1_2t74Eu8F5_YfKQ7uIH9rPNl70NppTmMqE4K3xYdiWcNcVp2cwz5NYK-l8IiLMQxhrZhohrTLO1ONk53TcTzTCx0f_czU-GKoZcM_1LqElOQHJQDjAlPng-8Kd2HTn1yTEOc5p_D_GZyrZZ_bom_73eNB3-1lJKY_4fsUoIOrCzZk"
    },
    {
        title: "Luau & React",
        description: "We utilize modern frameworks like Roact and Knit for scalable game architecture.",
        icon: Code2,
        className: "md:col-span-3 lg:col-span-5 border-t-4 border-t-primary",
        color: "text-yellow-400",
        bgColor: "bg-white/5",
        borderColor: "border-white/10",
        number: "01"
    },
    {
        title: "Full-Stack Web",
        description: "Next.js, Tailwind, and Node.js solutions built for speed, SEO, and scalability.",
        icon: Server,
        className: "md:col-span-3 lg:col-span-5 border-t-4 border-t-blue-500",
        color: "text-blue-400",
        bgColor: "bg-white/5",
        borderColor: "border-white/10",
        number: "02"
    },
    {
        title: "Web Development",
        description: "High-performance websites, custom web applications, and backend systems tailored to your business needs.",
        icon: Globe,
        className: "md:col-span-6 lg:col-span-7",
        color: "text-blue-400",
        bgColor: "bg-blue-500/20",
        borderColor: "border-blue-500/20",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3wBO_frl_Ia3qo7TWVij6Dj2mIjMmQJ-VOUykUXcpUZn-ET5ZSIMua0hxbjn3TlpTnxgqNz1kzIvyPxNzdXEj7b8ujZTH41qhTFMcajjSVACzSyO2_VqIn_AY4lr_tx7JRqFZ7chtWC3mmo2-d8pMqgDOlnd0iwr6d8vdhHwn7LADxD4cVVm5rd85s5KrF7mlRPDh97jcou-rWXBZpuU80h1oX7jb2RbN0b7W7WW2xCOScPXNw6wXGR99-6Cypg-QCG_FgP1BuwY"
    }
];

export function ServicesSection() {
    return (
        <section id="services" className="py-20 relative px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col gap-6 mb-16">
                <h2 className="text-3xl md:text-5xl font-bold">What We Do</h2>
                <p className="text-gray-400 max-w-xl text-lg">
                    We combine cutting-edge technology with creative design to deliver unparalleled digital solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[300px]">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={cn(
                            "glass-panel rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between",
                            service.className
                        )}
                    >
                        {service.image && (
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt={service.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                                    src={service.image}
                                />
                            </div>
                        )}

                        <div className={cn("relative z-20 flex flex-col justify-between h-full", !service.image && "justify-start gap-4")}>
                            <div className="flex justify-between items-start">
                                <div className={cn("p-3 rounded-xl w-fit backdrop-blur-md border", service.bgColor, service.borderColor, service.color)}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                {service.number && (
                                    <span className="text-4xl font-black text-white/10">{service.number}</span>
                                )}
                            </div>

                            <div className={cn(service.image ? "mt-auto" : "")}>
                                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{service.title}</h3>
                                <p className="text-gray-300 max-w-md text-sm md:text-base">{service.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
