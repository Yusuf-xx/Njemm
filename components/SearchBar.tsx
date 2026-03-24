"use client";

import { motion } from "framer-motion";
import { useTravelStore } from "@/store/useTravelStore";

export function SearchBar() {
  const { query, setQuery, runSearch, isFocused, setFocus } = useTravelStore();

  return (
    <motion.form
      onSubmit={(e) => {
        e.preventDefault();
        void runSearch();
      }}
      animate={{ width: isFocused ? "50rem" : "45rem" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="glass-strong w-full rounded-2xl border-white/75 px-4 py-3 xl:px-6"
    >
      <div className="flex items-center gap-3">
        <svg className="h-5 w-5 text-brandTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
        </svg>
        <input
          id="njemm-search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={isFocused ? "Ask NJEMM to build your luxury trip..." : "Where would you like to go?"}
          className="w-full bg-transparent text-[15px] text-slate-700 outline-none placeholder:text-slate-500"
        />
      </div>
    </motion.form>
  );
}
