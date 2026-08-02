export default function CRTEffect() {
  return (
    <>
      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 crt-scanlines" />

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 crt-glow" />

      {/* Flicker */}
      <div className="pointer-events-none absolute inset-0 crt-flicker" />
    </>
  );
}