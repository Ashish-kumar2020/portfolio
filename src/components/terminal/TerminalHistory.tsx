import type { HistoryItem } from "../../hooks/useTerminal";
import Prompt from "./Prompt";

interface Props {
  history: HistoryItem[];
  path: string[];
}

export default function TerminalHistory({
  history,

}: Props) {
  return (
    <>
      {history.map((item, index) => (
        <div key={index} className="mb-4">
          {item.command && (
            <div className="flex items-center gap-2">
             <Prompt path={item.path} />
              <span>{item.command}</span>
            </div>
          )}

          <pre className="whitespace-pre-wrap font-mono text-white mt-1">
            {item.output}
          </pre>
        </div>
      ))}
    </>
  );
}