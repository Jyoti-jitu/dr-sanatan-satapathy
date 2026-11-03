import Link from "next/link";
import Image from "next/image";
import { Building2, MapPin, Clock, Phone, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";
import { locationsData } from "@/data/locations";
import { doctorData } from "@/data/doctor";

export default function HospitalLocationsSection() {
  return (
    <section id="locations" className="section-padding bg-neutral-offwhite border-t border-neutral-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-1.5 sm:space-y-3 mb-8 sm:mb-12">
          <p className="text-[10px] sm:text-xs font-bold text-teal uppercase tracking-widest">
            Outpatient OPD & Operating Suites
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy-heading leading-tight">
            Where to Find Us.
          </h2>
          <p className="text-xs sm:text-base text-neutral-body leading-relaxed">
            Consultations and surgical procedures conducted at leading tertiary healthcare infrastructure in Bhubaneswar, Odisha.
          </p>
        </div>

        {/* Locations Grid: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {locationsData.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-2xl border border-neutral-border p-4 sm:p-6 lg:p-8 flex flex-col justify-between shadow-subtle hover:shadow-card transition-shadow space-y-4 sm:space-y-6"
            >
              <div className="space-y-3 sm:space-y-4">
                {/* Badge Header */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-teal-light text-teal border border-teal/20">
                    {loc.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs text-emerald-700 bg-emerald-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                    <span>Verified OPD</span>
                  </div>
                </div>

                {/* Location Image */}
                <div className="relative w-full h-40 sm:h-48 lg:h-56 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-border">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Name & Titles */}
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="font-heading font-bold text-base sm:text-xl lg:text-2xl text-navy-heading leading-snug">
                    {loc.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-teal">
                    {loc.designation}
                  </p>
                  <p className="text-[11px] sm:text-xs text-neutral-body">
                    {loc.tagline}
                  </p>
                </div>

                {/* Address & Timings */}
                <div className="space-y-3 pt-3 text-xs text-neutral-body border-t border-neutral-border/60">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-heading block">Address:</strong>
                      <p className="mt-0.5">{loc.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-heading block">Consultation Timings:</strong>
                      <p className="mt-0.5 text-teal font-medium">{loc.timings}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-heading block">Appointment Desk:</strong>
                      <p className="mt-0.5">{loc.appointmentDesk}</p>
                    </div>
                  </div>
                </div>

                {/* Infrastructure: Conditionally rendered only if features exist */}
                {loc.features && loc.features.length > 0 && (
                  <div className="pt-3 border-t border-neutral-border/60">
                    <p className="text-xs font-bold uppercase tracking-wider text-navy-heading mb-2">
                      Center Infrastructure:
                    </p>
                    <ul className="text-xs text-neutral-body space-y-1.5">
                      {loc.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-border/60 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={`/contact?hospital=${encodeURIComponent(loc.name)}`}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-teal text-white text-xs font-semibold text-center hover:bg-teal-dark transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book at this Center</span>
                </Link>

                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 rounded-xl border border-neutral-border text-navy-heading text-xs font-semibold hover:border-teal hover:bg-neutral-50 transition-colors inline-flex items-center justify-center gap-1.5"
                  aria-label={`Get directions to ${loc.name}`}
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on OPD appointments */}
        <div className="mt-10 text-center text-xs text-neutral-body">
          <p>
            Patients traveling from outside Bhubaneswar (Cuttack, Puri, Berhampur, Rourkela) are encouraged to pre-book consultation slots to minimize waiting times.
          </p>
        </div>

      </div>
    </section>
  );
}
