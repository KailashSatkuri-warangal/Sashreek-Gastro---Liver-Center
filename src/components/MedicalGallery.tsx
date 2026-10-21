"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Camera, X, Eye, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "Clinic Facility" | "Endoscopy Unit" | "Diagnostics" | "Clinical Infrastructure";
  isAuthenticClinicPhoto?: boolean;
}

export default function MedicalGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      src: "/images/clinic_front_main.jpg",
      alt: "Sashreek Gastro & Liver Center Entrance, Balasamudram, Warangal",
      caption: "Sashreek Gastro & Liver Center — Verified Clinic Exterior (Beside LIC Building, Balasamudram)",
      category: "Clinic Facility",
      isAuthenticClinicPhoto: true
    },
    {
      id: "gal-2",
      src: "/images/clinic_interior_facility.jpg",
      alt: "Sterilized Outpatient Consulting and Examination Suite",
      caption: "Sterilized Outpatient Consulting and Patient Examination Suite",
      category: "Clinical Infrastructure"
    },
    {
      id: "gal-3",
      src: "/images/endoscopy_facility.jpg",
      alt: "Modern Video Endoscopy Suite for Upper GI and Colonoscopy",
      caption: "Endoscopic Diagnostics Suite with High-Definition Visualization Towers",
      category: "Endoscopy Unit"
    },
    {
      id: "gal-4",
      src: "/images/colonoscopy_procedure.jpg",
      alt: "Colorectal Diagnostics and Colonoscopy Instrumentation",
      caption: "Precision Diagnostic Colonoscopy & Polyp Screening Instrumentation",
      category: "Endoscopy Unit"
    },
    {
      id: "gal-5",
      src: "/images/fibroscan_elastography.webp",
      alt: "Non-Invasive Transient Elastography for Liver Stiffness",
      caption: "Transient Elastography / Liver Stiffness Diagnostic Protocol",
      category: "Diagnostics"
    },
    {
      id: "gal-6",
      src: "/images/capsule_endoscopy.jpg",
      alt: "Wireless Capsule Endoscopy Visualization System",
      caption: "Wireless Small Bowel Capsule Endoscopy Technology",
      category: "Diagnostics"
    },
    {
      id: "gal-7",
      src: "/images/facility_recovery.jpg",
      alt: "Daycare Observation & Recovery Area",
      caption: "Daycare Observation and Monitored Post-Procedure Recovery Space",
      category: "Clinical Infrastructure"
    },
    {
      id: "gal-8",
      src: "/images/breath_test.jpg",
      alt: "Gastrointestinal Breath Testing Analysis Setup",
      caption: "Gastrointestinal Breath Testing & H. Pylori / SIBO Evaluation Protocol",
      category: "Diagnostics"
    }
  ];

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
  }, [selectedIndex, galleryItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryItems.length);
  }, [selectedIndex, galleryItems.length]);

  // Lock body scroll and handle keyboard events
  useEffect(() => {
    if (selectedIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  const currentPhoto = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-teal-600" />
              <span>Facility &amp; Clinical Gallery</span>
            </div>
            <h2 className="fluid-h2 font-extrabold text-navy-950 tracking-tight">
              Facility Environment &amp; Diagnostic Technologies
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Glimpses into our Balasamudram clinic facility, diagnostic instrumentation suites, and patient care areas. Click any image to view in detail.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryItems.map((item, index) => (
            <ScrollReveal key={item.id} delayMs={index * 60}>
              <div
                onClick={() => handleOpen(index)}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 cursor-pointer shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 aspect-[4/3] flex flex-col justify-end"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpen(index);
                  }
                }}
                aria-label={`View photo: ${item.caption}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Verified Authentic Badge */}
                {item.isAuthenticClinicPhoto && (
                  <div className="absolute top-3 left-3 bg-teal-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md shadow flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    <span>Verified Clinic Photo</span>
                  </div>
                )}

                {/* Category Tag */}
                <div className="absolute top-3 right-3 bg-navy-900/80 backdrop-blur-sm text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded">
                  {item.category}
                </div>

                {/* Caption Overlay */}
                <div className="relative p-3.5 text-white z-10">
                  <p className="text-xs font-semibold leading-snug line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-teal-300 mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3 h-3" />
                    <span>Click to enlarge</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Enhanced Accessible Lightbox Modal */}
        {currentPhoto !== null && selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-navy-950/92 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery Image Viewer"
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Controls Header */}
              <div className="p-4 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400">
                    Photo {selectedIndex + 1} of {galleryItems.length}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-teal-400 font-medium">
                    {currentPhoto.category}
                  </span>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="touch-target p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                  aria-label="Close image preview (Escape)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image with Left/Right Navigation */}
              <div className="relative w-full aspect-[16/10] max-h-[70vh] bg-black flex items-center justify-center">
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  fill
                  className="object-contain"
                  priority
                />

                {/* Previous Image Button */}
                <button
                  onClick={handlePrev}
                  className="touch-target absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all border border-white/20 focus:outline-none"
                  aria-label="Previous photo (Left arrow)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Image Button */}
                <button
                  onClick={handleNext}
                  className="touch-target absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all border border-white/20 focus:outline-none"
                  aria-label="Next photo (Right arrow)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800">
                <p className="text-sm font-medium text-slate-200">
                  {currentPhoto.caption}
                </p>
                {currentPhoto.isAuthenticClinicPhoto && (
                  <span className="text-xs px-2.5 py-1 rounded bg-teal-900/70 text-teal-300 border border-teal-500/30 shrink-0 self-start sm:self-auto">
                    Authentic Justdial Listing Photo
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
