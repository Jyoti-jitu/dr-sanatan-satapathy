import Hero from "@/components/Hero";
import CredentialsStrip from "@/components/CredentialsStrip";
import DoctorIntro from "@/components/DoctorIntro";
import SpecialtiesGrid from "@/components/SpecialtiesGrid";
import SpineFeature from "@/components/SpineFeature";
import ConditionsSection from "@/components/ConditionsSection";
import WhySpecialistCare from "@/components/WhySpecialistCare";
import TimelineSection from "@/components/TimelineSection";
import AwardsSection from "@/components/AwardsSection";
import HospitalLocationsSection from "@/components/HospitalLocationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import AppointmentCTASection from "@/components/AppointmentCTASection";

export const metadata = {
  title: "Dr. Sanatan Satapathy | Senior Neurosurgeon & Spine Surgeon in Bhubaneswar",
  description: "Advanced Brain & Spine Care with Precision, Experience and Compassion. Dr. Sanatan Satapathy is a premier Neurosurgeon & Spine Surgeon in Bhubaneswar, Odisha.",
};

export default function HomePage() {
  return (
    <>
      {/* SECTION 01: HERO */}
      <Hero />

      {/* SECTION 02: TRUST AND PROFESSIONAL CREDENTIALS */}
      <CredentialsStrip />

      {/* SECTION 03: INTRODUCTION TO THE DOCTOR */}
      <DoctorIntro />

      {/* SECTION 04: SPECIALITIES */}
      <SpecialtiesGrid />

      {/* SECTION 05: FEATURED SPINE SURGERY */}
      <SpineFeature />

      {/* SECTION 06: CONDITIONS WE ADDRESS */}
      <ConditionsSection />

      {/* SECTION 07: WHY PATIENTS SEEK SPECIALIST CARE */}
      <WhySpecialistCare />

      {/* SECTION 08: EDUCATION AND CAREER TIMELINE */}
      <TimelineSection />

      {/* SECTION 09: AWARDS AND RECOGNITION */}
      <AwardsSection />

      {/* SECTION 10: HOSPITAL AND CONSULTATION LOCATIONS */}
      <HospitalLocationsSection />

      {/* SECTION 11: PATIENT TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 12: FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

      {/* SECTION 13: APPOINTMENT CTA */}
      <AppointmentCTASection />
    </>
  );
}

