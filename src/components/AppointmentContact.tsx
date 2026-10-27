"use client";

import React, { useState } from "react";
import { businessInfo, medicalServices } from "@/data/centerData";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Send,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  CreditCard,
  MessageCircle
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface AppointmentContactProps {
  preselectedService?: string;
}

export default function AppointmentContact({ preselectedService }: AppointmentContactProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    service: preselectedService || "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Patient full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter a valid full name.";
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!cleanPhone) {
      errs.phone = "Phone number is required for consultation coordination.";
    } else if (!/^[0-9]{10,12}$/.test(cleanPhone)) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.preferredDate) {
      errs.preferredDate = "Please choose a preferred consultation date.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    // Simulate real asynchronous submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      preferredDate: "",
      service: "",
      message: "",
    });
    setSubmitStatus("idle");
    setErrors({});
  };

  const mapsEmbedUrl = `https://maps.google.com/maps?q=${businessInfo.geo.latitude},${businessInfo.geo.longitude}&hl=en&z=16&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${businessInfo.geo.latitude},${businessInfo.geo.longitude}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5 text-teal-600" />
              <span>Consultation &amp; Location</span>
            </div>
            <h2 className="fluid-h2 font-extrabold text-navy-950 tracking-tight">
              Request an Appointment &amp; Visit the Center
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Submit an outpatient appointment request or reach our desk directly by phone or email.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Contact & Location Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone & Direct Communications */}
            <ScrollReveal delayMs={100}>
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-navy-950 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Telephone &amp; Email Contact</span>
                </h3>

                <div className="space-y-3.5">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Public Contact Numbers:</div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mt-1">
                      <a
                        href={`tel:${businessInfo.phone}`}
                        className="text-lg sm:text-xl font-extrabold text-navy-900 hover:text-teal-700 transition-colors inline-flex items-center gap-1.5"
                      >
                        <Phone className="w-4 h-4 text-teal-600" />
                        <span>+91 95504 01487</span>
                      </a>
                      <span className="hidden sm:inline text-slate-300">|</span>
                      <a
                        href={`tel:${businessInfo.secondaryPhone}`}
                        className="text-lg sm:text-xl font-extrabold text-navy-900 hover:text-teal-700 transition-colors inline-flex items-center gap-1.5"
                      >
                        <Phone className="w-4 h-4 text-teal-600" />
                        <span>+91 96180 84444</span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500 font-medium">Email Address:</div>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-sm font-semibold text-teal-700 hover:underline inline-block mt-0.5"
                    >
                      {businessInfo.email}
                    </a>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500 font-medium">Operating Hours:</div>
                    <div className="text-xs text-slate-700 font-medium flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{businessInfo.operatingHours}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80">
                    <a
                      href="https://wa.me/919550401487?text=Hello%20Sashreek%20Gastro%20%26%20Liver%20Center%2C%20I%20would%20like%20to%20book%20an%20appointment."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="touch-target inline-flex items-center justify-center gap-2 w-full py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors active:scale-98"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-100" />
                      <span>Chat &amp; Book via WhatsApp (+91 95504 01487)</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Address & Google Maps Embed */}
            <ScrollReveal delayMs={200}>
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-navy-950 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>Clinic Address &amp; Location</span>
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {businessInfo.address.fullFormatted}
                </p>

                {/* Embedded Map */}
                <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative bg-slate-200">
                  <iframe
                    title="Sashreek Gastro &amp; Liver Center Location Map"
                    src={mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold text-white bg-navy-900 hover:bg-navy-800 rounded-xl transition-all shadow-sm active:scale-98"
                >
                  <span>Open in Google Maps for Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-teal-300" />
                </a>
              </div>
            </ScrollReveal>

            {/* Accepted Payments Card */}
            <ScrollReveal delayMs={300}>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3 shadow-sm">
                <CreditCard className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-navy-950">Payment Modes Accepted: </span>
                  {businessInfo.paymentMethods.join(", ")}.
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Appointment Request Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delayMs={150}>
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-card">
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy-950">
                    Appointment Request Form
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Please submit your consultation request below. Our clinic staff will review and contact you to confirm the exact consultation schedule.
                  </p>
                </div>

                {submitStatus === "success" ? (
                  <div className="p-6 sm:p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-4 animate-fadeIn">
                    <div className="w-14 h-14 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-navy-950">
                        Appointment Request Logged Successfully
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{formData.fullName}</strong>. Your consultation request for <strong>{formData.preferredDate}</strong> has been logged. Our clinic team will reach you at <strong>{formData.phone}</strong> to confirm your slot.
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 italic">
                      * Please note: An appointment request is not an instant clinical booking. Final confirmation depends on clinic schedule availability.
                    </p>
                    <button
                      onClick={handleReset}
                      className="touch-target btn-primary px-5 py-2.5 text-xs font-semibold"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    
                    {/* Full Name */}
                    <div>
                      <label htmlFor="patient-full-name" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                        Patient Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="patient-full-name"
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: "" });
                        }}
                        className={`w-full px-4 py-3 text-sm bg-slate-50 border rounded-xl focus:bg-white transition-all ${
                          errors.fullName ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-teal-500"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="patient-phone" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="patient-phone"
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: "" });
                          }}
                          className={`w-full px-4 py-3 text-sm bg-slate-50 border rounded-xl focus:bg-white transition-all ${
                            errors.phone ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-teal-500"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="patient-email" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="patient-email"
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          className={`w-full px-4 py-3 text-sm bg-slate-50 border rounded-xl focus:bg-white transition-all ${
                            errors.email ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-teal-500"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Preferred Date & Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="patient-preferred-date" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                          Preferred Date <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="patient-preferred-date"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => {
                            setFormData({ ...formData, preferredDate: e.target.value });
                            if (errors.preferredDate) setErrors({ ...errors, preferredDate: "" });
                          }}
                          className={`w-full px-4 py-3 text-sm bg-slate-50 border rounded-xl focus:bg-white transition-all ${
                            errors.preferredDate ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-teal-500"
                          }`}
                        />
                        {errors.preferredDate && (
                          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.preferredDate}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="patient-service-select" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                          Service of Interest
                        </label>
                        <select
                          id="patient-service-select"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 cursor-pointer"
                        >
                          <option value="">General Gastroenterology Consultation</option>
                          {medicalServices.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message / Symptoms */}
                    <div>
                      <label htmlFor="patient-message" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                        Symptoms / Clinical Notes <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        id="patient-message"
                        rows={3}
                        placeholder="Brief description of symptoms, prior tests, or referral information..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500"
                      />
                    </div>

                    {/* Privacy Notice */}
                    <div className="p-3.5 bg-slate-50 rounded-2xl text-[11px] text-slate-500 flex items-start gap-2.5 border border-slate-200/80">
                      <ShieldAlert className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <p>
                        <strong>Privacy Notice:</strong> Information submitted via this form is used exclusively for consultation scheduling and clinic follow-up. We do not sell or share patient contact details with outside commercial parties.
                      </p>
                    </div>

                    {/* Submit Button with Duplicate Prevention */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="touch-target btn-primary w-full py-3.5 px-6 text-sm font-semibold tracking-wide disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-teal-300" />
                          <span>Submit Appointment Request</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-slate-400">
                      * Submitting this form requests an appointment slot. You will receive a phone confirmation from clinic staff.
                    </p>

                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
