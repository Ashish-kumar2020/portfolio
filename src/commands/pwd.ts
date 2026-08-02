import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";

export function pwd(
  context: TerminalContext
): CommandResult {
  return {
    success: true,
    output:
      "/" + context.currentPath.join("/"),
  };
}