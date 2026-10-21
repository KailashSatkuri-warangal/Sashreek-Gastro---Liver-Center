"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesDirectory from "@/components/ServicesDirectory";
import MedicalGallery from "@/components/MedicalGallery";
import ReviewsTrust from "@/components/ReviewsTrust";
import FAQSection from "@/components/FAQSection";
import AppointmentContact from "@/components/AppointmentContact";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import MobileQuickBar from "@/components/MobileQuickBar";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleOpenBookingModal = () => {
    setSelectedService("");
    setModalOpen(true);
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      {/* Sticky Header Navigation */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Single Page Content */}
      <main className="flex-grow pb-16 sm:pb-0">
        {/* Section 1: Hero Section */}
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* Section 2: About the Center */}
        <About />

        {/* Section 3: Medical Services Directory */}
        <ServicesDirectory onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Section 4: Medical & Facility Gallery */}
        <MedicalGallery />

        {/* Section 5: Reviews & Trust (Verified Justdial) */}
        <ReviewsTrust />

        {/* Section 6: Frequently Asked Questions & SEO */}
        <FAQSection />

        {/* Section 7: Appointment Request & Contact */}
        <AppointmentContact preselectedService={selectedService} />
      </main>

      {/* Section 8: Comprehensive Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar onOpenBookingModal={handleOpenBookingModal} hideBar={modalOpen} />

      {/* Quick Action Appointment Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
