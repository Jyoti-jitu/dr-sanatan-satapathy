import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import { doctorData } from "@/data/doctor";
import { locationsData } from "@/data/locations";

export const metadata = {
  title: "Book Consultation & Contact Dr. Sanatan Satapathy | Bhubaneswar",
  description: "Schedule an outpatient neurosurgery or spine consultation with Dr. Sanatan Satapathy in Bhubaneswar. Contact numbers, OPD schedule, and appointment request form.",
};

export default function ContactPage({ searchParams }) {
  const initialHospital = searchParams?.hospital || "";

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-neutral-offwhite border-b border-neutral-border py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2 sm:space-y-4">
            <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-teal-light text-teal">
              Patient Coordination & Appointments
            </span>
            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-navy-heading leading-tight">
              Contact & Book Consultation
            </h1>
            <p className="text-neutral-body text-xs sm:text-base lg:text-lg leading-relaxed">
              Reserve an in-person outpatient clinical evaluation with Dr. Sanatan Satapathy at MAX Super Speciality Hospital (Formerly Kalinga Hospital) in Bhubaneswar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Information Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-16 items-start">
            
            {/* Left: Real Appointment Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <AppointmentForm defaultLocation={initialHospital} />
            </div>

            {/* Right: Contact Information & OPD Centers (5 cols) */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              
              {/* Direct Calling & Messaging Cards */}
              <div className="p-4 sm:p-6 rounded-2xl bg-neutral-offwhite border border-neutral-border space-y-3 sm:space-y-4">
                <h3 className="font-heading font-bold text-base sm:text-lg text-navy-heading">
                  Direct Clinical Desk
                </h3>

                <div className="space-y-3">
                  <a
                    href={`tel:${doctorData.contact.phone}`}
                    className="p-4 rounded-xl bg-white border border-neutral-border hover:border-teal flex items-center gap-3 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-light text-teal flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-body uppercase tracking-wider">OPD Coordination Desk</p>
                      <p className="font-heading font-bold text-navy-heading text-base group-hover:text-teal transition-colors">
                        {doctorData.contact.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${doctorData.contact.whatsapp}?text=Hello%20Dr.%20Sanatan%20Satapathy%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 hover:border-emerald-300 flex items-center gap-3 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Instant WhatsApp Desk</p>
                      <p className="font-heading font-bold text-emerald-950 text-base">
                        Chat on WhatsApp
                      </p>
                    </div>
                  </a>

                  <div className="p-4 rounded-xl bg-white border border-neutral-border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-light text-teal flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-body uppercase tracking-wider">Official Email</p>
                      <p className="font-heading font-bold text-navy-heading text-sm">
                        {doctorData.contact.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Timings & Centers */}
              <div className="p-6 rounded-2xl bg-white border border-neutral-border space-y-4">
                <h3 className="font-heading font-bold text-lg text-navy-heading">
                  Consultation Centers & Timings
                </h3>

                <div className="space-y-4 text-xs text-neutral-body">
                  {locationsData.map((loc) => (
                    <div key={loc.id} className="p-3.5 rounded-xl bg-neutral-offwhite border border-neutral-border space-y-1">
                      <p className="font-bold text-navy-heading text-sm">{loc.name}</p>
                      <p className="text-neutral-body">{loc.address}</p>
                      <p className="text-teal font-semibold pt-0.5">{loc.timings}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medical Reports Advisory */}
              <div className="p-5 rounded-2xl bg-teal-light/50 border border-teal/30 space-y-2 text-xs">
                <p className="font-bold text-navy-heading flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal" />
                  <span>What to Bring to Your Consultation</span>
                </p>
                <p className="text-neutral-body leading-relaxed">
                  Please bring physical MRI/CT scan films, CDs, previous radiological reports, current medication prescriptions, and relevant surgical discharge summaries.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

