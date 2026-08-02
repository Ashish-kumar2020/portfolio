import type { CommandResult } from "../types/command";
import type { TerminalContext } from "../types/terminal";
import { projects } from "../data/portfolio/projects";

export function projectsCommand(
  _context: TerminalContext,
  _args: string[]
): CommandResult {
  const output = projects
    .map(
      (project, index) => `
${index + 1}. ${project.title}
Tech: ${project.tech.join(", ")}
${project.description}
`
    )
    .join("\n");

  return {
    success: true,
    output,
  };
}