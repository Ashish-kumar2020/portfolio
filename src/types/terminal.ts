import type { FSNode } from "./filesystem";

export interface TerminalContext {
  currentPath: string[];
  root: FSNode;
}