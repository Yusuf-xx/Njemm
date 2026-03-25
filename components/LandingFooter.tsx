"use client";

import { landingContent } from "@/lib/landingContent";

export function LandingFooter() {
  return (
    <footer className="relative z-10 mx-auto mt-16 max-w-[1520px] px-4 pb-16 md:px-10">
      <div className="glass-strong rounded-[28px] px-6 py-10 md:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {landingContent.footer.columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">{col.heading}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-brandTeal">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-slate-600">
            {landingContent.footer.bottomLeft ? <p>{landingContent.footer.bottomLeft}</p> : null}
            <p className={landingContent.footer.bottomLeft ? "mt-1" : ""}>{landingContent.footer.copyright}</p>
          </div>
          <ul className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
            {landingContent.footer.socials.map((s) => (
              <li key={s}>
                <a href="#" className="hover:text-brandTeal">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

