interface PromptProps {
  path: string[];
}

export default function Prompt({
  path,
}: PromptProps) {
  return (
    <span>
      ashish@terminal:
      /{path.join("/")}
      $
    </span>
  );
}