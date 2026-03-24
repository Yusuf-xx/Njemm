"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTravelStore } from "@/store/useTravelStore";

export function DiningSection() {
  const { result, openModal } = useTravelStore();
  return (
    <motion.section id="dining-section" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-slate-200 bg-white/95 p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl text-slate-900">Best Price Fine Dining</h3>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">We Found the Lowest Price</span>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
        {result.dining.map((dining) => (
          <motion.article
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.99 }}
            key={dining.name}
            className="hover-lift flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <Image src={dining.image} alt={dining.alt} width={1200} height={700} className="h-40 w-full object-cover" />
            <div className="flex h-full flex-col p-4">
              <h4 className="font-semibold text-slate-900">{dining.name}</h4>
              <p className="text-sm text-slate-500">{dining.cityRating}</p>
              <p className="mt-2 min-h-[48px] pr-1 text-sm leading-6 text-slate-600">{dining.description}</p>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={openModal}
                className="mt-auto w-full rounded-xl bg-brandTeal py-2.5 text-sm font-semibold text-white transition hover:bg-brandTealDark"
              >
                Reserve Table
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
