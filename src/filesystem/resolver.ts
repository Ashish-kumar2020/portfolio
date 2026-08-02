
import type { FSNode } from "../types/filesystem";
import type { TerminalContext } from "../types/terminal";


export function getNode(
  root: FSNode,
  path: string[]
): FSNode | null {
  let current = root;

  for (const part of path) {
    if (!current.children) {
      return null;
    }

    const next = current.children.find(
      (child) =>
        child.name === part &&
        child.type === "directory"
    );

    if (!next) {
      return null;
    }

    current = next;
  }

  return current;
}

export function getCurrentDirectory(
  context: TerminalContext
): FSNode | null {
  return getNode(context.root, context.currentPath);
}
export function findChild(
  node: FSNode,
  name: string
): FSNode | undefined {
  return node.children?.find(
    (child) => child.name === name
  );
}

export function isDirectory(node: FSNode): boolean {
  return node.type === "directory";
}

export function isFile(node: FSNode): boolean {
  return node.type === "file";
}