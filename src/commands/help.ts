import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";

export function help(
  _context: TerminalContext,
  _args: string[],
): CommandResult {
  return {
    success: true,
    output: `Available commands:
help
ls
cd
cat`,
  };
}
