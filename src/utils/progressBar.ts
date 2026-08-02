export function progressBar(level: number): string {
  const total = 20;
  const filled = Math.round((level / 100) * total);

  return (
    "█".repeat(filled) +
    "░".repeat(total - filled)
  );
}