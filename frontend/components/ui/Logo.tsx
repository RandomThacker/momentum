import { logo } from "@/lib/design-system";

type LogoProps = {
  className?: string;
};

/** App logo: blue rounded square with a tint of yellow, lightning bolt with subtle yellow. Use in Header, Footer, dashboard. */
export function Logo({ className }: LogoProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary-light to-accent shadow-lg shadow-primary/25 transition-transform group-hover:scale-105 ring-1 ring-accent/20 ${className ?? logo.sizeDefault}`}
    >
      <svg
        className="h-[55%] w-[55%] text-white drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    </div>
  );
}
