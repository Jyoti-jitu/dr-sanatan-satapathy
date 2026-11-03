import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, UserCheck } from "lucide-react";
import { doctorData } from "@/data/doctor";

export default function DoctorIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
          
          {/* Left: Authentic Professional Image Composition (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[240px] sm:max-w-sm lg:max-w-none">
              
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-neutral-border shadow-card">
                <div className="relative w-full aspect-[4/5] bg-neutral-50">
                  <Image
                    src={doctorData.photos.portrait}
                    alt={`${doctorData.name} in clinical practice`}
                    fill
                    sizes="(max-width: 1024px) 240px, 480px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Caption Panel */}
                <div className="p-3 sm:p-4 bg-white border-t border-neutral-border">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-teal-light flex items-center justify-center text-teal shrink-0">
                      <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy-heading">Dr. Sanatan Satapathy</p>
                      <p className="text-[10px] sm:text-[11px] text-neutral-body">Consulting Neurosurgeon & Spine Specialist, Bhubaneswar</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            <div className="space-y-1.5 sm:space-y-2">
              <p className="text-[10px] sm:text-xs font-bold text-teal uppercase tracking-widest">
                Meet the Specialist
              </p>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy-heading leading-tight">
                Expertise Guided by Precision and Compassion.
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-neutral-body text-xs sm:text-sm lg:text-base leading-relaxed">
              <p>
                Navigating complex neurological and spinal symptoms can be profoundly overwhelming for patients and their families. Dr. Sanatan Satapathy believes that surgical excellence begins with listening closely, understanding how pain alters daily living, and explaining radiological findings with complete transparency.
              </p>
              <p>
                Having earned his super-speciality <strong className="text-navy-heading font-semibold">MCh in Neurosurgery from SCB Medical College, Cuttack</strong>, followed by advanced microsurgical training at <strong className="text-navy-heading font-semibold">AIIMS New Delhi</strong>, Dr. Satapathy combines time-tested surgical discipline with modern minimally invasive and endoscopic procedures.
              </p>
              <p>
                His clinical philosophy is grounded in restraint: <span className="text-navy-heading font-medium">surgical intervention is recommended only when conservative medical avenues have been exhausted</span> or when acute neural compression demands immediate decompression.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              <div className="p-3 sm:p-4 rounded-xl bg-neutral-offwhite border border-neutral-border space-y-1">
                <p className="font-heading font-bold text-xs sm:text-sm text-navy-heading flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                  <span>Conservative First</span>
                </p>
                <p className="text-[11px] sm:text-xs text-neutral-body pl-6">
                  Over 85% of back and neck complaints are guided through targeted rehabilitation.
                </p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-neutral-offwhite border border-neutral-border space-y-1">
                <p className="font-heading font-bold text-xs sm:text-sm text-navy-heading flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                  <span>Tissue Preservation</span>
                </p>
                <p className="text-[11px] sm:text-xs text-neutral-body pl-6">
                  Employing endoscopic cameras and microscopic corridors that protect normal muscle.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-heading font-bold text-teal hover:text-teal-dark group text-sm"
              >
                <span>Discover More About the Doctor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

