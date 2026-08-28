import { CAPABILITIES } from "@/data/copy";
import { asset } from "@/lib/paths";

export function ServiceModules() {
  return (
    <section
      className="mx-auto max-w-[1440px] bg-[#000000] px-5 py-20 sm:px-8 lg:py-28"
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading" className="sr-only">
        Warehousing, fulfillment, ecommerce integrations, and location
      </h2>
      <div className="grid items-center gap-8 overflow-hidden rounded-[20px] border border-[#222] bg-[#000000] lg:grid-cols-2">
        <div className="relative min-h-[280px] lg:min-h-[420px]">
          <img
            src={asset("/media/procurement.jpg")}
            alt="High angle pick floor of yellow bins and cartons under pallet racking"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="px-6 py-8 lg:px-10">
          <h3 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px]">
            WAREHOUSING
          </h3>
          <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-[#d4d4d4] sm:text-[17px]">
            Our warehouses provide the necessary space, security, temperature-control, and
            FDA compliant capabilities to store your products before shipping them to
            customers. Our inventory management system tracks all items across every SKU
            to know where they are located, how long they have been there, and the quantity
            on hand. We actively forecast inventory demand to keep your supply chain
            running optimally.
          </p>
        </div>
      </div>
      <div className="mt-8 rounded-[20px] border border-[#222] bg-[#000000] px-6 py-10 sm:px-10">
        <h3 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px]">
          FULFILLMENT
        </h3>
        <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-[#d4d4d4] sm:text-[17px]">
          We build custom workflows to pick, pack, label, and ship your products exactly
          how you would like. That means working with any carrier across traditional
          partners, as well as the most innovative companies in last-mile and same-day
          delivery. We get your products to your customers, quickly and accurately.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {CAPABILITIES.map((item) => (
            <li
              key={item}
              className="rounded-[14px] border border-[#222] bg-[#000000] px-3 py-4 text-center text-[13px] font-medium text-[#f5f5f5]"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 overflow-hidden rounded-[16px] border border-[#222]">
          <img
            src={asset("/media/parcels.jpg")}
            alt="Stacked kraft parcels with barcode labels, used as an abstract fulfillment visual"
            className="h-56 w-full object-cover sm:h-72"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[20px] border border-[#222] bg-[#000000] p-6 sm:p-10">
          <h3 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px]">
            ECOMMERCE INTEGRATIONS
          </h3>
          <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-[#d4d4d4] sm:text-[17px]">
            Shipfront is built on the Flowspace Warehouse Management System (WMS) - an
            innovative software solution for managing the needs of today&apos;s warehousing
            &amp; fulfillment operations. Through the WMS, Shipfront integrates with
            partners across the supply chain ecosystem - from eCommerce platforms to
            same-day delivery services.
          </p>
        </div>
        <div className="overflow-hidden rounded-[20px] border border-[#222]">
          <img
            src={asset("/media/route-nodes.jpg")}
            alt="Abstract route line connecting circular nodes on a pale surface"
            className="h-full min-h-[240px] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-8 overflow-hidden rounded-[20px] border border-[#222]">
        <img
          src={asset("/media/logistics-usa.jpg")}
          alt="A row of long hood freight tractors lined up at dusk"
          className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
          loading="lazy"
        />
      </div>
      <div className="relative mt-8 min-h-[420px] overflow-hidden rounded-[20px] border border-[#222]">
        <img
          src={asset("/media/downtown-la.jpg")}
          alt="1933 S. Broadway, Los Angeles CA 90007, with the downtown skyline beyond"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="relative flex min-h-[420px] items-end p-6 sm:p-10">
          <div className="max-w-[40rem] text-[#f5f5f5]">
            <h3 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px]">
              LOCATION IS EVERYTHING
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-[#e8e8e8] sm:text-[17px]">
              Situated in downtown L.A., next to the 10, 110, and 101 freeways - Shipfront
              is perfectly positioned to serve your eCommerce business. Not only do we
              inbound your products efficiently, we also deliver them quickly to your
              customers through our strong carrier and same-day delivery integrations.
            </p>
            <p className="mt-4 text-[14px] text-[#d4d4d4]">
              Easy access to interstate freeways, courier depots, train stations, and
              airports
            </p>
            <p className="mt-4 font-mono text-[13px] text-[#FF6A00]">
              1933 S. Broadway, Los Angeles CA 90007
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
