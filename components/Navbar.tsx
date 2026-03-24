"use client";

import Image from "next/image";
import { SearchBar } from "@/components/SearchBar";
import { useTravelStore } from "@/store/useTravelStore";

export function Navbar() {
  const { query, activePrompt, runSearch } = useTravelStore();

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getBasePrompt = () => {
    const source = (query.trim() || activePrompt).trim();
    return source
      .replace(/\s*Focus on[^.]*\.*\s*/gi, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/[.]+$/, "");
  };

  const handleNavAction = async (type: "flights" | "hotels" | "activities" | "packages") => {
    const baseContext = getBasePrompt();
    const prompts = {
      flights: `${baseContext}. Focus on best flight options and airline recommendations.`,
      hotels: `${baseContext}. Focus on top hotel options and room suggestions.`,
      activities: `${baseContext}. Focus on activities and daily itinerary ideas.`,
      packages: `${baseContext}. Focus on complete travel package suggestions.`
    } as const;

    const sectionMap = {
      flights: "flights-section",
      hotels: "hotels-section",
      activities: "activities-section",
      packages: "packages-section"
    } as const;

    await runSearch(prompts[type]);
    scrollToSection(sectionMap[type]);
  };

  return (
    <nav className="glass relative z-10 flex items-center justify-between rounded-2xl px-4 py-4 shadow-lg xl:px-7">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/70 bg-white/80 shadow-lg">
          <Image src="/njemm-logo.png" alt="NJEMM logo" width={44} height={44} className="h-10 w-10 object-contain" priority />
        </div>
        <div className="leading-none">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brandTeal/70">Global AI Travel</p>
          <h1 className="mt-1 bg-gradient-to-r from-brandTeal via-brandTealDark to-brandTeal bg-clip-text font-display text-[24px] font-extrabold tracking-[0.08em] text-transparent">
            NJEMM
          </h1>
        </div>
      </div>
      <SearchBar />
      <ul className="hidden items-center gap-8 text-[15px] font-medium text-slate-700 xl:flex">
        <li>
          <button onClick={() => void handleNavAction("flights")} className="transition hover:text-brandTeal">
            Flights
          </button>
        </li>
        <li>
          <button onClick={() => void handleNavAction("hotels")} className="transition hover:text-brandTeal">
            Hotels
          </button>
        </li>
        <li>
          <button onClick={() => void handleNavAction("activities")} className="transition hover:text-brandTeal">
            Activities
          </button>
        </li>
        <li>
          <button onClick={() => void handleNavAction("packages")} className="transition hover:text-brandTeal">
            Packages
          </button>
        </li>
      </ul>
    </nav>
  );
}
