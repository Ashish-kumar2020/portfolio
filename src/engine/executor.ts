import { parse } from "./parser";
import type { TerminalContext } from "../types/terminal";
import type { CommandResult } from "../types/command";
import { registry } from "./registry";

export function execute(
  input: string,
  context: TerminalContext
): CommandResult {
  const parsed = parse(input);

  const command = registry[parsed.command as keyof typeof registry];

  if (!command) {
    return {
      success: false,
      output: `Command not found: ${parsed.command}`,
    };
  }

  return command(context, parsed.args);
}