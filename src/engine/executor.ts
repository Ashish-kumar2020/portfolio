import type { ParsedCommand } from "./parser";
import type { TerminalContext } from "../types/terminal";
import type { CommandResult } from "../types/command";
import { registry } from "./registry";

export function execute(
  parsed: ParsedCommand,
  context: TerminalContext
): CommandResult {
  const command = registry[parsed.command as keyof typeof registry];

  if (!command) {
    return {
      success: false,
      output: `Command not found: ${parsed.command}`,
    };
  }

  return command(context, parsed.args);
}