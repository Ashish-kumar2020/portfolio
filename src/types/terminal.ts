import type { FSNode } from "./filesystem";
import type { Theme } from "./theme";

export interface TerminalContext {
  currentPath: string[];
  root: FSNode;
  setTheme?: (theme: Theme) => void;
}