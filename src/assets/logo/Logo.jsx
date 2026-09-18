import React from 'react';

export function MonogramIcon({ className = "w-10 h-10" }) {
  return (
    <img 
      src="/images/logo.webp" 
      alt="SP Impression Hub Logo" 
      className={`rounded-full object-contain ${className}`} 
    />
  );
}

export default function Logo({ variant = "full", inverted = false, className = "" }) {
  if (variant === "icon") {
    return (
      <img 
        src="/images/logo.webp" 
        alt="SP Impression Hub Logo" 
        className={`rounded-full object-contain ${className || "h-10 w-10 sm:h-11 sm:w-11"}`} 
      />
    );
  }

  const textColor = inverted ? "text-white" : "text-[#0D192E]";
  const subTextColor = inverted ? "text-white/75" : "text-[#596273]";

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      <img 
        src="/images/logo.webp" 
        alt="SP Impression Hub Logo" 
        className="h-10 w-10 sm:h-11 sm:w-11 object-contain rounded-full shrink-0 shadow-xs" 
      />
      <div className="flex flex-col text-left leading-tight">
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold text-[15px] sm:text-[17px] tracking-tight font-sans ${textColor}`}>
            SP IMPRESSION
          </span>
          <span className="bg-[#E05A2B] text-white text-[10px] sm:text-[10.5px] font-bold px-1.5 py-0.5 rounded-[4px] tracking-wide">
            HUB
          </span>
        </div>
        <span className={`text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.14em] uppercase mt-0.5 ${subTextColor}`}>
          PRINTING &amp; CITIZEN SERVICES • KOPARGAON
        </span>
      </div>
    </div>
  );
}
