import Link from "next/link";
import { AlertCircle, Phone } from "lucide-react";
import { doctorData } from "@/data/doctor";

export default function EmergencyBanner() {
  return (
    <aside aria-label="Emergency Medical Notification" className="bg-navy-dark text-white/90 text-xs py-2 px-4 border-b border-navy/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-teal animate-pulse" />
          <p className="font-medium text-white/95">
            Emergency Triage: For acute trauma, loss of consciousness, or sudden paralysis, visit the nearest 24/7 ER immediately.
          </p>
        </div>
        <div className="flex items-center gap-4 text-white/80">
          <span className="hidden md:inline">Hospital ER Desk:</span>
          <a
            href={`tel:${doctorData.contact.emergencyPhone}`}
            className="inline-flex items-center gap-1.5 font-semibold text-teal-light hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-teal" />
            <span>{doctorData.contact.emergencyPhone}</span>
          </a>
          <span className="text-white/30 hidden sm:inline">|</span>
          <Link href="/disclaimer" className="underline hover:text-white text-[11px] text-white/70">
            Medical Disclaimer
          </Link>
        </div>
      </div>
    </aside>
  );
}

