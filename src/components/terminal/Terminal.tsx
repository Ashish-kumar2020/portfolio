import { useTerminal } from "../../hooks/useTerminal";
import TerminalHistory from "./TerminalHistory";
import TerminalInput from "./TerminalInput";
import { useRef, useEffect } from "react";

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

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

    inputRef.current?.focus();
  }, [history]);

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
        inputRef={inputRef}
        context={context}
      />
      <div ref={bottomRef} />
    </div>
  );
}
