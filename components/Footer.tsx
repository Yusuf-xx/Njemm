"use client";

import { useState } from "react";
import { useTravelStore } from "@/store/useTravelStore";

const downloadFile = (filename: string, content: string, mimeType: string) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
};

export function Footer() {
  const [feedback, setFeedback] = useState("Tap any capability to run a real action.");
  const { setQuery, runSearch, openModal } = useTravelStore();

  const focusSearch = () => {
    const input = document.getElementById("njemm-search-input") as HTMLInputElement | null;
    input?.focus();
    input?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleAction = async (action: string) => {
    switch (action) {
      case "search":
        focusSearch();
        setFeedback("Search is ready. Start typing your next destination.");
        break;
      case "plan":
        setQuery("Plan a 5-day luxury London itinerary with dining and curated experiences");
        await runSearch();
        setFeedback("Fresh AI plan generated with flights, hotels, itinerary, and dining.");
        break;
      case "book":
        openModal();
        setFeedback("Booking handoff opened. Continue checkout in the NJEMM app.");
        break;
      case "reminders":
        downloadFile(
          "njemm-reminders.ics",
          "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:NJEMM Travel Reminder\nDTSTART:20260615T080000Z\nDTEND:20260615T083000Z\nDESCRIPTION:Review itinerary, passport, and transfers.\nBEGIN:VALARM\nTRIGGER:-PT24H\nACTION:DISPLAY\nDESCRIPTION:Your trip starts soon\nEND:VALARM\nEND:VEVENT\nEND:VCALENDAR",
          "text/calendar"
        );
        setFeedback("Reminder file downloaded. Import it to your calendar app.");
        break;
      case "changes":
        window.open("mailto:support@njemm.ai?subject=Trip%20Changes%20%26%20Cancellation%20Request", "_blank");
        setFeedback("Support email draft opened for changes or cancellation handling.");
        break;
      case "calendar":
        downloadFile(
          "njemm-trip-sync.ics",
          "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:NJEMM Synced Itinerary\nDTSTART:20260601T090000Z\nDTEND:20260607T170000Z\nDESCRIPTION:Paris and London luxury itinerary synced from NJEMM.\nEND:VEVENT\nEND:VCALENDAR",
          "text/calendar"
        );
        setFeedback("Itinerary calendar sync file downloaded.");
        break;
      case "packing":
        downloadFile(
          "njemm-packing-list.txt",
          "NJEMM Packing List\n- Passport and travel documents\n- Formal evening outfit\n- Comfortable walking shoes\n- Chargers and adapters\n- Travel-size essentials\n- Reservation confirmations",
          "text/plain"
        );
        setFeedback("Packing list generated and downloaded.");
        break;
      case "alerts":
        if (!("Notification" in window)) {
          setFeedback("Smart alerts are not supported in this browser.");
          break;
        }
        if (Notification.permission === "granted") {
          new Notification("NJEMM Smart Alert", { body: "Fare drop detected for your route. Open NJEMM to review." });
          setFeedback("Smart alerts enabled. Sample alert sent.");
          break;
        }
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          new Notification("NJEMM Smart Alert", { body: "You're all set for proactive travel alerts." });
          setFeedback("Smart alerts enabled successfully.");
        } else {
          setFeedback("Smart alerts permission was not granted.");
        }
        break;
      default:
        break;
    }
  };

  const actionChips = [
    { id: "search", label: "🔍 Search" },
    { id: "plan", label: "🧠 Plan" },
    { id: "book", label: "💳 Book" },
    { id: "reminders", label: "⏰ Set Reminders" },
    { id: "changes", label: "🔄 Handle Changes & Cancellations" },
    { id: "calendar", label: "📅 Sync to Calendar" },
    { id: "packing", label: "🧳 Create Packing Lists" },
    { id: "alerts", label: "🚨 Send Smart Alerts" }
  ];

  return (
    <footer className="glass relative z-10 mx-auto mt-8 max-w-[1520px] rounded-2xl px-5 py-4">
      <div className="flex flex-col gap-3 text-sm text-slate-700 xl:flex-row xl:items-center xl:justify-between">
        <p className="font-semibold text-brandTeal">NJEMM AI can:</p>
        <ul className="flex flex-wrap items-center gap-3">
          {actionChips.map((chip) => (
            <li key={chip.id}>
              <button
                onClick={() => void handleAction(chip.id)}
                className="rounded-full border border-white bg-white/80 px-3 py-1.5 text-xs transition hover:-translate-y-[1px] hover:bg-white"
              >
                {chip.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-3 text-xs text-slate-600">{feedback}</p>
    </footer>
  );
}
