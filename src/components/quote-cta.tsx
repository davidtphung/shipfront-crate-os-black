import { QuoteForm } from "@/components/quote-form";

export function QuoteCta() {
  return (
    <section className="relative overflow-hidden bg-[#000000] text-[#f5f5f5]">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 400"
        aria-hidden="true"
      >
        <path
          d="M0 80 L280 200 L600 160 L920 220 L1200 140"
          fill="none"
          stroke="#FF6A00"
          strokeWidth="1.2"
          opacity="0.45"
        />
        <path
          d="M0 320 L260 210 L600 160 L940 80 L1200 180"
          fill="none"
          stroke="#222222"
          strokeWidth="1.2"
          opacity="0.9"
        />
        <circle cx="600" cy="160" r="18" fill="#000000" stroke="#FF6A00" />
      </svg>
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="max-w-[12ch] text-[42px] leading-[1.02] font-semibold tracking-[-0.05em] sm:text-[64px]">
          Fast &amp; Easy Quotes
        </h2>
        <p className="mt-5 max-w-[42ch] text-[17px] leading-relaxed text-[#9a9a9a]">
          Please take a moment to give us some information. We have expert agents standing
          by to take care of your logistics needs.
        </p>
        <div className="relative mt-10">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
