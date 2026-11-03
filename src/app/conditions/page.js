import Link from "next/link";
import { ArrowRight, Brain, Disc, ChevronRight, Activity, ShieldAlert, Sparkles } from "lucide-react";
import { conditionsData } from "@/data/conditions";
import AppointmentCTASection from "@/components/AppointmentCTASection";

export const metadata = {
  title: "Conditions Treated | Brain & Spine Disorders Directory | Dr. Sanatan Satapathy",
  description: "Comprehensive patient guide to brain tumours, slipped discs, spinal stenosis, cervical disc disease, lumbar degeneration, and head trauma by Dr. Sanatan Satapathy.",
};

export default function ConditionsDirectoryPage() {
  const brainConditions = conditionsData.filter(c => c.category.toLowerCase().includes("brain"));
  const spineConditions = conditionsData.filter(c => c.category.toLowerCase().includes("spine"));

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-neutral-offwhite border-b border-neutral-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal">
              Clinical Directory
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-navy-heading leading-tight">
              Conditions We Treat
            </h1>
            <p className="editorial-lead text-neutral-body">
              An evidence-based educational resource detailing neurological and spinal disorders, red-flag symptoms, diagnostic imaging methods, and non-operative versus surgical treatment protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Sections */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Spine & Nerve Conditions Section */}
          <div className="space-y-8">
            <div className="border-b border-neutral-border pb-4 flex items-center justify-between">
              <div>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-heading">
                  Spine, Disc & Nerve Disorders
                </h2>
                <p className="text-xs sm:text-sm text-neutral-body mt-1">
                  Degenerative disc prolapse, canal stenosis, radicular nerve compression, and spinal stability.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-bold">
                {spineConditions.length} Conditions
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spineConditions.map((condition) => (
                <div
                  key={condition.slug}
                  className="group bg-white p-6 rounded-2xl border border-neutral-border hover:border-teal/40 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-neutral-offwhite text-teal">
                      {condition.category}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-navy-heading group-hover:text-teal transition-colors">
                      {condition.title}
                    </h3>
                    <p className="text-xs text-neutral-body line-clamp-3 leading-relaxed">
                      {condition.summary}
                    </p>

                    <div className="pt-2 border-t border-neutral-border/60">
                      <p className="text-[11px] font-semibold text-neutral-body uppercase tracking-wider mb-1">
                        Key Symptoms:
                      </p>
                      <ul className="text-xs text-neutral-body space-y-1">
                        {condition.symptoms.slice(0, 2).map((s, i) => (
                          <li key={i} className="line-clamp-1 flex items-start gap-1.5">
                            <span className="text-teal font-bold">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-neutral-border/60 flex items-center justify-between text-xs">
                    <Link
                      href={`/conditions/${condition.slug}`}
                      className="font-bold text-navy-heading group-hover:text-teal inline-flex items-center gap-1"
                    >
                      <span>Read Complete Guide</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cranial & Neurotrauma Section */}
          <div className="space-y-8">
            <div className="border-b border-neutral-border pb-4 flex items-center justify-between">
              <div>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-heading">
                  Brain Conditions & Neurotrauma
                </h2>
                <p className="text-xs sm:text-sm text-neutral-body mt-1">
                  Intracranial neoplasms, traumatic brain injury, acute intracranial hemorrhages, and skull base pathologies.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-bold">
                {brainConditions.length} Conditions
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brainConditions.map((condition) => (
                <div
                  key={condition.slug}
                  className="group bg-white p-6 rounded-2xl border border-neutral-border hover:border-teal/40 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-neutral-offwhite text-teal">
                      {condition.category}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-navy-heading group-hover:text-teal transition-colors">
                      {condition.title}
                    </h3>
                    <p className="text-xs text-neutral-body line-clamp-3 leading-relaxed">
                      {condition.summary}
                    </p>

                    <div className="pt-2 border-t border-neutral-border/60">
                      <p className="text-[11px] font-semibold text-neutral-body uppercase tracking-wider mb-1">
                        Key Symptoms:
                      </p>
                      <ul className="text-xs text-neutral-body space-y-1">
                        {condition.symptoms.slice(0, 2).map((s, i) => (
                          <li key={i} className="line-clamp-1 flex items-start gap-1.5">
                            <span className="text-teal font-bold">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-neutral-border/60 flex items-center justify-between text-xs">
                    <Link
                      href={`/conditions/${condition.slug}`}
                      className="font-bold text-navy-heading group-hover:text-teal inline-flex items-center gap-1"
                    >
                      <span>Read Complete Guide</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
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

