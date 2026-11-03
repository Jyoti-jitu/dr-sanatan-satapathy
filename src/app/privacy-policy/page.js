import Link from "next/link";
import { ShieldCheck, Lock } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Dr. Sanatan Satapathy – Neurosurgery & Spine",
  description: "Privacy policy and patient data confidentiality statement for the official website of Dr. Sanatan Satapathy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-neutral-offwhite border-b border-neutral-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal">
            Legal & Confidentiality
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-heading">
            Privacy Policy
          </h1>
          <p className="text-xs text-neutral-400">
            Last Updated: January 2025 • Dr. Sanatan Satapathy Clinical Practice
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-neutral-body text-sm leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-navy-heading">
              1. Commitment to Patient Privacy
            </h2>
            <p>
              Dr. Sanatan Satapathy and our clinical administration are dedicated to maintaining the strictest confidentiality of personal and medical information entrusted to us by patients, their families, and website visitors. This privacy statement outlines how communication details submitted through this website are collected, utilized, and safeguarded.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-navy-heading">
              2. Information Collected
            </h2>
            <p>
              When requesting an outpatient consultation through our appointment forms or communication channels, you may provide:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Patient name and contact details (mobile phone number, email address)</li>
              <li>Preferred consultation date and hospital center</li>
              <li>Brief non-sensitive description of the reason for consultation</li>
            </ul>
            <p className="text-xs bg-neutral-offwhite p-3 rounded-lg border border-neutral-border">
              <strong>Advisory:</strong> We advise patients not to submit confidential full electronic medical records or sensitive diagnostic scans via public web enquiry forms. Diagnostic files should be presented in person during your clinical consultation.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-navy-heading">
              3. Purpose of Processing
            </h2>
            <p>
              Contact data collected via this website is strictly utilized to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Coordinate and confirm outpatient OPD consultation appointments</li>
              <li>Communicate necessary pre-consultation instructions or clinic rescheduling</li>
              <li>Address specific logistical queries regarding hospital locations and facilities</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-navy-heading">
              4. Non-Disclosure & Security
            </h2>
            <p>
              We do not sell, rent, commercialize, or disclose patient contact information to third-party commercial marketing entities under any circumstances. Access to appointment enquiries is restricted to authorized hospital administrative coordinators for scheduling purposes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-navy-heading">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding our patient privacy practices or wish to update your contact preferences, please reach out to our clinic desk at{" "}
              <Link href="/contact" className="text-teal font-semibold underline">
                our contact page
              </Link>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

