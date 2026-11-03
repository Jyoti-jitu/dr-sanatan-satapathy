import { Stethoscope, UserCheck, Sparkles, MessageSquareHeart } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Detailed Evaluation",
    tagline: "Scans corroborate symptoms, not vice versa.",
    description: "Every consultation dedicates rigorous time to listening to the patient's lived experience, mapping physical dermatomes, and conducting hands-on neurological reflex tests. Scans are interpreted in direct relation to how your symptoms manifest.",
    icon: Stethoscope
  },
  {
    number: "02",
    title: "Individualized Treatment Planning",
    tagline: "No cookie-cutter algorithms.",
    description: "Whether a patient requires structured physiotherapy, nerve-root injections, or operative decompression depends strictly on clinical criteria, patient age, occupational demands, and progressive neurological status.",
    icon: UserCheck
  },
  {
    number: "03",
    title: "Modern Surgical Approaches",
    tagline: "High-definition optics & tissue preservation.",
    description: "When surgery is genuinely necessary, Dr. Satapathy implements high-precision microscopic and endoscopic corridors. Muscles are gently separated rather than severed, safeguarding spinal stability and normal anatomical architecture.",
    icon: Sparkles
  },
  {
    number: "04",
    title: "Clear Patient Communication",
    tagline: "Demystifying complex neurosurgery.",
    description: "We communicate in clear, honest, non-technical language. Patients and their families are fully informed about realistic post-operative expectations, genuine procedural risks, recovery milestones, and rehabilitation plans.",
    icon: MessageSquareHeart
  }
];

export default function WhySpecialistCare() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <p className="text-xs font-bold text-teal uppercase tracking-widest">
            Our Clinical Standard
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-heading leading-tight">
            Care That Begins with Understanding.
          </h2>
          <p className="editorial-lead text-neutral-body text-base sm:text-lg">
            Neurosurgical practice requires an uncompromising commitment to diagnostic precision, ethical restraint, and compassionate patient communication.
          </p>
        </div>

        {/* 4 Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="relative p-6 rounded-2xl bg-neutral-offwhite border border-neutral-border hover:border-teal/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-extrabold text-3xl text-neutral-300 group-hover:text-teal transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-neutral-border flex items-center justify-center text-teal shadow-subtle">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-heading font-bold text-lg text-navy-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-teal">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-border/60">
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    Evidence-Based Practice
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

