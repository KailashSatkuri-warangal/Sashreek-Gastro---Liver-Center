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
    alt: "Sashreek Gastro & Liver Center - Expert Gastro & Liver Care for a Healthier Tomorrow",
    title: "Expert Gastro & Liver Care",
  },
  {
    id: "banner-2",
    src: "/images/hero_banner_2.png",
    alt: "Sashreek Gastro & Liver Center - Specialized Care for Your Digestive & Liver Health",
    title: "Specialized Care for Digestive & Liver Health",
  },
  {
    id: "banner-3",
    src: "/images/hero_banner_3.png",
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

  // Auto-advance slowly every 4.5 seconds (paused on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

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
      className="relative w-full mb-8 sm:mb-10 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Clinical Highlights & Services Carousel"
    >
      {/* Outer Card Frame (Styled like prestigious Yashoda Hospital banner frame) */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300">
        
        {/* Slides Track (Smooth side-by-side transition) */}
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
              className="w-full shrink-0 relative h-[96px] xs:h-[116px] sm:h-[145px] md:h-[175px] lg:h-[205px] cursor-pointer bg-slate-50 select-none overflow-hidden"
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                priority={index === 0}
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1280px"
                className="object-cover w-full h-full block"
              />
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
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-navy-950 shadow-md hover:shadow-lg border border-slate-200/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 active:scale-95"
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
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-navy-950 shadow-md hover:shadow-lg border border-slate-200/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 active:scale-95"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-navy-900" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-1.5 sm:bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/20 backdrop-blur-xs px-2.5 py-1 rounded-full">
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
                  ? "w-6 h-1.5 bg-teal-500 shadow-xs"
                  : "w-1.5 h-1.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
