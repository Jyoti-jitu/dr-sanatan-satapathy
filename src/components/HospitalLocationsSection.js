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
        <div className="max-w-3xl space-y-3 mb-12">
          <p className="text-xs font-bold text-teal uppercase tracking-widest">
            Outpatient OPD & Operating Suites
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-heading leading-tight">
            Where to Find Us.
          </h2>
          <p className="editorial-lead text-neutral-body text-base">
            Consultations and surgical procedures conducted at leading tertiary healthcare infrastructure in Bhubaneswar, Odisha.
          </p>
        </div>

        {/* Featured Hospital Card */}
        <div className="max-w-5xl mx-auto">
          {locationsData.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-3xl border border-neutral-border overflow-hidden shadow-card grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Image (5 cols on lg) */}
              <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[340px] lg:min-h-full bg-neutral-100">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm text-teal shadow-sm border border-neutral-border">
                    {loc.badge}
                  </span>
                </div>
              </div>

              {/* Right Content (7 cols on lg) */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal">
                      Primary Hospital Affiliation
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified OPD</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-heading leading-tight">
                      {loc.name}
                    </h3>
                    <p className="text-sm font-semibold text-teal mt-1">
                      {loc.designation}
                    </p>
                    <p className="text-xs text-neutral-body mt-0.5">
                      {loc.tagline}
                    </p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-border/60 text-xs text-neutral-body">
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

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-navy-heading block">Emergency Care:</strong>
                        <p className="mt-0.5">{loc.emergency}</p>
                      </div>
                    </div>
                  </div>

                  {/* Real Hospital Infrastructure */}
                  <div className="pt-4 border-t border-neutral-border/60">
                    <p className="text-xs font-bold uppercase tracking-wider text-navy-heading mb-2.5">
                      Center Infrastructure:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-body">
                      {loc.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-neutral-border flex flex-col sm:flex-row items-center gap-3.5">
                  <Link
                    href={`/contact?hospital=${encodeURIComponent(loc.name)}`}
                    className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-teal text-white text-xs sm:text-sm font-semibold text-center hover:bg-teal-dark transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book at this Center</span>
                  </Link>

                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 px-6 rounded-xl border border-neutral-border text-navy-heading text-xs sm:text-sm font-semibold hover:border-teal hover:bg-neutral-50 transition-colors inline-flex items-center justify-center gap-2"
                    aria-label={`Get directions to ${loc.name}`}
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-4 h-4 text-neutral-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on OPD appointments */}
        <div className="mt-8 text-center text-xs text-neutral-body">
          <p>
            Patients traveling from outside Bhubaneswar (Cuttack, Puri, Berhampur, Rourkela) are encouraged to pre-book consultation slots to minimize waiting times.
          </p>
        </div>

      </div>
    </section>
  );
}
