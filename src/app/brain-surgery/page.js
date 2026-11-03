import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Activity, Eye, AlertCircle, HelpCircle } from "lucide-react";
import { servicesData } from "@/data/services";
import AppointmentCTASection from "@/components/AppointmentCTASection";

export const metadata = {
  title: "Brain Surgery & Microneurosurgery in Bhubaneswar | Dr. Sanatan Satapathy",
  description: "Specialist brain tumor surgery, neurotrauma, intracranial hematoma evacuation, and cranial microsurgery in Bhubaneswar by Dr. Sanatan Satapathy (MCh Neurosurgery).",
};

export default function BrainSurgeryPage() {
  const service = servicesData.find((s) => s.slug === "brain-surgery");

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-neutral-offwhite border-b border-neutral-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal">
              <span>Super-Speciality Cranial Neurosurgery</span>
            </div>
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

      {/* Main Content Layout */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Surgical Approaches */}
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-heading">
                  Advanced Surgical Disciplines & Techniques
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              {/* Clinical Indications */}
              <div className="space-y-4 pt-6 border-t border-neutral-border">
                <h2 className="font-heading font-bold text-2xl text-navy-heading">
                  Conditions Requiring Cranial Neurosurgical Evaluation
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.indications.map((ind, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-offwhite border border-neutral-border/70 text-xs text-neutral-body">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diagnostic Protocol */}
              <div className="p-6 rounded-2xl bg-teal-light/40 border border-teal/30 space-y-3">
                <h3 className="font-heading font-bold text-lg text-navy-heading flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal" />
                  <span>Pre-Operative Radiological Assessment</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-body leading-relaxed">
                  Every cranial procedure is planned with high-resolution Contrast-Enhanced MRI (CEMRI) and 3D Computed Tomography. Functional MRI (fMRI) and Diffusion Tensor Tractography are utilized when lesions border eloquent motor or speech areas to map safe surgical corridors.
                </p>
              </div>

              {/* FAQs */}
              <div className="space-y-6 pt-6 border-t border-neutral-border">
                <h2 className="font-heading font-bold text-2xl text-navy-heading">
                  Frequently Asked Questions About Brain Surgery
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

            {/* Right Sidebar (4 cols) */}
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
                    Consult for Brain Condition
                  </h3>
                  <p className="text-xs text-neutral-body leading-relaxed">
                    Have an MRI or CT report indicating a brain tumor, aneurysm, or head trauma? Consult Dr. Sanatan Satapathy for an in-depth clinical review.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal text-white text-xs font-semibold hover:bg-teal-dark transition-colors shadow-sm"
                  >
                    <span>Request Evaluation Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Emergency reminder */}
              <div className="p-5 rounded-2xl bg-navy-dark text-white text-xs space-y-2">
                <p className="font-semibold text-teal-light flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-teal" />
                  <span>Acute Cranial Emergencies</span>
                </p>
                <p className="text-white/80 leading-relaxed">
                  For head trauma with loss of consciousness or sudden severe headache with projectile vomiting, proceed directly to the nearest 24/7 hospital emergency triage.
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

