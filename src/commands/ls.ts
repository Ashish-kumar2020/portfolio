import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";
import { getCurrentDirectory } from "../filesystem/resolver";

export function ls(
  context: TerminalContext
): CommandResult {
  const dir = getCurrentDirectory(context);

  if (!dir) {
    return {
      success: false,
      output: "Directory not found",
    };
  }

  const output =
    dir.children
      ?.map((child) => child.name)
      .join("\n") || "";

  return {
    success: true,
    output,
  };
}