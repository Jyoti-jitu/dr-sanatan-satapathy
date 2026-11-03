"use client";

import Link from "next/link";
import { Phone, Calendar, MessageSquare } from "lucide-react";
import { doctorData } from "@/data/doctor";

export default function StickyAppointmentBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-border px-4 py-2.5 shadow-elevated">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        <a
          href={`tel:${doctorData.contact.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-neutral-offwhite border border-neutral-border text-navy-heading text-[11px] font-semibold active:bg-neutral-200"
        >
          <Phone className="w-4 h-4 text-teal mb-0.5" />
          <span>Call Desk</span>
        </a>

        <a
          href={`https://wa.me/${doctorData.contact.whatsapp}?text=Hello%20Dr.%20Sanatan%20Satapathy%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold active:bg-emerald-100"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-teal text-white text-[11px] font-semibold active:bg-teal-dark shadow-sm"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span>Book OPD</span>
        </Link>
      </div>
    </div>
  );
}

