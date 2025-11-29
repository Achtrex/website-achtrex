'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutHero = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-black">Who Are We?</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                        Building beyond code.<br />
                        Creating lasting impact.
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            We're not just another digital agency, we're the team that helps brands find clarity in a noisy world.
                        </p>
                        <p>
                            Our work is guided by simplicity, strategy, and results. From start-ups to established businesses, we help clients transform ideas into digital experiences that inspire trust and drive growth.
                        </p>
                        <p>
                            Over the years, we've collaborated with forward-thinking brands across industries, providing IT consultation, SEO analytics, software development, and full-scale design solutions. Whether it's building a website that feels effortless, an app that connects people seamlessly, or content that speaks your story, we approach every project with precision and purpose.
                        </p>
                        <p>
                            Behind every great product we deliver is a team that listens, learns, and works closely with you, because your goals become ours the moment we start.
                        </p>
                        <p>
                            We don't just build brands.<br />
                            We build relationships that last.
                        </p>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[500px] w-full rounded-3xl overflow-hidden"
                >
                    <Image
                        src="/about-us/us.jpg"
                        alt="Who Are We"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
};
