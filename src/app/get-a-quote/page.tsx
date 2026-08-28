import type { Metadata } from "next";
import { CubeMark } from "@/components/cube-mark";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Get a Quote - Shipfront",
  description:
    "Please take a moment to give us some information. We have expert agents standing by to take care of your logistics needs.",
};

export default function GetAQuotePage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none bg-[#000000]">
      <section className="mx-auto max-w-[1440px] px-5 pt-32 pb-20 sm:px-8 lg:pt-36 lg:pb-28">
        <CubeMark className="mb-6 h-12 w-10" title="Shipfront cube" />
        <h1 className="max-w-[12ch] text-[42px] leading-[1.02] font-semibold tracking-[-0.05em] text-[#f5f5f5] sm:text-[64px]">
          Fast &amp; Easy Quotes
        </h1>
        <p className="mt-5 max-w-[42ch] text-[17px] leading-relaxed text-[#9a9a9a]">
          Please take a moment to give us some information. We have expert agents standing
          by to take care of your logistics needs.
        </p>
        <div className="mt-10">
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
