#!/usr/bin/env python3
"""Export self-contained CRATE OS BLACK pages for GitHub user Pages."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "static-site"
BASE = "/shipfront-crate-os-black"
MEDIA = "https://davidtphung.github.io/shipfront-crate-os/media"

CUBE_INNER = """<g stroke="#FF6A00" stroke-width="2.25" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="4">
    <path d="M7 9 L12 6 L17 9 L12 12 Z" fill="#000000"/>
    <path d="M7 9 L7 16 L12 19 L17 16 L17 9" fill="#000000"/>
    <path d="M12 12 L12 19"/>
    <path d="M12 6 L12 13 L7 16"/>
    <path d="M12 13 L17 16"/>
  </g>"""

CUBE = f"""<svg viewBox="0 0 24 26" width="27" height="30" fill="none" aria-hidden="true">
  {CUBE_INNER}
</svg>"""

CUBE_LG = f"""<svg viewBox="0 0 24 26" width="48" height="52" fill="none" role="img">
  <title>Shipfront cube</title>
  {CUBE_INNER}
</svg>"""


def header(active: str) -> str:
    home_cur = ' aria-current="page"' if active == "home" else ""
    contact_cur = ' aria-current="page"' if active == "contact" else ""
    quote_cur = ' aria-current="page"' if active == "quote" else ""
    return f"""<header>
  <div class="bar">
    <a class="brand" href="{BASE}/" aria-label="Shipfront home">
      {CUBE}
      <span class="word" translate="no">SHIPFRONT</span>
    </a>
    <nav class="primary" aria-label="Primary">
      <a href="{BASE}/"{home_cur}>Home</a>
      <a href="{BASE}/contact/"{contact_cur}>Contact</a>
    </nav>
    <a class="cta" href="{BASE}/get-a-quote/"{quote_cur}>Get a Quote</a>
  </div>
</header>"""


def footer() -> str:
    return f"""<footer>
  <div class="rule"></div>
  <div class="foot">
    <div>
      <span class="brand">{CUBE}<span class="word" translate="no">SHIPFRONT</span></span>
      <p class="foot-lede">1933 S. Broadway, Los Angeles CA 90007 | info@myshipfront.com</p>
    </div>
    <nav aria-label="Footer">
      <p class="col-title">Pages</p>
      <ul>
        <li><a href="{BASE}/">Home</a></li>
        <li><a href="{BASE}/get-a-quote/">Get a Quote</a></li>
        <li><a href="{BASE}/contact/">Contact</a></li>
      </ul>
    </nav>
    <div>
      <p class="col-title">Visit</p>
      <address>
        Shipfront<br/>1933 S. Broadway<br/>Los Angeles, CA 90007<br/>
        <a class="mail" href="mailto:info@myshipfront.com">info@myshipfront.com</a>
      </address>
    </div>
  </div>
  <div class="legal"><p>Built by David T Phung | © 2026 Shipfront</p></div>
</footer>"""


def shell(title: str, description: str, body: str, active: str) -> str:
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>{title}</title>
<meta name="description" content="{description}"/>
<meta name="theme-color" content="#000000"/>
<link rel="icon" href="{BASE}/icon.svg" type="image/svg+xml"/>
<!-- mark: kunal-1a-even -->
<link rel="stylesheet" href="{BASE}/site.css"/>
</head>
<body>
{header(active)}
{body}
{footer()}
<script src="{BASE}/site.js"></script>
</body>
</html>
"""


