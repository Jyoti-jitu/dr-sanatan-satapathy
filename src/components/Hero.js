import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Award, ShieldCheck, CheckCircle2, MapPin } from "lucide-react";
import { doctorData } from "@/data/doctor";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-offwhite border-b border-neutral-border pt-4 pb-8 sm:pt-8 sm:pb-14 lg:pt-8 lg:pb-16">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-medical-grid opacity-60 pointer-events-none" />
      
      {/* Soft gradient accent */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-teal-light rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* Left Editorial Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-start space-y-3.5 sm:space-y-6 text-left">
            
            {/* Eyebrow - Perfectly aligned with right pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-light border border-teal/20 text-teal text-[10px] sm:text-xs font-bold tracking-wider uppercase w-fit">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-teal animate-pulse" />
              <span>Brain & Spine Specialist</span>
            </div>

            {/* Main Headline - Starts at same baseline as Doctor Photo */}
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-5xl text-navy-heading leading-[1.2] tracking-tight">
              Behind Every Diagnosis Is a Life. <br className="hidden sm:inline" />
              <span className="text-teal">Behind Every Treatment, a Responsibility.</span>
            </h1>

            {/* Editorial Description */}
            <p className="max-w-2xl text-neutral-body text-xs sm:text-base lg:text-lg leading-relaxed">
              Dr. Sanatan Satapathy provides specialist neurosurgical and spine care in Bhubaneswar, with a focus on individualized treatment planning, tissue-preserving endoscopic procedures, and modern surgical approaches.
            </p>

            {/* Action Buttons */}
            <div className="pt-0.5 sm:pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl bg-teal hover:bg-teal-dark text-white font-semibold text-xs sm:text-base shadow-sm hover:shadow-md transition-all group"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/#specialities"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl bg-white border border-neutral-border text-navy-heading hover:bg-neutral-50 hover:border-teal/40 font-semibold text-xs sm:text-base transition-colors"
              >
                <span>Explore Specialities</span>
              </Link>
            </div>

            {/* Trust line */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5 text-[11px] sm:text-xs font-medium text-neutral-body border-t border-neutral-border/70">
              <div className="flex items-center gap-1.5 text-navy-heading">
                <MapPin className="w-3.5 h-3.5 text-teal" />
                <span>Bhubaneswar, Odisha</span>
              </div>
              <span className="text-neutral-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-navy-heading">
                <ShieldCheck className="w-3.5 h-3.5 text-teal" />
                <span>MCh Neurosurgery (SCB Cuttack)</span>
              </div>
              <span className="text-neutral-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-navy-heading">
                <Award className="w-3.5 h-3.5 text-gold" />
                <span>Times Health Icon 2024</span>
              </div>
            </div>

          </div>

          {/* Right Visual Composition (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full">
            <div className="relative w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[380px] mx-auto lg:mr-0">
              
              {/* Clean non-rotated decorative border frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-teal/20 via-transparent to-navy/10" />
              
              {/* Doctor Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-elevated border border-neutral-border">
                <div className="relative w-full aspect-[4/5] bg-neutral-100">
                  <Image
                    src={doctorData.photo}
                    alt={`${doctorData.name} - Senior Neurosurgeon & Spine Surgeon in Bhubaneswar`}
                    fill
                    priority
                    sizes="(max-width: 768px) 240px, 380px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Doctor Details Panel below photo */}
                <div className="p-3 sm:p-4 bg-white border-t border-neutral-border text-left">
                  <h3 className="font-heading font-bold text-sm sm:text-lg text-navy-heading">
                    {doctorData.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-teal font-semibold">
                    MBBS, MS, MCh (Neurosurgery)
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-neutral-body mt-0.5">
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
