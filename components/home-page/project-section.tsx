'use client';

import { SectionTitle } from '@/components/section-title';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectCard = ({ title, description, link, image, reverse = false }: { title: string; description: string; link: string; image: string; reverse?: boolean; }) => {
    return (
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full overflow-hidden`}>
            {/* Image Side */}
            <motion.div
                className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 bg-white p-6 md:p-12 lg:p-24 flex flex-col justify-center">
                <motion.div
                    className="max-w-xl mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    <h3 className="text-3xl font-red-hat-display font-bold text-gray-900 mb-6">{title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{description}</p>
                    <motion.a
                        href={link}
                        className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold text-lg group"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        View Project
                        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export const ProjectsSection = () => {
    const projects = [
        {
            title: 'Carkasa',
            description: 'We partnered with Carkasa to build a trusted car marketplace in Ghana. We helped them convert an idea into a brand where users can verify vehicle history, browse listings, and buy confidently, establishing a new standard for trust in the local automotive market.',
            link: '#',
            image: '/projects/carkasa.png'
        },
        {
            title: 'Africa Auto Connect',
            description: 'We partnered with Africa Auto Connect to redesign their website and build a high-engaging mobile application, optimized their front and back end development, UX/UI design and applied SEO techniques to drive traffic and sales to their website.',
            link: '#',
            reverse: true,
            image: '/projects/auto-connect.png'
        },
        {
            title: 'Yach Telemedicine',
            description: 'We collaborated with Yach Telemedicine to provide a safe online space for users to book consultations and access healthcare. We developed a secure platform that connects patients with doctors right from their smart devices, making quality healthcare accessible and convenient.',
            link: '#',
            image: '/projects/yach-telemedicine.png'
        },
        {
            title: 'Global Solutions Software',
            description: 'We collaborated with Global Solutions Software to provide software development and consulting services. Our partnership focused on building scalable digital solutions while offering expert guidance to streamline their development processes',
            link: '#',
            reverse: true,
            image: '/projects/Rectangle 796 (3).png'
        }
    ];

    return (
        <section id="projects" className="pt-24 bg-gray-50">
            <div className="mb-24 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle className='font-red-hat-display font-black'>Transforming Ideas Into Brands</SectionTitle>
                </motion.div>
            </div>
            <div className="w-full">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};