import { Github, Send } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="text-2xl font-bold text-cyan-500 mb-4">△</div>
                        <p className="text-gray-400 text-sm mb-4">
                            Accra, Ghana St. Suite<br />
                            Accra, Ghana 12345
                        </p>
                        <p className="text-gray-400 text-sm">
                            Email: contact@archtrex.com<br />
                            Phone: +233 123 456 789
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Who We Are</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-cyan-500">About Company</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Our Businesses</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Our Team</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Newsroom</a></li>
                            <li><a href="#" className="hover:text-cyan-500">IT Governance</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Procurement</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">What We Provide</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-cyan-500">Web Services</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Business Content</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Marketing Strategy</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">How We Help</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-cyan-500">Contact Us</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Support</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Privacy</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Guides</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2025 Archtrex. All Rights Reserved
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500">
                            <Send size={16} />
                        </a>
                        <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500">
                            <Github size={16} />
                        </a>
                        <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500">
                            <Send size={16} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">How can we help you?</span>
            </div>
        </footer>
    );
};