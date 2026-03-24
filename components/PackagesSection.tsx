"use client";

import { motion } from "framer-motion";
import { useTravelStore } from "@/store/useTravelStore";

export function PackagesSection() {
  const { result, openModal } = useTravelStore();

  return (
    <motion.section
      id="packages-section"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white/95 p-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl text-slate-900">Curated Travel Packages</h3>
        <span className="rounded-full bg-brandTeal/10 px-3 py-1 text-xs font-semibold text-brandTeal">
          Tailored to your request
        </span>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
        {result.packages.map((pkg) => (
          <motion.article
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.99 }}
            key={pkg.name}
            className="hover-lift rounded-2xl border border-slate-200 bg-white p-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-slate-900">{pkg.name}</h4>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                {pkg.tag}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500">{pkg.duration}</p>
            <p className="mt-3 min-h-[48px] text-sm text-slate-600">{pkg.inclusions}</p>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xl font-bold text-brandTeal">{pkg.price}</p>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={openModal}
                className="rounded-xl bg-brandTeal px-4 py-2 text-sm font-semibold text-white transition hover:bg-brandTealDark"
              >
                View Package
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
