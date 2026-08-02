import { useState } from "react";
import { execute } from "../engine/executor";
import { parse } from "../engine/parser";
import type { TerminalContext } from "../types/terminal";
import { root } from "../filesystem/fileSystem";
import { welcomeMessage } from "../data/portfolio/welcome";

export interface HistoryItem {
  command: string;
  output: string;
  path: string[];
}

export function useTerminal() {
  const [history, setHistory] = useState([
    {
      command: "",
      output: welcomeMessage,
    },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const [context] = useState<TerminalContext>({
    currentPath: [],
    root: structuredClone(root),
  });

  function runCommand() {
    if (!input.trim()) return;
    const parsed = parse(input);

    if (parsed.command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    const result = execute(input, context);

    setHistory((prev) => [
      ...prev,
      {
        command: input,
        output: result.output,
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
