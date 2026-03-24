"use client";

import { motion } from "framer-motion";
import { useTravelStore } from "@/store/useTravelStore";

export function FlightCards() {
  const { result, openModal } = useTravelStore();
  return (
    <motion.section id="flights-section" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-slate-200 bg-white/95 p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl text-slate-900">Best Price Flights</h3>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">We Found the Lowest Price</span>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
        {result.flights.map((flight) => (
          <motion.article whileHover={{ y: -5 }} whileTap={{ scale: 0.99 }} key={`${flight.airline}-${flight.route}`} className="hover-lift rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg font-bold ${flight.colorClass}`}>{flight.airlineCode}</div>
                <div>
                  <p className="font-semibold text-slate-900">{flight.airline}</p>
                  <p className="text-xs text-slate-500">{flight.route}</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">{flight.tag}</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-y-1 text-sm text-slate-700">
              <span>Departs: {flight.depart}</span>
              <span>Arrives: {flight.arrive}</span>
              <span>Duration: {flight.duration}</span>
              <span>{flight.stopType}</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-2xl font-bold text-brandTeal">{flight.price}</p>
              <motion.button whileTap={{ scale: 0.97 }} onClick={openModal} className="rounded-xl bg-brandTeal px-4 py-2 text-sm font-semibold text-white transition hover:bg-brandTealDark">
                Book Now
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
