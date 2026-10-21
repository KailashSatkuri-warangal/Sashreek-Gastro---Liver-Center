import React from "react";
import { businessInfo } from "@/data/centerData";
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import SashreekLogo from "@/components/SashreekLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-900/80">
          
          {/* Brand & Clinic Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <SashreekLogo size={48} withText={true} textColor="light" />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Comprehensive digestive health and hepatology care center focused on evidence-based outpatient consultations, diagnostic evaluations, and patient safety in Balasamudram.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{businessInfo.address.fullFormatted}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="hover:text-white transition-colors">
                  {businessInfo.displayPhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition-colors">
                  {businessInfo.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-teal-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-300 transition-colors">About the Center</a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">Clinical Services Directory</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-teal-300 transition-colors">Facility &amp; Equipment Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-teal-300 transition-colors">Verified Patient Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-300 transition-colors">Appointment &amp; Map Directions</a>
              </li>
            </ul>
          </div>

          {/* Clinical Focus Areas (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Specialized Care Areas
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="hover:text-slate-200">GERD &amp; Acid Reflux</span>
              <span className="hover:text-slate-200">Fatty Liver (Steatosis)</span>
              <span className="hover:text-slate-200">Acute Pancreatitis</span>
              <span className="hover:text-slate-200">Cirrhosis Care</span>
              <span className="hover:text-slate-200">Endoscopy &amp; Colonoscopy</span>
              <span className="hover:text-slate-200">Capsule Endoscopy</span>
              <span className="hover:text-slate-200">Variceal Banding</span>
              <span className="hover:text-slate-200">Gall Bladder Stones</span>
            </div>

            <div className="pt-3">
              <a
                href="https://www.justdial.com/Warangal/Sashreek-Gastro-&-Liver-Center/9999PX870-X870-260902104955-E1W6_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 transition-colors"
              >
                <span>Justdial Verified Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-slate-400 text-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 pt-2">
            <div>
              &copy; {currentYear} Sashreek Gastro &amp; Liver Center. All rights reserved.
            </div>
            <div>
              Management: {businessInfo.managingDirector}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
