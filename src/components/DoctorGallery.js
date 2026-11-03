"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, CheckCircle2, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { doctorData } from "@/data/doctor";

export default function DoctorGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const gallery = doctorData.gallery;

  const handleNext = () => {
    if (selectedPhoto === null) return;
    setSelectedPhoto((selectedPhoto + 1) % gallery.length);
  };

  const handlePrev = () => {
    if (selectedPhoto === null) return;
    setSelectedPhoto((selectedPhoto - 1 + gallery.length) % gallery.length);
  };

  return (
    <section className="section-padding bg-white border-t border-neutral-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Clinical Archive</span>
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-heading leading-tight">
              In Clinical Practice & Academic Forums.
            </h2>
            <p className="editorial-lead text-neutral-body text-base">
              Original photography of Dr. Sanatan Satapathy across the surgical suite, outpatient consultation clinics, and national scientific symposiums.
            </p>
          </div>

          <div className="text-xs text-neutral-body flex items-center gap-2 bg-neutral-offwhite px-4 py-2 rounded-xl border border-neutral-border self-start md:self-auto">
            <CheckCircle2 className="w-4 h-4 text-teal" />
            <span>100% Authentic Practitioner Photography</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Large Card 1: Surgical Scrubs (User Attached Photo) - 6 cols */}
          <div
            onClick={() => setSelectedPhoto(0)}
            className="lg:col-span-6 group relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-border shadow-subtle hover:shadow-card cursor-pointer transition-all min-h-[380px] flex flex-col justify-end"
          >
            <Image
              src={gallery[0].url}
              alt={gallery[0].title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
            
            <div className="relative z-10 p-6 text-white space-y-2">
              <span className="inline-block px-2.5 py-1 rounded-md bg-teal text-white text-[11px] font-bold uppercase tracking-wider">
                {gallery[0].tag}
              </span>
              <h3 className="font-heading font-bold text-xl text-white">
                {gallery[0].title}
              </h3>
              <p className="text-xs text-white/80 leading-relaxed max-w-md">
                {gallery[0].caption}
              </p>
            </div>

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Executive Medical Portrait - 6 cols */}
          <div
            onClick={() => setSelectedPhoto(1)}
            className="lg:col-span-6 group relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-border shadow-subtle hover:shadow-card cursor-pointer transition-all min-h-[380px] flex flex-col justify-end"
          >
            <Image
              src={gallery[1].url}
              alt={gallery[1].title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
            
            <div className="relative z-10 p-6 text-white space-y-2">
              <span className="inline-block px-2.5 py-1 rounded-md bg-navy text-white border border-teal/40 text-[11px] font-bold uppercase tracking-wider">
                {gallery[1].tag}
              </span>
              <h3 className="font-heading font-bold text-xl text-white">
                {gallery[1].title}
              </h3>
              <p className="text-xs text-white/80 leading-relaxed max-w-md">
                {gallery[1].caption}
              </p>
            </div>

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Speaker at Podium Discussion - 6 cols */}
          <div
            onClick={() => setSelectedPhoto(2)}
            className="lg:col-span-6 group relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-border shadow-subtle hover:shadow-card cursor-pointer transition-all min-h-[320px] flex flex-col justify-end"
          >
            <Image
              src={gallery[2].url}
              alt={gallery[2].title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
            
            <div className="relative z-10 p-6 text-white space-y-2">
              <span className="inline-block px-2.5 py-1 rounded-md bg-gold text-navy-dark text-[11px] font-bold uppercase tracking-wider">
                {gallery[2].tag}
              </span>
              <h3 className="font-heading font-bold text-lg text-white">
                {gallery[2].title}
              </h3>
              <p className="text-xs text-white/80 leading-relaxed max-w-md">
                {gallery[2].caption}
              </p>
            </div>

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4: Clinic Suite 1 - 3 cols */}
          <div
            onClick={() => setSelectedPhoto(3)}
            className="lg:col-span-3 group relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-border shadow-subtle hover:shadow-card cursor-pointer transition-all min-h-[320px] flex flex-col justify-end"
          >
            <Image
              src={gallery[3].url}
              alt={gallery[3].title}
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
            
            <div className="relative z-10 p-5 text-white space-y-1.5">
              <span className="inline-block px-2 py-0.5 rounded bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                {gallery[3].tag}
              </span>
              <h3 className="font-heading font-bold text-base text-white">
                {gallery[3].title}
              </h3>
              <p className="text-[11px] text-white/80 leading-tight">
                {gallery[3].caption}
              </p>
            </div>

            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 5: Clinic Suite 2 - 3 cols */}
          <div
            onClick={() => setSelectedPhoto(4)}
            className="lg:col-span-3 group relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-border shadow-subtle hover:shadow-card cursor-pointer transition-all min-h-[320px] flex flex-col justify-end"
          >
            <Image
              src={gallery[4].url}
              alt={gallery[4].title}
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
            
            <div className="relative z-10 p-5 text-white space-y-1.5">
              <span className="inline-block px-2 py-0.5 rounded bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                {gallery[4].tag}
              </span>
              <h3 className="font-heading font-bold text-base text-white">
                {gallery[4].title}
              </h3>
              <p className="text-[11px] text-white/80 leading-tight">
                {gallery[4].caption}
              </p>
            </div>

            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 z-50 bg-navy-dark/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[65vh] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
              <Image
                src={gallery[selectedPhoto].url}
                alt={gallery[selectedPhoto].title}
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white space-y-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal text-white">
                {gallery[selectedPhoto].tag}
              </span>
              <h3 className="font-heading font-bold text-lg text-white">
                {gallery[selectedPhoto].title}
              </h3>
              <p className="text-xs text-white/70 max-w-xl mx-auto">
                {gallery[selectedPhoto].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

