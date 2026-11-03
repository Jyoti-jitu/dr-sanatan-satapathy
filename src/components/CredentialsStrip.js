import { Award, GraduationCap, Building2, Stethoscope, Compass } from "lucide-react";
import { doctorData } from "@/data/doctor";

export default function CredentialsStrip() {
  return (
    <section className="bg-white border-b border-neutral-border py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 lg:divide-x lg:divide-neutral-border">
          
          {/* Item 1 */}
          <div className="flex items-start gap-3.5 p-3 sm:p-0 rounded-xl bg-neutral-offwhite/50 sm:bg-transparent border border-neutral-border/60 sm:border-0 lg:px-4 first:lg:pl-0">
            <div className="p-2.5 rounded-xl bg-teal-light text-teal shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase font-semibold text-neutral-body tracking-wider">Super Speciality</p>
              <h4 className="font-heading font-bold text-navy-heading text-sm mt-0.5">
                MCh Neurosurgery
              </h4>
              <p className="text-xs text-neutral-body mt-0.5">SCB Medical College, Cuttack</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3.5 p-3 sm:p-0 rounded-xl bg-neutral-offwhite/50 sm:bg-transparent border border-neutral-border/60 sm:border-0 lg:px-4">
            <div className="p-2.5 rounded-xl bg-teal-light text-teal shrink-0">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase font-semibold text-neutral-body tracking-wider">Advanced Training</p>
              <h4 className="font-heading font-bold text-navy-heading text-sm mt-0.5">
                Microsurgery & Spine
              </h4>
              <p className="text-xs text-neutral-body mt-0.5">AIIMS New Delhi & Fellowships</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3.5 p-3 sm:p-0 rounded-xl bg-neutral-offwhite/50 sm:bg-transparent border border-neutral-border/60 sm:border-0 lg:px-4">
            <div className="p-2.5 rounded-xl bg-teal-light text-teal shrink-0">
              <Award className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-xs uppercase font-semibold text-neutral-body tracking-wider">Recognition</p>
              <h4 className="font-heading font-bold text-navy-heading text-sm mt-0.5">
                Times Health Icon 2024
              </h4>
              <p className="text-xs text-neutral-body mt-0.5">Neurosurgery & Spine Excellence</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3.5 p-3 sm:p-0 rounded-xl bg-neutral-offwhite/50 sm:bg-transparent border border-neutral-border/60 sm:border-0 lg:px-4">
            <div className="p-2.5 rounded-xl bg-teal-light text-teal shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase font-semibold text-neutral-body tracking-wider">Hospital Affiliation</p>
              <h4 className="font-heading font-bold text-navy-heading text-sm mt-0.5">
                MAX Super Speciality Hospital
              </h4>
              <p className="text-xs text-neutral-body mt-0.5">Formerly Kalinga Hospital, Bhubaneswar</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

