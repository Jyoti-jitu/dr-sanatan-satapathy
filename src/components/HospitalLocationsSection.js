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
        <div className="max-w-3xl space-y-3 mb-14">
          <p className="text-xs font-bold text-teal uppercase tracking-widest">
            Outpatient OPD & Operating Suites
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-heading leading-tight">
            Where to Find Us.
          </h2>
          <p className="editorial-lead text-neutral-body text-base">
            Consultations and surgical procedures conducted at leading tertiary hospitals and specialized outpatient centers in Bhubaneswar, Odisha.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {locationsData.map((loc, idx) => (
            <div
              key={loc.id}
              className="bg-white rounded-2xl border border-neutral-border p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:shadow-card transition-shadow"
            >
              <div className="space-y-4">
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-light text-teal">
                    {loc.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                    <span>Verified OPD</span>
                  </div>
                </div>

                {/* Location Image */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-border">
                  <Image
                    src={idx === 0 ? doctorData.photos.clinic1 : doctorData.photos.clinic2}
                    alt={loc.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xl text-navy-heading">
                    {loc.name}
                  </h3>
                  <p className="text-xs font-semibold text-teal">
                    {loc.designation}
                  </p>
                </div>

                {/* Address & Timings */}
                <div className="space-y-3 pt-2 text-xs text-neutral-body border-t border-neutral-border/60">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-heading">Consultation Timings:</p>
                      <p>{loc.timings}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-heading">Appointment Desk:</p>
                      <p>{loc.appointmentDesk}</p>
                    </div>
                  </div>
                </div>

                {/* Facility Features */}
                <div className="pt-2">
                  <p className="text-[11px] font-semibold text-neutral-body uppercase tracking-wider mb-1.5">
                    Infrastructure:
                  </p>
                  <ul className="text-[11px] text-neutral-body space-y-1">
                    {loc.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-teal font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-neutral-border/60 flex items-center gap-3">
                <Link
                  href={`/contact?hospital=${encodeURIComponent(loc.name)}`}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-teal text-white text-xs font-semibold text-center hover:bg-teal-dark transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book at this Center</span>
                </Link>

                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg border border-neutral-border text-navy-heading text-xs font-semibold hover:border-teal hover:bg-neutral-50 transition-colors inline-flex items-center justify-center gap-1"
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
        <div className="mt-8 text-center text-xs text-neutral-body">
          <p>
            Consultation is strictly by prior appointment to minimize waiting times and maintain unhurried patient examinations.
          </p>
        </div>

      </div>
    </section>
  );
}

