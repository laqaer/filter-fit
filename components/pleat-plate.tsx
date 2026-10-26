const folds = [36, 48, 60, 72] as const;

export function PleatPlate() {
  return (
    <svg className="ff-guide-plate" viewBox="0 0 120 168" aria-hidden>
      <rect x="0.5" y="0.5" width="119" height="167" fill="#fbfaf6" stroke="#ddd6c8" />
      <rect x="26" y="14" width="68" height="140" fill="#fbfaf6" stroke="#1e4d3a" strokeWidth="1.6" />
      {folds.map((x, index) => (
        <path
          key={x}
          fill={index % 2 === 0 ? "#1e4d3a" : "#8a5e2a"}
          d={`M${x} 26 L${x + 9} 26 L${x + 14} 142 L${x + 5} 142 Z`}
        />
      ))}
    </svg>
  );
}
