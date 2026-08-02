import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";
import { contact } from "../data/portfolio/contact";

export function contactCommand(
  _context: TerminalContext,
  _args: string[]
): CommandResult {
  return {
    success: true,
    output: `
Email      : ${contact.email}
GitHub     : ${contact.github}
LinkedIn   : ${contact.linkedin}
Location   : ${contact.location}

Run "resume" to download my resume.
`,
  };
}