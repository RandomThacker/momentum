import { logo, colors } from "@/lib/design-system";

type LogoProps = {
  className?: string;
};

/** App logo: blue-to-yellow gradient (ffcd10), white-outlined lightning bolt. Use in Header, Footer, dashboard. */
export function Logo({ className }: LogoProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl shadow-lg shadow-primary/25 transition-transform group-hover:scale-105 ${className ?? logo.sizeDefault}`}
      style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 38%, ${colors.primaryLight} 50%, ${colors.yellow} 100%)`,
      }}
    >
      <svg
        className="h-[55%] w-[55%] text-white"
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
