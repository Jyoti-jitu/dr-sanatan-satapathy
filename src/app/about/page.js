import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight, BookOpen, Stethoscope } from "lucide-react";
import { doctorData } from "@/data/doctor";
import AppointmentCTASection from "@/components/AppointmentCTASection";

export const metadata = {
  title: "About Dr. Sanatan Satapathy | Senior Neurosurgeon & Spine Surgeon",
  description: "Learn about Dr. Sanatan Satapathy's medical education at SCB Medical College, microsurgical training at AIIMS New Delhi, surgical philosophy, and clinical expertise.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Editorial Header */}
      <section className="bg-neutral-offwhite border-b border-neutral-border py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2 sm:space-y-4">
            <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-teal-light text-teal">
              Doctor Profile & Biography
            </span>
            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-navy-heading leading-tight">
              Dr. Sanatan Satapathy
            </h1>
            <p className="text-sm sm:text-lg text-teal font-medium">
              MBBS, MS (General Surgery), MCh (Neurosurgery)
            </p>
            <p className="text-neutral-body text-xs sm:text-base lg:text-lg leading-relaxed">
              {doctorData.subTagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Portrait */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-16 items-start">
            
            {/* Left Portrait & Credentials Card (5 cols) */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div className="relative mx-auto max-w-[240px] sm:max-w-sm lg:max-w-none rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-border shadow-card">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={doctorData.photos.clinic1}
                    alt={doctorData.formalName}
                    fill
                    priority
                    sizes="(max-width: 1024px) 240px, 480px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-3.5 sm:p-5 bg-white border-t border-neutral-border space-y-1 sm:space-y-2">
                  <p className="font-heading font-bold text-navy-heading text-sm sm:text-base">
                    Clinical Appointment
                  </p>
                  <p className="text-[11px] sm:text-xs text-neutral-body">
                    Senior Consultant Neurosurgeon & Spine Surgeon, MAX Super Speciality Hospital (Formerly Kalinga Hospital), Nalco Square, Chandrasekharpur, Bhubaneswar.
                  </p>
                </div>
              </div>

              {/* Verified Credentials Box */}
              <div className="p-4 sm:p-6 rounded-2xl bg-neutral-offwhite border border-neutral-border space-y-2 sm:space-y-3">
                <h4 className="font-heading font-bold text-sm text-navy-heading uppercase tracking-wider">
                  Verified Academic Degrees
                </h4>
                <ul className="text-xs text-neutral-body space-y-2">
                  {doctorData.credentials.map((cred, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-navy-heading">{cred.label}:</strong> {cred.detail}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Storytelling (7 cols) */}
            <div className="lg:col-span-7 space-y-8 text-neutral-body text-base leading-relaxed">
              
              <div className="space-y-4">
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-heading">
                  A Commitment to Precision & Conservative Restraint
                </h2>
                <div className="space-y-4">
                  {doctorData.aboutBio.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Clinical Philosophy */}
              <div className="pt-4 space-y-4 border-t border-neutral-border">
                <h3 className="font-heading font-bold text-xl text-navy-heading">
                  Guiding Principles of Surgical Practice
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {doctorData.philosophyPoints.map((phil, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-neutral-offwhite border border-neutral-border space-y-2">
                      <h4 className="font-heading font-bold text-sm text-navy-heading">
                        {phil.title}
                      </h4>
                      <p className="text-xs text-neutral-body leading-relaxed">
                        {phil.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Environments: Surgery & Academic Forums */}
              <div className="pt-6 space-y-4 border-t border-neutral-border">
                <h3 className="font-heading font-bold text-xl text-navy-heading">
                  Clinical Environments & Surgical Focus
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden border border-neutral-border bg-neutral-offwhite">
                    <div className="relative w-full h-48 bg-neutral-100">
                      <Image
                        src={doctorData.photos.scrubs}
                        alt="Dr. Sanatan Satapathy in surgical suite"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <h4 className="font-heading font-bold text-sm text-navy-heading">Operating Suite Discipline</h4>
                      <p className="text-xs text-neutral-body">Specializing in tissue-preserving endoscopic and microscopic cranial and spine procedures.</p>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-neutral-border bg-neutral-offwhite">
                    <div className="relative w-full h-48 bg-neutral-100">
                      <Image
                        src={doctorData.photos.podium}
                        alt="Dr. Sanatan Satapathy presenting at medical symposium"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <h4 className="font-heading font-bold text-sm text-navy-heading">Academic & Scientific Exchange</h4>
                      <p className="text-xs text-neutral-body">Sharing clinical outcomes and operative protocols at state and national neurosurgical conferences.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Memberships */}
              <div className="pt-4 space-y-3 border-t border-neutral-border">
                <h3 className="font-heading font-bold text-lg text-navy-heading">
                  Professional Memberships
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  {doctorData.memberships.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg bg-teal-light text-teal font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Consultation Link */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-teal text-white text-sm font-semibold hover:bg-teal-dark transition-colors inline-flex items-center gap-2"
                >
                  <span>Book Consultation with Dr. Sanatan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/achievements"
                  className="px-6 py-3 rounded-xl border border-neutral-border text-navy-heading text-sm font-medium hover:bg-neutral-50 transition-colors"
                >
                  View Awards & Fellowships
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      <AppointmentCTASection />
    </div>
  );
}

