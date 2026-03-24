export function HeroSection() {
  return (
    <div className="relative z-10 mt-14">
      <div className="mx-auto max-w-[1120px] text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-[13px] font-semibold text-brandTeal shadow">
          <span className="h-2 w-2 rounded-full bg-softGold"></span> AI-powered global trip intelligence
        </p>
        <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-white drop-shadow-md md:text-[58px]">
          Ask NJEMM AI - Your Intelligent Travel Assistant
        </h2>
        <p className="mt-4 text-lg text-white/85">
          From discovery to booking, experience premium travel planning with real-time intelligence.
        </p>
      </div>
    </div>
  );
}
