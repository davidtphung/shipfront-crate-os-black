"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Box, Check, ChevronRight, PackageCheck, ScanLine, Sparkles, Truck } from "lucide-react";
import { Wordmark } from "@/components/cube-mark";

const steps = [
  { n: "01", title: "Connect your channels", body: "Integrate sales channels so orders can move the moment customers buy.", icon: ScanLine },
  { n: "02", title: "Send inventory in", body: "Ship inventory from your supplier to Shipfront. We receive and inventory every SKU.", icon: Box },
  { n: "03", title: "We fulfill", body: "Custom workflows pick, pack, label, and ship exactly how your business needs.", icon: PackageCheck },
  { n: "04", title: "Deliver and grow", body: "Use traditional, last-mile, and same-day delivery to reach customers quickly.", icon: Truck },
];

const capabilities = ["Inbound", "Kitting", "Storage", "FBA Prep", "Outbound", "Last-Mile Delivery", "Same-Day Delivery"];

export function Shipfront1000x() {
  return (
    <main className="sfx">
      <section className="sf-hero">
        <div className="sf-grid" aria-hidden="true" />
        <nav className="sf-nav">
          <Link href="#top" aria-label="Shipfront home"><Wordmark /></Link>
          <div className="sf-nav-links">
            <Link href="#how-it-works">How it works</Link>
            <Link href="#capabilities">Capabilities</Link>
            <Link href="#location">Location</Link>
          </div>
          <Link className="sf-button sf-button-solid" href="/get-a-quote">Get a quote <ArrowUpRight size={15} /></Link>
        </nav>

        <div id="top" className="sf-hero-content">
          <div className="sf-kicker"><span className="sf-pulse" /> WAREHOUSING + FULFILLMENT, LOS ANGELES</div>
          <h1>You sell.<br /><span>We ship.</span></h1>
          <p>Shipfront helps eCommerce merchants scale by taking care of their logistics needs, so that they can focus on growing their business.</p>
          <div className="sf-actions">
            <Link className="sf-button sf-button-solid" href="/get-a-quote">Get a quote <ArrowUpRight size={16} /></Link>
            <a className="sf-button sf-button-ghost" href="#how-it-works">See how it works <ArrowDown size={16} /></a>
          </div>
        </div>

        <div className="sf-orbit" aria-label="Shipfront order flow">
          <div className="sf-orbit-label sf-orbit-label-a">ORDER SIGNAL</div>
          <div className="sf-orbit-label sf-orbit-label-b">SHIPFRONT</div>
          <div className="sf-orbit-label sf-orbit-label-c">CUSTOMER</div>
          <div className="sf-cube-wrap"><div className="sf-cube"><span /><span /><span /></div></div>
        </div>

        <div className="sf-ticker">{capabilities.concat(capabilities).map((item, i) => <span key={`${item}-${i}`}>{item}<b>✦</b></span>)}</div>
      </section>

      <section id="how-it-works" className="sf-section sf-process">
        <div className="sf-section-head"><span>HOW DOES IT WORK?</span><h2>Fulfillment looks complicated.<br />We make it easy.</h2></div>
        <div className="sf-steps">
          {steps.map(({ n, title, body, icon: Icon }) => <article className="sf-step" key={n}>
            <div className="sf-step-top"><span>{n}</span><Icon size={22} /></div>
            <h3>{title}</h3><p>{body}</p><ChevronRight className="sf-step-arrow" size={20} />
          </article>)}
        </div>
      </section>

      <section id="capabilities" className="sf-section sf-capabilities">
        <div className="sf-cap-copy"><span>BUILT TO MOVE WITH YOU</span><h2>One partner.<br />Every order.</h2><p>From inbound inventory to the customer’s doorstep, Shipfront combines warehousing, fulfillment, ecommerce integrations, and delivery in one operational system.</p></div>
        <div className="sf-cap-stack">
          {[
            ["01", "Warehousing", "Space, security, temperature-control, and FDA compliant capabilities for the inventory that powers your business."],
            ["02", "Fulfillment", "Custom workflows to pick, pack, label, and ship your products exactly how you would like."],
            ["03", "eCommerce integrations", "Integrate with partners across the supply chain ecosystem, from eCommerce platforms to same-day delivery services."],
          ].map(([n,title,body]) => <article className="sf-cap-card" key={n}><span>{n}</span><div><h3>{title}</h3><p>{body}</p></div><ArrowUpRight size={20} /></article>)}
        </div>
      </section>

      <section id="location" className="sf-location">
        <div className="sf-location-map"><div className="sf-map-line sf-map-line-a"/><div className="sf-map-line sf-map-line-b"/><div className="sf-map-pin"><Sparkles size={16}/><span>1933 S. Broadway<br />Los Angeles, CA 90007</span></div></div>
        <div className="sf-location-copy"><span>LOCATION IS EVERYTHING</span><h2>Downtown LA.<br />Close to everywhere.</h2><p>Situated next to the 10, 110, and 101 freeways, Shipfront is perfectly positioned to inbound products efficiently and deliver them quickly.</p><p className="sf-small">Easy access to interstate freeways, courier depots, train stations, and airports.</p></div>
      </section>

      <section className="sf-cta"><div className="sf-cta-cube"><div className="sf-cube sf-cube-big"><span/><span/><span/></div></div><span>FAST & EASY QUOTES</span><h2>Ready when<br />you are.</h2><p>Please take a moment to give us some information. We have expert agents standing by to take care of your logistics needs.</p><Link className="sf-button sf-button-solid" href="/get-a-quote">Get a quote <ArrowUpRight size={16}/></Link></section>

      <footer className="sf-footer"><Wordmark /><div>1933 S. Broadway, Los Angeles CA 90007</div><a href="mailto:info@myshipfront.com">info@myshipfront.com</a><div>© 2026 Shipfront</div></footer>
    </main>
  );
}
