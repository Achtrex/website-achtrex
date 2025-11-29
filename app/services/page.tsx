import { CTASection } from "@/components/cta";
import { ServicesHero } from "@/components/services-page/hero";
import { ServicesList } from "@/components/services-page/services-list";

export default function ServicesPage() {
    return (
        <main className="pt-20">
            {/* <ServicesHero /> */}
            <ServicesList />
            <CTASection />
        </main>
    );
}
