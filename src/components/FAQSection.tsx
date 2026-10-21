"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { businessInfo } from "@/data/centerData";
import ScrollReveal from "@/components/ScrollReveal";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "Where is Sashreek Gastro & Liver Center located in Warangal?",
      answer: `Sashreek Gastro & Liver Center is located at H.No. 1-8-622, Sree Laxmi Test Tube Baby Center, Beside LIC Building on Balasamudram Road, Balasamudram, Warangal - 506001, Telangana. It is easily accessible by road with verified GPS coordinates (18.006573° N, 79.557752° E).`
    },
    {
      id: "faq-2",
      question: "What gastroenterology conditions are evaluated and managed here?",
      answer: "The center provides structured outpatient care and clinical evaluations for acid reflux (GERD), chronic heartburn, gastroenteritis, acute pancreatitis, gall bladder calculi, chronic liver diseases, abdominal tuberculosis, gut dysmotility, and unexplained abdominal discomfort."
    },
    {
      id: "faq-3",
      question: "Are endoscopy and colonoscopy procedures performed at the clinic?",
      answer: "Diagnostic endoscopy (OGD Scopy) and colonoscopy evaluations are recommended on a clinical basis following doctor consultation. Detailed procedure preparation protocols, sedation guidelines, and facility scheduling are confirmed during your clinical visit."
    },
    {
      id: "faq-4",
      question: "What liver care and FibroScan services are available for liver health?",
      answer: "We provide comprehensive hepatology evaluations for steatosis (fatty liver disease), cirrhosis monitoring, and ascites management. Clinical assessment for liver stiffness via transient elastography (FibroScan) guidance is offered to evaluate fibrosis progression non-invasively."
    },
    {
      id: "faq-5",
      question: "How do I request or confirm a consultation appointment?",
      answer: `You can submit an appointment request through our online request form or call our desk directly at ${businessInfo.displayPhone}. Please note that online requests log your preferred slot, and clinic staff will contact you via phone to confirm exact timings.`
    },
    {
      id: "faq-6",
      question: "What payment methods are accepted at the center?",
      answer: `We accept convenient payment options including UPI, Cash, Net Banking, PhonePe, Paytm, Amazon Pay, MobiKwik, and JioMoney for outpatient consultations and diagnostic services.`
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="fluid-h2 font-extrabold text-navy-950 tracking-tight">
              Common Patient Inquiries
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Helpful information regarding our clinic location, gastroenterology evaluations, liver checkups, and consultation procedures.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={faq.id} delayMs={index * 50}>
                <div
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-sm hover:border-teal-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="touch-target w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                  >
                    <span className="text-sm sm:text-base font-bold text-navy-950">
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-full bg-slate-100 text-slate-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-teal-50 text-teal-700" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
