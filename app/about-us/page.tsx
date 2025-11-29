import { Navbar } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta";
import { AboutHero } from "@/components/about-page/about-hero";
import { TeamSection } from "@/components/about-page/team-section";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="pt-20">
                <AboutHero />
                <TeamSection />
                <CTASection />
            </div>
            <Footer />
        </main>
    );
}
