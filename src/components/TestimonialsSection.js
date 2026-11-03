"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Quote, CheckCircle2, MapPin, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const getCardStep = () => {
    if (typeof window === "undefined") return 360;
    if (window.innerWidth < 640) return 275; // 260 + 15 gap
    if (window.innerWidth < 768) return 335; // 320 + 15 gap
    return 370; // 350 + 20 gap
  };

  const updateScrollStatus = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const step = getCardStep();
    const index = Math.round(scrollLeft / step);
    setActiveIndex(Math.min(Math.max(index, 0), testimonialsData.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollStatus, { passive: true });
    updateScrollStatus();
    return () => el.removeEventListener("scroll", updateScrollStatus);
  }, [updateScrollStatus]);

  // Automatic smooth scroll loop (pauses when hovered or touched)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const step = getCardStep();

      // If near the end, loop smoothly back to beginning
      if (scrollLeft + clientWidth >= scrollWidth - 15) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const step = getCardStep();
    scrollRef.current.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth"
    });
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const step = getCardStep();
    scrollRef.current.scrollTo({
      left: index * step,
      behavior: "smooth"
    });
  };

  return (
    <section className="section-padding bg-white border-t border-neutral-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="max-w-2xl space-y-1.5 sm:space-y-2.5">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-teal-light border border-teal/20 text-teal text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-teal animate-pulse" />
              <span>Clinical Perspectives</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy-heading leading-tight">
              Experiences Shared by Patients.
            </h2>
            <p className="text-neutral-body text-xs sm:text-base leading-relaxed">
              Verified clinical reviews and recovery reflections from patients and families treated under Dr. Sanatan Satapathy.
            </p>
          </div>

          {/* Desktop Auto-Scroll Status & Nav Arrows */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-offwhite border border-neutral-border text-[11px] text-neutral-body">
              <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? "bg-amber-400" : "bg-emerald-500 animate-pulse"}`} />
              <span>{isHovered ? "Paused" : "Auto-scroll"}</span>
            </div>

            <span className="text-xs font-medium text-neutral-body">
              <strong className="text-navy-heading">{activeIndex + 1}</strong> / {testimonialsData.length}
            </span>

            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous testimonial"
              className={`p-2 sm:p-2.5 rounded-xl border transition-all ${
                canScrollLeft
                  ? "border-neutral-border bg-white text-navy-heading hover:border-teal hover:bg-teal-light/40 shadow-sm cursor-pointer"
                  : "border-neutral-border/40 bg-neutral-50 text-neutral-300 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next testimonial"
              className={`p-2 sm:p-2.5 rounded-xl border transition-all ${
                canScrollRight
                  ? "border-neutral-border bg-white text-navy-heading hover:border-teal hover:bg-teal-light/40 shadow-sm cursor-pointer"
                  : "border-neutral-border/40 bg-neutral-50 text-neutral-300 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Compact Single-Line Auto-Scrollable Cards Track */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="w-[260px] sm:w-[320px] md:w-[350px] shrink-0 snap-start bg-neutral-offwhite rounded-2xl p-4 sm:p-6 border border-neutral-border hover:border-teal/40 hover:shadow-card transition-all flex flex-col justify-between space-y-3 sm:space-y-4"
            >
              <div className="space-y-3">
                {/* Compact Header: 5 Stars + Verified Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Patient Quote with compact typography */}
                <div className="relative">
                  <Quote className="w-5 h-5 text-teal/25 mb-1.5" />
                  <p className="text-xs sm:text-[13px] text-navy-heading/90 leading-relaxed italic line-clamp-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Compact Footer: Patient Meta */}
              <div className="pt-3 border-t border-neutral-border/70 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-teal-light text-teal font-bold text-xs flex items-center justify-center shrink-0 border border-teal/20">
                      {item.patientName.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-navy-heading text-xs sm:text-sm leading-tight">
                        {item.patientName}
                      </h4>
                      <p className="text-[10px] text-neutral-400">
                        Age: {item.age}
                      </p>
                    </div>
                  </div>

                  <div className="text-[10px] text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-teal shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white border border-neutral-border text-teal truncate max-w-[170px]">
                    {item.condition}
                  </span>
                  <span className="text-[10px] text-neutral-body truncate max-w-[140px]">
                    • {item.procedure}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Pagination Indicator */}
        <div className="mt-5 flex items-center justify-center gap-1.5">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === idx
                  ? "w-6 bg-teal"
                  : "w-1.5 bg-neutral-border hover:bg-neutral-300"
              }`}
            />
          ))}
        </div>

        {/* Concise Disclaimer */}
        <div className="mt-6 p-3 rounded-xl bg-neutral-offwhite border border-neutral-border/80 text-center text-[11px] text-neutral-body/75 max-w-xl mx-auto">
          <p>
            * Individual medical outcomes, recovery times, and clinical experiences depend strictly on specific anatomical diagnoses and severity of neural involvement.
          </p>
        </div>

      </div>
    </section>
  );
}
