import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";
import { experience } from "../data/portfolio/experience";

export function experienceCommand(
  _context: TerminalContext,
  _args: string[]
): CommandResult {
  const output = experience
    .map(
      (job) => `
=========================================
${job.company}
${job.role}
${job.duration}

Achievements:
${job.highlights.map((h) => `• ${h}`).join("\n")}
=========================================
`
    )
    .join("\n");

  return {
    success: true,
    output,
  };
}