"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTravelStore } from "@/store/useTravelStore";

export function BookingModal() {
  const { isModalOpen, closeModal } = useTravelStore();

  return (
    <AnimatePresence>
      {isModalOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ y: 18, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong w-full max-w-lg rounded-3xl border border-white/80 p-7 shadow-glow"
          >
            <h3 className="font-display text-2xl text-brandTealDark">Download the app to continue</h3>
            <p className="mt-2 text-sm text-slate-600">
              Keep planning on your phone. Download Layla.ai from the App Store or Google Play to save your trip and
              book seamlessly.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a href="https://www.apple.com/app-store/" target="_blank" className="rounded-xl bg-brandTeal px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-brandTealDark" rel="noreferrer">
                Download on App Store
              </a>
              <a href="https://play.google.com/store" target="_blank" className="rounded-xl border border-brandTeal bg-white/80 px-4 py-3 text-center text-sm font-semibold text-brandTeal transition hover:bg-white" rel="noreferrer">
                Get it on Google Play
              </a>
            </div>
            <button onClick={closeModal} className="mt-4 w-full rounded-xl bg-slate-100/80 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-200">
              Maybe later
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
