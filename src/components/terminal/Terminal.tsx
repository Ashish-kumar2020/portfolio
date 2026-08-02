import { useEffect, useRef } from "react";
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

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

    inputRef.current?.focus();
  }, [history]);

  return (
    <div className="h-screen bg-[#0d1117] flex items-center justify-center font-mono">
      <div className="w-[900px] h-[650px] bg-[#161b22] rounded-xl border border-gray-700 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="h-10 bg-[#21262d] border-b border-gray-700 flex items-center px-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <div className="flex-1 text-center text-sm text-gray-400">
            ashish@terminal
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 overflow-y-auto p-4 text-[#c9d1d9]">
          <TerminalHistory history={history} path={context.currentPath} />

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
      </div>
    </div>
  );
}