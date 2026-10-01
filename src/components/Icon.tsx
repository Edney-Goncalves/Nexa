export default function Icon({ d }: { d: string }) {
  return (
    <div className="ic">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>
    </div>
  );
}
