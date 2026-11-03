import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Activity, HelpCircle, FileText } from "lucide-react";
import { servicesData } from "@/data/services";
import AppointmentCTASection from "@/components/AppointmentCTASection";

export const metadata = {
  title: "Spine Surgery Services in Bhubaneswar | Dr. Sanatan Satapathy",
  description: "Comprehensive cervical, thoracic and lumbar spine surgery in Bhubaneswar by Dr. Sanatan Satapathy. Treatment for disc herniations, sciatica, spinal stenosis, and instability.",
};

export default function SpineSurgeryPage() {
  const service = servicesData.find((s) => s.slug === "spine-surgery");

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-neutral-offwhite border-b border-neutral-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal">
              Spine Center of Excellence
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-navy-heading leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-teal font-medium">
              {service.subtitle}
            </p>
            <p className="editorial-lead text-neutral-body">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-8 space-y-12">
              
              {/* Conservative vs Surgical Approach */}
              <div className="p-6 rounded-2xl bg-teal-light/50 border border-teal/30 space-y-3">
                <h2 className="font-heading font-bold text-xl text-navy-heading flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal" />
                  <span>Conservative Care First Philosophy</span>
                </h2>
                <p className="text-xs sm:text-sm text-neutral-body leading-relaxed">
                  More than 85% of spinal complaints—including acute sciatica and cervical neck pain—resolve successfully with guided core physiotherapy, ergonomics correction, anti-inflammatory medication, and selective nerve root injections. Spine surgery is recommended only when non-operative care fails or when progressive neurological deficit requires prompt mechanical decompression.
                </p>
              </div>

              {/* Surgical Approaches */}
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-2xl text-navy-heading">
                  Surgical Disciplines & Motion Preservation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {service.approaches.map((app, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-neutral-offwhite border border-neutral-border space-y-2">
                      <h3 className="font-heading font-bold text-base text-navy-heading">
                        {app.title}
                      </h3>
                      <p className="text-xs text-neutral-body leading-relaxed">
                        {app.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spinal Conditions Addressed */}
              <div className="space-y-4 pt-6 border-t border-neutral-border">
                <h2 className="font-heading font-bold text-2xl text-navy-heading">
                  Spine Conditions Treated
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.indications.map((ind, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-neutral-offwhite border border-neutral-border/70 text-xs text-neutral-body">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recovery & Post-Op Mobilization */}
              <div className="space-y-4 pt-6 border-t border-neutral-border">
                <h2 className="font-heading font-bold text-2xl text-navy-heading">
                  Post-Operative Recovery Protocol
                </h2>
                <p className="text-sm text-neutral-body leading-relaxed">
                  {service.recoveryNotes}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-neutral-border text-center">
                    <p className="text-2xl font-heading font-extrabold text-teal">24 Hours</p>
                    <p className="text-xs text-neutral-body mt-1">Ambulation under supervision</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-neutral-border text-center">
                    <p className="text-2xl font-heading font-extrabold text-teal">1–3 Days</p>
                    <p className="text-xs text-neutral-body mt-1">Typical hospital discharge</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-neutral-border text-center">
                    <p className="text-2xl font-heading font-extrabold text-teal">2–4 Weeks</p>
                    <p className="text-xs text-neutral-body mt-1">Resumption of sedentary work</p>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-6 pt-6 border-t border-neutral-border">
                <h2 className="font-heading font-bold text-2xl text-navy-heading">
                  Spine Surgery FAQs
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-neutral-offwhite border border-neutral-border space-y-2">
                      <h4 className="font-heading font-bold text-sm text-navy-heading flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-teal shrink-0" />
                        <span>{faq.q}</span>
                      </h4>
                      <p className="text-xs text-neutral-body pl-6 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6 sticky top-28">
              <div className="relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-border shadow-card">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white space-y-4">
                  <h3 className="font-heading font-bold text-lg text-navy-heading">
                    Consult for Spine Pain
                  </h3>
                  <p className="text-xs text-neutral-body leading-relaxed">
                    Experiencing chronic back pain radiating down your leg or neck pain spreading into your arm? Book a comprehensive evaluation.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal text-white text-xs font-semibold hover:bg-teal-dark transition-colors shadow-sm"
                  >
                    <span>Request Spine Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Condition Links */}
              <div className="p-6 rounded-2xl bg-neutral-offwhite border border-neutral-border space-y-3">
                <h4 className="font-heading font-bold text-xs text-navy-heading uppercase tracking-wider">
                  Related Spine Guides
                </h4>
                <div className="space-y-2 text-xs">
                  <Link href="/conditions/slipped-disc" className="block text-teal hover:underline font-medium">
                    → Slipped Disc (Herniation) Guide
                  </Link>
                  <Link href="/conditions/spinal-stenosis" className="block text-teal hover:underline font-medium">
                    → Spinal Canal Stenosis Overview
                  </Link>
                  <Link href="/conditions/cervical-disc-disease" className="block text-teal hover:underline font-medium">
                    → Cervical Radiculopathy & Myelopathy
                  </Link>
                  <Link href="/endoscopic-spine-surgery" className="block text-teal hover:underline font-medium">
                    → Endoscopic Spine Decompression
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <AppointmentCTASection />
    </div>
  );
}

