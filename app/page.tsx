"use client";

import { useRef } from "react";
import { BookingModal } from "@/components/BookingModal";
import { useTravelStore } from "@/store/useTravelStore";
import { landingContent } from "@/lib/landingContent";
import { LandingNavbar } from "@/components/LandingNavbar";
import { HeroAIInput } from "@/components/HeroAIInput";
import { LandingFooter } from "@/components/LandingFooter";

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0
  }).format(value);

export default function Home() {
  const { openModal } = useTravelStore();
  const teamScrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollTeamByCards = (direction: -1 | 1) => {
    const el = teamScrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-team-card='true']");
    const cardWidth = card ? card.offsetWidth : 300;
    const gap = 24;
    const amount = (cardWidth + gap) * direction;

    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <>
      <main className="w-full">
        <div className="hero-scene browser-noise relative min-h-screen pb-10">
          <LandingNavbar />

          <section className="relative z-10 mx-auto mt-14 max-w-[1520px] px-4 md:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="text-left">
                <h1 className="font-display text-[44px] leading-[1.02] tracking-tight text-ink md:text-[60px]">
                  {landingContent.hero.heading}
                </h1>
                <p className="mt-5 max-w-xl text-[15px] leading-6 text-slate-600 md:text-[16px]">
                  {landingContent.hero.subheading}
                </p>

                <HeroAIInput />
              </div>

              <div className="hidden lg:block">
                <div className="relative mx-auto aspect-square w-full max-w-[520px]">
                  <div className="absolute inset-0 rounded-[44px] bg-[rgba(210,196,172,0.25)] blur-[1px]" />
                  <div className="absolute inset-0 rounded-[44px] bg-gradient-to-b from-[rgba(250,247,240,0.85)] to-[rgba(232,223,200,0.35)] backdrop-blur-xl" />
                  <div className="absolute inset-10 rounded-[40px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,252,246,0.95),rgba(229,220,200,0.35),transparent_60%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-[82%] w-[82%] rounded-[44px] bg-[radial-gradient(circle_at_50%_35%,rgba(255,252,246,0.9),rgba(210,196,172,0.2),transparent_65%)] shadow-lux" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="landing-stats" className="relative z-10 mx-auto mt-14 max-w-[1520px] px-4 md:px-10">
            <div className="glass-strong rounded-[28px] p-8 md:p-12">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                  <h2 className="font-display text-3xl text-ink md:text-4xl">{landingContent.stats.heading}</h2>
                  <p className="mt-3 text-sm text-slate-600 md:text-base">{landingContent.stats.subheading}</p>
                  <button
                    onClick={() => openModal()}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
                  >
                    {landingContent.stats.cta}
                  </button>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-5xl font-extrabold tracking-tight text-ink md:text-6xl">
                    {formatNumber(landingContent.stats.value)}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-600">{landingContent.stats.label}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative z-10 mx-auto mt-20 max-w-[1520px] px-4 md:px-10">
            <div className="text-center">
              <h2 className="font-display text-4xl tracking-tight text-ink">{landingContent.demo.heading}</h2>
              <p className="mt-3 text-sm text-slate-600">{landingContent.demo.helper}</p>
            </div>
            <div className="glass-strong mx-auto mt-8 overflow-hidden rounded-[28px] p-3 md:p-5">
              {/* Reduced size ~20%: aspect ratio adjusts video placeholder height */}
              <div className="relative aspect-[20/9] w-full overflow-hidden rounded-[22px] bg-gradient-to-br from-slate-200 to-slate-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(11,95,97,0.18),transparent_55%),radial-gradient(circle_at_70%_55%,rgba(216,180,106,0.22),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/85 px-5 py-3 text-sm font-semibold text-slate-800 shadow">
                    Demo video placeholder
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative z-10 mx-auto mt-20 max-w-[1520px] px-4 md:px-10">
            <h2 className="font-display text-4xl tracking-tight text-ink">{landingContent.destinations.heading}</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {landingContent.destinations.items.map((d) => (
                <article key={d.title} className="glass-strong overflow-hidden rounded-[28px]">
                  <div className="relative h-56 w-full bg-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent" aria-hidden />
                    <img
                      src={d.image}
                      alt=""
                      onError={(e) => {
                        // If the remote image fails, keep the card looking complete.
                        e.currentTarget.style.display = "none";
                      }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <span className="sr-only">{d.subtitle}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-slate-900">{d.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{d.subtitle}</p>
                    <button
                      onClick={() => openModal()}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brandTeal"
                    >
                      {d.cta} <span aria-hidden>→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="relative z-10 mx-auto mt-20 max-w-[1520px] px-4 md:px-10">
            <div className="glass-strong rounded-[28px] p-8 md:p-12">
              <h2 className="font-display text-4xl tracking-tight text-ink">{landingContent.allInOne.heading}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">{landingContent.allInOne.body}</p>
              <button
                onClick={() => openModal()}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                {landingContent.allInOne.cta}
              </button>
            </div>
          </section>

          <section className="relative z-10 mx-auto mt-20 max-w-[1520px] px-4 md:px-10">
            <div className="text-center">
              <h2 className="font-display text-4xl tracking-tight text-ink">{landingContent.valueProps.heading}</h2>
              <p className="mt-3 text-sm text-slate-600">{landingContent.valueProps.subheading}</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {landingContent.valueProps.items.map((f) => (
                <div key={f.title} className="glass-strong rounded-[24px] p-6">
                  <p className="text-sm font-semibold text-slate-900">{f.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{f.description}</p>
                  <a href="#" className="mt-4 inline-flex text-sm font-semibold text-ink hover:text-brandTeal">
                    Read more
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="relative z-10 mx-auto mt-24 max-w-[1520px] px-4 md:px-10">
            <div className="text-center">
              <h2 className="font-display text-4xl tracking-tight text-ink">{landingContent.partners.heading}</h2>
              <p className="mt-10 text-4xl font-extrabold tracking-tight text-ink">{landingContent.partners.pressHeading}</p>
              <p className="mt-2 text-sm text-slate-600">Featured in top global media for helping travellers save time, money, and stress.</p>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-slate-700">
              {landingContent.partners.pressLogos.map((logo) => (
                <span key={logo} className="opacity-90">
                  {logo}
                </span>
              ))}
            </div>
          </section>

          <section className="relative z-10 mx-auto mt-24 max-w-[1520px] px-4 md:px-10">
            <h2 className="font-display text-4xl tracking-tight text-ink">{landingContent.investors.heading}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {landingContent.investors.items.map((p) => (
                <div key={p.name} className="glass-strong rounded-[24px] p-6">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100" />
                  <p className="mt-4 text-sm font-semibold text-slate-900">{p.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{p.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative z-10 mx-auto mt-24 max-w-[1520px] px-4 md:px-10">
            <div className="flex items-center justify-between gap-6">
              <h2 className="font-display text-4xl tracking-tight text-ink">{landingContent.team.heading}</h2>
              <div className="hidden items-center gap-2 md:flex">
                <button
                  type="button"
                  aria-label="Scroll team left"
                  onClick={() => scrollTeamByCards(-1)}
                  className="glass inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-white/80"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Scroll team right"
                  onClick={() => scrollTeamByCards(1)}
                  className="glass inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-white/80"
                >
                  →
                </button>
              </div>
            </div>
            <div id="team" ref={teamScrollerRef} className="no-scrollbar mt-10 flex gap-6 overflow-x-auto pb-2">
              {landingContent.team.items.map((m) => (
                <div
                  key={m.name}
                  data-team-card="true"
                  className="glass-strong min-w-[280px] max-w-[320px] flex-1 rounded-[24px] p-6"
                >
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-100 to-slate-100" />
                  <p className="mt-4 text-sm font-semibold text-slate-900">{m.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{m.role}</p>
                  {m.blurb ? <p className="mt-4 text-sm leading-6 text-slate-600">{m.blurb}</p> : null}
                  <a href="#" className="mt-4 inline-flex text-sm font-semibold text-ink hover:text-brandTeal">
                    Read more
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="relative z-10 mx-auto mt-24 max-w-[1520px] px-4 md:px-10">
            <h2 className="font-display text-4xl tracking-tight text-ink">{landingContent.testimonials.heading}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {landingContent.testimonials.items.map((t) => (
                <div key={t.name} className="glass-strong rounded-[24px] p-7">
                  <p className="text-sm leading-7 text-slate-700">“{t.quote}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-100" />
                    <p className="text-sm font-semibold text-slate-900">
                      {t.name}, {t.age}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative z-10 mx-auto mt-24 max-w-[1520px] px-4 md:px-10">
            <h2 className="font-display text-4xl tracking-tight text-ink">{landingContent.faq.heading}</h2>
            <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/60 backdrop-blur-xl">
              {landingContent.faq.items.map((item) => (
                <details key={item.question} className="group px-6 py-5">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                    <div className="flex items-center justify-between gap-6">
                      <span>{item.question}</span>
                      <span className="text-slate-500 transition group-open:rotate-45">+</span>
                    </div>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="relative z-10 mx-auto mt-24 max-w-[1520px] px-4 md:px-10">
            <div className="rounded-[36px] border border-slate-200/80 bg-white/65 px-8 py-14 backdrop-blur-xl md:px-14">
              <div className="text-center">
                <h2 className="font-display text-4xl tracking-tight text-ink">{landingContent.finalCta.heading}</h2>
                <p className="mt-3 text-sm text-slate-600">{landingContent.finalCta.subheading}</p>
                <button
                  onClick={() => openModal()}
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  {landingContent.finalCta.cta} <span aria-hidden className="ml-2">›</span>
                </button>
              </div>
            </div>
          </section>

          <LandingFooter />
        </div>
      </main>
      <BookingModal />
    </>
  );
}
