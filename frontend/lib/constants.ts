/** Re-exported from @/lib/brand — single source for project name and tagline. */
export { APP_NAME, TAGLINE } from "./brand";

export const LINKS = {
    getStarted: "#",
    signIn: "/signin",
};

/** Shared nav links for Header and Footer. Keep single source of truth. */
export const NAV_LINKS = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
] as const;
