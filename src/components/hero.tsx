import Link from "next/link";
import { CubeMark } from "@/components/cube-mark";
import { OrderFlow } from "@/components/order-flow";
import { Button } from "@/components/ui/button";
import { H1_LINE_1, H1_LINE_2 } from "@/data/copy";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-x-clip bg-[#000000] ground-grid">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)] lg:gap-10 lg:pt-32 lg:pb-20">
        <div className="relative z-20 min-w-0">
          <CubeMark className="reveal mb-6 h-14 w-12" title="Shipfront cube" />
          <p className="reveal reveal-d1 text-[12px] font-medium tracking-[0.16em] text-[#9a9a9a] uppercase">
            Warehousing &amp; Fulfillment Solutions
          </p>
          <h1 className="relative z-20 mt-5 text-[40px] leading-[1.05] font-semibold tracking-[-0.05em] text-[#f5f5f5] sm:text-[56px] lg:text-[clamp(52px,5vw,72px)]">
            <span className="reveal reveal-d2 block lg:whitespace-nowrap">{H1_LINE_1}</span>
            <span className="reveal reveal-d3 mt-1 block lg:whitespace-nowrap">{H1_LINE_2}</span>
          </h1>
          <p className="reveal reveal-d4 mt-6 max-w-[38ch] text-[17px] leading-relaxed text-[#d4d4d4] sm:text-[18px]">
            Shipfront helps eCommerce merchants scale by taking care of their logistics
            needs, so that they can focus on growing their business.
          </p>
          <div className="reveal reveal-d4 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="min-h-11 min-w-[180px] rounded-[12px] bg-[#FF6A00] px-5 text-[15px] font-medium text-black shadow-[0_8px_24px_rgba(255,106,0,0.22)] hover:bg-[#FF6A00] hover:brightness-95"
            >
              <Link href="/get-a-quote/">
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                  <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
                </svg>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="min-h-11 rounded-[12px] border-[#222] bg-[#000000] px-5 text-[15px] text-[#f5f5f5] hover:bg-[#000000] hover:text-[#f5f5f5]"
            >
              <Link href="/contact/">Contact</Link>
            </Button>
          </div>
        </div>
        <div className="reveal relative z-0 min-w-0 lg:pt-4">
          <OrderFlow />
        </div>
      </div>
    </section>
  );
}