CSS = r"""
:root {
  --bg: #000000;
  --ink: #f5f5f5;
  --soft: #d4d4d4;
  --muted: #9a9a9a;
  --line: #222222;
  --orange: #FF6A00;
}
* { box-sizing: border-box; }
html, body {
  margin: 0;
  min-height: 100%;
  background: #000000;
  color: var(--ink);
  font-family: ui-sans-serif, system-ui, sans-serif;
  color-scheme: dark;
}
a { color: inherit; text-decoration: none; }
header {
  position: fixed; inset: 0 0 auto 0; z-index: 40;
  display: flex; justify-content: center;
  background: #000000; padding: 12px 12px 0;
}
.bar {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  width: 100%; max-width: 1440px; height: 64px;
  border: 1px solid #222; background: #000000; border-radius: 18px; padding: 0 12px 0 16px;
}
.brand { display: inline-flex; align-items: center; gap: 10px; }
.word { font-weight: 700; letter-spacing: -0.04em; font-size: 24px; color: #FF6A00; }
.primary { display: flex; align-items: center; gap: 4px; }
.primary a { border-radius: 10px; padding: 8px 12px; font-size: 14px; font-weight: 500; color: #d4d4d4; }
.primary a[aria-current="page"], .primary a:hover { color: #f5f5f5; }
.cta {
  display: inline-flex; min-height: 44px; align-items: center; justify-content: center;
  border-radius: 12px; background: #FF6A00; color: #000; padding: 0 20px; font-size: 15px; font-weight: 500;
}
.btn {
  display: inline-flex; min-height: 44px; min-width: 180px; align-items: center; justify-content: center; gap: 8px;
  border-radius: 12px; background: #FF6A00; color: #000; padding: 0 20px; font-size: 15px; font-weight: 500;
}
.btn-ghost {
  display: inline-flex; min-height: 44px; align-items: center; justify-content: center;
  border-radius: 12px; border: 1px solid #222; background: #000; color: #f5f5f5; padding: 0 20px; font-size: 15px;
}
.wrap { max-width: 1440px; margin: 0 auto; padding: 0 20px; }
.band { background: #000000; }
.hero { position: relative; min-height: 100dvh; overflow-x: clip; padding: 112px 0 64px; }
.ground-grid {
  background-image: linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px);
  background-size: 56px 56px;
}
.hero-grid { display: grid; gap: 40px; align-items: center; }
@media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.28fr 0.72fr; } }
.kicker { font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #9a9a9a; font-weight: 500; }
h1 { margin: 20px 0 0; font-size: clamp(40px, 5vw, 72px); line-height: 1.05; letter-spacing: -0.05em; font-weight: 600; }
h1 span { display: block; }
.lede { margin-top: 24px; max-width: 38ch; color: #d4d4d4; font-size: 18px; line-height: 1.6; }
.row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
.caps { border-top: 1px solid #222; border-bottom: 1px solid #222; }
.caps ul {
  list-style: none; margin: 0 auto; padding: 20px; max-width: 1440px;
  display: flex; flex-wrap: wrap; gap: 8px 24px; font-size: 13px; font-weight: 500; letter-spacing: 0.04em; color: #d4d4d4;
}
.section { padding: 80px 0; }
@media (min-width: 1024px) { .section { padding: 112px 0; } }
.mono { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.16em; text-transform: uppercase; font-size: 11px; color: #9a9a9a; }
.orange { color: #FF6A00; }
h2 { margin: 16px 0 0; font-size: clamp(34px, 4vw, 52px); line-height: 1.05; letter-spacing: -0.04em; font-weight: 600; }
h3 { margin: 0; font-size: clamp(28px, 3vw, 36px); letter-spacing: -0.03em; font-weight: 600; }
.card { border: 1px solid #222; background: #000; border-radius: 20px; }
.split { display: grid; gap: 40px; }
@media (min-width: 1024px) {
  .split-net { grid-template-columns: 0.9fr 1.1fr; }
  .split-svc { grid-template-columns: 1fr 1fr; }
  .split-int { grid-template-columns: 1.1fr 0.9fr; }
  .split-proc { grid-template-columns: 1fr 1fr; align-items: center; }
  .split-ok { grid-template-columns: 1.15fr 0.85fr; align-items: center; }
  .sticky-net { min-height: 160vh; }
  .sticky-inner { position: sticky; top: 0; min-height: 100dvh; display: flex; align-items: center; }
}
.net-copy { border: 1px solid #222; border-radius: 16px; padding: 20px; margin-top: 32px; }
.pills { display: flex; flex-wrap: wrap; gap: 8px; padding: 16px; }
.pill {
  min-height: 44px; border: 1px solid #222; background: #000; color: #9a9a9a;
  border-radius: 12px; padding: 0 12px; font-size: 12px; font-weight: 500; cursor: pointer;
}
.pill[aria-pressed="true"] { border-color: #FF6A00; color: #f5f5f5; }
.flow {
  border: 1px solid #222; border-radius: 20px; overflow: hidden; background: #000;
}
.flow-bar {
  display: flex; justify-content: space-between; align-items: center;
  border-bottom: 1px solid #222; padding: 12px 16px; color: #9a9a9a;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
}
.flow svg { display: block; width: 100%; height: auto; }
.still { position: relative; min-height: 280px; overflow: hidden; }
@media (min-width: 1024px) { .still { min-height: 420px; } }
.still img, .cover { width: 100%; height: 100%; object-fit: cover; display: block; }
.pad { padding: 32px 40px; }
.pills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 32px; }
@media (min-width: 640px) { .pills-grid { grid-template-columns: repeat(4, 1fr); } }
@media (min-width: 1024px) { .pills-grid { grid-template-columns: repeat(7, 1fr); } }
.cap {
  border: 1px solid #222; border-radius: 14px; padding: 16px 12px; text-align: center;
  font-size: 13px; font-weight: 500;
}
.stack { display: grid; gap: 32px; }
.loc { position: relative; min-height: 420px; overflow: hidden; border-radius: 20px; border: 1px solid #222; }
.loc img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.loc-veil { position: absolute; inset: 0; background: linear-gradient(to top, #000, rgba(0,0,0,.4), rgba(0,0,0,.1)); }
.loc-copy { position: relative; min-height: 420px; display: flex; align-items: flex-end; padding: 40px; }
.steps { list-style: none; margin: 32px 0 0; padding: 0; }
.steps button {
  width: 100%; min-height: 44px; display: flex; align-items: center; gap: 16px;
  border: 0; background: transparent; color: #d4d4d4; text-align: left;
  border-radius: 14px; padding: 12px; font: inherit; cursor: pointer;
}
.steps button[aria-current="step"] { color: #f5f5f5; box-shadow: inset 0 0 0 1px #222; }
.num { font-family: ui-monospace, Menlo, monospace; font-size: 12px; color: #9a9a9a; }
.quote { position: relative; overflow: hidden; }
.quote-inner { position: relative; padding: 80px 20px; max-width: 1440px; margin: 0 auto; }
@media (min-width: 1024px) { .quote-inner { padding: 112px 32px; } }
footer { background: #000; }
.rule { height: 1px; background: #222; }
.foot { max-width: 1440px; margin: 0 auto; display: grid; gap: 40px; padding: 64px 20px; }
@media (min-width: 1024px) { .foot { grid-template-columns: 1.2fr 1fr 1fr; } }
.foot-lede { margin-top: 16px; max-width: 24rem; color: #9a9a9a; font-size: 14px; line-height: 1.6; }
.col-title { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #9a9a9a; }
.foot ul { list-style: none; margin: 16px 0 0; padding: 0; }
.foot li { margin: 8px 0; }
address { font-style: normal; margin-top: 16px; line-height: 1.6; }
.mail { display: inline-block; margin-top: 12px; color: #FF6A00; }
.legal { border-top: 1px solid #222; }
.legal p { max-width: 1440px; margin: 0 auto; padding: 20px; color: #9a9a9a; font-size: 12px; }
.page { padding: 128px 20px 80px; max-width: 1440px; margin: 0 auto; }
form.card { padding: 32px; }
.field { display: grid; gap: 8px; margin-bottom: 20px; }
label { font-size: 14px; white-space: nowrap; }
input, textarea {
  width: 100%; min-height: 44px; border: 1px solid #222; background: #000; color: #f5f5f5;
  border-radius: 10px; padding: 10px 12px; font: inherit;
}
textarea { min-height: 112px; }
input:focus, textarea:focus { outline: none; border-color: #FF6A00; }
.err { display: none; margin: -12px 0 16px; color: #FF6A00; font-size: 13px; }
button.submit {
  width: 100%; min-height: 44px; border: 0; border-radius: 12px;
  background: #FF6A00; color: #000; font-size: 15px; font-weight: 500; cursor: pointer;
}
.req-line { margin: 0 0 20px; color: #9a9a9a; font-size: 13px; }
.quote-form { position: relative; max-width: 36rem; margin-top: 40px; }
.flow-dash { stroke-dasharray: 5 9; animation: flow 16s linear infinite; }
.node-breathe { animation: breathe 5.5s ease-in-out infinite; }
@keyframes flow { to { stroke-dashoffset: -220; } }
@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.55; }
  50% { transform: scale(1.04); opacity: 1; }
}
@media (max-width: 640px) { .primary { display: none; } }
@media (prefers-reduced-motion: reduce) {
  .flow-dash, .node-breathe { animation: none !important; }
}
"""

