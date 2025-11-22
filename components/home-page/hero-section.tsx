'use client'; // Needed if using Next.js App Router

import { Button } from '@/components/buttons';
import { motion } from 'framer-motion';

export const Hero = () => {
    // Animation configurations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delays each child by 0.2s for a ripple effect
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 }, // Start slightly below and invisible
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6, // Smooth duration
                ease: [0.22, 1, 0.36, 1] as const, // Custom "cubic-bezier" for a premium feel
            },
        },
    };

    return (
        <section className="relative pt-32 pb-12 px-6 overflow-hidden">
            {/* We turn the container into a motion.div to control the sequence */}
            <motion.div
                className="max-w-6xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // Animates only once when 30% is visible
            >

                {/* Item 1: The Badge */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center justify-center bg-white px-4 py-2 rounded-full mb-8 w-auto h-[42px]"
                >
                    <span className="font-manrope font-medium text-2xl leading-[150%] text-center tracking-[-0.025em] bg-gradient-to-r from-[#EE982D] to-[#00A58F] bg-clip-text text-transparent">
                        Bold Ideas. Global Impact.
                    </span>
                </motion.div>

                {/* Item 2: The Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="text-head1 font-manrope font-bold text-black leading-[120%] text-center tracking-[-0.05em] mb-6 max-w-[1277px] mx-auto"
                >
                    Empowering Digital Transformation<br />
                    Let's Go The{' '}
                    <span className="text-primary">
                        Extra Mile
                    </span>
                </motion.h1>

                {/* Item 3: The Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-md text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    We are a software development company specializing in custom software development,
                    web and mobile app development, and IT consulting services to help businesses thrive
                    in the digital age.
                </motion.p>

                {/* Item 4: The Button */}
                <motion.div variants={itemVariants}>
                    <Button size="lg" className="shadow-2xl">
                        Get Started Today
                    </Button>
                </motion.div>

            </motion.div>
        </section>
    );
};