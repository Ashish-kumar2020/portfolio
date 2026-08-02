import type { HistoryItem } from "../../hooks/useTerminal";
import Prompt from "./Prompt";


interface Props {
  history: HistoryItem[];
  path: string[];
}

export default function TerminalHistory({
  history,
  path,
}: Props) {
  return (
    <>
      {history.map((item, index) => (
        <div key={index} style={{ marginBottom: "16px" }}>
          <div>
            <Prompt path={path} /> {item.command}
          </div>

          <pre>{item.output}</pre>
        </div>
      ))}
    </>
  );
}