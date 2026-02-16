import { NAV_LINKS, LINKS } from "@/lib/constants";

/** Footer nav = main nav + Sign in. Single source with NAV_LINKS. */
export const footerNavLinks = [
    ...NAV_LINKS,
    { name: "Sign in" as const, href: LINKS.signIn },
];

export const socialLinks = [
    { name: "Twitter", href: "https://x.com" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/aryan-thacker/" },
    { name: "Email", href: "mailto:thackeraryan.dev@gmail.com" },
    { name: "GitHub", href: "https://github.com" },
] as const;
