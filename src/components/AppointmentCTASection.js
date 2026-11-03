import Link from "next/link";
import { Calendar, Phone, ArrowRight, ShieldCheck, MessageSquare } from "lucide-react";
import { doctorData } from "@/data/doctor";

export default function AppointmentCTASection() {
  return (
    <section className="section-padding bg-navy-dark text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 border border-white/20 text-teal-light text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal" />
          <span>Specialist Consultation Desk</span>
        </div>

        <div className="space-y-2 sm:space-y-4 max-w-3xl mx-auto">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-5xl text-white leading-tight">
            Your Journey Towards Better Neurological Care Starts Here.
          </h2>
          <p className="text-white/80 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Schedule a consultation to discuss your symptoms, concerns and available treatment options with Dr. Sanatan Satapathy.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 rounded-xl bg-teal hover:bg-teal-dark text-white font-semibold text-xs sm:text-base shadow-elevated transition-all group"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Book an Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-base transition-colors"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-light" />
            <span>Contact the Clinic</span>
          </Link>
        </div>

        {/* Trust & Location Summary */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <span>OPD at MAX Super Speciality Hospital</span>
          <span>•</span>
          <span>Nalco Square, Bhubaneswar</span>
          <span>•</span>
          <span>Dedicated Patient Coordination</span>
        </div>

      </div>
    </section>
  );
}

