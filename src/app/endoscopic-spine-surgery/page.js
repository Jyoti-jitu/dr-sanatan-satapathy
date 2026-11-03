import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, HelpCircle, Eye, AlertCircle } from "lucide-react";
import { servicesData } from "@/data/services";
import AppointmentCTASection from "@/components/AppointmentCTASection";

export const metadata = {
  title: "Endoscopic Spine Surgery in Bhubaneswar | Dr. Sanatan Satapathy",
  description: "Ultra-minimally invasive endoscopic spine surgery in Bhubaneswar by Dr. Sanatan Satapathy. Sub-centimeter incision disc removal preserving normal back muscles.",
};

export default function EndoscopicSpinePage() {
  const service = servicesData.find((s) => s.slug === "endoscopic-spine-surgery");

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-neutral-offwhite border-b border-neutral-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal">
              Ultra-Minimally Invasive Spine Care
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
              
              {/* How the Technique Works */}
              <div className="space-y-4">
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-heading">
                  How Endoscopic Spine Surgery Works
                </h2>
                <p className="text-sm text-neutral-body leading-relaxed">
                  Unlike traditional open surgery that requires stripping spinal muscles from bone, endoscopic spine surgery utilizes an incision typically under 8 millimeters (less than the diameter of a pencil). Through this tiny corridor, a rigid endoscope equipped with an HD optical lens, continuous saline irrigation channel, and working port is advanced directly to the pathology.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-neutral-offwhite border border-neutral-border space-y-1">
                    <p className="text-xs font-bold text-teal uppercase">Step 01</p>
                    <h3 className="font-heading font-bold text-sm text-navy-heading">Targeted Port Access</h3>
                    <p className="text-xs text-neutral-body">
                      Precision fluoroscopic guidance guides the cannula to the herniated disc without collateral muscle damage.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-offwhite border border-neutral-border space-y-1">
                    <p className="text-xs font-bold text-teal uppercase">Step 02</p>
                    <h3 className="font-heading font-bold text-sm text-navy-heading">Continuous HD Visualization</h3>
                    <p className="text-xs text-neutral-body">
                      High-magnification camera reveals the pinched nerve root and compressive disc fragments in real time.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-offwhite border border-neutral-border space-y-1">
                    <p className="text-xs font-bold text-teal uppercase">Step 03</p>
                    <h3 className="font-heading font-bold text-sm text-navy-heading">Selective Decompression</h3>
                    <p className="text-xs text-neutral-body">
                      Micro-graspers extract only the displaced disc fragment, preserving 90%+ of healthy disc volume.
                    </p>
                  </div>
                </div>
              </div>

              {/* Endoscopic Corridors */}
              <div className="space-y-6 pt-6 border-t border-neutral-border">
                <h2 className="font-heading font-bold text-2xl text-navy-heading">
                  Endoscopic Corridors: Transforaminal & Interlaminar
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.approaches.slice(0, 2).map((app, idx) => (
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

              {/* Patient Selection & Clinical Limitations */}
              <div className="p-6 rounded-2xl bg-teal-light/50 border border-teal/30 space-y-3">
                <h3 className="font-heading font-bold text-lg text-navy-heading flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal" />
                  <span>Patient Selection, Potential Benefits & Clinical Limitations</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-body leading-relaxed">
                  While endoscopic spine surgery offers notable advantages—such as reduced intraoperative blood loss, minimal paraspinal scarring, and shortened hospitalization—it is not universally suited for every spinal disorder. Patients with severe multi-level spinal instability, high-grade spondylolisthesis requiring extensive fusion instrumentation, or severe scoliosis are typically better treated with tubular minimally invasive or open stabilization. Candidacy is determined strictly via MRI evaluation.
                </p>
              </div>

              {/* Potential Indications */}
              <div className="space-y-4 pt-6 border-t border-neutral-border">
                <h2 className="font-heading font-bold text-2xl text-navy-heading">
                  Prime Indications for Endoscopic Spine Surgery
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

              {/* FAQs */}
              <div className="space-y-6 pt-6 border-t border-neutral-border">
                <h2 className="font-heading font-bold text-2xl text-navy-heading">
                  Endoscopic Spine FAQs
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
                    Check Endoscopic Candidacy
                  </h3>
                  <p className="text-xs text-neutral-body leading-relaxed">
                    Have an MRI confirming a herniated disc or foraminal stenosis? Discuss whether endoscopic discectomy is clinically viable for you.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal text-white text-xs font-semibold hover:bg-teal-dark transition-colors shadow-sm"
                  >
                    <span>Request Candidacy Assessment</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-offwhite border border-neutral-border text-xs space-y-2">
                <p className="font-bold text-navy-heading">Responsible Surgical Notice</p>
                <p className="text-neutral-body leading-relaxed">
                  * Clinical results vary depending on disc morphology and individual anatomy. No surgical procedure carries zero risk or guarantees immediate pain freedom.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <AppointmentCTASection />
    </div>
  );
}

