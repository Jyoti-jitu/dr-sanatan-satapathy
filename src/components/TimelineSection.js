import { GraduationCap, Award, Building, BookOpen, CheckCircle2 } from "lucide-react";
import { doctorData } from "@/data/doctor";

export default function TimelineSection() {
  return (
    <section className="section-padding bg-neutral-offwhite border-t border-neutral-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5 sm:space-y-3 mb-8 sm:mb-16">
          <p className="text-[10px] sm:text-xs font-bold text-teal uppercase tracking-widest">
            Academic Pedigree
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy-heading leading-tight">
            Education, Training & Professional Journey.
          </h2>
          <p className="text-xs sm:text-base text-neutral-body leading-relaxed">
            Grounded in rigorous surgical training at Eastern India's apex medical college and enriched through advanced super-speciality fellowships.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-teal/40 ml-4 sm:ml-32 space-y-6 sm:space-y-12">
          {doctorData.timeline.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-teal shadow-sm" />

              {/* Institution / Stage Tag (Left on desktop) */}
              <div className="mb-1.5 sm:mb-0 sm:absolute sm:-left-36 sm:top-1 sm:w-28 sm:text-right">
                <span className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-white border border-neutral-border text-[10px] sm:text-[11px] font-bold text-navy-heading">
                  {item.year}
                </span>
              </div>

              {/* Milestone Card */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-neutral-border shadow-subtle hover:shadow-card transition-shadow">
                <div className="space-y-1 sm:space-y-1.5">
                  <span className="text-[10px] sm:text-xs font-semibold text-teal uppercase tracking-wider">
                    {item.institution}
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-xl text-navy-heading">
                    {item.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-body leading-relaxed pt-0.5 sm:pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-border/60 flex items-center gap-2 text-xs text-neutral-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                  <span>Verified Medical Curriculum & Credential</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Professional Memberships Strip */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-neutral-border shadow-subtle">
          <h4 className="text-xs font-bold text-navy-heading uppercase tracking-widest mb-4 text-center">
            Professional Memberships & Affiliations
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {doctorData.memberships.map((mem, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-neutral-offwhite border border-neutral-border text-xs font-medium text-navy-heading"
              >
                {mem}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

