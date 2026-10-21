"use client";

import React, { useState, useMemo } from "react";
import { medicalServices, MedicalService } from "@/data/centerData";
import {
  Search,
  Activity,
  Calendar,
  Info,
  ShieldCheck,
  X,
  Stethoscope,
  ChevronRight
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface ServicesDirectoryProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

type CategoryFilter = 'All' | 'Gastroenterology' | 'Liver Care' | 'Endoscopy & Diagnostics' | 'Specialized Procedures' | 'Consultations & Specialties';

export default function ServicesDirectory({ onSelectServiceForBooking }: ServicesDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const categories: CategoryFilter[] = [
    'All',
    'Gastroenterology',
    'Liver Care',
    'Endoscopy & Diagnostics',
    'Specialized Procedures',
    'Consultations & Specialties'
  ];

  // Counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: medicalServices.length };
    categories.forEach(cat => {
      if (cat !== 'All') {
        counts[cat] = medicalServices.filter(s => s.category === cat).length;
      }
    });
    return counts;
  }, []);

  const filteredServices = useMemo(() => {
    return medicalServices.filter((service) => {
      const matchesCategory =
        selectedCategory === 'All' || service.category === selectedCategory;

      const matchesType =
        selectedType === 'all' || service.type === selectedType;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.shortDesc.toLowerCase().includes(q) ||
        service.tags.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesType && matchesSearch;
    });
  }, [selectedCategory, selectedType, searchQuery]);

  const getTypeBadge = (type: MedicalService['type']) => {
    switch (type) {
      case 'diagnostic':
        return {
          label: 'Diagnostic Investigation',
          classes: 'bg-sky-50 text-sky-800 border-sky-200',
        };
      case 'treatment':
        return {
          label: 'Clinical Treatment',
          classes: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        };
      case 'procedure':
        return {
          label: 'Therapeutic Procedure',
          classes: 'bg-purple-50 text-purple-800 border-purple-200',
        };
      case 'specialist_consultation':
        return {
          label: 'Doctor Category',
          classes: 'bg-amber-50 text-amber-800 border-amber-200',
        };
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedType('all');
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Activity className="w-3.5 h-3.5 text-teal-600" />
              <span>Clinical Directory</span>
            </div>
            <h2 className="fluid-h2 font-extrabold text-navy-950 tracking-tight">
              Medical Services, Diagnostics &amp; Specialty Care
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              A comprehensive directory of gastrointestinal conditions, liver care pathways, diagnostic evaluations, and specialty doctor consultations.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter and Search Bar */}
        <ScrollReveal delayMs={100}>
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm mb-10 space-y-4">
            
            {/* Search input & procedure filter */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search services (e.g. Endoscopy, Fatty Liver, GERD, Colonoscopy, Pancreatitis)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2.5 text-sm bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 rounded-xl transition-all focus:border-teal-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="touch-target absolute right-1 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 focus:outline-none"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Type selector */}
              <div className="flex items-center gap-2 shrink-0">
                <label htmlFor="service-type-filter" className="text-xs font-semibold text-slate-600 shrink-0">Type:</label>
                <select
                  id="service-type-filter"
                  aria-label="Filter services by clinical type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="py-2.5 px-3 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 cursor-pointer"
                >
                  <option value="all">All Service Types</option>
                  <option value="treatment">Clinical Treatments</option>
                  <option value="diagnostic">Diagnostic Evaluations</option>
                  <option value="procedure">Therapeutic Procedures</option>
                  <option value="specialist_consultation">Consultation Categories</option>
                </select>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none" role="tablist">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategory(cat)}
                    className={`touch-target px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-navy-900 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-950"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected
                          ? "bg-teal-700 text-teal-100"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {categoryCounts[cat] || 0}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Counter & Meta */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span className="font-medium">
                Showing <strong className="text-navy-950">{filteredServices.length}</strong> of {medicalServices.length} clinical offerings
              </span>
              {(searchQuery || selectedCategory !== 'All' || selectedType !== 'all') && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors"
                >
                  Reset all filters
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-sm">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-navy-950">No Matching Services Found</h3>
            <p className="text-xs text-slate-500 mt-1">
              No clinical services match your current query &ldquo;{searchQuery}&rdquo;. Try another term or reset your search.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 btn-primary px-4 py-2 text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const badge = getTypeBadge(service.type);
              return (
                <div
                  key={service.id}
                  className="medical-card p-6 flex flex-col justify-between group"
                >
                  <div>
                    {/* Category & Type Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                        {service.category}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${badge.classes}`}
                      >
                        {badge.label}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg font-bold text-navy-950 group-hover:text-teal-800 transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Clinical Details */}
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 italic">
                      {service.detailedDesc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Appointment Action */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">
                      Consultation available
                    </span>
                    <button
                      onClick={() => onSelectServiceForBooking(service.title)}
                      className="touch-target inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-navy-900 bg-teal-50 hover:bg-teal-600 hover:text-white rounded-xl transition-colors duration-200 active:scale-95"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Request Care</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Clinical Disclaimer Note */}
        <ScrollReveal delayMs={200}>
          <div className="mt-12 p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-start gap-3 max-w-4xl mx-auto shadow-sm">
            <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-navy-950">Clinical Scope Notice: </span>
              The services listed above originate from the center&apos;s verified public business and directory categories. Specialist consultations, diagnostic ordering (such as upper GI endoscopy, colonoscopy, or transient elastography), and therapeutic procedures are evaluated on a case-by-case clinical basis by consulting gastroenterologists. Specific on-site procedure scheduling and preparation instructions are confirmed upon direct consultation.
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
