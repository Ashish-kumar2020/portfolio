import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";
import { getCurrentDirectory } from "../filesystem/resolver";
import { formatTree } from "../utils/treeFormatter";

export function tree(
  context: TerminalContext
): CommandResult {

  const current = getCurrentDirectory(context);

  if (!current) {
    return {
      success: false,
      output: "Directory not found",
    };
  }

  return {
    success: true,
    output: formatTree(current),
  };
}