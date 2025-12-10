'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PortfolioItem {
    title: string;
    description: string;
    image: string;
    challenge: string;
    product: string;
    outcome: string;
    reverse?: boolean;
}

const portfolioItems: PortfolioItem[] = [
    {
        title: 'Carkasa',
        description: 'Trusted Car Marketplace',
        image: '/projects/carkasa.png',
        challenge: 'The Ghanaian used car market was fragmented and lacked transparency, making it difficult for buyers to trust sellers and verify vehicle history. Users needed a reliable platform to find quality cars without the risk of fraud or hidden issues.',
        product: 'We partnered with Carkasa to design and build a trusted automotive marketplace for the Ghanaian market. Our team developed a comprehensive platform where users can browse verified listings, check vehicle history reports, and connect with reputable sellers, ensuring a confident buying experience.',
        outcome: 'Carkasa has established itself as a go-to destination for car buyers in Ghana. The platform\'s emphasis on transparency and verification has built significant user trust, resulting in a growing community of satisfied buyers and sellers and a streamlined car purchasing process.',
        reverse: false
    },
    {
        title: 'Africa Auto Connect',
        description: 'Web & Mobile Development',
        image: '/projects/auto-connect.png',
        challenge: 'The existing platform had an outdated design and poor user experience, leading to low engagement and conversion rates. They needed a modern, mobile-first solution that could handle high traffic while providing an intuitive user experience across all devices.',
        product: 'Africa Auto Connect is a comprehensive automotive marketplace connecting buyers and sellers across Africa. We partnered with them to redesign their website and build a high-engaging mobile application, optimizing both front-end and back-end development with modern UX/UI design.',
        outcome: 'We delivered a completely redesigned website and a high-performance mobile application with optimized UX/UI. The new platform saw increased user engagement, improved conversion rates, and significant growth in traffic and sales through our SEO optimization strategies.',
        reverse: true
    },
    {
        title: 'Yach Telemedicine',
        description: 'Digital Healthcare Platform',
        image: '/projects/yach-telemedicine.png',
        challenge: 'Accessing quality healthcare often involves long wait times and geographical barriers. Patients needed a convenient, secure way to consult with medical professionals without physically visiting a clinic, especially for non-emergency issues.',
        product: 'We collaborated with Yach Telemedicine to develop a digital health platform that brings healthcare directly to users\' smart devices. Our team built a secure, user-friendly application that allows patients to book online consultations, video chat with doctors, and manage their health records from anywhere.',
        outcome: 'The platform has democratized access to healthcare, allowing users to receive timely medical advice from the comfort of their homes. This has reduced the burden on physical clinics and provided a safe, efficient alternative for routine consultations and health management.',
        reverse: false
    },
    {
        title: 'Global Solutions Software',
        description: 'Software Development & Consulting',
        image: '/projects/Rectangle 796 (3).png',
        challenge: 'They needed to scale their development capabilities while maintaining code quality and project delivery timelines. Their development processes required optimization to handle growing client demands and complex project requirements.',
        product: 'Global Solutions Software is a technology consulting firm that provides enterprise-level software solutions and digital transformation services to businesses worldwide. We collaborated with them to provide software development and consulting services focused on building scalable digital solutions.',
        outcome: 'Through our consulting services and collaborative development approach, we helped them build scalable digital solutions and streamline their development processes. This resulted in improved project delivery times, enhanced code quality, and increased capacity to handle larger, more complex projects.',
        reverse: true
    }
];

