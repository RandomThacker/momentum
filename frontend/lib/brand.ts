/**
 * Global brand: project name, tagline, and all marketing copy.
 * Change the project name or tagline here; it will update everywhere (header, footer, meta, hero, etc.).
 * Logo mark and styles: use @/components/ui/Logo and the `logo` tokens from @/lib/design-system.
 */

export const APP_NAME = "PostOrbit";
export const TAGLINE = "Your content, on autopilot.";

/** Short line under the hero headline. */
export const HERO_SUPPORT_LINE =
  "Consistency compounds. Stop stressing about what to post and when. Schedule calm, consistent growth.";

/** Hero headline parts (part2 is the highlighted "on autopilot" bit). */
export const HERO_HEADLINE = {
  part1: "Your content,",
  part2: "on autopilot",
} as const;

/** Page title for layout metadata. */
export const PAGE_TITLE = `${APP_NAME} - ${TAGLINE}`;

/** Meta description. */
export const PAGE_DESCRIPTION =
  "Consistency compounds. Plan, schedule, and publish content automatically.";

/** "How {APP_NAME} works" — built so a rename updates this too. */
export const HOW_IT_WORKS_HEADING = `How ${APP_NAME} works`;
