import Prompt from "./Prompt";

interface Props {
  path: string[];
  input: string;
  setInput: (value: string) => void;
  runCommand: () => void;
  commandHistory: string[];
  historyIndex: number;
  setHistoryIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function TerminalInput({
  path,
  input,
  setInput,
  runCommand,
  commandHistory,
  historyIndex,
  setHistoryIndex,
}: Props) {
  return (
    <div>
      <Prompt path={path} />

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
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
