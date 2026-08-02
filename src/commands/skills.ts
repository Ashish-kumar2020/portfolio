import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";
import { skills } from "../data/skills";
import { progressBar } from "../utils/progressBar";

export function skillsCommand(
  _context: TerminalContext,
  _args: string[]
): CommandResult {
  const output = skills
    .map(
      (skill) =>
        `${skill.name.padEnd(15)} ${progressBar(skill.level)} ${skill.level}%`
    )
    .join("\n");

  return {
    success: true,
    output,
  };
}