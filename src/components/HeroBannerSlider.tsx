"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroBannerSliderProps {
  onOpenBookingModal: () => void;
}

const BANNERS = [
  {
    id: "banner-1",
    src: "/images/hero_banner_1.png",
    mobileSrc: "/images/hero_banner_1_mobile.png",
    alt: "Sashreek Gastro & Liver Center - Expert Gastro & Liver Care for a Healthier Tomorrow",
    title: "Expert Gastro & Liver Care",
  },
  {
    id: "banner-2",
    src: "/images/hero_banner_2.png",
    mobileSrc: "/images/hero_banner_2_mobile.png",
    alt: "Sashreek Gastro & Liver Center - Specialized Care for Your Digestive & Liver Health",
    title: "Specialized Care for Digestive & Liver Health",
  },
  {
    id: "banner-3",
    src: "/images/hero_banner_3.png",
    mobileSrc: "/images/hero_banner_3_mobile.png",
    alt: "Sashreek Gastro & Liver Center - Advanced Gastro & Liver Care in Balasamudram, Warangal",
    title: "Advanced Gastro & Liver Care",
  },
];

export default function HeroBannerSlider({ onOpenBookingModal }: HeroBannerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = BANNERS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Auto-advance slowly every 5 seconds (paused on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full mb-8 sm:mb-12 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Clinical Highlights & Services Carousel"
    >
      {/* Outer Card Frame (Styled like prestigious Yashoda Hospital banner frame) */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] transition-all duration-300">
        
        {/* Slides Track */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {BANNERS.map((banner, index) => (
            <div
              key={banner.id}
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth < 640) {
                  window.open(
                    "https://wa.me/919550401487?text=Hello%20Sashreek%20Gastro%20%26%20Liver%20Center%2C%20I%20would%20like%20to%20book%20an%20appointment.",
                    "_blank"
                  );
                } else {
                  onOpenBookingModal();
                }
              }}
              title="Click to Book an Appointment"
              className="w-full shrink-0 cursor-pointer bg-white select-none relative"
            >
              {/* Mobile View: High-clarity 800x280 banner with generous 125px-140px height & readable text */}
              <div className="block sm:hidden relative aspect-[800/280] w-full">
                <Image
                  src={banner.mobileSrc}
                  alt={banner.alt}
                  fill
                  priority={index === 0}
                  unoptimized
                  sizes="100vw"
                  className="object-contain w-full h-full block"
                />
              </div>

              {/* Desktop View: Full-width uncropped 2048x228 banner (confirmed perfect) */}
              <div className="hidden sm:block relative aspect-[2048/228] w-full">
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  fill
                  priority={index === 0}
                  unoptimized
                  sizes="(max-width: 1024px) 95vw, 1400px"
                  className="object-contain w-full h-full block"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-navy-950 shadow-md hover:shadow-lg border border-slate-200/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 active:scale-95 z-20 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-navy-900" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-navy-950 shadow-md hover:shadow-lg border border-slate-200/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 active:scale-95 z-20 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-navy-900" />
        </button>

        {/* Pagination Dots (Discreet slim indicators) */}
        <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-slate-900/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
          {BANNERS.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? "w-5 h-1 sm:h-1.5 bg-teal-400 shadow-xs"
                  : "w-1.5 h-1 sm:h-1.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
