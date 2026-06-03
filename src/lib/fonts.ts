import { Cormorant_Garamond, Manrope } from "next/font/google";

/**
 * Self-hosted Google Fonts via next/font — no render-blocking CDN request,
 * automatic `font-display: swap` and zero layout shift.
 * Exposed as CSS variables consumed in globals.css (--font-cormorant / --font-manrope).
 */
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});
