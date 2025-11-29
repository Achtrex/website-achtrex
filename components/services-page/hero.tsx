'use client';

import { motion } from "framer-motion";

export const ServicesHero = () => {
    return (
        <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-gray-50">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-red-hat-display text-gray-900"
                >
                    Our Services
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                >
                    We offer a comprehensive suite of digital solutions to help your business grow and succeed in the modern digital landscape. From development to design, we have you covered.
                </motion.p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-3xl" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-100/50 rounded-full blur-3xl" />
            </div>
        </section>
    );
};
