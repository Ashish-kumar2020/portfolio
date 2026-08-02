import type { FSNode } from "../types/filesystem";

export function findNode(
  root: FSNode,
  path: string[]
): FSNode | null {
  let current: FSNode = root;

  for (const segment of path) {
    if (current.type !== "directory") {
      return null;
    }

    const next = current.children?.find(
      (child) =>
        child.type === "directory" &&
        child.name === segment
    );

    if (!next) {
      return null;
    }

    current = next;
  }

  return current;
}