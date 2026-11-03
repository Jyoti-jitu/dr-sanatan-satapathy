import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Award, ShieldCheck, CheckCircle2, MapPin } from "lucide-react";
import { doctorData } from "@/data/doctor";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-offwhite border-b border-neutral-border pt-6 pb-12 sm:pt-8 sm:pb-14 lg:pt-8 lg:pb-16">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-medical-grid opacity-60 pointer-events-none" />
      
      {/* Soft gradient accent */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-teal-light rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Editorial Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-light border border-teal/20 text-teal text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span>Brain & Spine Specialist</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-heading leading-[1.18] tracking-tight">
              Behind Every Diagnosis Is a Life. <br className="hidden sm:inline" />
              <span className="text-teal">Behind Every Treatment, a Responsibility.</span>
            </h1>

            {/* Editorial Description */}
            <p className="editorial-lead max-w-2xl text-neutral-body text-base sm:text-lg">
              Dr. Sanatan Satapathy provides specialist neurosurgical and spine care in Bhubaneswar, with a focus on individualized treatment planning, tissue-preserving endoscopic procedures, and modern surgical approaches.
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
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center">
            
            {/* Verified Specialist Pill positioned ABOVE the hero image */}
            <div className="w-full max-w-md mb-3 flex items-center justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-neutral-border text-navy-heading text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                <span>Verified Specialist • Registered Neurosurgeon</span>
              </div>
            </div>

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
                </div>

                {/* Doctor Details Panel below photo */}
                <div className="p-4 bg-white border-t border-neutral-border text-left">
                  <h3 className="font-heading font-bold text-lg text-navy-heading">
                    {doctorData.name}
                  </h3>
                  <p className="text-xs text-teal font-semibold">
                    MBBS, MS, MCh (Neurosurgery)
                  </p>
                  <p className="text-[11px] text-neutral-body mt-0.5">
                    Senior Neurosurgeon & Spine Care Specialist
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

