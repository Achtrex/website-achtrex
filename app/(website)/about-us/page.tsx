import { CTASection } from "@/components/cta";
import { AboutHero } from "@/components/about-page/about-hero";
import { TeamSection } from "@/components/about-page/team-section";

export default function AboutPage() {
    return (
        <main className="bg-gray-50">
            <div className="pt-20">
                <AboutHero />
                <TeamSection />
                <CTASection />
            </div>
        </main>
    );
}
