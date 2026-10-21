import React from "react";
import { patientReviews, businessInfo } from "@/data/centerData";
import { Star, ShieldCheck, ExternalLink, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ReviewsTrust() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Patient Feedback &amp; Verification</span>
            </div>
            <h2 className="fluid-h2 font-extrabold text-navy-950 tracking-tight">
              Verified Patient Reviews &amp; Feedback
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Authentic feedback sourced directly from patient submissions on the official Justdial public listing.
            </p>
          </div>
        </ScrollReveal>

        {/* Rating Summary Card */}
        <ScrollReveal delayMs={100}>
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-24 h-24 rounded-2xl bg-navy-950 text-white flex flex-col items-center justify-center shrink-0 shadow-md">
                <span className="text-3xl font-extrabold text-teal-300">5.0</span>
                <div className="flex text-amber-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <h3 className="text-xl font-bold text-navy-950">
                    Exceptional Patient Satisfaction
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                    Verified
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Based on <strong>15 verified ratings and customer reviews</strong> on Justdial.
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Consistently recognized for clinic cleanliness, sterilized equipment, and attentive clinical discussions.
                </p>
              </div>
            </div>

            <a
              href="https://www.justdial.com/Warangal/Sashreek-Gastro-&-Liver-Center/9999PX870-X870-260902104955-E1W6_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors shrink-0"
            >
              <span>View Justdial Source Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patientReviews.map((rev, index) => (
            <ScrollReveal key={rev.id} delayMs={index * 50}>
              <div className="medical-card p-6 flex flex-col justify-between h-full">
                <div>
                  {/* Rating & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {rev.date}
                    </span>
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm text-slate-700 leading-relaxed italic relative pl-4 border-l-2 border-teal-500/50">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                {/* Author & Verification Attribution */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-navy-950">
                      {rev.author}
                    </h4>
                    <span className="text-[10px] text-slate-400">
                      Verified Patient Feedback
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                    via {rev.source}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
