"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTravelStore } from "@/store/useTravelStore";
import { landingContent } from "@/lib/landingContent";

type QuickAction = {
  label: string;
  prompt: string;
};

const IconMic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Zm6-3a6 6 0 0 1-12 0m6 9v-2m-4 2h8"
    />
  </svg>
);

const IconPaperclip = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 1 1 5.66 5.66l-9.2 9.19a2 2 0 1 1-2.83-2.83l8.49-8.49"
    />
  </svg>
);

export function HeroAIInput() {
  const { query, setQuery, openModal, isThinking } = useTravelStore();
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const quickActions = useMemo(() => landingContent.hero.quickActions as unknown as QuickAction[], []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="mt-6 w-full">
      <motion.form
        onSubmit={(e) => void onSubmit(e)}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="glass-strong mx-auto w-full max-w-[720px] rounded-3xl px-4 py-3 shadow-lg md:px-5"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={landingContent.hero.samplePrompt}
          className="w-full bg-transparent py-3 text-[14px] text-slate-700 outline-none placeholder:text-slate-500 md:text-[15px]"
        />

        <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-white"
            >
              <IconPaperclip className="h-4 w-4 text-slate-600" />
              Attach
            </button>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={(e) => {
                const files = Array.from(e.target.files ?? []);
                setAttachedFiles(files);
              }}
            />

            <button
              type="button"
              aria-label="Voice input"
              onClick={() => {
                // Voice input isn't wired in this demo UI.
                setStatusMessage("Voice input isn’t wired yet — type your request for now.");
              }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white/80 text-slate-700 transition hover:bg-white"
            >
              <IconMic className="h-5 w-5 text-slate-600" />
            </button>
          </div>

          <button
            type="submit"
            disabled={isThinking}
            className="inline-flex w-full items-center justify-center rounded-full bg-brandTeal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brandTealDark disabled:opacity-70 md:w-auto"
          >
            {isThinking ? "Planning..." : "Plan my trip"}
          </button>
        </div>

        {statusMessage ? (
          <p className="mt-3 text-xs text-slate-600" role="status" aria-live="polite">
            {statusMessage}
          </p>
        ) : null}

        {attachedFiles.length ? (
          <p className="mt-2 text-xs text-slate-600">
            Attached:{" "}
            {attachedFiles.length === 1
              ? attachedFiles[0].name
              : `${attachedFiles[0].name} + ${attachedFiles.length - 1} more`}
          </p>
        ) : null}
      </motion.form>

      <div className="mx-auto mt-4 flex max-w-[720px] flex-wrap items-center justify-center gap-3 text-xs text-slate-700">
        {quickActions.map((action) => (
          <button
            key={action.label}
            type="button"
            onClick={() => {
              setQuery(action.prompt);
              openModal();
            }}
            className="rounded-full border border-white bg-white/75 px-4 py-2 font-medium transition hover:bg-white"
          >
            {action.label}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-4 flex max-w-[720px] justify-center">
        <a href="#landing-stats" className="text-xs font-medium text-white/80 hover:text-white">
          See how I can help you ↓
        </a>
      </div>
    </div>
  );
}

