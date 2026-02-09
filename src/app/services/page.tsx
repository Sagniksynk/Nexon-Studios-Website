import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ProcessSection } from "@/components/services/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";

export default function ServicesPage() {
    return (
        <main className="min-h-screen relative">
            <Navbar />
            <div className="pt-20">
                <ServiceHero />
                <ServiceGrid />
                <ProcessSection />
                <CTASection />
            </div>
            <Footer />
        </main>
    );
}
