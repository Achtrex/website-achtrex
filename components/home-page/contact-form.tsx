import { Facebook, Instagram, Twitter } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="max-w-2xl">
            <span className="text-lg text-gray-600 mb-4 block">Contact Us</span>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-black font-red-hat-display">
              Get in touch with us.<br />
              We're here to assist you.
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 md:mt-0">
            <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Facebook className="w-5 h-5 text-gray-600" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Instagram className="w-5 h-5 text-gray-600" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Twitter className="w-5 h-5 text-gray-600" />
            </a>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-2">
              <label className="text-gray-600 text-base">Your Name</label>
              <input
                type="text"
                className="w-full py-3 border-b text-gray-500 border-gray-300 focus:border-[#2496B3] outline-none transition-colors bg-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-600 text-base">Email Address</label>
              <input
                type="email"
                className="w-full py-3 border-b text-gray-500 border-gray-300 focus:border-[#2496B3] outline-none transition-colors bg-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-600 text-base">Phone Number (optional)</label>
              <input
                type="tel"
                className="w-full py-3 border-b text-gray-500 border-gray-300 focus:border-[#2496B3] outline-none transition-colors bg-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-600 text-base">Message</label>
            <textarea
              rows={4}
              className="w-full py-3 border-b text-gray-500 border-gray-300 focus:border-[#2496B3] outline-none transition-colors bg-transparent resize-none"
            ></textarea>
          </div>

          <button className="bg-[#2496B3] text-white hover:bg-[#1d7a91] transition-colors font-bold py-4 px-10 rounded-full text-lg shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;