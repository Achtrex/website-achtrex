'use client';

import React from 'react';
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
    const divRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="
                bg-[url('/Union.png')]
                bg-no-repeat
                bg-top
                bg-[length:100%_auto]
                w-full max-w-[280px]
                h-[340px]
                pt-[110px]  
                pb-8
                px-6
                text-center
                rounded-none
                mx-auto
                relative
                group
                border-none
            "
            style={{
                maskImage: "url('/Union.png')",
                maskSize: "100% auto",
                maskPosition: "top center",
                maskRepeat: "no-repeat",
                WebkitMaskImage: "url('/Union.png')",
                WebkitMaskSize: "100% auto",
                WebkitMaskPosition: "top center",
                WebkitMaskRepeat: "no-repeat",
                filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.08))"
            }}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 90, 176, 0.15), transparent 40%)`,
                }}
            />
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 90, 176, 0.4), transparent 40%)`,
                    maskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
                    WebkitMaskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
                    maskComposite: `exclude`,
                    WebkitMaskComposite: `xor`,
                }}
            />

            {/* Icon */}
            <div className="absolute top-[28px] left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center z-10">
                <span className="text-5xl">{icon}</span>
            </div>

            <h3 className="w-full py-2 font-manrope font-bold text-3xl leading-tight tracking-tight text-center text-black/90 mx-auto relative z-10">
                {title}
            </h3>

            <p className="w-full font-normal text-base leading-relaxed text-center text-black/70 mx-auto mt-2 relative z-10">
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