import type { Metadata } from "next";
import Link from "next/link";
import { CubeMark } from "@/components/cube-mark";
import { Button } from "@/components/ui/button";
import { EMAIL } from "@/data/copy";

export const metadata: Metadata = {
  title: "Contact - Shipfront",
  description: "Visit Shipfront at 1933 S. Broadway, Los Angeles CA 90007 or email info@myshipfront.com.",
};

export default function ContactPage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none bg-[#000000]">
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 pt-32 pb-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-36 lg:pb-28">
        <div>
          <CubeMark className="mb-6 h-12 w-10" title="Shipfront cube" />
          <h1 className="max-w-[14ch] text-[42px] leading-[1.02] font-semibold tracking-[-0.05em] text-[#f5f5f5] sm:text-[64px]">
            Call or Visit Us Today
          </h1>
          <address className="mt-8 not-italic text-[18px] leading-relaxed text-[#e8e8e8]">
            Shipfront
            <br />
            1933 S. Broadway
            <br />
            Los Angeles, CA 90007
          </address>
          <p className="mt-6 text-[16px] leading-relaxed text-[#d4d4d4]">
            Monday - Friday: 9 am - 5 pm
            <br />
            Saturday - Sunday: Appointment only
          </p>
          <a className="mt-6 inline-block text-[18px] text-[#FF6A00]" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <div className="mt-8">
            <Button
              asChild
              className="min-h-11 rounded-[12px] bg-[#FF6A00] px-5 text-[15px] font-medium text-black hover:bg-[#FF6A00] hover:brightness-95"
            >
              <Link href="/get-a-quote/">Get a Quote</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-[20px] border border-[#222] bg-[#000000] p-6 sm:p-8">
          <p className="font-mono text-[11px] tracking-[0.16em] text-[#9a9a9a] uppercase">
            Location
          </p>
          <p className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-[#f5f5f5]">
            1933 S. Broadway, Los Angeles CA 90007
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-[#d4d4d4]">
            Situated in downtown L.A., next to the 10, 110, and 101 freeways. Easy access
            to interstate freeways, courier depots, train stations, and airports.
          </p>
        </div>
      </section>
    </main>
  );
}
