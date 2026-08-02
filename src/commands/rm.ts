import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";
import { getCurrentDirectory } from "../filesystem/resolver";

export function rm(
  context: TerminalContext,
  args: string[]
): CommandResult {
 
  if (args.length === 0) {
    return {
      success: false,
      output: "rm: missing file or directory name",
    };
  }

  const current = getCurrentDirectory(context);

  if (!current || current.type !== "directory") {
    return {
      success: false,
      output: "Current directory not found",
    };
  }

  const node = current.children?.find(
    (child) => child.name === args[0]
  );

  if (!node) {
    return {
      success: false,
      output: `rm: cannot remove '${args[0]}': No such file or directory`,
    };
  }

  if (
    node.type === "directory" &&
    node.children &&
    node.children.length > 0
  ) {
    return {
      success: false,
      output: `rm: cannot remove '${args[0]}': Directory not empty`,
    };
  }

  current.children = current.children?.filter(
    (child) => child.name !== args[0]
  );

  return {
    success: true,
    output: `'${args[0]}' removed successfully`,
  };
}