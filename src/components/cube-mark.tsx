import { cn } from "@/lib/utils";

type CubeMarkProps = {
  className?: string;
  title?: string;
};

const CUBE_STROKE = {
  stroke: "#FF6A00",
  strokeWidth: 2.25,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  strokeMiterlimit: 4,
};

export function CubeMark({ className, title }: CubeMarkProps) {
  return (
    <svg
      viewBox="0 0 24 26"
      width={18}
      height={20}
      fill="none"
      overflow="visible"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={cn("shrink-0", className)}
    >
      {title ? <title>{title}</title> : null}
      <g {...CUBE_STROKE}>
        <path d="M7 9 L12 6 L17 9 L12 12 Z" fill="#000000" />
        <path d="M7 9 L7 16 L12 19 L17 16 L17 9" fill="#000000" />
        <path d="M12 12 L12 19" />
        <path d="M12 6 L12 13 L7 16" />
        <path d="M12 13 L17 16" />
      </g>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <CubeMark className="h-[30px] w-[27px]" />
      <span
        translate="no"
        className="font-grotesk text-[24px] font-bold tracking-[-0.04em] text-[#FF6A00]"
      >
        SHIPFRONT
      </span>
    </span>
  );
}
