"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { generalFAQs } from "@/data/testimonials";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section-padding bg-neutral-offwhite border-t border-neutral-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <p className="text-xs font-bold text-teal uppercase tracking-widest">
            Common Patient Enquiries
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-heading leading-tight">
            Frequently Asked Questions.
          </h2>
          <p className="editorial-lead text-neutral-body text-base max-w-2xl mx-auto">
            Practical answers to common concerns about neurosurgical procedures, spine disorders, and consultation protocols.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-3.5">
          {generalFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-neutral-border overflow-hidden shadow-subtle transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-navy-heading flex items-center gap-3">
                    <span className="text-xs font-bold text-teal w-6 h-6 rounded-full bg-teal-light flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-body leading-relaxed border-t border-neutral-border/60 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Note */}
        <div className="mt-12 text-center text-xs text-neutral-body">
          <p>
            Have a question specific to your scans or diagnosed condition?{" "}
            <a href="/contact" className="text-teal font-semibold underline">
              Reach out to our clinical desk directly.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

