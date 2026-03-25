"use client";

import { landingContent } from "@/lib/landingContent";

export function LandingNavbar() {
  return (
    <div className="relative z-10 mx-auto flex max-w-[1520px] items-center justify-between px-2 pt-2 md:px-6 md:pt-4">
      <div className="text-[18px] font-extrabold tracking-tight text-white md:text-[20px]">
        {landingContent.brand.wordmark}
      </div>
      <div className="h-10 w-10" aria-hidden />
    </div>
  );
}

