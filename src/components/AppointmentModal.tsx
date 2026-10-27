"use client";

import React, { useState, useEffect } from "react";
import { businessInfo, medicalServices } from "@/data/centerData";
import { X, Calendar, Send, CheckCircle2, AlertCircle, Phone, MessageCircle } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  initialService = "",
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    service: initialService,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Patient name is required.";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter a valid full name.";
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!cleanPhone || !/^[0-9]{10,12}$/.test(cleanPhone)) {
      errs.phone = "Valid 10-digit mobile number is required.";
    }

    if (!formData.preferredDate) {
      errs.preferredDate = "Consultation date is required.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 650);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-navy-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleClose}
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-navy-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-teal-300" />
            <h3 id="modal-title" className="text-base font-bold">
              Request Outpatient Consultation
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="touch-target p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close dialog (Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-navy-950">
                Consultation Request Logged
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your consultation request for <strong>{formData.preferredDate}</strong> has been logged. Our clinic team will reach you via phone to confirm your slot.
              </p>
              <div className="p-3 bg-slate-50 rounded-2xl text-xs text-slate-600 border border-slate-200">
                Direct Clinic Desk: <strong className="text-navy-950">{businessInfo.displayPhone}</strong>
              </div>
              <button
                onClick={handleClose}
                className="btn-primary touch-target w-full py-2.5 px-4 text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="text-xs text-slate-500">
                Submit your details below to schedule an outpatient evaluation at Sashreek Gastro &amp; Liver Center.
              </div>

              <div>
                <label htmlFor="modal-patient-name" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1">
                  Patient Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="modal-patient-name"
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: "" });
                  }}
                  className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white transition-all ${
                    errors.fullName ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-teal-500"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-patient-phone" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="modal-patient-phone"
                    type="tel"
                    placeholder="10-digit mobile"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white transition-all ${
                      errors.phone ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-teal-500"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-patient-date" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="modal-patient-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => {
                      setFormData({ ...formData, preferredDate: e.target.value });
                      if (errors.preferredDate) setErrors({ ...errors, preferredDate: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white transition-all ${
                      errors.preferredDate ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-teal-500"
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="modal-patient-service" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1">
                  Service / Condition of Interest
                </label>
                <select
                  id="modal-patient-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 cursor-pointer"
                >
                  <option value="">General Gastroenterology Consultation</option>
                  {medicalServices.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="modal-patient-notes" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1">
                  Brief Medical Notes <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="modal-patient-notes"
                  rows={2}
                  placeholder="Primary symptoms or referral note..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="touch-target btn-primary w-full py-3 px-4 text-xs font-semibold tracking-wide disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-teal-300" />
                      <span>Submit Appointment Request</span>
                    </>
                  )}
                </button>

                <a
                  href="https://wa.me/919550401487?text=Hello%20Sashreek%20Gastro%20%26%20Liver%20Center%2C%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target w-full py-2.5 px-4 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Or Book Instantly via WhatsApp</span>
                </a>
              </div>

              <div className="text-[10px] text-center text-slate-400">
                * An appointment request is not an instant confirmation. Clinic staff will call to confirm.
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
