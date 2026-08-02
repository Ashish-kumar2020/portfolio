import { useState } from "react";

import { execute } from "../engine/executor";
import { parse } from "../engine/parser";

import type { TerminalContext } from "../types/terminal";
import type { Theme } from "../types/theme";

import { root } from "../filesystem/fileSystem";
import { welcomeMessage } from "../data/portfolio/welcome";

interface UseTerminalProps {
  setTheme: (theme: Theme) => void;
}

export interface HistoryItem {
  command: string;
  output: string;
  path: string[];
}

export function useTerminal({
  setTheme,
}: UseTerminalProps) {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "",
      output: welcomeMessage,
      path: [],
    },
  ]);

  const [input, setInput] = useState("");

  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  const [historyIndex, setHistoryIndex] = useState(-1);

  const [context] = useState<TerminalContext>({
    currentPath: [],
    root: structuredClone(root),
    setTheme,
  });

  function runCommand() {
    if (!input.trim()) return;

    const parsed = parse(input);

    if (parsed.command === "clear") {
      setHistory([
        {
          command: "",
          output: welcomeMessage,
          path: [],
        },
      ]);

      setInput("");
      setHistoryIndex(-1);
      return;
    }

    const result = execute(parsed, context);

    setHistory((prev) => [
      ...prev,
      {
        command: input,
        output: result.output,
        path: [...context.currentPath],
      },
    ]);

    setCommandHistory((prev) => [...prev, input]);

    setHistoryIndex(-1);

    setInput("");
  }

  return {
    history,
    input,
    setInput,
    runCommand,
    context,
    commandHistory,
    historyIndex,
    setHistoryIndex,
  };
}