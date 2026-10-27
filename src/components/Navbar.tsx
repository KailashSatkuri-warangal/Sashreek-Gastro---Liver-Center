"use client";

import React, { useState, useEffect } from "react";
import { businessInfo } from "@/data/centerData";
import { Phone, Calendar, Menu, X, ChevronRight, MessageCircle } from "lucide-react";
import SashreekLogo from "@/components/SashreekLogo";

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export default function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Reviews", href: "#reviews", id: "reviews" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Scroll detection for sticky navigation appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section observer (ScrollSpy)
  useEffect(() => {
    const sectionIds = ["hero", "about", "services", "gallery", "reviews", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/90"
            : "bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Typographic Brand Identity & Official Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero", "hero")}
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg p-1"
              aria-label="Sashreek Gastro & Liver Center Home"
            >
              <SashreekLogo size={42} withText={true} />
            </a>

            {/* Desktop Navigation Links with Active Indicator */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-teal-900 font-semibold bg-teal-50/80"
                        : "text-slate-600 hover:text-navy-950 hover:bg-slate-100/70"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-teal-600 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center rounded-xl bg-slate-100 border border-slate-200/80 p-0.5 text-xs font-semibold text-navy-900">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="touch-target inline-flex items-center gap-1.5 px-2.5 py-1.5 hover:bg-white hover:text-teal-800 rounded-lg transition-all"
                  title="Call primary desk: 9550401487"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>95504 01487</span>
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href={`tel:${businessInfo.secondaryPhone}`}
                  className="touch-target inline-flex items-center gap-1.5 px-2.5 py-1.5 hover:bg-white hover:text-teal-800 rounded-lg transition-all"
                  title="Call secondary desk: 9618084444"
                >
                  <span>96180 84444</span>
                </a>
              </div>

              <button
                onClick={onOpenBookingModal}
                className="btn-primary touch-target inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold"
              >
                <Calendar className="w-3.5 h-3.5 text-teal-300" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu & Quick CTA Controls (>= 44x44px touch targets) */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenBookingModal}
                className="touch-target px-3 py-2 text-xs font-semibold text-white bg-navy-900 rounded-xl shadow-sm"
                aria-label="Book appointment"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="touch-target p-2 rounded-xl text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay with Focus Trapping & Background Blur */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 sm:hidden bg-navy-950/60 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <SashreekLogo size={36} withText={true} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="touch-target p-2 text-slate-500 hover:text-navy-950 focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex flex-col space-y-1.5 pt-6" aria-label="Mobile Links">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.id)}
                      className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-teal-50 text-teal-800 border-l-4 border-teal-600"
                          : "text-slate-700 hover:bg-slate-50 hover:text-navy-950"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Actions in Drawer */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${businessInfo.phone}`}
                className="touch-target flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-bold text-navy-950 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-xl text-center transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call: +91 95504 01487</span>
              </a>
              <a
                href={`tel:${businessInfo.secondaryPhone}`}
                className="touch-target flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-bold text-navy-950 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-xl text-center transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call: +91 96180 84444</span>
              </a>
              <a
                href="https://wa.me/919550401487?text=Hello%20Sashreek%20Gastro%20%26%20Liver%20Center%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="touch-target flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
