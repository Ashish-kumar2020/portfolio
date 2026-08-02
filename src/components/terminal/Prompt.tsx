interface Props {
  path: string[];
}

export default function Prompt({ path }: Props) {
  const currentPath =
    path.length === 0 ? "~" : `~/${path.join("/")}`;

  return (
    <div className="flex items-center shrink-0">
      <span className="text-green-400 font-bold">
        ashish@portfolio
      </span>

      <span className="text-white">:</span>

      <span className="text-blue-400">
        {currentPath}
      </span>

      <span className="text-white ml-1">$</span>
    </div>
  );
}