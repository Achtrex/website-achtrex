import { Github } from 'lucide-react';
import { SectionTitle } from '@/components/section-title';


export const TechPartners = () => {
    const logos = [
        { name: 'GitHub', icon: <Github size={40} /> },
        { name: 'Angular', icon: <div className="text-5xl font-bold text-red-600">Ⓐ</div> },
        { name: 'Vercel', icon: <div className="text-5xl font-bold">△</div> },
        { name: 'Google Cloud', icon: <div className="text-2xl font-semibold">Google Cloud</div> },
        { name: 'AWS', icon: <div className="text-5xl font-bold text-orange-500">Ⓐ</div> },
        { name: 'Python', icon: <div className="text-5xl">🐍</div> },
        { name: 'Node', icon: <div className="text-3xl font-bold text-green-600">node</div> },
        { name: 'Azure', icon: <div className="text-5xl font-bold text-blue-600">△</div> }
    ];

    return (
        <section id="technology" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <SectionTitle>Our Technology and Partners</SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                        >
                            {logo.icon}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};