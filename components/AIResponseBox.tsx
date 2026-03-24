"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTravelStore } from "@/store/useTravelStore";

export function AIResponseBox() {
  const { activePrompt, isThinking, result } = useTravelStore();

  return (
    <>
      <div className="flex items-center justify-between rounded-2xl border border-teal-100 bg-white px-5 py-4">
        <p className="text-[17px] text-slate-700">"{activePrompt}"</p>
        <span className="rounded-full bg-brandTeal/10 px-3 py-1 text-xs font-semibold text-brandTeal">
          Confidence Score: {result.confidence}%
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brandTeal">
        <span>{isThinking ? "AI is thinking" : "AI recommendations ready"}</span>
        <div className="flex items-center gap-1.5">
          <span className="thinking-dot"></span>
          <span className="thinking-dot"></span>
          <span className="thinking-dot"></span>
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={isThinking ? "thinking" : "active"}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="ml-2 rounded-full bg-softGold/20 px-2 py-1 text-xs text-amber-800"
          >
            {isThinking ? "Smart Recommendation Engine Active" : "Engine refreshed with your preferences"}
          </motion.span>
        </AnimatePresence>
      </div>
    </>
  );
}
