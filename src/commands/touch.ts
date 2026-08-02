import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";
import { getCurrentDirectory } from "../filesystem/resolver";

export function touch(
  context: TerminalContext,
  args: string[]
): CommandResult {
  // 1. Validate filename
  if (args.length === 0) {
    return {
      success: false,
      output: "touch: missing file name",
    };
  }

  const current = getCurrentDirectory(context);

  if (!current || current.type !== "directory") {
    return {
      success: false,
      output: "Current directory not found",
    };
  }

  // 2. Check duplicate
  const exists = current.children?.some(
    (child) => child.name === args[0]
  );

  if (exists) {
    return {
      success: false,
      output: `touch: ${args[0]} already exists`,
    };
  }

  // 3. Create file
  current.children?.push({
    name: args[0],
    type: "file",
    content: "",
  });

  return {
    success: true,
    output: `File '${args[0]}' created`,
  };
}