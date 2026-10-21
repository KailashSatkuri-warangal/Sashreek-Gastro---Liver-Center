import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SashreekLogo from "@/components/SashreekLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-6">
        <SashreekLogo size={64} withText={true} />
      </div>
      <h1 className="text-3xl font-extrabold text-navy-950">404 - Page Not Found</h1>
      <p className="mt-2 text-sm text-slate-600 max-w-md">
        The requested page or section could not be found. Please return to the Sashreek Gastro &amp; Liver Center homepage.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800 transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4 text-teal-300" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
