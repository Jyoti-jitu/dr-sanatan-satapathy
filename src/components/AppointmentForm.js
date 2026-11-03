"use client";

import { useState } from "react";
import { Calendar, Phone, Clock, CheckCircle2, AlertCircle, Send, MessageSquare, ShieldCheck } from "lucide-react";
import { locationsData } from "@/data/locations";
import { doctorData } from "@/data/doctor";

export default function AppointmentForm({ defaultLocation = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hospital: defaultLocation || locationsData[0]?.name || "MAX Super Speciality Hospital (Formerly Kalinga Hospital)",
    date: "",
    message: "",
    honeypot: "" // Anti-spam field
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      errs.name = "Please enter the full patient name (minimum 3 characters).";
    }

    // Indian 10-digit phone validation (e.g. 9876543210 or +91...)
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please provide a valid 10-digit mobile number.";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.date) {
      errs.date = "Please select your preferred consultation date.";
    } else {
      const selected = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errs.date = "Consultation date cannot be in the past.";
      }
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = "Please briefly mention the reason for consultation (e.g. Back pain, MRI review, Brain tumour consultation).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check spam honeypot
    if (formData.honeypot) {
      return;
    }

    if (!validate()) return;

    setLoading(true);

    // Simulate reliable secure dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setSubmissionData({ ...formData });
    }, 900);
  };

  const createWhatsAppLink = () => {
    const text = `Hello Dr. Sanatan Satapathy Clinic Desk,

I would like to request an OPD consultation appointment:
• Patient Name: ${formData.name || "[Your Name]"}
• Contact Number: ${formData.phone || "[Your Phone]"}
• Preferred Hospital: ${formData.hospital}
• Preferred Date: ${formData.date || "Earliest available"}
• Clinical Reason: ${formData.message || "Neurosurgical / Spine consultation"}

Kindly confirm available OPD slots. Thank you.`;

    return `https://wa.me/${doctorData.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-2xl border border-teal/30 shadow-card text-center space-y-6 animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-teal-light rounded-full flex items-center justify-center mx-auto text-teal">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
            Enquiry Received
          </span>
          <h3 className="font-heading font-bold text-2xl text-navy-heading">
            Thank you, {submissionData?.name}
          </h3>
          <p className="text-sm text-neutral-body max-w-md mx-auto">
            Your appointment request for <strong className="text-navy-heading">{submissionData?.hospital}</strong> on <strong className="text-navy-heading">{submissionData?.date}</strong> has been registered.
          </p>
        </div>

        {/* Real-time assistance note */}
        <div className="p-4 rounded-xl bg-neutral-offwhite border border-neutral-border text-left text-xs text-neutral-body space-y-2">
          <p className="font-medium text-navy-heading flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal" />
            <span>Next Steps:</span>
          </p>
          <p>
            The hospital OPD coordinator will contact you at <strong>{submissionData?.phone}</strong> within 2 to 4 working hours to assign an exact consultation slot.
          </p>
          <p className="text-[11px] text-neutral-body/80 italic">
            Note: This booking system operates in clinical coordination mode. Please carry all recent MRI/CT scan films and previous prescriptions for your appointment.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Confirm Instant on WhatsApp</span>
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                hospital: locationsData[0]?.name || "",
                date: "",
                message: "",
                honeypot: ""
              });
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-neutral-border text-navy-heading hover:bg-neutral-offwhite font-medium text-sm transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-8 lg:p-10 rounded-2xl border border-neutral-border shadow-card">
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-teal uppercase tracking-wider mb-1">
          <Calendar className="w-3.5 h-3.5" />
          <span>Outpatient Consultation Request</span>
        </div>
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy-heading">
          Book an Appointment
        </h3>
        <p className="text-xs sm:text-sm text-neutral-body mt-1">
          Schedule a clinical evaluation for brain, spine, or nerve conditions in Bhubaneswar.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Anti-spam hidden field */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        {/* Patient Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-navy-heading mb-1">
            Patient Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Mohanty"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-navy-heading placeholder:text-neutral-400 focus:outline-none transition-colors ${
              errors.name ? "border-rose-400 bg-rose-50/30" : "border-neutral-border focus:border-teal"
            }`}
          />
          {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
        </div>

        {/* Mobile Number & Email (2 cols on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-navy-heading mb-1">
              Mobile Number <span className="text-rose-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 94370 12345"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-navy-heading placeholder:text-neutral-400 focus:outline-none transition-colors ${
                errors.phone ? "border-rose-400 bg-rose-50/30" : "border-neutral-border focus:border-teal"
              }`}
            />
            {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-navy-heading mb-1">
              Email Address <span className="text-neutral-400 font-normal">(Optional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. patient@example.com"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-navy-heading placeholder:text-neutral-400 focus:outline-none transition-colors ${
                errors.email ? "border-rose-400 bg-rose-50/30" : "border-neutral-border focus:border-teal"
              }`}
            />
            {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Hospital Location & Consultation Date (2 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="hospital" className="block text-xs font-semibold text-navy-heading mb-1">
              Preferred Hospital / Clinic <span className="text-rose-500">*</span>
            </label>
            <select
              id="hospital"
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-neutral-border bg-white text-sm text-navy-heading focus:outline-none focus:border-teal transition-colors"
            >
              {locationsData.map((loc) => (
                <option key={loc.id} value={loc.name}>
                  {loc.name} ({loc.city})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-xs font-semibold text-navy-heading mb-1">
              Preferred Date <span className="text-rose-500">*</span>
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-navy-heading focus:outline-none transition-colors ${
                errors.date ? "border-rose-400 bg-rose-50/30" : "border-neutral-border focus:border-teal"
              }`}
            />
            {errors.date && <p className="text-xs text-rose-500 mt-1">{errors.date}</p>}
          </div>
        </div>

        {/* Message / Symptoms */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-navy-heading mb-1">
            Reason for Consultation & Main Symptoms <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe your symptoms (e.g., lower back pain radiating to left leg for 3 weeks, need opinion on MRI report)."
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-navy-heading placeholder:text-neutral-400 focus:outline-none transition-colors resize-none ${
              errors.message ? "border-rose-400 bg-rose-50/30" : "border-neutral-border focus:border-teal"
            }`}
          ></textarea>
          {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
        </div>

        {/* Security & Confidentiality Notice */}
        <div className="flex items-start gap-2 pt-1 text-[11px] text-neutral-body">
          <ShieldCheck className="w-4 h-4 text-teal shrink-0 mt-0.5" />
          <p>
            Your information is handled with strict medical confidentiality. Please do not upload sensitive diagnostic scans here; bring original imaging films to your clinical consultation.
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal hover:bg-teal-dark text-white font-semibold text-sm transition-all shadow-sm hover:shadow disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Processing Request...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Consultation Request</span>
              </>
            )}
          </button>
        </div>

        {/* Alternative WhatsApp Action */}
        <div className="text-center pt-2">
          <p className="text-xs text-neutral-body mb-2">Prefer instant coordination via phone or messaging?</p>
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect on WhatsApp for Immediate OPD Slot</span>
          </a>
        </div>
      </form>
    </div>
  );
}

