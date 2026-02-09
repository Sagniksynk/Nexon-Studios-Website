import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioGrid } from "@/components/work/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";

export default function WorkPage() {
    return (
        <main className="min-h-screen relative">
            <Navbar />
            <div className="pt-32">
                <div className="pb-16 text-center px-4">
                    <p className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">Portfolio</p>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        <span className="text-white">Our </span>
                        <span className="text-primary">Work</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Crafting immersive Roblox experiences and high-performance web solutions that define the next generation of digital interaction.
                    </p>
                </div>
                <PortfolioGrid />
                <CTASection />
            </div>
            <Footer />
        </main>
    );
}
