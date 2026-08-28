import { cn } from "@/lib/utils";

type CubeMarkProps = {
  className?: string;
  title?: string;
};

export function CubeMark({ className, title }: CubeMarkProps) {
  return (
    <svg
      viewBox="0 0 32 36"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={cn("shrink-0", className)}
    >
      {title ? <title>{title}</title> : null}
      <g
        stroke="#FF6A00"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit={4}
      >
        <path d="M16 3.2 L28.4 10.4 L16 17.6 L3.6 10.4 Z" fill="#000000" />
        <path d="M3.6 10.4 L16 17.6 L16 32.8 L3.6 25.6 Z" fill="#000000" />
        <path d="M28.4 10.4 L16 17.6 L16 32.8 L28.4 25.6 Z" fill="#000000" />
      </g>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <CubeMark className="h-5 w-[18px]" />
      <span
        translate="no"
        className="font-grotesk text-[24px] font-bold tracking-[-0.04em] text-[#FF6A00]"
      >
        SHIPFRONT
      </span>
    </span>
  );
}
