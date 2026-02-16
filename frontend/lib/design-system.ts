/**
 * Design System — single source of truth for UI tokens.
 * Use across landing and dashboard. Keep globals.css @theme in sync with these values.
 * App name, tagline, and marketing copy live in @/lib/brand.
 */

// =============================================================================
// COLORS (use for Tailwind: primary, accent, etc. — defined in globals.css)
// For inline styles or non-Tailwind usage, use these hex values.
// =============================================================================
export const colors = {
  primary: "#2563EB",
  primaryDark: "#1D4ED8",
  primaryLight: "#3B82F6",
  accent: "#FBBF24",
  accentLight: "#FCD34D",
  accentDark: "#F59E0B",
  yellow: "#ffcd10", // brand yellow (underline, accents)
  background: "#FFFFFF",
  backgroundAlt: "#F8FAFC",
  dark: "#0F172A",
  darkLight: "#1E293B",
  textPrimary: "#0F172A",
  textMuted: "#64748B",
  border: "#E2E8F0",
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
} as const;

// =============================================================================
// TYPOGRAPHY
// =============================================================================
export const fontFamilies = {
  sans: "Inter, system-ui, sans-serif",
  logo: "'Plus Jakarta Sans', system-ui, sans-serif",
} as const;

/** Font size scale — use with Tailwind text-* or as rem for inline */
export const fontSizes = {
  xs: "0.75rem",    // 12px
  sm: "0.875rem",  // 14px
  base: "1rem",    // 16px
  lg: "1.125rem",  // 18px
  xl: "1.25rem",   // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
} as const;

/** Tailwind class names for consistent type styles */
export const typography = {
  /** Page/section title */
  display: "text-4xl font-bold tracking-tight text-dark sm:text-5xl lg:text-6xl",
  /** Card/block title */
  heading: "text-2xl font-bold text-dark",
  /** Subheading */
  subheading: "text-xl text-text-muted",
  /** Body */
  body: "text-base text-text-muted",
  bodyLg: "text-lg text-text-muted",
  /** Small label/caption */
  caption: "text-sm text-text-muted",
  /** Badge/pill label */
  badge: "text-sm font-medium",
} as const;

// =============================================================================
// SPACING & LAYOUT
// =============================================================================
/** Section vertical padding */
export const sectionPadding = "py-24 lg:py-32";

/** Container max-width and horizontal padding */
export const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

/** Content max-width for narrow blocks (e.g. CTA) */
export const containerNarrow = "mx-auto max-w-4xl";

// =============================================================================
// BORDER RADIUS
// =============================================================================
export const radius = {
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-2xl",
  xl: "rounded-3xl",
  full: "rounded-full",
} as const;

// =============================================================================
// SHADOWS (Tailwind class names)
// =============================================================================
export const shadows = {
  sm: "shadow-sm",
  md: "shadow-lg",
  lg: "shadow-xl",
  xl: "shadow-2xl",
  primary: "shadow-lg shadow-primary/25",
  primaryHover: "shadow-xl shadow-primary/30",
} as const;

// =============================================================================
// BUTTONS
// =============================================================================
export const buttonSizes = {
  sm: "rounded-full px-6 py-2.5 text-sm font-semibold",
  md: "rounded-full px-8 py-4 text-lg font-semibold",
  lg: "rounded-full px-8 py-4 text-lg font-bold",
} as const;

export const buttonVariants = {
  primary:
    "btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105",
  primarySm:
    "btn-primary inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-light px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
  secondary:
    "inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-dark transition-all hover:border-primary/30 hover:bg-gray-50",
  ghost: "text-sm font-medium text-text-muted transition-colors hover:text-primary",
} as const;

/** Full button class combinations for common use */
export const buttons = {
  primary: `${buttonVariants.primary} ${buttonSizes.md}`,
  primarySm: buttonVariants.primarySm,
  secondary: buttonVariants.secondary,
} as const;

// =============================================================================
// LOGO
// =============================================================================
export const logo = {
  /** Default size class for the logo icon container */
  sizeDefault: "h-11 w-11",
  sizeSm: "h-9 w-9",
  sizeLg: "h-10 w-10",
  /** Tailwind classes for logo icon container (blue rounded square) */
  container: "flex items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/25 transition-transform group-hover:scale-105",
  /** Tailwind classes for app name text next to logo (value from @/lib/brand) */
  text: "font-logo text-xl font-bold tracking-tight text-dark",
  textSm: "font-logo text-lg font-bold tracking-tight",
} as const;

// =============================================================================
// CARDS
// =============================================================================
export const card = {
  base: "rounded-3xl border border-gray-100 bg-white shadow-lg",
  hover: "card-hover",
  padding: "p-8 lg:p-10",
  paddingLg: "p-8 lg:p-16",
} as const;

// =============================================================================
// BADGE / PILL
// =============================================================================
export const badge = {
  primary: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2",
  primaryText: "text-sm font-medium text-primary",
} as const;

// =============================================================================
// ANIMATION DELAYS (for staggered reveal)
// =============================================================================
export const animationDelays = {
  100: "delay-100",
  200: "delay-200",
  300: "delay-300",
  400: "delay-400",
  500: "delay-500",
} as const;
