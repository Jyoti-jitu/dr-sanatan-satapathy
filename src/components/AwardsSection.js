import Image from "next/image";
import { Award, ShieldCheck, Star, ExternalLink, Mic } from "lucide-react";
import { doctorData } from "@/data/doctor";

export default function AwardsSection() {
  return (
    <section className="section-padding bg-white border-t border-neutral-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <p className="text-xs font-bold text-teal uppercase tracking-widest">
            Peer & Clinical Distinction
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-heading leading-tight">
            Professional Recognition.
          </h2>
          <p className="editorial-lead text-neutral-body text-base">
            Recognizing dedication to super-speciality neurosurgical standards, patient outcomes, and advancing endoscopic spine access in Odisha.
          </p>
        </div>

        {/* Featured Award Showcase Card */}
        <div className="bg-gradient-to-br from-navy-dark via-navy to-navy-dark text-white rounded-3xl p-8 sm:p-12 border border-teal/40 shadow-elevated relative overflow-hidden mb-12">
          {/* Subtle gold glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Award Icon Badge (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="w-20 h-20 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center text-gold mb-4 shadow-lg">
                <Award className="w-10 h-10" />
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-gold text-navy-dark uppercase tracking-wider mb-2">
                Times Health Icon 2024
              </span>
              <p className="text-xs text-white/70">
                Times of India Group Regional Healthcare Awards
              </p>
            </div>

            {/* Award Description (8 cols) */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-light">
                  Excellence in Neurosurgery & Spine Surgery
                </p>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  Times Health ICON Award 2024
                </h3>
              </div>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Awarded in recognition of Dr. Sanatan Satapathy's clinical expertise, commitment to minimally invasive and endoscopic spine approaches, and ongoing dedication to delivering patient-centric neurosurgical care across Eastern India.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-white/70">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal" />
                  <span>Verified Medical Award Category</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-gold" />
                  <span>Clinical Dedication in Odisha</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scientific Symposium & Academic Presentations */}
        <div className="bg-neutral-offwhite rounded-3xl p-8 sm:p-10 border border-neutral-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 border border-neutral-border shadow-card">
              <Image
                src={doctorData.photos.podium}
                alt="Dr. Sanatan Satapathy presenting at medical symposium"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-navy/85 backdrop-blur-sm text-white text-[11px] font-semibold">
                Keynote Speaker • Scientific Symposium
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal">
                  <Mic className="w-3.5 h-3.5" />
                  <span>Academic Contribution & Faculty</span>
                </span>
                <h3 className="font-heading font-bold text-2xl text-navy-heading">
                  Scientific Lectures & Case Discussions
                </h3>
              </div>

              <p className="text-sm text-neutral-body leading-relaxed">
                Active guest faculty at national and state neurosurgical conferences. Dr. Sanatan Satapathy regularly presents paper series and operative protocols covering minimally invasive endoscopic spine approaches, complex cranial tumor excisions, and neurotrauma protocols.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-neutral-border text-xs text-navy-heading font-medium">
                  • Endoscopic Spine Decompression Protocols
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-border text-xs text-navy-heading font-medium">
                  • Traumatic Brain Injury Triage Protocols
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

