"use client";

import { AnimatePresence } from "framer-motion";
import { AIResponseBox } from "@/components/AIResponseBox";
import { BookingModal } from "@/components/BookingModal";
import { DiningSection } from "@/components/DiningSection";
import { FlightCards } from "@/components/FlightCards";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HotelCards } from "@/components/HotelCards";
import { ItinerarySection } from "@/components/ItinerarySection";
import { Navbar } from "@/components/Navbar";
import { PackagesSection } from "@/components/PackagesSection";
import { useTravelStore } from "@/store/useTravelStore";

export default function Home() {
  const { revealed } = useTravelStore();

  return (
    <>
      <main className="w-full">
        <div className="hero-scene browser-noise relative min-h-screen px-3 pb-10 pt-6 md:px-10 md:pt-8">
            <Navbar />
            <HeroSection />

            <section className="glass-strong relative z-10 mx-auto mt-10 max-w-[1520px] rounded-[28px] p-4 shadow-glow md:p-7">
              <AIResponseBox />
              <div className="mt-8 space-y-8">
                <AnimatePresence mode="popLayout">{revealed.includes("flights") ? <FlightCards /> : null}</AnimatePresence>
                <AnimatePresence mode="popLayout">{revealed.includes("hotels") ? <HotelCards /> : null}</AnimatePresence>
                <AnimatePresence mode="popLayout">{revealed.includes("itinerary") ? <ItinerarySection /> : null}</AnimatePresence>
                <AnimatePresence mode="popLayout">{revealed.includes("dining") ? <DiningSection /> : null}</AnimatePresence>
                <AnimatePresence mode="popLayout">{revealed.includes("packages") ? <PackagesSection /> : null}</AnimatePresence>
              </div>
            </section>

            <Footer />
        </div>
      </main>
      <BookingModal />
    </>
  );
}
