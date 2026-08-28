"use client";

import { useState } from "react";
import { PROCESS_STEPS } from "@/data/copy";
import { cn } from "@/lib/utils";

export function ProcessJourney() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#000000]" aria-labelledby="process-heading" id="process">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-28">
        <div>
          <h2
            id="process-heading"
            className="max-w-[18ch] text-[34px] leading-[1.08] font-semibold tracking-[-0.04em] text-[#f5f5f5] sm:text-[48px]"
          >
            Fulfillment looks and feels complicated, but Shipfront will make it easy!
          </h2>
          <ol className="mt-8 space-y-2">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step}>
                <button
                  type="button"
                  className={cn(
                    "flex min-h-11 w-full items-center gap-4 rounded-[14px] px-3 py-3 text-left transition-colors",
                    index === active
                      ? "bg-[#000000] text-[#f5f5f5] ring-1 ring-[#222]"
                      : "text-[#d4d4d4] hover:bg-[#000000] hover:ring-1 hover:ring-[#222]",
                  )}
                  aria-current={index === active ? "step" : undefined}
                  onClick={() => setActive(index)}
                >
                  <span className="font-mono text-[12px] text-[#9a9a9a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-medium sm:text-[18px]">{step}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-[20px] border border-[#222] bg-[#000000] p-6 sm:p-8">
          <p className="font-mono text-[11px] tracking-[0.16em] text-[#9a9a9a] uppercase">
            Connect, Store, Fulfill, Deliver, Grow
          </p>
          <p className="mt-6 text-[28px] leading-tight font-semibold tracking-[-0.03em] text-[#f5f5f5] sm:text-[36px]">
            {PROCESS_STEPS[active]}
          </p>
          <svg viewBox="0 0 420 180" className="mt-8 w-full" aria-hidden="true">
            {PROCESS_STEPS.map((_, index) => {
              const x = 30 + index * 58;
              const last = index === PROCESS_STEPS.length - 1;
              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy="90"
                    r={index === active ? 14 : 8}
                    fill={index === active ? "#FF6A00" : "#000000"}
                    stroke="#FF6A00"
                    strokeWidth="1.5"
                  />
                  {last ? null : (
                    <line
                      x1={x + (index === active ? 14 : 8)}
                      y1="90"
                      x2={x + 58 - 8}
                      y2="90"
                      stroke="#222222"
                      strokeWidth="2"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
