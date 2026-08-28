export function CustomerSuccess() {
  return (
    <section className="bg-[#000000]" aria-labelledby="success-heading">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <h2 id="success-heading" className="sr-only">
            Customer success
          </h2>
          <p className="max-w-[18ch] text-[34px] leading-[1.12] font-semibold tracking-[-0.04em] text-[#f5f5f5] sm:text-[48px] lg:text-[56px]">
            Customer-success is our obsession, with dedicated account managers for every
            merchant and industry-leading capabilities across temperature control, same-day
            delivery, FBA prep, and much more.
          </p>
        </div>
        <div className="rounded-[20px] border border-[#222] bg-[#000000] p-6" aria-hidden="true">
          <svg viewBox="0 0 360 260" className="w-full">
            <path
              d="M70 70 C 140 70, 140 130, 180 130 C 230 130, 240 80, 300 80"
              fill="none"
              stroke="#FF6A00"
              strokeWidth="1.6"
            />
            <path
              d="M180 130 C 180 180, 240 200, 300 200"
              fill="none"
              stroke="#FF6A00"
              strokeWidth="1.6"
            />
            <circle cx="70" cy="70" r="28" fill="#000000" stroke="#FF6A00" />
            <circle cx="180" cy="130" r="34" fill="#000000" stroke="#FF6A00" />
            <circle cx="300" cy="80" r="28" fill="#000000" stroke="#FF6A00" />
            <circle cx="300" cy="200" r="16" fill="#000000" stroke="#FF6A00" />
            <text x="70" y="74" textAnchor="middle" fontSize="9" fill="#f5f5f5">
              Merchant
            </text>
            <text x="180" y="128" textAnchor="middle" fontSize="8" fill="#f5f5f5">
              Account
            </text>
            <text x="180" y="140" textAnchor="middle" fontSize="8" fill="#f5f5f5">
              manager
            </text>
            <text x="300" y="84" textAnchor="middle" fontSize="8" fill="#f5f5f5">
              Operations
            </text>
            <text x="300" y="204" textAnchor="middle" fontSize="8" fill="#f5f5f5">
              Done
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
