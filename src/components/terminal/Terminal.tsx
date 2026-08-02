import { useEffect, useRef } from "react";
import { useTerminal } from "../../hooks/useTerminal";
import { useTheme } from "../../hooks/useTheme";

import TerminalHistory from "./TerminalHistory";
import TerminalInput from "./TerminalInput";

export default function Terminal() {
  const { colors, setTheme } = useTheme();

  const {
    history,
    input,
    setInput,
    runCommand,
    context,
    commandHistory,
    historyIndex,
    setHistoryIndex,
  } = useTerminal({
    setTheme,
  });

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
      className="h-screen flex items-center justify-center font-mono transition-colors duration-300"
      style={{
        backgroundColor: colors.background,
        color: colors.foreground,
      }}
    >
      {/* Terminal Window */}
      <div
        className="w-[900px] h-[650px] rounded-xl shadow-2xl overflow-hidden flex flex-col"
        style={{
          backgroundColor: colors.background,
          border: `1px solid ${colors.border}`,
        }}
      >
        {/* Header */}
        <div
          className="h-10 flex items-center px-4"
          style={{
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <div className="flex-1 text-center text-sm opacity-70">
            ashish@terminal
          </div>
        </div>

        {/* Terminal Body */}
        <div
          className="flex-1 overflow-y-auto p-4"
          style={{
            color: colors.foreground,
          }}
        >
          <TerminalHistory history={history} />

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