import Link from "next/link";
import { Wordmark } from "@/components/cube-mark";
import { ADDRESS_LINE, EMAIL } from "@/data/copy";

const pages = [
  { href: "/", label: "Home" },
  { href: "/get-a-quote/", label: "Get a Quote" },
  { href: "/contact/", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#000000] text-[#f5f5f5]">
      <div className="h-px w-full bg-[#222]" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-[#9a9a9a]">
            {ADDRESS_LINE} | {EMAIL}
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-[12px] font-medium tracking-[0.14em] text-[#9a9a9a] uppercase">
            Pages
          </p>
          <ul className="mt-4 space-y-2">
            {pages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-[15px] text-[#e8e8e8] hover:text-[#f5f5f5]"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-[12px] font-medium tracking-[0.14em] text-[#9a9a9a] uppercase">
            Visit
          </p>
          <address className="mt-4 not-italic text-[15px] leading-relaxed text-[#e8e8e8]">
            Shipfront
            <br />
            1933 S. Broadway
            <br />
            Los Angeles, CA 90007
            <br />
            <a className="mt-3 inline-block text-[#FF6A00]" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-[#222]">
        <p className="mx-auto flex max-w-[1440px] flex-wrap gap-x-3 px-5 py-5 text-[12px] text-[#9a9a9a] sm:px-8">
          <span>Built by David T Phung</span>
          <span aria-hidden="true">|</span>
          <span>© {new Date().getFullYear()} Shipfront</span>
        </p>
      </div>
    </footer>
  );
}
