"use client";

import React, { useEffect } from "react";
import { Stethoscope, RefreshCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-navy-900 text-teal-300 flex items-center justify-center mb-6 shadow-md">
        <Stethoscope className="w-8 h-8" />
      </div>
      <h2 className="text-2xl font-bold text-navy-950">
        Clinical Portal Temporary Notice
      </h2>
      <p className="mt-2 text-sm text-slate-600 max-w-md">
        We encountered a temporary connection issue. Please refresh the page or try again.
      </p>
      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={() => reset()}
          className="btn-primary touch-target px-5 py-2.5 text-xs font-semibold flex items-center gap-2"
        >
          <RefreshCcw className="w-4 h-4 text-teal-300" />
          <span>Reload Page</span>
        </button>
        <a
          href="/"
          className="btn-secondary touch-target px-5 py-2.5 text-xs font-semibold"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
