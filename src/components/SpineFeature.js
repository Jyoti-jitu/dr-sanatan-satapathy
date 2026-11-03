import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Activity, Zap, Compass, Sparkles } from "lucide-react";
import { doctorData } from "@/data/doctor";

export default function SpineFeature() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Feature Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-teal-light text-teal text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                Spine Center of Excellence
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-5xl text-navy-heading leading-tight">
                Modern Approaches to Spine Care.
              </h2>
            </div>

            <p className="text-neutral-body text-xs sm:text-base lg:text-lg leading-relaxed">
              Spinal conditions can affect mobility, comfort and everyday activities. A careful clinical assessment helps determine the most appropriate treatment approach—from conservative physical therapy to ultra-minimally invasive endoscopic decompression.
            </p>

            {/* 3 Key Pillars of Modern Spine Care */}
            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
              <div className="p-3 sm:p-4 rounded-xl bg-neutral-offwhite border border-neutral-border flex items-start gap-3 sm:gap-4 hover:border-teal/40 transition-colors">
                <div className="p-2 sm:p-2.5 rounded-lg bg-teal text-white shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-navy-heading text-sm sm:text-base">
                    Endoscopic Spine Decompression
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-body leading-relaxed">
                    Performed through a keyhole incision (&lt; 1 cm) using high-definition video optics. Removes herniated disc fragments and bony spurs without stripping supporting back muscles or destabilizing vertebrae.
                  </p>
                  <Link
                    href="/endoscopic-spine-surgery"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal-dark pt-0.5 sm:pt-1"
                  >
                    <span>Read Endoscopic Indications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-neutral-offwhite border border-neutral-border flex items-start gap-3 sm:gap-4 hover:border-teal/40 transition-colors">
                <div className="p-2 sm:p-2.5 rounded-lg bg-navy text-white shrink-0 mt-0.5">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-navy-heading text-sm sm:text-base">
                    Minimally Invasive Spine Surgery (MISS)
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-body leading-relaxed">
                    Tubular retractor systems gently dilate muscle fibers along natural planes rather than cutting them. Yields minimal blood loss, reduced surgical pain, and faster return to active routines.
                  </p>
                  <Link
                    href="/minimally-invasive-spine-surgery"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal-dark pt-0.5 sm:pt-1"
                  >
                    <span>Learn about MISS Approaches</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-neutral-offwhite border border-neutral-border flex items-start gap-3 sm:gap-4 hover:border-teal/40 transition-colors">
                <div className="p-2 sm:p-2.5 rounded-lg bg-gold text-white shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-navy-heading text-sm sm:text-base">
                    Conservative & Non-Surgical Pathway First
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-body leading-relaxed">
                    Over 85% of disc prolapses and nerve irritations recover through protocolized physiotherapy, core stabilization, and targeted nerve root blocks without surgery.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-4">
              <Link
                href="/spine-surgery"
                className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-navy text-white text-xs sm:text-sm font-semibold hover:bg-navy-dark transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Full Spine Care Overview</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
              <Link
                href="/conditions/slipped-disc"
                className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-neutral-offwhite border border-neutral-border text-navy-heading text-xs sm:text-sm font-medium hover:border-teal transition-colors"
              >
                Slipped Disc FAQ
              </Link>
            </div>

          </div>

          {/* Right Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-[240px] sm:max-w-sm lg:max-w-none rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-border shadow-elevated">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={doctorData.photos.clinic2}
                  alt="Dr. Sanatan Satapathy - Modern endoscopic and minimally invasive spine care"
                  fill
                  sizes="(max-width: 1024px) 240px, 480px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent" />
                
                {/* Floating Anatomical Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1 sm:space-y-2">
                  <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded bg-teal/90 text-white text-[9px] sm:text-[11px] font-bold uppercase tracking-wider">
                    Tissue Preservation Architecture
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-xl text-white">
                    Protecting the Muscular Envelope
                  </h3>
                  <p className="text-[10px] sm:text-xs text-white/80 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    By dilating muscle rather than detaching it from spinal bones, patients walk within 24 hours of decompression with minimal discomfort.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stat Overlay */}
            <div className="absolute top-2 left-2 sm:-top-4 sm:-left-6 bg-white p-2.5 sm:p-4 rounded-xl shadow-card border border-neutral-border max-w-[150px] sm:max-w-[200px]">
              <p className="text-lg sm:text-2xl font-heading font-extrabold text-teal">
                &lt; 10 mm
              </p>
              <p className="text-[10px] sm:text-xs font-semibold text-navy-heading mt-0.5">
                Keyhole Portal
              </p>
              <p className="text-[9px] sm:text-[10px] text-neutral-body mt-0.5 leading-tight">
                Typical incision dimension in endoscopic discectomy.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

