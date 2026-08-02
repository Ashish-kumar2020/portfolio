import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";
import {
  getCurrentDirectory,
  findChild,
  isFile,
} from "../filesystem/resolver";

export function cat(
  context: TerminalContext,
  args: string[]
): CommandResult {
  if (args.length === 0) {
    return {
      success: false,
      output: "Missing filename",
    };
  }

  const dir = getCurrentDirectory(context);

  if (!dir) {
    return {
      success: false,
      output: "Directory not found",
    };
  }

  const file = findChild(dir, args[0]);

  if (!file || !isFile(file)) {
    return {
      success: false,
      output: "File not found",
    };
  }

  return {
    success: true,
    output: file.content ?? "",
  };
}