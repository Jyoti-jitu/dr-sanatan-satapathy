import Link from "next/link";
import Image from "next/image";
import { Award, GraduationCap, ShieldCheck, Star, BookOpen, CheckCircle2, ArrowRight, Mic } from "lucide-react";
import { doctorData } from "@/data/doctor";
import AppointmentCTASection from "@/components/AppointmentCTASection";

export const metadata = {
  title: "Awards, Training & Achievements | Dr. Sanatan Satapathy",
  description: "Academic qualifications, Times Health ICON Award 2024, AIIMS New Delhi microsurgery training, and clinical milestones of Dr. Sanatan Satapathy.",
};

export default function AchievementsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-neutral-offwhite border-b border-neutral-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal">
              Clinical Milestones & Honors
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-navy-heading leading-tight">
              Awards & Professional Achievements
            </h1>
            <p className="editorial-lead text-neutral-body">
              Verified clinical distinctions, academic fellowships, and professional milestones earned across fifteen years of neurosurgical dedication in Odisha.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Featured Award: Times Health Icon 2024 */}
          <div className="bg-gradient-to-br from-navy-dark via-navy to-navy-dark text-white rounded-3xl p-8 sm:p-12 border border-teal/40 shadow-elevated relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
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

              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-light">
                  Excellence in Neurosurgery & Spine Surgery
                </span>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  Times Health ICON Award 2024
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  Conferred upon Dr. Sanatan Satapathy in recognition of exemplary clinical practice, advanced endoscopic spine techniques, and relentless commitment to delivering compassionate neurosurgical care in Bhubaneswar and across Odisha.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-white/70">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal" />
                    <span>Verified Healthcare Recognition</span>
                  </div>
                  <span>•</span>
                  <span>Bhubaneswar, Odisha</span>
                </div>
              </div>

            </div>
          </div>

          {/* Keynote Presentations & Scientific Symposiums */}
          <div className="bg-neutral-offwhite rounded-3xl p-8 sm:p-10 border border-neutral-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 border border-neutral-border shadow-card">
                <Image
                  src="/images/doctor/dr-sanatan-speaker-podium.png"
                  alt="Dr. Sanatan Satapathy speaking at national neurosurgery conference podium"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-navy/85 backdrop-blur-sm text-white text-[11px] font-semibold">
                  Keynote Speaker • Scientific Symposium
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal">
                  <Mic className="w-3.5 h-3.5" />
                  <span>Academic Leadership</span>
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-navy-heading">
                  Conference Speaker & Research Faculty
                </h3>
                <p className="text-sm text-neutral-body leading-relaxed">
                  Regular guest faculty and panelist at state and national neurosurgical symposiums. Dr. Sanatan Satapathy presents case series and operative protocols on complex decompressive craniectomies, endoscopic spine procedures, and clinical outcomes in traumatic brain injury.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-navy-heading font-medium">
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-neutral-border">Cranial Case Presentations</span>
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-neutral-border">Endoscopic Spine Lectures</span>
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-neutral-border">Surgical Protocol Training</span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Degrees & Fellowships */}
          <div className="space-y-8">
            <div className="border-b border-neutral-border pb-4">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-heading">
                Academic Degrees & Super-Speciality Fellowships
              </h2>
              <p className="text-xs sm:text-sm text-neutral-body mt-1">
                Formal qualifications awarded by recognized medical universities and national apex institutes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctorData.credentials.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-neutral-offwhite border border-neutral-border space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-teal-light text-teal flex items-center justify-center mb-3">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy-heading">
                    {item.label}
                  </h3>
                  <p className="text-xs text-neutral-body leading-relaxed">
                    {item.detail}
                  </p>
                  <p className="text-[11px] text-teal font-medium pt-2">
                    Verified Academic Credential
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Memberships */}
          <div className="space-y-6 pt-6 border-t border-neutral-border">
            <h2 className="font-heading font-bold text-2xl text-navy-heading">
              Professional Society Memberships
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {doctorData.memberships.map((mem, index) => (
                <div key={index} className="p-4 rounded-xl bg-white border border-neutral-border flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                  <span className="text-xs font-semibold text-navy-heading">{mem}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <AppointmentCTASection />
    </div>
  );
}

