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
