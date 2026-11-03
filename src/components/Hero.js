import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Award, ShieldCheck, CheckCircle2, MapPin } from "lucide-react";
import { doctorData } from "@/data/doctor";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-offwhite border-b border-neutral-border pt-12 pb-16 lg:py-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-medical-grid opacity-60 pointer-events-none" />
      
      {/* Soft gradient accent */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-teal-light rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-light border border-teal/20 text-teal text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span>Neurosurgery & Spine Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy-heading leading-[1.12] tracking-tight">
              Advanced Brain & Spine Care. <br className="hidden sm:inline" />
              <span className="text-navy">Focused on You.</span>
            </h1>

            {/* Editorial Description */}
            <p className="editorial-lead max-w-2xl text-neutral-body text-base sm:text-lg">
              {doctorData.name} provides specialist neurosurgical and spine care in Bhubaneswar, with a focus on individualized treatment planning, tissue-preserving endoscopic procedures, and modern surgical approaches.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-teal hover:bg-teal-dark text-white font-semibold text-base shadow-sm hover:shadow-md transition-all group"
              >
                <Calendar className="w-5 h-5 text-white/90" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/#specialities"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-neutral-border text-navy-heading hover:bg-neutral-50 hover:border-teal/40 font-semibold text-base transition-colors"
              >
                <span>Explore Specialities</span>
              </Link>
            </div>

            {/* Trust line */}
            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-neutral-body border-t border-neutral-border/70">
              <div className="flex items-center gap-1.5 text-navy-heading">
                <MapPin className="w-4 h-4 text-teal" />
                <span>Bhubaneswar, Odisha</span>
              </div>
              <span className="text-neutral-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-navy-heading">
                <ShieldCheck className="w-4 h-4 text-teal" />
                <span>MCh Neurosurgery (SCB Cuttack)</span>
              </div>
              <span className="text-neutral-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-navy-heading">
                <Award className="w-4 h-4 text-gold" />
                <span>Times Health Icon 2024</span>
              </div>
            </div>

          </div>

          {/* Right Visual Composition (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Decorative subtle border frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-teal/20 via-transparent to-navy/10 transform rotate-1" />
              
              {/* Doctor Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-elevated border border-neutral-border">
                <div className="relative w-full aspect-[4/5] bg-neutral-100">
                  <Image
                    src={doctorData.photo}
                    alt={`${doctorData.name} - Senior Neurosurgeon & Spine Surgeon in Bhubaneswar`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top"
                  />
                  {/* Subtle bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent opacity-80" />
                  
                  {/* Top Verified Pill (Non-overlapping) */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-neutral-border/80 text-navy-heading text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                    <span>Verified Specialist • Registered Neurosurgeon</span>
                  </div>

                  {/* Overlay Name Banner */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-heading font-bold text-lg text-white">
                      {doctorData.name}
                    </p>
                    <p className="text-xs text-teal-light font-medium">
                      MBBS, MS, MCh (Neurosurgery)
                    </p>
                    <p className="text-[11px] text-white/80 mt-0.5">
                      Senior Neurosurgeon & Spine Care Specialist
                    </p>
                  </div>
                </div>

                {/* Micro Credential Panel below photo */}
                <div className="p-4 bg-white grid grid-cols-2 gap-3 border-t border-neutral-border text-left">
                  <div className="p-2.5 rounded-lg bg-neutral-offwhite border border-neutral-border/60">
                    <p className="text-[11px] text-neutral-body uppercase font-semibold">Specialization</p>
                    <p className="text-xs font-bold text-navy-heading mt-0.5">Endoscopic Spine & Cranial</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-offwhite border border-neutral-border/60">
                    <p className="text-[11px] text-neutral-body uppercase font-semibold">Training</p>
                    <p className="text-xs font-bold text-navy-heading mt-0.5">SCB Cuttack & AIIMS</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

