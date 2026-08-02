import type { Theme } from "../types/theme";

export const themes: Record<
  Theme,
  {
    background: string;
    foreground: string;
    prompt: string;
    border: string;
  }
> = {
  green: {
    background: "#0d1117",
    foreground: "#4ade80",
    prompt: "#22c55e",
    border: "#166534",
  },

  amber: {
    background: "#1b1400",
    foreground: "#fbbf24",
    prompt: "#f59e0b",
    border: "#92400e",
  },

  cyan: {
    background: "#07131d",
    foreground: "#67e8f9",
    prompt: "#06b6d4",
    border: "#155e75",
  },

  matrix: {
    background: "#000000",
    foreground: "#00ff41",
    prompt: "#00ff41",
    border: "#14532d",
  },

  white: {
    background: "#ffffff",
    foreground: "#111827",
    prompt: "#374151",
    border: "#9ca3af",
  },
};