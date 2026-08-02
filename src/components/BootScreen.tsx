import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

const messages = [
  "Booting AshishOS v1.0...",
  "",
  "✓ Initializing Kernel...",
  "✓ Mounting Virtual Filesystem...",
  "✓ Loading Portfolio...",
  "✓ Starting Terminal...",
  "",
  "Ready.",
];

export default function BootScreen({ onComplete }: Props) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentLine >= messages.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1200);

      return () => clearTimeout(timer);
    }

    const line = messages[currentLine];

    let index = 0;

    const interval = setInterval(() => {
      setCurrentText(line.slice(0, index + 1));

      index++;

      if (index > line.length) {
        clearInterval(interval);

        setDisplayedLines((prev) => [...prev, line]);

        setCurrentText("");

        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, 200);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [currentLine, onComplete]);

  return (
    <div className="h-screen bg-black text-green-400 font-mono flex items-center justify-center">
      <div className="w-[900px]">
        {displayedLines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}

        {currentText && (
          <div>
            {currentText}
            <span className="animate-pulse">█</span>
          </div>
        )}

        {!currentText && currentLine >= messages.length && (
          <span className="animate-pulse">█</span>
        )}
      </div>
    </div>
  );
}