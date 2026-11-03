import Link from "next/link";
import Image from "next/image";
import { Building2, MapPin, Clock, Phone, ExternalLink, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";
import { locationsData } from "@/data/locations";
import { doctorData } from "@/data/doctor";
import AppointmentCTASection from "@/components/AppointmentCTASection";

export const metadata = {
  title: "Consultation Locations & Hospital Affiliations | Dr. Sanatan Satapathy",
  description: "OPD consultation timings, hospital address, and emergency facilities for Dr. Sanatan Satapathy at MAX Super Speciality Hospital (Formerly Kalinga Hospital) in Bhubaneswar, Odisha.",
};

export default function HospitalsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-neutral-offwhite border-b border-neutral-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal">
              Hospital Affiliations & OPD Centers
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-navy-heading leading-tight">
              Consultation Locations
            </h1>
            <p className="editorial-lead text-neutral-body">
              Dr. Sanatan Satapathy consults and operates at established tertiary healthcare institutions in Bhubaneswar, equipped with modern neurosurgical theatres and dedicated neuro-intensive care units.
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Locations List */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {locationsData.map((loc, idx) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl border border-neutral-border p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:shadow-card transition-shadow space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-light text-teal">
                      {loc.badge}
                    </span>
                    <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Verified Location
                    </span>
                  </div>

                  <div className="relative w-full h-48 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-border">
                    <Image
                      src={idx === 0 ? doctorData.photos.clinic1 : doctorData.photos.clinic2}
                      alt={loc.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-1">
                    <h2 className="font-heading font-bold text-2xl text-navy-heading">
                      {loc.name}
                    </h2>
                    <p className="text-xs font-semibold text-teal">
                      {loc.designation}
                    </p>
                    <p className="text-xs text-neutral-body">
                      {loc.tagline}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-neutral-border/60 text-xs text-neutral-body">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-navy-heading">Hospital Address:</strong>
                        <p className="mt-0.5">{loc.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-navy-heading">OPD Timings:</strong>
                        <p className="mt-0.5 text-teal font-medium">{loc.timings}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-navy-heading">Appointment Desk:</strong>
                        <p className="mt-0.5">{loc.appointmentDesk}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-border/60">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-navy-heading mb-2">
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
                </div>

                <div className="pt-4 border-t border-neutral-border flex flex-col sm:flex-row items-center gap-3">
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
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Notice Box */}
          <div className="p-8 rounded-2xl bg-neutral-offwhite border border-neutral-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-heading font-bold text-lg text-navy-heading">
                Emergency & Acute Trauma Protocols
              </h3>
              <p className="text-xs sm:text-sm text-neutral-body max-w-2xl">
                For traumatic brain injuries, vehicular road accidents, sudden loss of consciousness, or acute post-traumatic paralysis, please transport the patient immediately to the 24/7 Casualty & Emergency Department at MAX Super Speciality Hospital (Formerly Kalinga Hospital), Nalco Square, Chandrasekharpur, Bhubaneswar.
              </p>
            </div>
            <a
              href={`tel:${doctorData.contact.emergencyPhone}`}
              className="px-6 py-3 rounded-xl bg-navy-dark text-white font-semibold text-xs shrink-0 inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal" />
              <span>Emergency: {doctorData.contact.emergencyPhone}</span>
            </a>
          </div>

        </div>
      </section>

      <AppointmentCTASection />
    </div>
  );
}

