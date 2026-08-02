import { downloadResume } from "../data/portfolio/resume";
import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";


export function resumeCommand(
  _context: TerminalContext,
  _args: string[]
): CommandResult {
  downloadResume();

  return {
    success: true,
    output: "Downloading resume...",
  };
}