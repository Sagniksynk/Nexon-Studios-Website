import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Navbar />

      <div className="flex flex-col gap-0 md:gap-12 pb-20">
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <TestimonialsSection />
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}
