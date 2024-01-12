export function Overlay({
  backgroundColor,
}: {
  backgroundColor?: string | null;
}) {
  const bg =
    backgroundColor === undefined
      ? "rgba(0,0,0,0.5)"
      : backgroundColor ?? undefined;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: bg,
        // zIndex: 100,
      }}
    ></div>
  );
}
