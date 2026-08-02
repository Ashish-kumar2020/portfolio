import type { RefObject } from "react";
import Prompt from "./Prompt";
import { autocomplete } from "../../engine/autocomplete";
import type { TerminalContext } from "../../types/terminal";

interface Props {
  path: string[];
  input: string;
  setInput: (value: string) => void;
  runCommand: () => void;
  commandHistory: string[];
  historyIndex: number;
  setHistoryIndex: React.Dispatch<React.SetStateAction<number>>;
  inputRef: RefObject<HTMLInputElement | null>;
  context: TerminalContext;
}

export default function TerminalInput({
  path,
  input,
  setInput,
  runCommand,
  commandHistory,
  historyIndex,
  setHistoryIndex,
  context,
  inputRef,
}: Props) {
  return (
    <div>
      <Prompt path={path} />

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === "Tab") {
            e.preventDefault();
            const matches = autocomplete(input, context);
            if (matches.length === 1) {
              const words = input.trim().split(/\s+/);
              if (words.length === 1) {
                setInput(matches[0]);
              } else {
                words[words.length - 1] = matches[0];
                setInput(words.join(" "));
              }
            }
          }
          if (e.key === "Enter") {
            runCommand();
          }

          if (e.key === "ArrowUp") {
            e.preventDefault();

            if (commandHistory.length === 0) return;

            const nextIndex = Math.min(
              historyIndex + 1,
              commandHistory.length - 1,
            );

            setHistoryIndex(nextIndex);

            setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
          }

          if (e.key === "ArrowDown") {
            e.preventDefault();

            if (historyIndex <= 0) {
              setHistoryIndex(-1);
              setInput("");
              return;
            }

            const nextIndex = historyIndex - 1;

            setHistoryIndex(nextIndex);

            setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
          }
        }}
      />
    </div>
  );
}
