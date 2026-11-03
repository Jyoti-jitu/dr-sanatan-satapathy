import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle, Activity, ChevronRight, Stethoscope } from "lucide-react";
import { conditionsData } from "@/data/conditions";
import AppointmentCTASection from "@/components/AppointmentCTASection";

export function generateStaticParams() {
  return conditionsData.map((c) => ({
    slug: c.slug,
  }));
}

export function generateMetadata({ params }) {
  const condition = conditionsData.find((c) => c.slug === params.slug);
  if (!condition) return {};

  return {
    title: `${condition.title} Symptoms & Treatment in Bhubaneswar | Dr. Sanatan Satapathy`,
    description: `Comprehensive guide to ${condition.title} (${condition.scientificName}): symptoms, MRI diagnostic evaluation, conservative therapy, and surgical options in Bhubaneswar by Dr. Sanatan Satapathy.`,
  };
}

export default function ConditionDetailPage({ params }) {
  const condition = conditionsData.find((c) => c.slug === params.slug);

  if (!condition) {
    notFound();
  }

  // Schema.org MedicalCondition Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": condition.title,
    "alternateName": condition.scientificName,
    "description": condition.summary,
    "signOrSymptom": condition.symptoms.map(s => ({
      "@type": "MedicalSignOrSymptom",
      "name": s
    })),
    "possibleTreatment": condition.treatmentOptions.map(t => ({
      "@type": "MedicalTherapy",
      "name": t.type,
      "description": t.desc
    }))
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb & Header */}
      <section className="bg-neutral-offwhite border-b border-neutral-border py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-neutral-body mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <Link href="/conditions" className="hover:text-teal transition-colors">Conditions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-navy-heading font-medium">{condition.title}</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal">
              {condition.category} Specialty Guide
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-navy-heading leading-tight">
              {condition.title}
            </h1>
            <p className="text-sm font-semibold text-teal">
              Medical Classification: {condition.scientificName}
            </p>
            <p className="editorial-lead text-neutral-body text-base sm:text-lg">
              {condition.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Clinical Overview */}
              <div className="space-y-4">
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-heading">
                  Understanding {condition.title}
                </h2>
                <p className="text-sm sm:text-base text-neutral-body leading-relaxed">
                  {condition.overview}
                </p>
              </div>

              {/* Signs & Symptoms */}
              <div className="space-y-4 pt-6 border-t border-neutral-border">
                <h2 className="font-heading font-bold text-2xl text-navy-heading">
                  Common Symptoms & Warning Signs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {condition.symptoms.map((symp, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-offwhite border border-neutral-border text-xs sm:text-sm text-neutral-body">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>{symp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Possible Causes & Risk Factors */}
              <div className="space-y-4 pt-6 border-t border-neutral-border">
                <h2 className="font-heading font-bold text-2xl text-navy-heading">
                  Etiology & Underlying Causes
                </h2>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-body">
                  {condition.causes.map((cause, i) => (
                    <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-neutral-border/80">
                      <span className="w-2 h-2 rounded-full bg-teal shrink-0 mt-2" />
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diagnostic Assessment */}
              <div className="space-y-4 pt-6 border-t border-neutral-border">
                <h2 className="font-heading font-bold text-2xl text-navy-heading">
                  Diagnostic Evaluation & Imaging Protocols
                </h2>
                <div className="space-y-3">
                  {condition.diagnosticEvaluation.map((diag, i) => (
                    <div key={i} className="p-4 rounded-xl bg-neutral-offwhite border border-neutral-border space-y-1">
                      <p className="text-xs sm:text-sm text-navy-heading font-medium leading-relaxed">
                        {diag}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment Options (Conservative vs Surgical) */}
              <div className="space-y-6 pt-6 border-t border-neutral-border">
                <div className="space-y-1">
                  <h2 className="font-heading font-bold text-2xl text-navy-heading">
                    Treatment Pathways
                  </h2>
                  <p className="text-xs text-neutral-body">
                    Individualized pathways based on neurological severity, imaging correlation, and patient lifestyle.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {condition.treatmentOptions.map((treat, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white border border-neutral-border hover:border-teal/40 shadow-subtle space-y-2">
                      <h3 className="font-heading font-bold text-base text-navy-heading">
                        {treat.type}
                      </h3>
                      <p className="text-xs text-neutral-body leading-relaxed">
                        {treat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* When to Seek Immediate Medical Evaluation */}
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
                <h3 className="font-heading font-bold text-base text-amber-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <span>When to Seek Urgent Neurosurgical Evaluation</span>
                </h3>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  {condition.whenToConsult}
                </p>
              </div>

              {/* FAQs */}
              {condition.faqs && condition.faqs.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-neutral-border">
                  <h2 className="font-heading font-bold text-2xl text-navy-heading">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {condition.faqs.map((faq, idx) => (
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
              )}

            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6 sticky top-28">
              
              {/* Doctor Consultation Card */}
              <div className="p-6 rounded-2xl bg-white border border-neutral-border shadow-card space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-teal uppercase tracking-wider">
                  <Stethoscope className="w-4 h-4" />
                  <span>Specialist Consultation</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-navy-heading">
                  Clinical Opinion for {condition.title}
                </h3>
                <p className="text-xs text-neutral-body leading-relaxed">
                  Schedule an in-depth clinical consultation with Dr. Sanatan Satapathy at Sparsh Hospitals or KIMS, Bhubaneswar.
                </p>
                <Link
                  href={`/contact?condition=${encodeURIComponent(condition.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal text-white text-xs font-semibold hover:bg-teal-dark transition-colors shadow-sm"
                >
                  <span>Request OPD Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Service Link */}
              <div className="p-6 rounded-2xl bg-neutral-offwhite border border-neutral-border space-y-3">
                <h4 className="text-xs font-bold text-navy-heading uppercase tracking-wider">
                  Related Surgical Discipline
                </h4>
                <p className="text-xs text-neutral-body">
                  Learn more about surgical corridors and technology for this condition:
                </p>
                <Link
                  href={`/${condition.relatedServiceSlug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-teal hover:text-teal-dark"
                >
                  <span>{condition.relatedServiceName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Clinical disclaimer */}
              <div className="p-4 rounded-xl bg-white border border-neutral-border/80 text-[11px] text-neutral-body leading-relaxed">
                <p>
                  * <strong>Medical Disclaimer:</strong> This guide is intended solely for patient educational awareness. It does not replace individualized diagnostic evaluation by a certified physician.
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

