import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";
import {
  getCurrentDirectory,
  findChild,
  isDirectory,
} from "../filesystem/resolver";

export function cd(
  context: TerminalContext,
  args: string[]
): CommandResult {
  if (args.length === 0) {
    context.currentPath = [];

    return {
      success: true,
      output: "",
    };
  }

  const target = args[0];

  if (target === "..") {
    context.currentPath.pop();

    return {
      success: true,
      output: "",
    };
  }

  const dir = getCurrentDirectory(context);

  if (!dir) {
    return {
      success: false,
      output: "Directory not found",
    };
  }

  const child = findChild(dir, target);

  if (!child || !isDirectory(child)) {
    return {
      success: false,
      output: "Directory not found",
    };
  }

  context.currentPath.push(target);

  return {
    success: true,
    output: "",
  };
}