import { Users, Code, Globe } from 'lucide-react';

export function CoreValues() {
    const values = [
        {
            icon: <Users className="w-8 h-8 text-[#005AB0]" />,
            title: "Human-Centered Design",
            description: "We prioritize understanding and meeting the needs of our users, ensuring our solutions are intuitive and impactful."
        },
        {
            icon: <Code className="w-8 h-8 text-[#005AB0]" />,
            title: "Tech-Forward Innovation",
            description: "We embrace cutting-edge technologies and methodologies to create innovative solutions that push boundaries."
        },
        {
            icon: <Globe className="w-8 h-8 text-[#005AB0]" />,
            title: "Global Ambition",
            description: "We aim to make a global impact, leveraging our African roots to bring unique perspectives to the world stage."
        }
    ];

    return (
        <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-manrope text-gray-900">Our Core Values</h2>
                <p className="text-gray-800 max-w-2xl font-manrope">
                    At Achtrex, we are driven by a set of core values that guide our work and interactions. These principles shape our culture and ensure we deliver exceptional results.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                    <div key={index} className="p-6 md:p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                        <div className="mb-6">
                            {value.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-manrope text-gray-900">{value.title}</h3>
                        <p className="text-gray-800 text-sm leading-relaxed font-manrope">
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
