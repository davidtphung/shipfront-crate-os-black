import { CustomerSuccess } from "@/components/customer-success";
import { Hero } from "@/components/hero";
import { NetworkExperience } from "@/components/network-experience";
import { ProcessJourney } from "@/components/process-journey";
import { QuoteCta } from "@/components/quote-cta";
import { ServiceModules } from "@/components/service-modules";
import { CAPABILITIES } from "@/data/copy";

export default function HomePage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero />
      <section aria-label="Capabilities" className="border-y border-[#222] bg-[#000000]">
        <ul className="mx-auto flex max-w-[1440px] flex-wrap gap-x-6 gap-y-2 px-5 py-5 text-[13px] font-medium tracking-[0.04em] text-[#d4d4d4] sm:px-8">
          {CAPABILITIES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <NetworkExperience />
      <ServiceModules />
      <ProcessJourney />
      <CustomerSuccess />
      <QuoteCta />
    </main>
  );
}
