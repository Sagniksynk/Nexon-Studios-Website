"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Cyber City Tycoon",
        category: "Roblox Game",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1eVltlaiN0pWgFRYilyXb_tJowvREHTaJv_c0725cqd5U15258O2EyFSw4uqTRRvi6RZum0l_Wx0JvCrV9n7IXaec4gdG3QslB1OECna_vk64L9NbMpvwonXL3Ost3OckpmSK0KwRyJfYRJTo__W_r0HIxPjJVbtGyUNFYb-77YWZi5n1o6fX-On8c9l44IoT6Sf-SJO9TA34vnGR9sT11sd1_Zf7aCY4_UZkySb3rp7uubB1UADDUSPSUuPrP08rJcECrg1BETQ",
        description: "Immersive tycoon experience with 15M+ visits.",
        badgeColor: "text-primary border-primary/30"
    },
    {
        title: "Nexus Finance",
        category: "Web App",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5k4YeR7HQQFJkg0pkKoK9SuvaocD-Vccrsb6VQuj84q-xJWuJFSBdT1RwEPe0JHOy3xZE28PMkVGJez2UQNlulo-Orpka3Qr-J8_7rlW6_6vyKqFZQ2CcvpAMNLrf_-kn06M6boDf08ST0FYM6DWUNmysnNCMMMElMWTC1JZ7a7hEPF_nwFk2vcCHA_58M0rrze8vk2PoVku4tJFSIvWpRzw7jzEaqQFDDTDRUzu4IBYH0xsP8L4BYkbmgSxLp9wOqfedb9Yp-ao",
        description: "Real-time crypto trading dashboard and analytics.",
        badgeColor: "text-blue-400 border-blue-400/30"
    },
    {
        title: "Streamline Agency",
        category: "Web Dev",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTDgOOkG_Ad6RhWVPXABDMMgV0LV4EYdoYtTH9mc6ay53Fz3iW0XKMq2AnXmSDHZ43Q-L1tdulIxXY7a6RsqpsPpKOu-w-x4a-6GQHGEEt5icANNCm4AILTaptF7eLI2hDdMc0qbG1okY6j3e96917n2iIbbozhRojTss2r9GeUSTEY-gRwTjAbfm3YBrccgMpgJjI1ykt1CwLKPlXf254nqfWS-Zpg6K-9PgsFGIqvcJocu3YKObl5LHGg7_TSUQbul3-bKAfxX4",
        description: "High-converting landing page for a marketing firm.",
        badgeColor: "text-blue-400 border-blue-400/30"
    },
    {
        title: "Island Adventure",
        category: "Roblox Experience",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5VlZluUieRKwyeOqqi0JI7Qjtaa-dDGlhKYosYV4rR5ZfzNltsFtGml5pe0Ax7MFpYgF0sZrOlKxu0rIbGKMJZYPR_Rnf-5jE86t0F8NuO8KeBbg8SVfbL20Y4zlBLtrq0K-WnM-24mMTTwkA46tLWnU0W0TrB7INliaFRAruGG_C9oQBKD79YGxYH0j2BxOVkhGO8zEupbYYLdXztdweBvKQkJ8xvpegopSHuG_IQuOOPNljU7Bq7SC5zqam4l7ADcRjHm67s9A",
        description: "Open-world exploration game with custom physics.",
        badgeColor: "text-primary border-primary/30"
    }
];

function TiltCard({ item }: { item: typeof projects[0] }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x);
    const mouseY = useSpring(y);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group cursor-pointer perspective-1000"
        >
            <div className="rounded-2xl overflow-hidden relative aspect-video border border-white/10 shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.image}
                />
                <div className={cn("absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border", item.badgeColor)}>
                    {item.category}
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-1 transition-transform duration-300 group-hover:translate-x-2">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
            </div>
        </motion.div>
    );
}

export function WorkSection() {
    return (
        <section id="work" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 md:gap-4">
                <div className="flex flex-col gap-2 max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold">Recent Work</h2>
                    <p className="text-gray-400 text-lg">Selected projects from our portfolio.</p>
                </div>
                <Link href="/work" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all group">
                    View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12">
                {projects.map((project, index) => (
                    <TiltCard key={index} item={project} />
                ))}
            </div>
        </section>
    );
}
