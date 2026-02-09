"use client";

import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Background() {
    const pathname = usePathname();

    // Default configuration (Home & Contact)
    let orbClass = "top-[-100px] left-[-100px]";
    let opacityAnimation = [0.3, 0.5, 0.3];

    // Services Page: A bit right, less visible
    if (pathname === "/services") {
        orbClass = "top-[-100px] left-[20%]";
        opacityAnimation = [0.15, 0.25, 0.15];
    }

    // Portfolio Page: Centered behind "Our Work", less visible
    if (pathname === "/work") {
        orbClass = "top-[-50px] left-1/2 -translate-x-1/2";
        opacityAnimation = [0.15, 0.25, 0.15];
    }

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: opacityAnimation
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className={cn(
                    "absolute w-[500px] h-[500px] bg-primary blur-[100px] rounded-full transition-all duration-1000",
                    orbClass
                )}
            />
        </div>
    );
}
