import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Activity, Eye, Zap, Shield, Stethoscope } from "lucide-react";
import { servicesData } from "@/data/services";

export default function SpecialtiesGrid() {
  return (
    <section id="specialities" className="section-padding bg-neutral-offwhite border-y border-neutral-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 sm:space-y-3 mb-8 sm:mb-14">
          <p className="text-[10px] sm:text-xs font-bold text-teal uppercase tracking-widest">
            Clinical Focus Areas
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-5xl text-navy-heading leading-tight">
            Specialised Care for Complex Brain & Spine Conditions.
          </h2>
          <p className="text-neutral-body text-xs sm:text-base lg:text-lg leading-relaxed">
            High-precision surgical disciplines utilizing modern optical corridors, intraoperative monitoring, and minimally invasive techniques to achieve optimal clinical outcomes.
          </p>
        </div>

        {/* Editorial Grid: Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const isFeatured = index === 0 || index === 2; // Brain surgery & Endoscopic spine featured

            return (
              <div
                key={service.id}
                className={`group flex flex-col justify-between rounded-2xl bg-white border border-neutral-border hover:border-teal/50 shadow-subtle hover:shadow-card transition-all duration-300 overflow-hidden ${
                  isFeatured ? "lg:row-span-1 border-t-4 border-t-teal" : ""
                }`}
              >
                {/* Image Section */}
                <div className="relative w-full h-40 sm:h-48 lg:h-52 overflow-hidden bg-neutral-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-border text-[10px] sm:text-[11px] font-bold text-navy-heading uppercase tracking-wider">
                    {index % 2 === 0 ? "Cranial Specialty" : "Spinal Discipline"}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-navy-heading group-hover:text-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-medium text-teal leading-snug">
                      {service.subtitle}
                    </p>
                    <p className="text-xs text-neutral-body leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Indications micro list */}
                  <div className="pt-2 border-t border-neutral-border/60">
                    <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
                      Common Indications
                    </p>
                    <ul className="text-xs text-neutral-body space-y-1">
                      {service.indications.slice(0, 2).map((ind, i) => (
                        <li key={i} className="line-clamp-1 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Link */}
                  <div className="pt-2">
                    <Link
                      href={`/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-navy-heading group-hover:text-teal transition-colors"
                    >
                      <span>Explore Procedure & Clinical Indications</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Educational Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-neutral-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-navy-heading text-base">
              Unsure which surgical or conservative approach fits your diagnosis?
            </h4>
            <p className="text-xs text-neutral-body">
              Every neurosurgical care plan begins with a meticulous clinical examination and scan review.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-teal text-white text-xs font-semibold hover:bg-teal-dark transition-colors shrink-0 shadow-sm"
          >
            Request Diagnostic Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}

