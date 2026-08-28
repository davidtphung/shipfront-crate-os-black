"use client";

import { useEffect, useRef, useState } from "react";
import { NETWORK_STEPS } from "@/data/copy";
import { cn } from "@/lib/utils";

const ROUTE = "M90 120 L230 160 L320 250 L430 180 L540 230 L540 380";
const ALT_ROUTE = "M230 160 L230 300 L320 250 L430 340 L540 380";
const NODES = [
  { x: 90, y: 120, label: "STORE" },
  { x: 230, y: 160, label: "INVENTORY" },
  { x: 320, y: 250, label: "FULFILLMENT" },
  { x: 430, y: 180, label: "QUALITY CHECK" },
  { x: 430, y: 340, label: "CARRIER" },
  { x: 540, y: 380, label: "CUSTOMER" },
];

export function NetworkExperience() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const next = Math.min(
        NETWORK_STEPS.length - 1,
        Math.floor((scrolled / total) * NETWORK_STEPS.length),
      );
      setActive(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const step = NETWORK_STEPS[active];
  const progress = (active + 1) / NETWORK_STEPS.length;

  return (
    <section
      ref={ref}
      className="relative bg-[#000000] text-[#f5f5f5]"
      aria-labelledby="network-heading"
    >
      <div className="lg:h-[160vh]">
        <div className="lg:sticky lg:top-0 lg:flex lg:min-h-[100dvh] lg:items-center">
          <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] text-[#FF6A00] uppercase">
                SHIPFRONT NETWORK
              </p>
              <h2
                id="network-heading"
                className="mt-4 max-w-[12ch] text-[34px] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-[52px]"
              >
                How Shipfront moves with you
              </h2>
              <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-[#9a9a9a] uppercase">
                ILLUSTRATIVE WORKFLOW
              </p>
              <p className="mt-6 font-mono text-[12px] text-[#FF6A00]" aria-live="polite">
                {active === 0 ? "ORDER SIGNAL RECEIVED" : step.label}
              </p>
              <div className="mt-8 rounded-[16px] border border-[#222] bg-[#000000] p-5">
                <p className="font-mono text-[11px] tracking-[0.14em] text-[#9a9a9a]">
                  {step.label}
                </p>
                <p className="mt-2 text-[16px] leading-relaxed text-[#f5f5f5]">{step.body}</p>
              </div>
            </div>
            <div className="relative rounded-[20px] border border-[#222] bg-[#000000]">
              <svg
                viewBox="0 0 640 520"
                className="hidden min-h-[380px] w-full lg:block"
                role="img"
                aria-label="Illustrative Shipfront network connecting store, inventory, fulfillment, quality check, carrier, and customer"
              >
                <rect width="640" height="520" fill="#000000" />
                <path
                  d={ROUTE}
                  fill="none"
                  stroke="#FF6A00"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray={`${progress} ${1 - progress}`}
                />
                <path
                  d={ALT_ROUTE}
                  fill="none"
                  stroke="#FF6A00"
                  strokeWidth="1.2"
                  opacity="0.7"
                  pathLength="1"
                  strokeDasharray={`${progress} ${1 - progress}`}
                />
                <circle
                  r="5"
                  fill="#FF6A00"
                  style={{
                    offsetPath: `path('${ROUTE}')`,
                    offsetDistance: `${progress * 100}%`,
                  }}
                />
                {NODES.map((node, index) => (
                  <g key={node.label}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="18"
                      fill="#000000"
                      stroke="#FF6A00"
                      strokeWidth="1.4"
                      className={cn(index === active && "node-breathe")}
                    />
                    <text
                      x={node.x}
                      y={node.y + 36}
                      textAnchor="middle"
                      fill={index === active ? "#f5f5f5" : "#9a9a9a"}
                      fontSize="10"
                      fontFamily="ui-monospace, monospace"
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>
              <ol className="grid gap-3 p-4 lg:hidden">
                {NETWORK_STEPS.map((item, index) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={cn(
                        "flex min-h-11 w-full items-start gap-3 rounded-[14px] border px-4 py-3 text-left",
                        index === active ? "border-[#FF6A00] bg-[#000000]" : "border-[#222]",
                      )}
                      aria-pressed={index === active}
                      onClick={() => setActive(index)}
                    >
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF6A00]" />
                      <span>
                        <span className="block font-mono text-[11px] tracking-[0.12em] text-[#FF6A00]">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-[14px] text-[#e8e8e8]">{item.body}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
              <div className="hidden flex-wrap gap-2 p-4 lg:flex">
                {NETWORK_STEPS.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={cn(
                      "min-h-11 rounded-[12px] border px-3 text-[12px] font-medium",
                      index === active
                        ? "border-[#FF6A00] bg-[#000000] text-[#f5f5f5]"
                        : "border-[#222] text-[#9a9a9a] hover:text-[#f5f5f5]",
                    )}
                    aria-pressed={index === active}
                    onClick={() => setActive(index)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
