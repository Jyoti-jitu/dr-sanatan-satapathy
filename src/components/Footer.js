import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { doctorData } from "@/data/doctor";
import { locationsData } from "@/data/locations";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80 border-t border-navy/60">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Doctor Profile Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white border border-teal/50 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt={`${doctorData.name} Logo`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-lg tracking-tight">
                  {doctorData.name}
                </h3>
                <p className="text-xs text-teal-light font-medium uppercase tracking-wider">
                  MCh Neurosurgery | Spine Surgeon
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              Advanced cranial and spinal care focused on patient-centered precision, tissue-preserving endoscopic procedures, and ethical medical evaluation in Bhubaneswar, Odisha.
            </p>

            <div className="pt-2 text-xs text-white/60 space-y-1.5">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
                <span>Super-speciality training from SCB Cuttack & AIIMS New Delhi</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal shrink-0" />
                <span>Bhubaneswar, Odisha, India</span>
              </p>
            </div>
          </div>

          {/* Col 2: Specialities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider border-l-2 border-teal pl-2.5">
              Surgical Specialities
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/brain-surgery" className="hover:text-teal transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-teal/60" />
                  Brain Tumour & Neurotrauma
                </Link>
              </li>
              <li>
                <Link href="/spine-surgery" className="hover:text-teal transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-teal/60" />
                  Comprehensive Spine Surgery
                </Link>
              </li>
              <li>
                <Link href="/endoscopic-spine-surgery" className="hover:text-teal transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-teal/60" />
                  Endoscopic Spine Surgery
                </Link>
              </li>
              <li>
                <Link href="/minimally-invasive-spine-surgery" className="hover:text-teal transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-teal/60" />
                  Minimally Invasive Spine (MISS)
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-teal transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-teal/60" />
                  Conditions Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider border-l-2 border-teal pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-teal transition-colors">
                  About Dr. Sanatan
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-teal transition-colors">
                  Awards & Recognition
                </Link>
              </li>
              <li>
                <Link href="/hospitals" className="hover:text-teal transition-colors">
                  Hospital Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-teal transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-teal transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Consultation Centers (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider border-l-2 border-teal pl-2.5">
              Consultation Centers
            </h4>
            <div className="space-y-3 text-xs">
              {locationsData.slice(0, 2).map((loc) => (
                <div key={loc.id} className="p-3 rounded-lg bg-navy/60 border border-navy/40">
                  <p className="font-semibold text-white text-sm">{loc.name}</p>
                  <p className="text-white/70 mt-0.5">{loc.address}</p>
                  <p className="text-teal font-medium mt-1">{loc.timings}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Callout Card in Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-navy border border-teal/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-sm font-semibold text-white">
              Need to coordinate an OPD consultation or urgent review?
            </p>
            <p className="text-xs text-white/70">
              Contact our patient coordination desk to reserve a consultation slot at Sparsh Hospital or KIMS.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-teal text-white text-sm font-semibold hover:bg-teal-dark transition-colors inline-flex items-center gap-2"
            >
              <span>Schedule Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${doctorData.contact.phone}`}
              className="px-4 py-2.5 rounded-lg bg-navy-dark border border-white/20 text-white text-sm font-medium hover:border-teal transition-colors inline-flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-teal" />
              <span>Call OPD Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy/80 bg-deep-navy/80 py-6 text-xs text-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Dr. Sanatan Satapathy. All rights reserved. Medical content published for patient educational awareness.
          </p>
          <div className="flex items-center gap-4 text-white/70">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Medical Disclaimer
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              OPD Timings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

