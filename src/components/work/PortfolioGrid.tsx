"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, LayoutGrid, Gamepad2, Code, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const allProjects = [
    {
        title: "Adventure Quest RPG",
        category: "Roblox",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1eVltlaiN0pWgFRYilyXb_tJowvREHTaJv_c0725cqd5U15258O2EyFSw4uqTRRvi6RZum0l_Wx0JvCrV9n7IXaec4gdG3QslB1OECna_vk64L9NbMpvwonXL3Ost3OckpmSK0KwRyJfYRJTo__W_r0HIxPjJVbtGyUNFYb-77YWZi5n1o6fX-On8c9l44IoT6Sf-SJO9TA34vnGR9sT11sd1_Zf7aCY4_UZkySb3rp7uubB1UADDUSPSUuPrP08rJcECrg1BETQ",
        description: "An open-world fantasy RPG experience with custom combat systems and immersive storytelling."
    },
    {
        title: "StreamerHub",
        category: "Web Dev",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5k4YeR7HQQFJkg0pkKoK9SuvaocD-Vccrsb6VQuj84q-xJWuJFSBdT1RwEPe0JHOy3xZE28PMkVGJez2UQNlulo-Orpka3Qr-J8_7rlW6_6vyKqFZQ2CcvpAMNLrf_-kn06M6boDf08ST0FYM6DWUNmysnNCMMMElMWTC1JZ7a7hEPF_nwFk2vcCHA_58M0rrze8vk2PoVku4tJFSIvWpRzw7jzEaqQFDDTDRUzu4IBYH0xsP8L4BYkbmgSxLp9wOqfedb9Yp-ao",
        description: "All-in-one analytics platform for content creators with real time data visualization."
    },
    {
        title: "Mega Tycoon",
        category: "Roblox",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5VlZluUieRKwyeOqqi0JI7Qjtaa-dDGlhKYosYV4rR5ZfzNltsFtGml5pe0Ax7MFpYgF0sZrOlKxu0rIbGKMJZYPR_Rnf-5jE86t0F8NuO8KeBbg8SVfbL20Y4zlBLtrq0K-WnM-24mMTTwkA46tLWnU0W0TrB7INliaFRAruGG_C9oQBKD79YGxYH0j2BxOVkhGO8zEupbYYLdXztdweBvKQkJ8xvpegopSHuG_IQuOOPNljU7Bq7SC5zqam4l7ADcRjHm67s9A",
        description: "Build your empire in this fast-paced tycoon game featuring cooperative gameplay mechanics."
    },
    {
        title: "TechStartup",
        category: "Web Dev",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTDgOOkG_Ad6RhWVPXABDMMgV0LV4EYdoYtTH9mc6ay53Fz3iW0XKMq2AnXmSDHZ43Q-L1tdulIxXY7a6RsqpsPpKOu-w-x4a-6GQHGEEt5icANNCm4AILTaptF7eLI2hDdMc0qbG1okY6j3e96917n2iIbbozhRojTss2r9GeUSTEY-gRwTjAbfm3YBrccgMpgJjI1ykt1CwLKPlXf254nqfWS-Zpg6K-9PgsFGIqvcJocu3YKObl5LHGg7_TSUQbul3-bKAfxX4",
        description: "High-converting landing page with 3D WebGL interactions and smooth scroll animations."
    },
    {
        title: "Neon City RP",
        category: "Roblox",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2_q1b1lCJO-4tE7uTq2377LwO0o5aTj8mR0IqOQeH1kL2R3J0G6P2E5oQ5N9a0Y4u8Z1L8K7X6W3V9M2P5R4d7S1E0F8G6H9A3D2C5B4F71J6K9M0N8O3P2Q5R7T4U1V6W9X0Y3Z2A5B8C1D4E7F0G3H6I9J2K5L8M1N4O7P0Q3R6S9T2U5V8W1X4Y7Z0A3B6C9D2E5F8G1H4I7J0K3L6M9N2O5P8Q1R4S7T0U3V6W9X2Y5Z8",
        description: "A futuristic roleplay environment pushing the boundaries of Roblox's lighting engine."
    },
    {
        title: "Nexon Dashboard",
        category: "Web Dev",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7k1L8R9Q3M0P2O4N6V1W8X3Y5Z7a2b5c8d1e3f6g9h2i5j8k1l4m7n0o3p6q9r2s5t8u1v4w7x0y3z6a9b2c5d8e1f4g7h0i3j6k9l2m5n8o1p4q7r0s3t6u9v2w5x8y1z4a7b0c3d6e9f2g5h8i1j4k7l0m3n6o9p2q5r8s1t4u7v0w3x6y9z2a5b8c1d4e7f0g3h6i9j2k5l8m1n4o7p0q3r6s9t2u5v8w1x4y7z0",
        description: "Internal tool management system for agency project tracking and client communication."
    }
];

export function PortfolioGrid() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = allProjects.filter(project => {
        const matchesFilter = activeFilter === "All" || project.category === activeFilter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="w-full max-w-7xl mx-auto px-4 pb-24">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
                {/* Search */}
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
                    <button
                        onClick={() => setActiveFilter("All")}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                            activeFilter === "All" ? "bg-primary text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        <LayoutGrid className="w-4 h-4" />
                        All
                    </button>
                    <button
                        onClick={() => setActiveFilter("Roblox")}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                            activeFilter === "Roblox" ? "bg-primary text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        <Gamepad2 className="w-4 h-4" />
                        Roblox
                    </button>
                    <button
                        onClick={() => setActiveFilter("Web Dev")}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                            activeFilter === "Web Dev" ? "bg-primary text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        <Code className="w-4 h-4" />
                        Web Dev
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-surface/50"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 z-10" />
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300 group-hover:-translate-y-2">
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Load More */}
            <div className="mt-16 flex justify-center">
                <Button variant="outline" size="lg" className="rounded-xl border-white/10 bg-black/20 hover:bg-white/5 gap-2 group">
                    Load More Projects
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
}
