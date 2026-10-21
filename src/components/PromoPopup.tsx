"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, Sparkles } from "lucide-react";

interface PromoPopupProps {
  onOpenBookingModal?: () => void;
}

export default function PromoPopup({ onOpenBookingModal }: PromoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasEverOpened, setHasEverOpened] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Completely remove/disable announcement on mobile devices (< 768px)
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return;
    }

    // Auto popup on desktop after 800ms
    const timer = setTimeout(() => {
      const hasDismissed = sessionStorage.getItem("sashreek_promo_dismissed");
      if (!hasDismissed) {
        setIsOpen(true);
        setHasEverOpened(true);
      } else {
        setHasEverOpened(true);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem("sashreek_promo_dismissed", "true");
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  // Lock background body scroll while modal is active (Desktop)
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Keyboard accessibility: Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  if (!mounted) return null;

  return (
    <>
      {/* 1. FLOATING REOPEN PILL (Desktop Only - hidden on mobile UI) */}
      {!isOpen && hasEverOpened && (
        <button
          onClick={handleOpen}
          aria-label="View Center Launch Announcement Poster"
          className="hidden md:flex fixed bottom-6 left-6 z-40 items-center gap-2 py-2 px-3.5 rounded-full bg-gradient-to-r from-teal-700 to-navy-900 text-white text-xs font-bold shadow-lg hover:shadow-xl border border-teal-400/40 hover:scale-105 active:scale-95 transition-all duration-300 group"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span>Launch Announcement</span>
        </button>
      )}

      {/* 2. ANNOUNCEMENT MODAL (Desktop Only - completely removed from mobile UI) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Dr. Gottumukkala Sashreek - Gastro & Liver Center Announcement"
          className="hidden md:flex fixed inset-0 z-50 items-center justify-center p-6 lg:p-8 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 select-none"
          onClick={handleClose}
        >
          {/* Sizing wrapper with strictly controlled aspect ratio and viewport limits */}
          <div
            className="relative my-auto flex flex-col items-center justify-center animate-in zoom-in-95 duration-200"
            style={{
              maxHeight: "min(90vh, 850px)",
              maxWidth: "min(92vw, 520px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Circular Close Button (Black circle with bold white 'X' - never clipped, full touch target) */}
            <button
              onClick={handleClose}
              className="absolute -top-3.5 -right-3.5 lg:-top-4 lg:-right-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-2xl hover:bg-slate-800 hover:scale-110 active:scale-95 transition-transform z-50 border-2 border-white focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer"
              aria-label="Close Announcement"
              title="Close (Esc)"
            >
              <X className="w-5 h-5 lg:w-6 lg:h-6 stroke-[2.5]" />
            </button>

            {/* Poster Image Card: NO internal scrollbar, fits whole image proportionately */}
            <div
              className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-white/20 bg-white"
              style={{
                height: "min(88vh, 820px)",
                aspectRatio: "900 / 1600",
                maxWidth: "min(90vw, 500px)",
              }}
            >
              <Image
                src="/images/pop1.png"
                alt="Dr. Gottumukkala Sashreek - Gastro & Liver Center Announcement"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 460px, 500px"
                className="object-contain block"
                onClick={() => {
                  if (onOpenBookingModal) {
                    handleClose();
                    onOpenBookingModal();
                  }
                }}
                style={{ cursor: onOpenBookingModal ? "pointer" : "default" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