JS = r"""
(function () {
  var steps = [
    { label: "STORE", body: "Integrate sales channels", live: "ORDER SIGNAL RECEIVED" },
    { label: "INVENTORY", body: "Shipfront receives and inventories.", live: "INVENTORY" },
    { label: "FULFILLMENT", body: "We build custom workflows to pick, pack, label, and ship your products exactly how you would like.", live: "FULFILLMENT" },
    { label: "QUALITY CHECK", body: "We get your products to your customers, quickly and accurately.", live: "QUALITY CHECK" },
    { label: "CARRIER", body: "Working with any carrier across traditional partners, as well as the most innovative companies in last-mile and same-day delivery.", live: "CARRIER" },
    { label: "CUSTOMER", body: "Happy Customers!", live: "CUSTOMER" }
  ];
  var process = [
    "Find a cool product",
    "Get it manufactured",
    "Ship inventory from supplier to Shipfront",
    "Shipfront receives and inventories",
    "Integrate sales channels",
    "We ship",
    "Happy Customers!"
  ];

  function setNet(i) {
    var live = document.getElementById("net-live");
    var label = document.getElementById("net-label");
    var body = document.getElementById("net-body");
    if (!live) return;
    var step = steps[i];
    live.textContent = step.live;
    label.textContent = step.label;
    body.textContent = step.body;
    document.querySelectorAll("[data-net]").forEach(function (el) {
      el.setAttribute("aria-pressed", el.getAttribute("data-net") === String(i) ? "true" : "false");
    });
    var route = document.getElementById("net-route");
    if (route) {
      var p = (i + 1) / steps.length;
      route.setAttribute("stroke-dasharray", p + " " + (1 - p));
    }
  }

  document.querySelectorAll("[data-net]").forEach(function (el) {
    el.addEventListener("click", function () {
      setNet(Number(el.getAttribute("data-net")));
    });
  });

  var net = document.getElementById("network");
  if (net) {
    window.addEventListener("scroll", function () {
      var rect = net.getBoundingClientRect();
      var total = net.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      var scrolled = Math.min(Math.max(-rect.top, 0), total);
      setNet(Math.min(steps.length - 1, Math.floor((scrolled / total) * steps.length)));
    }, { passive: true });
  }

  function setProcess(i) {
    var title = document.getElementById("process-active");
    if (!title) return;
    title.textContent = process[i];
    document.querySelectorAll("[data-process]").forEach(function (el) {
      var on = el.getAttribute("data-process") === String(i);
      if (on) el.setAttribute("aria-current", "step");
      else el.removeAttribute("aria-current");
    });
    document.querySelectorAll("[data-dot]").forEach(function (el) {
      var on = el.getAttribute("data-dot") === String(i);
      el.setAttribute("r", on ? "14" : "8");
      el.setAttribute("fill", on ? "#FF6A00" : "#000000");
    });
  }
  document.querySelectorAll("[data-process]").forEach(function (el) {
    el.addEventListener("click", function () {
      setProcess(Number(el.getAttribute("data-process")));
    });
  });

  var form = document.getElementById("quote-form");
  if (form) {
    function show(id, on) { document.getElementById(id).style.display = on ? "block" : "none"; }
    function val(id) { return document.getElementById(id).value.trim(); }
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = val("name");
      var email = val("email");
      var phone = val("phone");
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      show("name-error", !name);
      show("email-error", !email || !emailOk);
      show("phone-error", !phone);
    });
  }
})();
"""


