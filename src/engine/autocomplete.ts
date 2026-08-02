import { registry } from "./registry";
import { getCurrentDirectory } from "../filesystem/resolver";
import type { TerminalContext } from "../types/terminal";

export function autocomplete(
  input: string,
  context: TerminalContext
): string[] {
  const words = input.trim().split(/\s+/);

  if (words.length === 1) {
    return Object.keys(registry).filter((command) =>
      command.startsWith(words[0])
    );
  }


  const currentDir = getCurrentDirectory(context);

  if (!currentDir?.children) {
    return [];
  }

  const partial = words[words.length - 1];

  return currentDir.children
    .map((child) => child.name)
    .filter((name) => name.startsWith(partial));
}