import React from "react";
import Image from "next/image";
import { businessInfo, clinicHighlights } from "@/data/centerData";
import { CheckCircle2, Shield, Clock, MapPin, UserCheck, Stethoscope } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
              <span>About the Center</span>
            </div>
            <h2 className="fluid-h2 font-extrabold text-navy-950 tracking-tight">
              Comprehensive Clinical Care for Digestive &amp; Hepatobiliary Well-Being
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Located in Balasamudram, Warangal, <strong className="text-navy-900 font-semibold">{businessInfo.name}</strong> was established to provide structured outpatient evaluations, specialized therapeutic planning, and diagnostic gastrointestinal consultations.
            </p>
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Key Pillars & Leadership */}
          <div className="lg:col-span-7 space-y-7">
            <ScrollReveal delayMs={100}>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 text-sm sm:text-base">
                <p>
                  Digestive tract and liver disorders require systematic clinical assessment, precise dietary stratification, and evidence-guided management. Our center emphasizes individualized patient consultations where clinical findings and potential diagnostic investigations are clearly explained to patients and their families.
                </p>
                <p>
                  Patient safety and clinical hygiene remain foundational to our daily practice. Our consultation suites and diagnostic areas prioritize sanitized patient contact protocols, short waiting times, and transparent clinical discussions.
                </p>
              </div>
            </ScrollReveal>

            {/* Leadership & Management Profile */}
            <ScrollReveal delayMs={200}>
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-teal-50/40 border border-slate-200/90 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-teal-300 flex items-center justify-center shrink-0 shadow-sm">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-950">
                    Leadership &amp; Center Management
                  </h3>
                  <p className="text-sm font-semibold text-teal-800 mt-0.5">
                    {businessInfo.managingDirector}
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Overseeing clinic operations, patient hospitality, service coordination, and administrative standards to ensure seamless consultation scheduling and care delivery in Warangal.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature Checkpoints */}
            <ScrollReveal delayMs={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Evidence-guided gastro evaluations</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Sterilized examination instrumentation</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Comprehensive liver health reviews</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Short wait-time appointments</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Facility Graphic & Highlight Cards */}
          <div className="lg:col-span-5 space-y-5">
            <ScrollReveal delayMs={150} variant="scale">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/10] group">
                <Image
                  src="/images/clinic_interior_facility.jpg"
                  alt="Clinic Clinical Facility and Consulting Suite"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                      Clinic Standards
                    </p>
                    <p className="text-sm font-medium text-slate-200">
                      Clean, organized clinical environment dedicated to patient privacy and safety
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Highlights Grid */}
            <ScrollReveal delayMs={250}>
              <div className="grid grid-cols-2 gap-3.5">
                {clinicHighlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 transition-colors shadow-sm"
                  >
                    <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block mb-1">
                      {hl.metric}
                    </span>
                    <h4 className="text-sm font-semibold text-navy-950 leading-tight">
                      {hl.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {hl.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
