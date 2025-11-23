import React from "react";

const ContactDetails = () => {
    return (
        <section className="bg-secondary py-20 px-4 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
                {/* Left Side - Headings */}
                <div className="space-y-4">
                    <span className="text-base font-medium opacity-90">Contact Info</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-red-hat-display">
                        We are always happy <br className="hidden md:block" />
                        to assist you
                    </h2>
                </div>

                {/* Right Side - Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 pt-4">
                    {/* Email Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Email Address</h3>
                        <div className="w-8 h-0.5 bg-white/80"></div>
                        <a
                            href="mailto:support@achtrex.com"
                            className="block text-lg hover:opacity-80 transition-opacity"
                        >
                            support@achtrex.com
                        </a>
                    </div>

                    {/* Number Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Number</h3>
                        <div className="w-8 h-0.5 bg-white/80"></div>
                        <div className="space-y-1 text-lg">
                            <p>Ghana +233 500 496700</p>
                            <p>USA +1 973 385 1305</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
