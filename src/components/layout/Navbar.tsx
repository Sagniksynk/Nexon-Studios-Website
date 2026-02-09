"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/work" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
                isScrolled ? "py-2" : "py-4"
            )}
        >
            <div
                className={cn(
                    "max-w-7xl mx-auto rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300",
                    isScrolled || isMobileMenuOpen
                        ? "glass-panel bg-background/60"
                        : "bg-transparent border-transparent"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all">
                        <Zap className="w-5 h-5 fill-current" />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-white">
                        Nexon Studios
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors relative group",
                                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                                    isActive ? "w-full" : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="glass" className="rounded-full text-xs font-semibold px-6 group border-white/5 bg-white/5 hover:bg-white/10">
                        Start Project
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 glass-panel rounded-2xl p-6 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => {
                            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium transition-colors py-2 border-b border-white/5 last:border-0",
                                        isActive ? "text-primary" : "text-gray-300 hover:text-primary"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <Button className="w-full mt-4 bg-primary text-white">
                            Start Project
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
