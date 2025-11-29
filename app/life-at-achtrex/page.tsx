import { CoreValues } from "@/components/life-at-achtrex/core-values";
import { DayInLife } from "@/components/life-at-achtrex/day-in-life";
import { PerksBenefits } from "@/components/life-at-achtrex/perks-benefits";
import { CTASection } from "@/components/cta";

export default function LifeAtAchtrexPage() {
    return (
        <main className="pt-24 min-h-screen bg-white">
            <CoreValues />
            <DayInLife />
            <PerksBenefits />
            <CTASection />
        </main>
    );
}
