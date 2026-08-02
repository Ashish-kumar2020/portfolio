import type { FSNode } from "../types/filesystem";

export function formatTree(
  node: FSNode,
  prefix = ""
): string {
  let output = "";

  if (prefix === "") {
    output += ".\n";
  }

  const children = node.children ?? [];

  children.forEach((child, index) => {
    const last = index === children.length - 1;

    output += prefix;
    output += last ? "└── " : "├── ";
    output += child.name + "\n";

    if (child.type === "directory") {
      output += formatTree(
        child,
        prefix + (last ? "    " : "│   "),
      
      );
    }
  });

  return output;
}