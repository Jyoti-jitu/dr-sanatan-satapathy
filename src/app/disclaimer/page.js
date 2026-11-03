import Link from "next/link";
import { AlertTriangle, Phone, ShieldAlert, ArrowRight } from "lucide-react";
import { doctorData } from "@/data/doctor";

export const metadata = {
  title: "Medical Disclaimer & Emergency Notice | Dr. Sanatan Satapathy",
  description: "Important healthcare disclaimer and emergency guidelines for patients visiting the official medical website of Dr. Sanatan Satapathy.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white">
      <section className="bg-neutral-offwhite border-b border-neutral-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800">
            Emergency Notice & Regulatory Statement
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-heading">
            Medical Disclaimer
          </h1>
          <p className="text-xs text-neutral-400">
            National Medical Commission (NMC) & Healthcare Communications Guidelines
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-neutral-body text-sm leading-relaxed">
          
          {/* Emergency Alert Banner */}
          <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
            <h2 className="font-heading font-bold text-lg text-rose-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>Medical Emergency Notice</span>
            </h2>
            <p className="text-rose-950 text-xs sm:text-sm leading-relaxed">
              This website and its digital appointment forms are NOT designed to provide real-time triage for acute medical emergencies. If you or someone in your care is experiencing traumatic head injury, sudden loss of consciousness, abrupt paralysis of limbs, intractable seizure, or severe acute trauma, <strong className="underline">do not wait for an email or online appointment confirmation</strong>. Proceed immediately to the nearest 24/7 hospital emergency department or call emergency trauma services.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${doctorData.contact.emergencyPhone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-600 text-white font-semibold text-xs hover:bg-rose-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Hospital Emergency: {doctorData.contact.emergencyPhone}</span>
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-navy-heading">
              1. Educational Purpose Only
            </h2>
            <p>
              The materials, articles, condition guides, surgical procedure explanations, and anatomical descriptions published on this website are authored solely for general patient educational awareness. They are not intended to serve as personalized medical advice, formal clinical diagnosis, or a substitute for an in-person physical examination by a registered physician.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-navy-heading">
              2. No Doctor-Patient Relationship
            </h2>
            <p>
              Browsing this website, submitting an appointment query form, or exchanging preliminary administrative communications via phone or messaging does not in itself constitute a formal doctor-patient relationship. A legal and clinical doctor-patient relationship is established only upon formal registration and face-to-face consultation at an authorized clinical hospital OPD.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-navy-heading">
              3. No Guaranteed Outcomes
            </h2>
            <p>
              Neurosurgery and spine surgery involve intricate anatomical variables. Every patient's response to surgery, minimally invasive decompression, or conservative physical therapy varies according to pathological chronicity, age, co-morbidities, and neural anatomy. While Dr. Sanatan Satapathy exercises the highest standards of evidence-based surgical craft, no surgical intervention carries a 100% guarantee of specific clinical outcomes or absence of complications.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-navy-heading">
              4. External Content & Affiliations
            </h2>
            <p>
              Mentions of hospital affiliations (including Sparsh Hospitals & Critical Care and Kalinga Institute of Medical Sciences - KIMS) reflect professional clinical practice locations in Bhubaneswar, Odisha. Patients are encouraged to verify current OPD schedules prior to visiting.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-border">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:underline"
            >
              <span>Back to Clinic Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

