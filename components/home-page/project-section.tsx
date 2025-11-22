import { SectionTitle } from '@/components/section-title';

export const ProjectCard = ({ title, description, link, reverse = false, bgColor = 'bg-gray-800' }: { title: string; description: string; link: string; reverse?: boolean; bgColor?: string; }) => {
    return (
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center mb-24`}>
            <div className="flex-1 w-full">
                <div className={`${bgColor} rounded-3xl overflow-hidden shadow-2xl h-80 transform hover:scale-105 transition-transform duration-500 cursor-pointer`}>
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-white/20 text-6xl font-bold">{title.substring(0, 2)}</div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 w-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{description}</p>
                <a
                    href={link}
                    className="inline-flex items-center text-cyan-500 hover:text-cyan-600 font-semibold text-lg group"
                >
                    View Project
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </a>
            </div>
        </div>
    );
};

export const ProjectsSection = () => {
    const projects = [
        {
            title: 'Optisur AI',
            description: 'We partnered with Optisur AI to provide IT solutions that help organizations achieve a full-scale performance audit system that is right for every stage. Our team created a sleek, modern design with intuitive user interfaces.',
            link: '#',
            bgColor: 'bg-gradient-to-br from-purple-600 to-blue-600'
        },
        {
            title: 'Africa Rota Connect',
            description: 'We partnered with Africa Rota Connect to streamline their transportation management system for engaging creative applications, optimized fleet management and streamlined logistics, bringing their vision to life.',
            link: '#',
            reverse: true,
            bgColor: 'bg-gradient-to-br from-orange-500 to-red-600'
        },
        {
            title: 'Vehicle Databases',
            description: 'Collaborated with VehicleDatabases.com to streamline their vehicle records and inspection process. Our team ensured their platform operates seamlessly, allowing customers to access critical vehicle information easily.',
            link: '#',
            bgColor: 'bg-gradient-to-br from-green-600 to-teal-600'
        },
        {
            title: 'Global Solutions Software',
            description: 'We collaborated with Global Solutions Software to provide software development and consulting services. Our team delivered cutting-edge solutions to streamline business processes with expert guidance.',
            link: '#',
            reverse: true,
            bgColor: 'bg-gradient-to-br from-indigo-600 to-purple-600'
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <SectionTitle>Transforming Ideas Into Brands</SectionTitle>
                <div className="mt-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};