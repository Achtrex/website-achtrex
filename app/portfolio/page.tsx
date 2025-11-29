import { CTASection } from "@/components/cta";
import { PortfolioGrid } from "@/components/portfolio-page/portfolio-grid";

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="pt-20">
                <PortfolioGrid />
                <CTASection />
            </div>
        </main>
    );
}
