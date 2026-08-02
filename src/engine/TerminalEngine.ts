import { parse } from "./parser";
import { execute } from "./executor";
import type { TerminalContext } from "../types/terminal";
import type { CommandResult } from "../types/command";

export function runCommand(
  input: string,
  context: TerminalContext
): CommandResult {
  const parsed = parse(input);

  return execute(parsed, context);
}