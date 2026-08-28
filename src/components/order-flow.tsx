import { CubeMark } from "@/components/cube-mark";

export function OrderFlow() {
  return (
    <figure className="relative overflow-hidden rounded-[20px] border border-[#222] bg-[#000000]">
      <figcaption className="sr-only">
        Illustrative Shipfront order flow from storefront through inventory, picking,
        packing, and delivery. Not live customer data.
      </figcaption>
      <div className="flex items-center justify-between border-b border-[#222] px-4 py-3">
        <p className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-[#9a9a9a] uppercase">
          <CubeMark className="h-3.5 w-3" />
          Shipfront / Order Flow
        </p>
        <p className="font-mono text-[11px] text-[#9a9a9a]">Illustrative</p>
      </div>
      <div className="relative aspect-[5/4] min-h-[280px] bg-[#000000]">
        <svg
          viewBox="0 0 640 500"
          className="h-full w-full"
          role="img"
          aria-label="Abstract fulfillment path: store, inventory, pick, pack, ship, customer"
        >
          <rect width="640" height="500" fill="#000000" />
          <g opacity="0.7" stroke="#222222" strokeWidth="1">
            {Array.from({ length: 12 }, (_, i) => (
              <line key={`v-${i}`} x1={i * 56} y1="0" x2={i * 56} y2="500" />
            ))}
            {Array.from({ length: 10 }, (_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 52} x2="640" y2={i * 52} />
            ))}
          </g>
          <path
            d="M120 120 C 180 120, 210 200, 320 210 C 430 220, 470 140, 540 150"
            fill="none"
            stroke="#FF6A00"
            strokeWidth="2"
            className="flow-dash"
            pathLength="1"
          />
          <path
            d="M320 210 C 330 280, 250 320, 170 360"
            fill="none"
            stroke="#FF6A00"
            strokeWidth="2"
            opacity="0.7"
            className="flow-dash"
          />
          <path
            d="M320 210 C 360 300, 470 340, 540 380"
            fill="none"
            stroke="#FF6A00"
            strokeWidth="2"
            opacity="0.7"
            className="flow-dash"
          />
          <circle r="5" fill="#FF6A00">
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M120 120 C 180 120, 210 200, 320 210 C 430 220, 470 140, 540 150"
            />
          </circle>
          <circle r="4" fill="#FF6A00">
            <animateMotion
              dur="11s"
              begin="2s"
              repeatCount="indefinite"
              path="M320 210 C 360 300, 470 340, 540 380"
            />
          </circle>
          <g>
            <rect x="48" y="78" width="148" height="86" rx="14" fill="#000000" stroke="#222222" />
            <text x="64" y="104" fill="#9a9a9a" fontSize="10" fontFamily="ui-monospace, monospace">
              STORE
            </text>
            <text x="64" y="128" fill="#f5f5f5" fontSize="16" fontWeight="700">
              Storefront
            </text>
            <text x="64" y="148" fill="#FF6A00" fontSize="11" fontFamily="ui-monospace, monospace">
              ORDER RECEIVED
            </text>
          </g>
          <g>
            <rect x="250" y="168" width="140" height="96" rx="16" fill="#000000" stroke="#FF6A00" />
            <circle cx="320" cy="204" r="10" fill="#FF6A00" className="node-breathe" />
            <text x="270" y="232" fill="#f5f5f5" fontSize="12" fontWeight="700">
              SHIPFRONT
            </text>
            <text x="270" y="250" fill="#9a9a9a" fontSize="10" fontFamily="ui-monospace, monospace">
              INVENTORY ALLOCATED
            </text>
          </g>
          <g>
            <rect x="78" y="300" width="18" height="18" rx="4" fill="#000000" stroke="#222222" />
            <rect x="100" y="300" width="18" height="18" rx="4" fill="#000000" stroke="#222222" />
            <rect x="122" y="300" width="18" height="18" rx="4" fill="#FF6A00" />
            <rect x="78" y="322" width="18" height="18" rx="4" fill="#000000" stroke="#222222" />
            <rect x="100" y="322" width="18" height="18" rx="4" fill="#000000" stroke="#222222" />
            <rect x="122" y="322" width="18" height="18" rx="4" fill="#000000" stroke="#222222" />
            <text x="78" y="290" fill="#9a9a9a" fontSize="10" fontFamily="ui-monospace, monospace">
              INVENTORY
            </text>
          </g>
          <g>
            <rect x="230" y="330" width="150" height="70" rx="12" fill="#000000" stroke="#222222" />
            <text x="246" y="358" fill="#f5f5f5" fontSize="14" fontWeight="700">
              Pick / Pack
            </text>
            <text x="246" y="380" fill="#FF6A00" fontSize="11" fontFamily="ui-monospace, monospace">
              PICKING → PACKED
            </text>
          </g>
          <g>
            <rect x="470" y="108" width="122" height="78" rx="14" fill="#000000" stroke="#222222" />
            <text x="486" y="136" fill="#9a9a9a" fontSize="10" fontFamily="ui-monospace, monospace">
              PARCEL
            </text>
            <text x="486" y="160" fill="#f5f5f5" fontSize="13" fontWeight="700">
              IN TRANSIT
            </text>
          </g>
          <g>
            <rect x="470" y="344" width="122" height="70" rx="14" fill="#000000" stroke="#222222" />
            <circle cx="496" cy="372" r="6" fill="#FF6A00" />
            <text x="512" y="376" fill="#f5f5f5" fontSize="13" fontWeight="700">
              Customer
            </text>
            <text x="486" y="396" fill="#9a9a9a" fontSize="10" fontFamily="ui-monospace, monospace">
              DELIVERED
            </text>
          </g>
        </svg>
        <div
          className="scan-line pointer-events-none absolute inset-y-10 w-16 bg-gradient-to-r from-transparent via-[#FF6A00]/25 to-transparent"
          aria-hidden="true"
        />
      </div>
    </figure>
  );
}