const StackedProject = ({ project, index }: { project: PortfolioItem; index: number }) => {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Image Section - Stacked on top for all screens */}
            <div className="w-full h-[60vh] min-[1920px]:h-[55vh] relative">
                <motion.div
                    className="relative w-full h-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    {/* Overlay gradient for text readability */}
                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/20 to-black/60" />

                    {/* Project title overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 xl:p-16">
                        <div className="max-w-7xl mx-auto">
                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-red-hat-display font-bold text-white mb-2 lg:mb-4">
                                {project.title}
                            </h3>
                            <p className="text-white/90 text-sm md:text-xl lg:text-2xl max-w-2xl">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Content Section - Below image */}
            <div className="bg-white py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Content Blocks */}
                    <div className="grid grid-cols-1 gap-12 lg:gap-20">
                        {/* Block 1: The Challenge */}
                        <motion.div
                            className="flex flex-col md:flex-row gap-6 md:gap-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="md:w-1/3 shrink-0">
                                <div className="flex items-center mb-4">
                                    <div className="w-3 h-3 rounded-full bg-secondary mr-4"></div>
                                    <h4 className="text-2xl lg:text-3xl font-red-hat-display font-bold text-gray-900">
                                        The Challenge
                                    </h4>
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                                    {project.challenge}
                                </p>
                            </div>
                        </motion.div>

                        {/* Block 2: The Product/Solution */}
                        <motion.div
                            className="flex flex-col md:flex-row gap-6 md:gap-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="md:w-1/3 shrink-0">
                                <div className="flex items-center mb-4">
                                    <div className="w-3 h-3 rounded-full bg-primary mr-4"></div>
                                    <h4 className="text-2xl lg:text-3xl font-red-hat-display font-bold text-gray-900">
                                        The Product
                                    </h4>
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                                    {project.product}
                                </p>
                            </div>
                        </motion.div>

                        {/* Block 3: The Outcome */}
                        <motion.div
                            className="flex flex-col md:flex-row gap-6 md:gap-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="md:w-1/3 shrink-0">
                                <div className="flex items-center mb-4">
                                    <div className="w-3 h-3 rounded-full bg-primary mr-4"></div>
                                    <h4 className="text-2xl lg:text-3xl font-red-hat-display font-bold text-gray-900">
                                        The Outcome
                                    </h4>
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                                    {project.outcome}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SplitProject = ({ project, index }: { project: PortfolioItem; index: number }) => {
    return (
        <div className={`relative min-h-screen ${project.reverse ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:flex lg:min-h-screen">
                {/* Sticky Visual Column */}
                <div className={`lg:w-1/2 lg:sticky lg:top-0 lg:h-screen ${project.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                    <motion.div
                        className="relative h-[50vh] lg:h-full w-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        {/* Overlay gradient for better text readability on mobile */}
                        <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/40 lg:hidden" />

                        {/* Project title overlay on image (mobile only) */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                            <h3 className="text-3xl font-red-hat-display font-bold text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-white/90 text-sm">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Scrolling Content Column */}
                <div className={`lg:w-1/2 bg-white ${project.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="lg:min-h-screen flex flex-col">
                        {/* Project Header (Desktop only) */}
                        <motion.div
                            className="hidden lg:block p-12 xl:p-16 border-b border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-4xl xl:text-5xl font-red-hat-display font-black text-gray-900 mb-3">
                                {project.title}
                            </h3>
                            <p className="text-lg text-primary font-semibold">
                                {project.description}
                            </p>
                        </motion.div>

                        {/* Content Blocks */}
                        <div className="flex-1">
                            {/* Block 1: The Challenge */}
                            <motion.div
                                className="p-8 lg:p-12 xl:p-16 min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-center border-b border-gray-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20%" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-3 h-3 rounded-full bg-secondary mr-4"></div>
                                    <h4 className="text-2xl lg:text-3xl font-red-hat-display font-bold text-gray-900">
                                        The Challenge
                                    </h4>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed pl-7">
                                    {project.challenge}
                                </p>
                            </motion.div>

                            {/* Block 2: The Product/Solution */}
                            <motion.div
                                className="p-8 lg:p-12 xl:p-16 min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-center border-b border-gray-100 bg-gray-50/50"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20%" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-3 h-3 rounded-full bg-primary mr-4"></div>
                                    <h4 className="text-2xl lg:text-3xl font-red-hat-display font-bold text-gray-900">
                                        The Product
                                    </h4>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed pl-7">
                                    {project.product}
                                </p>
                            </motion.div>

                            {/* Block 3: The Outcome */}
                            <motion.div
                                className="p-8 lg:p-12 xl:p-16 min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20%" }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-3 h-3 rounded-full bg-primary mr-4"></div>
                                    <h4 className="text-2xl lg:text-3xl font-red-hat-display font-bold text-gray-900">
                                        The Outcome
                                    </h4>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed pl-7">
                                    {project.outcome}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const PortfolioGrid = () => {
    return (
        <section id="portfolio" className="bg-gray-50">
            {/* Section Header */}
            <div className="py-16 lg:py-24 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl text-gray-900 md:text-5xl lg:text-6xl font-red-hat-display font-black text-foreground mb-4">
                        Our <span className="text-primary">Portfolio</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                        Explore our successful projects and see how we've transformed ideas into powerful digital solutions.
                        Scroll through each story to discover the challenge, our approach, and the results.
                    </p>
                </motion.div>
            </div>

            {/* Projects */}
            <div className="bg-white">
                {portfolioItems.map((project, index) => (
                    <div key={index}>
<div className="block lg:hidden min-[1920px]:!block">
    <StackedProject project={project} index={index} />
</div>
<div className="hidden lg:block min-[1920px]:!hidden">
    <SplitProject project={project} index={index} />
</div>
                    </div>
                ))}
            </div>
        </section>
    );
};
