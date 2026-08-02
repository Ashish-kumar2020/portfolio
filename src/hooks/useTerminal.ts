import { useState } from "react";
import { execute } from "../engine/executor";

export interface HistoryItem {
  command: string;
  output: string;
}

export function useTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const [context] = useState({
    currentPath: [] as string[],
  });

  function runCommand() {
    if (!input.trim()) return;

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
