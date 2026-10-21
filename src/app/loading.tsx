import React from "react";
import SashreekLogo from "@/components/SashreekLogo";

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
      <div className="relative mb-4">
        <SashreekLogo size={64} withText={false} />
        <div className="absolute -inset-2 rounded-full border-2 border-teal-500/20 border-t-teal-600 animate-spin" />
      </div>
      <span className="text-xs font-bold text-navy-950 uppercase tracking-widest">
        Sashreek Gastro &amp; Liver Center
      </span>
      <span className="text-[11px] text-teal-700 font-semibold mt-1">
        Loading Clinical Services...
      </span>
    </div>
  );
}
