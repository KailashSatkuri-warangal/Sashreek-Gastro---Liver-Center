"use client";

import React from "react";
import { businessInfo } from "@/data/centerData";
import { Phone, MessageCircle } from "lucide-react";

interface MobileQuickBarProps {
  onOpenBookingModal: () => void;
  hideBar?: boolean;
}

export default function MobileQuickBar({ onOpenBookingModal, hideBar = false }: MobileQuickBarProps) {
  if (hideBar) return null;

  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-2.5 px-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] animate-fadeIn pb-safe"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${businessInfo.phone}`}
          className="touch-target flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-teal-50 text-teal-900 border border-teal-200 font-bold text-xs shadow-sm active:scale-98 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-teal-700" />
          <span>Call Desk</span>
        </a>

        {/* In mobile view: Book Appointment opens WhatsApp message directly */}
        <a
          href="https://wa.me/919550401487?text=Hello%20Sashreek%20Gastro%20%26%20Liver%20Center%2C%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm active:scale-98 transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-100" />
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
