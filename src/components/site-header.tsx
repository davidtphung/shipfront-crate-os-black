"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Wordmark } from "@/components/cube-mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center bg-[#000000] px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="pointer-events-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4 rounded-[18px] border border-[#222] bg-[#000000] px-3 sm:px-5">
        <Link
          href="/"
          className="flex min-h-11 items-center rounded-[10px] px-1"
          aria-label="Shipfront home"
          onClick={() => setOpen(false)}
        >
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const current =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.replace(/\/$/, ""));
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "rounded-[10px] px-3 py-2 text-[14px] font-medium text-[#d4d4d4] transition-colors hover:text-[#f5f5f5]",
                  current && "text-[#f5f5f5]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex">
            <Button
              asChild
              className="min-h-11 rounded-[12px] bg-[#FF6A00] px-5 text-[15px] font-medium text-black shadow-[0_8px_24px_rgba(255,106,0,0.22)] hover:bg-[#FF6A00] hover:brightness-95"
            >
              <Link href="/get-a-quote/">Get a Quote</Link>
            </Button>
          </span>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[12px] border border-[#222] bg-[#000000] text-[#f5f5f5] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close Menu" : "Open Menu"}</span>
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
              {open ? (
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
              ) : (
                <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="pointer-events-auto absolute inset-x-3 top-[5.25rem] z-50 rounded-[18px] border border-[#222] bg-[#000000] p-3 sm:inset-x-4 lg:hidden"
        >
          <nav className="grid gap-1" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[10px] px-3 py-3 text-[15px] text-[#f5f5f5]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-a-quote/"
              className="rounded-[10px] bg-[#FF6A00] px-3 py-3 text-center text-[15px] font-medium text-black"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
