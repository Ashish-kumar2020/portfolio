import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";
import { findNode } from "../utils/findNode";

export function mkdir(
  context: TerminalContext,
  args: string[]
): CommandResult {

  // 1. Validate arguments
  if (args.length === 0) {
    return {
      success: false,
      output: "mkdir: missing directory name",
    };
  }

  // 2. Find current directory
  const current = findNode(context.root, context.currentPath);

  if (!current || current.type !== "directory") {
    return {
      success: false,
      output: "Current directory not found",
    };
  }

  // 3. Check duplicate
  const exists = current.children?.some(
    (child) => child.name === args[0]
  );

  if (exists) {
    return {
      success: false,
      output: `mkdir: ${args[0]} already exists`,
    };
  }

  // 4. Create directory
  current.children?.push({
    name: args[0],
    type: "directory",
    children: [],
  });

  return {
    success: true,
    output: `Directory '${args[0]}' created`,
  };
}