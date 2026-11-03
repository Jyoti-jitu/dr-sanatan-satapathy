"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { generalFAQs } from "@/data/testimonials";

export default function FAQSection() {
  // Allow independent open states for smooth 4x2 grid browsing
  const [openItems, setOpenItems] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="section-padding bg-neutral-offwhite border-t border-neutral-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-1.5 sm:space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-teal-light border border-teal/20 text-teal text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-teal" />
            <span>Common Patient Enquiries</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy-heading leading-tight">
            Frequently Asked Questions.
          </h2>
          <p className="text-neutral-body text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Practical answers to common concerns about neurosurgical procedures, spine disorders, and consultation protocols.
          </p>
        </div>

        {/* 4x2 Grid Layout: 2 Columns of 4 Items each on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5 items-start">
          {generalFAQs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-neutral-border hover:border-teal/40 overflow-hidden shadow-subtle hover:shadow-card transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-3 sm:p-5 text-left flex items-start justify-between gap-2.5 sm:gap-3 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3 flex-1">
                    <span className="text-[10px] sm:text-xs font-bold text-teal w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal-light flex items-center justify-center shrink-0 mt-0.5 border border-teal/20">
                      {index + 1}
                    </span>
                    <span className="font-heading font-bold text-xs sm:text-base text-navy-heading leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-teal shrink-0 transition-transform duration-200 mt-0.5 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 sm:px-5 sm:pb-5 pt-1 text-[11px] sm:text-sm text-neutral-body leading-relaxed border-t border-neutral-border/60 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Note */}
        <div className="mt-10 text-center text-xs text-neutral-body">
          <p>
            Have a question specific to your scans or diagnosed condition?{" "}
            <a href="/contact" className="text-teal font-semibold underline hover:text-teal-dark">
              Reach out to our clinical desk directly.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
