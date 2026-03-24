"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTravelStore } from "@/store/useTravelStore";

export function HotelCards() {
  const { result, openModal } = useTravelStore();
  return (
    <motion.section id="hotels-section" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-slate-200 bg-white/95 p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl text-slate-900">Best Price Hotels</h3>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Best Price Guaranteed</span>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
        {result.hotels.map((hotel) => (
          <motion.article whileHover={{ y: -5 }} whileTap={{ scale: 0.99 }} key={hotel.name} className="hover-lift overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={hotel.image} alt={hotel.alt} width={1200} height={700} className="h-44 w-full object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-900">{hotel.name}</h4>
                <span className="text-xs text-amber-600">★★★★★</span>
              </div>
              <p className="mt-1 text-sm text-slate-500">{hotel.area}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-bold text-brandTeal">
                  {hotel.price}
                  <span className="text-sm font-medium text-slate-500">/night</span>
                </span>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">{hotel.tag}</span>
              </div>
              <motion.button whileTap={{ scale: 0.97 }} onClick={openModal} className="mt-4 w-full rounded-xl bg-brandTeal py-2.5 text-sm font-semibold text-white transition hover:bg-brandTealDark">
                Select Room
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
