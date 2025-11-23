import { GithubIcon } from 'lucide-react';
import { SectionTitle } from '@/components/section-title';
import Image from 'next/image';

export const TechPartners = () => {
    const logos = [
        { name: 'GitHub', icon: <Image src="/logos/github.png" alt="GitHub" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Google Cloud', icon: <Image src="/logos/google-cloud.png" alt="Google Cloud" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Jira', icon: <Image src="/logos/Jira Logo.png" alt="Jira" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Python', icon: <Image src="/logos/python.png" alt="Python" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Node.js', icon: <Image src="/logos/node.png" alt="Node.js" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Partner', icon: <Image src="/logos/image 12.png" alt="Partner" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Partner', icon: <Image src="/logos/image 6.png" alt="Partner" width={120} height={40} className="h-10 w-auto object-contain" /> },
        { name: 'Partner', icon: <Image src="/logos/image 9.png" alt="Partner" width={120} height={40} className="h-10 w-auto object-contain" /> },
    ];

    return (
        <section id="technology" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionTitle className='font-red-hat-display font-black'>Our Technology and Partners</SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer grayscale hover:grayscale-0"
                        >
                            {logo.icon}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};