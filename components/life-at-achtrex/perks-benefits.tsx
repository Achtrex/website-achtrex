import { Laptop, Banknote, Users } from 'lucide-react';

export function PerksBenefits() {
    const perks = [
        {
            icon: <Laptop className="w-8 h-8 text-[#005AB0]" />,
            title: "Flexible Work Arrangements",
            description: "We offer flexible work arrangements to support work-life balance and individual needs."
        },
        {
            icon: <Banknote className="w-8 h-8 text-[#005AB0]" />,
            title: "Competitive Compensation",
            description: "We provide competitive compensation packages to attract and retain top talent."
        },
        {
            icon: <Users className="w-8 h-8 text-[#005AB0]" />,
            title: "Professional Development",
            description: "We invest in our employees' professional development through training and mentorship programs."
        }
    ];

    return (
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-manrope text-gray-900">Perks & Benefits</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {perks.map((perk, index) => (
                    <div key={index} className="p-6 md:p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                        <div className="mb-6">
                            {perk.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-manrope text-gray-900">{perk.title}</h3>
                        <p className="text-gray-800 text-sm leading-relaxed font-manrope">
                            {perk.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