def order_flow() -> str:
    return """<figure class="flow">
  <div class="flow-bar"><span>Shipfront / Order Flow</span><span>Illustrative</span></div>
  <svg viewBox="0 0 640 500" role="img" aria-label="Abstract fulfillment path: store, inventory, pick, pack, ship, customer">
    <rect width="640" height="500" fill="#000000"/>
    <g opacity="0.7" stroke="#222222" stroke-width="1">
      <line x1="0" y1="0" x2="0" y2="500"/><line x1="56" y1="0" x2="56" y2="500"/><line x1="112" y1="0" x2="112" y2="500"/>
      <line x1="168" y1="0" x2="168" y2="500"/><line x1="224" y1="0" x2="224" y2="500"/><line x1="280" y1="0" x2="280" y2="500"/>
      <line x1="336" y1="0" x2="336" y2="500"/><line x1="392" y1="0" x2="392" y2="500"/><line x1="448" y1="0" x2="448" y2="500"/>
      <line x1="504" y1="0" x2="504" y2="500"/><line x1="560" y1="0" x2="560" y2="500"/><line x1="616" y1="0" x2="616" y2="500"/>
    </g>
    <path class="flow-dash" d="M120 120 C 180 120, 210 200, 320 210 C 430 220, 470 140, 540 150" fill="none" stroke="#FF6A00" stroke-width="2" pathLength="1"/>
    <path class="flow-dash" d="M320 210 C 330 280, 250 320, 170 360" fill="none" stroke="#FF6A00" stroke-width="2" opacity="0.7"/>
    <path class="flow-dash" d="M320 210 C 360 300, 470 340, 540 380" fill="none" stroke="#FF6A00" stroke-width="2" opacity="0.7"/>
    <circle r="5" fill="#FF6A00"><animateMotion dur="8s" repeatCount="indefinite" path="M120 120 C 180 120, 210 200, 320 210 C 430 220, 470 140, 540 150"/></circle>
    <rect x="48" y="78" width="148" height="86" rx="14" fill="#000000" stroke="#222222"/>
    <text x="64" y="104" fill="#9a9a9a" font-size="10" font-family="ui-monospace, monospace">STORE</text>
    <text x="64" y="128" fill="#f5f5f5" font-size="16" font-weight="700">Storefront</text>
    <text x="64" y="148" fill="#FF6A00" font-size="11" font-family="ui-monospace, monospace">ORDER RECEIVED</text>
    <rect x="250" y="168" width="140" height="96" rx="16" fill="#000000" stroke="#FF6A00"/>
    <circle class="node-breathe" cx="320" cy="204" r="10" fill="#FF6A00"/>
    <text x="270" y="232" fill="#f5f5f5" font-size="12" font-weight="700">SHIPFRONT</text>
    <text x="270" y="250" fill="#9a9a9a" font-size="10" font-family="ui-monospace, monospace">INVENTORY ALLOCATED</text>
    <text x="78" y="290" fill="#9a9a9a" font-size="10" font-family="ui-monospace, monospace">INVENTORY</text>
    <rect x="78" y="300" width="18" height="18" rx="4" fill="#000000" stroke="#222"/>
    <rect x="100" y="300" width="18" height="18" rx="4" fill="#000000" stroke="#222"/>
    <rect x="122" y="300" width="18" height="18" rx="4" fill="#FF6A00"/>
    <rect x="230" y="330" width="150" height="70" rx="12" fill="#000000" stroke="#222"/>
    <text x="246" y="358" fill="#f5f5f5" font-size="14" font-weight="700">Pick / Pack</text>
    <text x="246" y="380" fill="#FF6A00" font-size="11" font-family="ui-monospace, monospace">PICKING → PACKED</text>
    <rect x="470" y="108" width="122" height="78" rx="14" fill="#000000" stroke="#222"/>
    <text x="486" y="136" fill="#9a9a9a" font-size="10" font-family="ui-monospace, monospace">PARCEL</text>
    <text x="486" y="160" fill="#f5f5f5" font-size="13" font-weight="700">IN TRANSIT</text>
    <rect x="470" y="344" width="122" height="70" rx="14" fill="#000000" stroke="#222"/>
    <text x="512" y="376" fill="#f5f5f5" font-size="13" font-weight="700">Customer</text>
    <text x="486" y="396" fill="#9a9a9a" font-size="10" font-family="ui-monospace, monospace">DELIVERED</text>
  </svg>
</figure>"""


