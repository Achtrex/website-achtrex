'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }: { question: string; answer: string; }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-600">{answer}</p>
      )}
    </div>
  );
};

// FAQ Section Component
export const FAQSection = () => {
  const faqs = [
    {
      question: "How do we start our new project / What should be done?",
      answer: "We begin with a discovery session to understand your needs, followed by a detailed proposal and project planning phase."
    },
    {
      question: "How do we start our new project / What should be done?",
      answer: "We begin with a discovery session to understand your needs, followed by a detailed proposal and project planning phase."
    },
    {
      question: "How do we start our new project / What should be done?",
      answer: "We begin with a discovery session to understand your needs, followed by a detailed proposal and project planning phase."
    },
    {
      question: "How do we start our new project / What should be done?",
      answer: "We begin with a discovery session to understand your needs, followed by a detailed proposal and project planning phase."
    }
  ];
  
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions (FAQ)</h2>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};