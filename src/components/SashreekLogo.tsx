import React from "react";
import Image from "next/image";

interface SashreekLogoProps {
  className?: string;
  size?: number;
  withText?: boolean;
  textColor?: "dark" | "light";
}

export default function SashreekLogo({
  className = "",
  size = 44,
  withText = false,
  textColor = "dark",
}: SashreekLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official Emblem */}
      <div
        className="relative shrink-0 rounded-full overflow-hidden shadow-xs border border-slate-200/80 bg-[#F6F3FA] transition-transform duration-200 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/sashreek_logo.png"
          alt="Sashreek Gastro & Liver Center Official Logo"
          width={size}
          height={size}
          priority
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      {/* Optional Typographic Title */}
      {withText && (
        <div className="flex flex-col">
          <span
            className={`font-extrabold text-lg tracking-tight leading-tight ${
              textColor === "light" ? "text-white" : "text-navy-950"
            }`}
          >
            Sashreek
          </span>
          <span
            className={`text-[11px] font-bold uppercase tracking-wider leading-none ${
              textColor === "light" ? "text-teal-300" : "text-teal-700"
            }`}
          >
            Gastro &amp; Liver Center
          </span>
        </div>
      )}
    </div>
  );
}