def home() -> str:
    caps = ["Inbound", "Kitting", "Storage", "FBA Prep", "Outbound", "Last-Mile Delivery", "Same-Day Delivery"]
    net = [
        ("STORE", "Integrate sales channels"),
        ("INVENTORY", "Shipfront receives and inventories."),
        ("FULFILLMENT", "We build custom workflows to pick, pack, label, and ship your products exactly how you would like."),
        ("QUALITY CHECK", "We get your products to your customers, quickly and accurately."),
        ("CARRIER", "Working with any carrier across traditional partners, as well as the most innovative companies in last-mile and same-day delivery."),
        ("CUSTOMER", "Happy Customers!"),
    ]
    process = [
        "Find a cool product",
        "Get it manufactured",
        "Ship inventory from supplier to Shipfront",
        "Shipfront receives and inventories",
        "Integrate sales channels",
        "We ship",
        "Happy Customers!",
    ]
    pills = "".join(
        f'<button class="pill" type="button" data-net="{i}" aria-pressed="{"true" if i == 0 else "false"}">{label}</button>'
        for i, (label, _) in enumerate(net)
    )
    steps = "".join(
        (
            f'<li><button type="button" data-process="{i}"'
            + (' aria-current="step"' if i == 0 else "")
            + f'><span class="num">{i+1:02d}</span><span>{label}</span></button></li>'
        )
        for i, label in enumerate(process)
    )
    dots = "".join(
        f'<circle data-dot="{i}" cx="{30 + i * 58}" cy="90" r="{"14" if i == 0 else "8"}" fill="{"#FF6A00" if i == 0 else "#000000"}" stroke="#FF6A00" stroke-width="1.5"/>'
        + ("" if i == 6 else f'<line x1="{30 + i * 58 + 8}" y1="90" x2="{30 + (i + 1) * 58 - 8}" y2="90" stroke="#222" stroke-width="2"/>')
        for i in range(7)
    )
    cap_cells = "".join(f'<li class="cap">{c}</li>' for c in caps)
    return f"""<main>
<section class="hero ground-grid band">
  <div class="wrap hero-grid">
    <div>
      {CUBE_LG}
      <p class="kicker">Warehousing &amp; Fulfillment Solutions</p>
      <h1><span>You Sell. We Ship.</span><span>eCommerce at Scale</span></h1>
      <p class="lede">Shipfront helps eCommerce merchants scale by taking care of their logistics needs, so that they can focus on growing their business.</p>
      <div class="row">
        <a class="btn" href="{BASE}/get-a-quote/">Get a Quote</a>
        <a class="btn-ghost" href="{BASE}/contact/">Contact</a>
      </div>
    </div>
    {order_flow()}
  </div>
</section>
<section class="caps" aria-label="Capabilities">
  <ul>{"".join(f"<li>{c}</li>" for c in caps)}</ul>
</section>
<section class="band sticky-net" id="network" aria-labelledby="network-heading">
  <div class="sticky-inner">
    <div class="wrap split split-net">
      <div>
        <p class="mono orange">SHIPFRONT NETWORK</p>
        <h2 id="network-heading">How Shipfront moves with you</h2>
        <p class="mono" style="margin-top:16px">ILLUSTRATIVE WORKFLOW</p>
        <p class="mono orange" style="margin-top:24px;letter-spacing:0" id="net-live">ORDER SIGNAL RECEIVED</p>
        <div class="net-copy">
          <p class="mono" id="net-label">STORE</p>
          <p id="net-body" style="margin:8px 0 0;font-size:16px;line-height:1.6">Integrate sales channels</p>
        </div>
      </div>
      <div class="card">
        <svg viewBox="0 0 640 520" class="flow" role="img" aria-label="Illustrative Shipfront network connecting store, inventory, fulfillment, quality check, carrier, and customer">
          <rect width="640" height="520" fill="#000000"/>
          <path id="net-route" d="M90 120 L230 160 L320 250 L430 180 L540 230 L540 380" fill="none" stroke="#FF6A00" stroke-width="1.6" stroke-linecap="round" pathLength="1" stroke-dasharray="0.17 0.83"/>
          <path d="M230 160 L230 300 L320 250 L430 340 L540 380" fill="none" stroke="#FF6A00" stroke-width="1.2" opacity="0.7"/>
          <g fill="#000" stroke="#FF6A00" stroke-width="1.4">
            <circle cx="90" cy="120" r="18"/><circle cx="230" cy="160" r="18"/><circle cx="320" cy="250" r="18"/>
            <circle cx="430" cy="180" r="18"/><circle cx="430" cy="340" r="18"/><circle cx="540" cy="380" r="18"/>
          </g>
          <g fill="#9a9a9a" font-size="10" font-family="ui-monospace, monospace" text-anchor="middle">
            <text x="90" y="156">STORE</text><text x="230" y="196">INVENTORY</text><text x="320" y="286">FULFILLMENT</text>
            <text x="430" y="216">QUALITY CHECK</text><text x="430" y="376">CARRIER</text><text x="540" y="416">CUSTOMER</text>
          </g>
        </svg>
        <div class="pills">{pills}</div>
      </div>
    </div>
  </div>
</section>
<section class="band section" aria-labelledby="services-heading">
  <div class="wrap stack">
    <h2 id="services-heading" class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden">Warehousing, fulfillment, ecommerce integrations, and location</h2>
    <div class="card split split-svc" style="overflow:hidden">
      <div class="still"><img src="{MEDIA}/procurement.jpg" alt="High angle pick floor of yellow bins and cartons under pallet racking" loading="lazy"/></div>
      <div class="pad">
        <h3>WAREHOUSING</h3>
        <p class="lede" style="max-width:54ch">Our warehouses provide the necessary space, security, temperature-control, and FDA compliant capabilities to store your products before shipping them to customers. Our inventory management system tracks all items across every SKU to know where they are located, how long they have been there, and the quantity on hand. We actively forecast inventory demand to keep your supply chain running optimally.</p>
      </div>
    </div>
    <div class="card pad">
      <h3>FULFILLMENT</h3>
      <p class="lede" style="max-width:62ch">We build custom workflows to pick, pack, label, and ship your products exactly how you would like. That means working with any carrier across traditional partners, as well as the most innovative companies in last-mile and same-day delivery. We get your products to your customers, quickly and accurately.</p>
      <ul class="pills-grid">{cap_cells}</ul>
      <div class="card" style="margin-top:32px;overflow:hidden"><img class="cover" src="{MEDIA}/parcels.jpg" alt="Stacked kraft parcels" style="height:288px" loading="lazy"/></div>
    </div>
    <div class="split split-int">
      <div class="card pad">
        <h3>ECOMMERCE INTEGRATIONS</h3>
        <p class="lede" style="max-width:54ch">Shipfront is built on the Flowspace Warehouse Management System (WMS) - an innovative software solution for managing the needs of today's warehousing &amp; fulfillment operations. Through the WMS, Shipfront integrates with partners across the supply chain ecosystem - from eCommerce platforms to same-day delivery services.</p>
      </div>
      <div class="card" style="overflow:hidden">
        <svg viewBox="0 0 360 280" role="img" aria-label="Route nodes connecting sales channels" style="width:100%;min-height:240px">
          <rect width="360" height="280" fill="#000000"/>
          <line x1="48" y1="220" x2="312" y2="60" stroke="#FF6A00" stroke-width="2"/>
          <path d="M90 196 C 150 120, 210 90, 270 84" fill="none" stroke="#FF6A00" stroke-width="2"/>
          <path d="M90 196 C 160 210, 230 140, 270 84" fill="none" stroke="#FF6A00" stroke-width="2"/>
          <circle cx="90" cy="196" r="10" fill="#000000" stroke="#FF6A00" stroke-width="2"/>
          <circle cx="270" cy="84" r="10" fill="#000000" stroke="#FF6A00" stroke-width="2"/>
          <circle cx="186" cy="168" r="36" fill="#000000" stroke="#FF6A00" stroke-width="2"/>
        </svg>
      </div>
    </div>
    <div class="card" style="overflow:hidden"><img class="cover" src="{MEDIA}/logistics-usa.jpg" alt="Freight tractors lined up at dusk" style="height:420px" loading="lazy"/></div>
    <div class="loc">
      <img src="{MEDIA}/downtown-la.jpg" alt="1933 S. Broadway, Los Angeles CA 90007" loading="lazy"/>
      <div class="loc-veil"></div>
      <div class="loc-copy">
        <div>
          <h3>LOCATION IS EVERYTHING</h3>
          <p class="lede">Situated in downtown L.A., next to the 10, 110, and 101 freeways - Shipfront is perfectly positioned to serve your eCommerce business. Not only do we inbound your products efficiently, we also deliver them quickly to your customers through our strong carrier and same-day delivery integrations.</p>
          <p style="color:#d4d4d4;font-size:14px">Easy access to interstate freeways, courier depots, train stations, and airports</p>
          <p class="mono orange" style="margin-top:16px;letter-spacing:0">1933 S. Broadway, Los Angeles CA 90007</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="band section" aria-labelledby="process-heading" id="process">
  <div class="wrap split split-proc">
    <div>
      <h2 id="process-heading">Fulfillment looks and feels complicated, but Shipfront will make it easy!</h2>
      <ol class="steps">{steps}</ol>
    </div>
    <div class="card pad">
      <p class="mono">Connect, Store, Fulfill, Deliver, Grow</p>
      <p id="process-active" style="margin-top:24px;font-size:clamp(28px,3vw,36px);font-weight:600;letter-spacing:-0.03em">Find a cool product</p>
      <svg viewBox="0 0 420 180" style="width:100%;margin-top:32px" aria-hidden="true">{dots}</svg>
    </div>
  </div>
</section>
<section class="band section" aria-labelledby="success-heading">
  <div class="wrap split split-ok">
    <div>
      <h2 id="success-heading" style="position:absolute;width:1px;height:1px;overflow:hidden">Customer success</h2>
      <p style="max-width:18ch;margin:0;font-size:clamp(34px,4vw,56px);line-height:1.12;letter-spacing:-0.04em;font-weight:600">Customer-success is our obsession, with dedicated account managers for every merchant and industry-leading capabilities across temperature control, same-day delivery, FBA prep, and much more.</p>
    </div>
    <div class="card pad" aria-hidden="true">
      <svg viewBox="0 0 360 260" style="width:100%">
        <path d="M70 70 C 140 70, 140 130, 180 130 C 230 130, 240 80, 300 80" fill="none" stroke="#FF6A00" stroke-width="1.6"/>
        <path d="M180 130 C 180 180, 240 200, 300 200" fill="none" stroke="#FF6A00" stroke-width="1.6"/>
        <circle cx="70" cy="70" r="28" fill="#000" stroke="#FF6A00"/>
        <circle cx="180" cy="130" r="34" fill="#000" stroke="#FF6A00"/>
        <circle cx="300" cy="80" r="28" fill="#000" stroke="#FF6A00"/>
        <circle cx="300" cy="200" r="16" fill="#000" stroke="#FF6A00"/>
        <text x="70" y="74" text-anchor="middle" font-size="9" fill="#f5f5f5">Merchant</text>
        <text x="180" y="134" text-anchor="middle" font-size="8" fill="#f5f5f5">Account manager</text>
        <text x="300" y="84" text-anchor="middle" font-size="8" fill="#f5f5f5">Operations</text>
        <text x="300" y="204" text-anchor="middle" font-size="8" fill="#f5f5f5">Done</text>
      </svg>
    </div>
  </div>
</section>
<section class="quote band">
  <svg viewBox="0 0 1200 400" style="position:absolute;inset:0;width:100%;height:100%" aria-hidden="true">
    <path d="M0 80 L280 200 L600 160 L920 220 L1200 140" fill="none" stroke="#FF6A00" stroke-width="1.2" opacity="0.45"/>
    <path d="M0 320 L260 210 L600 160 L940 80 L1200 180" fill="none" stroke="#222" stroke-width="1.2"/>
    <circle cx="600" cy="160" r="18" fill="#000" stroke="#FF6A00"/>
  </svg>
  <div class="quote-inner">
    <h2>Fast &amp; Easy Quotes</h2>
    <p class="lede">Please take a moment to give us some information. We have expert agents standing by to take care of your logistics needs.</p>
    {quote_form()}
  </div>
</section>
</main>"""


