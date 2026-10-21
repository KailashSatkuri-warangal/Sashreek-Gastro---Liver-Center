"use client";

import React from "react";
import Image from "next/image";
import { businessInfo } from "@/data/centerData";
import { Calendar, Phone, Star, ShieldCheck, MapPin, ArrowRight, Activity, Clock } from "lucide-react";
import SashreekLogo from "@/components/SashreekLogo";
import ScrollReveal from "@/components/ScrollReveal";

interface HeroProps {
  onOpenBookingModal: () => void;
}

export default function Hero({ onOpenBookingModal }: HeroProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-100/80 via-white to-slate-50 border-b border-slate-200/70"
    >
      {/* Cinematic Depth Elements */}
      <div className="absolute top-0 right-0 -translate-y-16 translate-x-16 w-[450px] h-[450px] bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-16 -translate-x-16 w-[400px] h-[400px] bg-navy-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clinical Presentation & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Pill / Location Badge */}
            <ScrollReveal delayMs={50}>
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50/90 border border-teal-200/80 text-teal-900 text-xs font-semibold shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-teal-600 animate-pulse" />
                <span>Gastroenterology &amp; Hepatology</span>
                <span className="text-teal-400">•</span>
                <span className="flex items-center gap-1 font-bold text-navy-950">
                  <MapPin className="w-3.5 h-3.5 text-teal-700" /> Balasamudram, Warangal
                </span>
              </div>
            </ScrollReveal>

            {/* Headline with Fluid Typography */}
            <ScrollReveal delayMs={150}>
              <h1 className="fluid-h1 font-extrabold text-navy-950 tracking-tight leading-[1.15]">
                Specialized Digestive Health &amp; Advanced Liver Care
              </h1>
            </ScrollReveal>

            {/* Supporting Copy */}
            <ScrollReveal delayMs={250}>
              <p className="fluid-body text-slate-600 max-w-2xl leading-relaxed">
                At <strong className="text-navy-900 font-semibold">{businessInfo.name}</strong>, we provide focused outpatient and diagnostic care for acute and chronic gastrointestinal disorders, acid peptic conditions, and liver health, adhering to rigorous clinical hygiene and patient-centric standards.
              </p>
            </ScrollReveal>

            {/* Verified Rating & Trust Indicators */}
            <ScrollReveal delayMs={350}>
              <div className="flex flex-wrap items-center gap-4 py-3 border-y border-slate-200/80 bg-white/50 backdrop-blur-sm px-2 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-navy-950">5.0 / 5.0</span>
                  <span className="text-xs text-slate-500">
                    (15 reviews on Justdial)
                  </span>
                </div>
                <div className="h-4 w-px bg-slate-300 hidden sm:block" />
                <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Sterilized Instrumentation</span>
                </div>
                <div className="h-4 w-px bg-slate-300 hidden sm:block" />
                <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Short Wait Times</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Primary & Secondary Action CTAs */}
            <ScrollReveal delayMs={450}>
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={onOpenBookingModal}
                  className="btn-primary touch-target px-6 py-3.5 text-sm font-semibold tracking-wide"
                >
                  <Calendar className="w-4 h-4 text-teal-300 mr-2" />
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 opacity-80" />
                </button>

                <a
                  href={`tel:${businessInfo.phone}`}
                  className="btn-secondary touch-target px-5 py-3.5 text-sm font-semibold"
                >
                  <Phone className="w-4 h-4 text-teal-700 mr-2" />
                  <span>Call {businessInfo.displayPhone}</span>
                </a>

                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "#services")}
                  className="touch-target inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-900 px-3 py-2 transition-colors"
                >
                  <span>Explore Directory</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Authentic Clinic Image and Clinical Feature Overlay */}
          <div className="lg:col-span-5">
            <ScrollReveal delayMs={200} variant="scale">
              <div className="relative group">
                {/* Main Image Frame with Ambient Glow */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="/images/clinic_front_main.jpg"
                    alt="Sashreek Gastro & Liver Center Clinic Entrance, Balasamudram, Warangal"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-90" />
                  
                  {/* Floating Caption on Image */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 bg-navy-950/85 backdrop-blur-md rounded-2xl text-white border border-white/10">
                    <p className="text-xs font-bold text-teal-300">
                      Sashreek Gastro &amp; Liver Center
                    </p>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      Beside LIC Building, Balasamudram Road, Warangal - 506001
                    </p>
                  </div>
                </div>

                {/* Decorative Trust Badge with Official Logo Emblem */}
                <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3 animate-fadeIn">
                  <SashreekLogo size={42} withText={false} />
                  <div>
                    <div className="text-xs font-extrabold text-navy-950">5.0 Star Rating</div>
                    <div className="text-[11px] text-teal-700 font-semibold">Verified Justdial Listing</div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
