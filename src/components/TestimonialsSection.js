"use client";

import { useState, useRef, useEffect } from "react";
import { Quote, CheckCircle2, MapPin, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Approximate active index based on scroll position
    const cardWidth = 440 + 24; // width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), testimonialsData.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 460;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = 464;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
  };

  return (
    <section className="section-padding bg-white border-t border-neutral-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-light border border-teal/20 text-teal text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span>Clinical Perspectives</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-heading leading-tight">
              Experiences Shared by Patients.
            </h2>
            <p className="editorial-lead text-neutral-body text-base">
              Verified clinical reviews and recovery reflections from patients and families treated under Dr. Sanatan Satapathy.
            </p>
          </div>

          {/* Desktop Single-Line Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-medium text-neutral-body mr-1">
              <strong className="text-navy-heading">{activeIndex + 1}</strong> of {testimonialsData.length}
            </span>
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous testimonial"
              className={`p-3 rounded-xl border transition-all ${
                canScrollLeft
                  ? "border-neutral-border bg-white text-navy-heading hover:border-teal hover:bg-teal-light/40 shadow-sm cursor-pointer"
                  : "border-neutral-border/40 bg-neutral-50 text-neutral-300 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next testimonial"
              className={`p-3 rounded-xl border transition-all ${
                canScrollRight
                  ? "border-neutral-border bg-white text-navy-heading hover:border-teal hover:bg-teal-light/40 shadow-sm cursor-pointer"
                  : "border-neutral-border/40 bg-neutral-50 text-neutral-300 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Single-Line Cards Track (Modern Horizontal Snap Carousel) */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="w-[88vw] sm:w-[420px] lg:w-[440px] shrink-0 snap-start bg-neutral-offwhite rounded-3xl p-7 sm:p-8 border border-neutral-border hover:border-teal/30 hover:shadow-card transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Card Top: 5 Stars + Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Verified Review</span>
                  </div>
                </div>

                {/* Patient Quote with subtle watermark */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-teal/20 mb-2" />
                  <p className="text-sm sm:text-[15px] text-navy-heading/90 leading-relaxed italic line-clamp-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Card Bottom: Patient Profile & Condition */}
              <div className="pt-4 border-t border-neutral-border/70 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-light text-teal font-bold text-xs flex items-center justify-center shrink-0 border border-teal/20">
                      {item.patientName.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-navy-heading text-sm sm:text-base leading-tight">
                        {item.patientName}
                      </h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        Age: {item.age}
                      </p>
                    </div>
                  </div>

                  <div className="text-[11px] text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-teal shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="pt-1 flex flex-wrap items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white border border-neutral-border text-teal">
                    {item.condition}
                  </span>
                  <span className="text-[11px] text-neutral-body">
                    • {item.procedure}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Pagination Indicator */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                activeIndex === idx
                  ? "w-8 bg-teal"
                  : "w-2 bg-neutral-border hover:bg-neutral-300"
              }`}
            />
          ))}
        </div>

        {/* Medical disclaimer note below reviews */}
        <div className="mt-8 p-4 rounded-xl bg-neutral-offwhite border border-neutral-border/80 text-center text-xs text-neutral-body/80 max-w-2xl mx-auto">
          <p>
            * Individual medical outcomes, recovery times, and clinical experiences depend strictly on specific anatomical diagnoses, age, overall health, and severity of neural involvement.
          </p>
        </div>

      </div>
    </section>
  );
}
