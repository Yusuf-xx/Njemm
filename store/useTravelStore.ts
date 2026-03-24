"use client";

import { getMockResult } from "@/lib/mockData";
import type { TravelResult } from "@/types/travel";
import { create } from "zustand";

type RevealStep = "flights" | "hotels" | "itinerary" | "dining" | "packages";

type TravelState = {
  query: string;
  activePrompt: string;
  isFocused: boolean;
  isThinking: boolean;
  result: TravelResult;
  revealed: RevealStep[];
  isModalOpen: boolean;
  setQuery: (query: string) => void;
  setFocus: (focused: boolean) => void;
  runSearch: (overridePrompt?: string) => Promise<void>;
  openModal: () => void;
  closeModal: () => void;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const defaultPrompt = "Plan a 7-day romantic trip to Paris and London for me and my partner in June";

export const useTravelStore = create<TravelState>((set, get) => ({
  query: "",
  activePrompt: defaultPrompt,
  isFocused: false,
  isThinking: false,
  result: getMockResult(defaultPrompt, { randomizeConfidence: false }),
  revealed: ["flights", "hotels", "itinerary", "dining", "packages"],
  isModalOpen: false,
  setQuery: (query) => set({ query }),
  setFocus: (focused) => set({ isFocused: focused }),
  runSearch: async (overridePrompt) => {
    const prompt = overridePrompt?.trim() || get().query.trim() || defaultPrompt;
    if (overridePrompt) {
      set({ query: overridePrompt });
    }
    set({ activePrompt: prompt, isThinking: true, revealed: [] });

    const delay = 1500 + Math.floor(Math.random() * 1000);
    await sleep(delay);

    set({ result: getMockResult(prompt), isThinking: false, revealed: [] });
    const sequence: RevealStep[] = ["flights", "hotels", "itinerary", "dining", "packages"];
    for (const step of sequence) {
      await sleep(260);
      set((state) => ({ revealed: [...state.revealed, step] }));
    }
  },
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false })
}));
