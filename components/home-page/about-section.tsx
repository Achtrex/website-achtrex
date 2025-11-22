import { Button } from "@/components/buttons";

export const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 bg-cyan-500 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            Team Photo
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Life At Archtrex</h2>
                        <p className="text-lg mb-4 opacity-90">Driven by passion. United by purpose.</p>
                        <p className="mb-6 opacity-90">
                            At Archtrex, we believe in creating an environment where innovation thrives
                            and every team member can reach their full potential. Our culture is built
                            on collaboration, continuous learning, and a shared commitment to excellence.
                        </p>
                        <Button variant="outline">Learn More</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};