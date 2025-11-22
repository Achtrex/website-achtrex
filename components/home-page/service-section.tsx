'use client';

import { motion } from 'framer-motion';
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="
                bg-[url('/Union.png')]
                bg-no-repeat
                bg-top
                bg-contain
                w-full max-w-[280px]
                pt-[115px]  
                pb-10
                px-6
                text-center
                rounded-2xl
                mx-auto
                relative
            "
        >
            {/* Icon */}
            <div className="absolute top-[42px] left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center">
                <span className="text-5xl">{icon}</span>
            </div>

            <h3 className="w-[237px] py-5 font-manrope font-semibold text-[32px] leading-[120%] tracking-[-0.05em] text-center text-black/90 mx-auto">
                {title}
            </h3>

            <p className="w-[190px] font-normal text-base leading-[150%] tracking-[-0.025em] text-center text-black/70 mx-auto mt-2">
                {description}
            </p>
        </motion.div>
    );
}

export const ServicesGrid = () => {
    const services = [
        {
            icon: <img src="/service/product-development.png" alt="product development icon" />,
            title: 'Product Development',
            description: 'We transform your ideas into scalable digital products.'
        },
        {
            icon: <img src="/service/ui-ux-design.png" alt="ui ux design icon" />,
            title: 'UI/UX Design',
            description: 'Create intuitive interfaces & meaningful user journeys.'
        },
        {
            icon: <img src="/service/system-integration.png" alt="system integration icon" />,
            title: 'System Integration',
            description: 'We connect your tools, platforms, and data into one seamless system.'
        },
        {
            icon: <img src="/service/seo-analytics.png" alt="seo analytics icon" />,
            title: 'SEO and Analytics',
            description: 'We help brands grow through data-driven strategies and boost visibility.'
        },
        {
            icon: <img src="/service/it-consultation.png" alt="it consultation icon" />,
            title: 'IT Consultation',
            description: 'We provide expert guidance for sustainable digital growth.'
        }
    ];

    return (
        <section id="services" className="pb-24 px-6">
            <div className="max-w-8xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {services.map((service, index) => (
                        <FeatureCard key={index} {...service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesGrid;