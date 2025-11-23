'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className={`mb-4 rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-gray-50' : 'bg-gray-50'}`}>
      <button
        className="w-full flex justify-between items-center text-left p-6"
        onClick={onClick}
      >
        <span className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-[#2496B3]' : 'text-gray-900'}`}>
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// FAQ Section Component
export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What kind of care and support do you provide?",
      answer: "We offer a wide range of services, including daily assistance, medical support, companionship, and emotional care. Our goal is to enhance the quality of life for seniors and vulnerable individuals by tailoring our services to meet their unique needs."
    },
    {
      question: "How do you tailor your services to individual needs?",
      answer: "We conduct a thorough assessment of each client's needs, preferences, and medical requirements to create a personalized care plan that evolves as their needs change."
    },
    {
      question: "How do you tailor your services to individual needs?",
      answer: "Our team works closely with families and healthcare providers to ensure that every aspect of care is customized, from daily schedules to specific medical interventions."
    },
    {
      question: "How do you tailor your services to individual needs?",
      answer: "We believe in a holistic approach, considering not just physical needs but also emotional and social well-being to provide truly comprehensive support."
    },
    {
      question: "How do you tailor your services to individual needs?",
      answer: "Regular reviews and open communication allow us to adjust our services promptly, ensuring that we always provide the most appropriate and effective care."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left Column - Title & Description */}
          <div className="md:col-span-5">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 font-red-hat-display">Frequently Asked Questions (FAQ)</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We address some of the most common questions about our team, services, and approach to care. Whether you're seeking information about our compassionate care for seniors and vulnerable individuals, or curious about our Senior Consultant and the expertise we bring to every client
            </p>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="md:col-span-7">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                {...faq}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};