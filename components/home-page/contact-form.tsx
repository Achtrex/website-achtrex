'use client';

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-12 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-base md:text-lg text-gray-600 mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black font-red-hat-display">
              Get in touch with us.<br />
              We're here to assist you.
            </h2>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 mt-8 md:mt-0"
          >
            <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Facebook className="w-5 h-5 text-gray-600" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Instagram className="w-5 h-5 text-gray-600" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Twitter className="w-5 h-5 text-gray-600" />
            </a>
          </motion.div>
        </div>

        {/* Form Section */}
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <label className="text-gray-600 text-base">Your Name</label>
              <input
                type="text"
                className="w-full py-3 border-b text-gray-500 border-gray-300 focus:border-[#2496B3] outline-none transition-colors bg-transparent"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <label className="text-gray-600 text-base">Email Address</label>
              <input
                type="email"
                className="w-full py-3 border-b text-gray-500 border-gray-300 focus:border-[#2496B3] outline-none transition-colors bg-transparent"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              <label className="text-gray-600 text-base">Phone Number (optional)</label>
              <input
                type="tel"
                className="w-full py-3 border-b text-gray-500 border-gray-300 focus:border-[#2496B3] outline-none transition-colors bg-transparent"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2"
          >
            <label className="text-gray-600 text-base">Message</label>
            <textarea
              rows={1}
              className="w-full py-3 border-b text-gray-500 border-gray-300 focus:border-[#2496B3] outline-none transition-colors bg-transparent resize-none"
            ></textarea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              type="submit"
              className="bg-[#2496B3] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1d7a91] transition-colors flex items-center gap-2"
            >
              Leave us a Message
              <span className="text-xl">→</span>
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;