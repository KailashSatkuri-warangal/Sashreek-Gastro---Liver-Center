import React from "react";

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
      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 group-hover:scale-105"
        role="img"
        aria-label="Sashreek Gastro &amp; Liver Center Logo"
      >
        <defs>
          <radialGradient
            id="logoDiskGrad"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(250 250) rotate(90) scale(230)"
          >
            <stop stopColor="#FFFFFF" />
            <stop offset="0.8" stopColor="#F8FAFC" />
            <stop offset="1" stopColor="#EEF2F6" />
          </radialGradient>
          <filter id="logoDiskShadow" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Circular Outer Disc */}
        <circle cx="250" cy="250" r="230" fill="url(#logoDiskGrad)" filter="url(#logoDiskShadow)" />
        <circle cx="250" cy="250" r="228" stroke="#E2E8F0" strokeWidth="3" />

        <g id="logo-emblem">
          {/* 1. PROTECTIVE SWOOSH & CUPPING HAND (Lilac Purple #9B6FB1) */}
          {/* Supportive Swoosh / Arm curving up on the left */}
          <path
            d="M 148 185
               C 125 220, 108 265, 114 315
               C 122 375, 165 425, 235 440
               C 305 455, 370 425, 405 385
               C 392 398, 360 422, 310 422
               C 240 422, 175 385, 150 330
               C 135 295, 136 245, 155 200
               C 160 188, 153 178, 148 185 Z"
            fill="#9B6FB1"
          />

          {/* Palm of the hand cradling the liver from below */}
          <path
            d="M 225 390
               C 255 420, 315 428, 365 395
               C 378 385, 388 375, 396 360
               C 402 348, 396 342, 386 348
               C 374 358, 355 372, 332 374
               C 310 376, 280 370, 260 355
               C 240 340, 220 330, 195 338
               C 180 342, 175 355, 188 362
               C 205 372, 218 382, 225 390 Z"
            fill="#9B6FB1"
          />

          {/* Thumb gently curved under the liver */}
          <path
            d="M 215 348
               C 240 330, 275 320, 305 328
               C 316 331, 314 340, 302 342
               C 275 345, 245 352, 228 368
               C 218 378, 206 368, 215 348 Z"
            fill="#9B6FB1"
          />

          {/* Upward Fingers */}
          {/* Index Finger */}
          <path
            d="M 305 358
               C 325 330, 338 312, 345 305
               C 352 298, 358 304, 352 312
               C 342 328, 328 355, 316 370 Z"
            fill="#9B6FB1"
          />
          {/* Middle Finger */}
          <path
            d="M 326 362
               C 348 335, 365 315, 372 308
               C 378 302, 384 308, 378 316
               C 368 332, 348 362, 336 374 Z"
            fill="#9B6FB1"
          />
          {/* Ring Finger */}
          <path
            d="M 346 368
               C 368 345, 385 328, 392 322
               C 398 316, 404 322, 398 330
               C 388 345, 368 372, 355 380 Z"
            fill="#9B6FB1"
          />
          {/* Little Finger */}
          <path
            d="M 365 376
               C 385 358, 400 345, 408 340
               C 414 335, 418 342, 412 348
               C 402 362, 385 385, 372 388 Z"
            fill="#9B6FB1"
          />

          {/* 2. LIVER (Lilac Purple #9B6FB1) */}
          {/* Right Lobe (Larger main lobe on viewer's left) */}
          <path
            d="M 182 208
               C 215 198, 252 205, 268 218
               C 272 221, 270 230, 266 238
               C 260 258, 258 285, 260 300
               C 260 306, 252 308, 246 306
               C 210 298, 172 292, 160 270
               C 152 254, 154 228, 168 216
               C 172 212, 176 210, 182 208 Z"
            fill="#9B6FB1"
          />

          {/* Left Lobe (Tapered wedge on viewer's right) */}
          <path
            d="M 276 226
               C 292 230, 318 238, 345 250
               C 356 255, 354 262, 344 268
               C 320 282, 292 295, 274 298
               C 270 299, 268 294, 269 288
               C 272 270, 272 245, 273 230
               C 273 226, 275 225, 276 226 Z"
            fill="#9B6FB1"
          />

          {/* 3. STOMACH (Warm Golden Amber #F5B03C) */}
          <path
            d="M 238 78
               C 246 78, 252 85, 252 98
               C 252 115, 262 122, 272 122
               C 305 122, 346 142, 346 182
               C 346 218, 320 248, 280 252
               C 255 255, 225 248, 205 235
               C 185 222, 172 198, 155 198
               C 142 198, 138 184, 150 174
               C 166 160, 185 168, 202 182
               C 215 192, 235 198, 255 195
               C 275 192, 292 180, 292 162
               C 292 145, 275 136, 255 136
               C 238 136, 230 115, 232 95
               C 233 84, 235 78, 238 78 Z"
            fill="#F5B03C"
          />
        </g>
      </svg>

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
