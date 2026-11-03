import { Quote, CheckCircle2, MapPin } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white border-t border-neutral-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <p className="text-xs font-bold text-teal uppercase tracking-widest">
            Clinical Perspectives
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-heading leading-tight">
            Experiences Shared by Patients.
          </h2>
          <p className="editorial-lead text-neutral-body text-base">
            Reflections from individuals and families who underwent clinical evaluation, conservative management, or surgical treatment under Dr. Sanatan Satapathy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-neutral-offwhite border border-neutral-border hover:border-teal/30 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-teal/40" />
                <p className="text-sm sm:text-base text-neutral-body leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-border/60 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-navy-heading text-sm sm:text-base">
                    {item.patientName} <span className="text-xs font-normal text-neutral-400">({item.age})</span>
                  </h4>
                  <p className="text-xs text-teal font-medium">
                    {item.condition} • <span className="text-neutral-body">{item.procedure}</span>
                  </p>
                  <p className="text-[11px] text-neutral-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    <span>{item.location}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Medical disclaimer note below reviews */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-neutral-border/80 text-center text-xs text-neutral-body/80 max-w-2xl mx-auto">
          <p>
            * Individual medical outcomes, recovery times, and clinical experiences depend strictly on specific anatomical diagnoses, age, overall health, and severity of neural involvement.
          </p>
        </div>

      </div>
    </section>
  );
}