def quote_form() -> str:
    return """<form class="card quote-form" id="quote-form" novalidate>
      <div class="field">
        <label for="name">Name *</label>
        <input id="name" name="name" autocomplete="name" required/>
      </div>
      <p class="err" id="name-error">Name is required.</p>
      <div class="field">
        <label for="email">Email *</label>
        <input id="email" name="email" type="email" autocomplete="email" required/>
      </div>
      <p class="err" id="email-error">Enter a valid email.</p>
      <div class="field">
        <label for="phone">Phone *</label>
        <input id="phone" name="phone" type="tel" autocomplete="tel" required/>
      </div>
      <p class="err" id="phone-error">Phone is required.</p>
      <p class="req-line">Required: Name, Email, Phone.</p>
      <button class="submit" type="submit">Submit</button>
    </form>"""


def quote() -> str:
    return f"""<main class="page">
  {CUBE_LG}
  <h1>Fast &amp; Easy Quotes</h1>
  <p class="lede">Please take a moment to give us some information. We have expert agents standing by to take care of your logistics needs.</p>
  {quote_form()}
</main>"""


def contact() -> str:
    return f"""<main class="page">
  <div class="split split-proc">
    <div>
      {CUBE_LG}
      <h1>Call or Visit Us Today</h1>
      <address>
        Shipfront<br/>1933 S. Broadway<br/>Los Angeles, CA 90007
      </address>
      <p class="lede">Monday - Friday: 9 am - 5 pm<br/>Saturday - Sunday: Appointment only</p>
      <a class="mail" href="mailto:info@myshipfront.com">info@myshipfront.com</a>
      <div class="row"><a class="btn" href="{BASE}/get-a-quote/">Get a Quote</a></div>
    </div>
    <div class="card pad">
      <p class="mono">Location</p>
      <p style="margin-top:16px;font-size:28px;font-weight:600;letter-spacing:-0.03em">1933 S. Broadway, Los Angeles CA 90007</p>
      <p class="lede">Situated in downtown L.A., next to the 10, 110, and 101 freeways. Easy access to interstate freeways, courier depots, train stations, and airports.</p>
    </div>
  </div>
</main>"""


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "get-a-quote").mkdir(exist_ok=True)
    (OUT / "contact").mkdir(exist_ok=True)
    (OUT / "site.css").write_text(CSS)
    (OUT / "site.js").write_text(JS)
    for name in ("icon.svg", "og.svg", "apple-touch-icon.svg"):
        (OUT / name).write_text((ROOT / "public" / name).read_text())
    (OUT / "index.html").write_text(
        shell(
            "Shipfront",
            "Shipfront helps eCommerce merchants scale by taking care of their logistics needs, so that they can focus on growing their business.",
            home(),
            "home",
        )
    )
    (OUT / "get-a-quote" / "index.html").write_text(
        shell(
            "Get a Quote - Shipfront",
            "Please take a moment to give us some information. We have expert agents standing by to take care of your logistics needs.",
            quote(),
            "quote",
        )
    )
    (OUT / "contact" / "index.html").write_text(
        shell(
            "Contact - Shipfront",
            "Visit Shipfront at 1933 S. Broadway, Los Angeles CA 90007 or email info@myshipfront.com.",
            contact(),
            "contact",
        )
    )
    print("wrote", OUT)


if __name__ == "__main__":
    main()
