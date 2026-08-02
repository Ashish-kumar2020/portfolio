import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";
import type { Theme } from "../types/theme";

const validThemes: Theme[] = [
  "green",
  "amber",
  "cyan",
  "matrix",
  "white",
];

export function themeCommand(
  context: TerminalContext,
  args: string[]
): CommandResult {
  if (args.length === 0) {
    return {
      success: false,
      output: `Usage: theme <${validThemes.join(" | ")}>`,
    };
  }

  const theme = args[0] as Theme;

  if (!validThemes.includes(theme)) {
    return {
      success: false,
      output: `Unknown theme: ${theme}`,
    };
  }

  context.setTheme?.(theme);

  return {
    success: true,
    output: `Theme changed to ${theme}`,
  };
}