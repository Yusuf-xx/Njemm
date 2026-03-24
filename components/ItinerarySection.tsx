"use client";

import { motion } from "framer-motion";
import { useTravelStore } from "@/store/useTravelStore";

export function ItinerarySection() {
  const { result } = useTravelStore();
  return (
    <motion.section id="activities-section" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-slate-200 bg-white/95 p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl text-slate-900">7-Day Romantic Itinerary</h3>
        <span className="rounded-full bg-brandTeal/10 px-3 py-1 text-xs font-semibold text-brandTeal">Smartly Optimized by NJEMM AI</span>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {result.itinerary.map((item) => (
          <motion.div key={item.day} whileHover={{ y: -3 }} className="hover-lift rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-3">
            <p className="text-xs text-slate-500">{item.day}</p>
            <p className="mt-1 text-sm font-semibold">{item.title}</p>
            <p className="mt-1 text-xs text-slate-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
