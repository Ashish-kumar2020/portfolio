import type { TerminalContext } from "./terminal";

export interface CommandResult {
  success: boolean;
  output: string;
}

export interface Command {
  (context: TerminalContext, args: string[]): CommandResult;
}
