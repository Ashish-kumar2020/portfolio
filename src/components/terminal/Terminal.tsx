import { useTerminal } from "../../hooks/useTerminal";
import TerminalHistory from "./TerminalHistory";
import TerminalInput from "./TerminalInput";

export default function Terminal() {
  const {
    history,
    input,
    setInput,
    runCommand,
    context,
    commandHistory,
    historyIndex,
    setHistoryIndex,
  } = useTerminal();

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "monospace",
      }}
    >
      <TerminalHistory history={history} path={[]} />

      <TerminalInput
        path={context.currentPath}
        input={input}
        setInput={setInput}
        runCommand={runCommand}
        commandHistory={commandHistory}
        historyIndex={historyIndex}
        setHistoryIndex={setHistoryIndex}
      />
    </div>
  );
}
