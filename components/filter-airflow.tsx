const folds = [178, 192, 206, 220, 234, 248] as const;

export function FilterAirflow() {
  return (
    <figure className="ff-figure">
      <div className="ff-stage" aria-hidden="true">
        <svg viewBox="0 0 440 300" className="block h-full w-full" focusable="false">
          <rect className="ff-plate-bg" x="0.5" y="0.5" width="439" height="299" />
          <text className="ff-plate-label" x="28" y="92">
            RETURN
          </text>
          <text className="ff-plate-label" x="292" y="92">
            FURNACE
          </text>
          <rect className="ff-duct" x="24" y="112" width="156" height="86" rx="6" />
          <rect className="ff-duct" x="260" y="112" width="156" height="86" rx="6" />
          <defs>
            <clipPath id="ff-duct-left">
              <rect x="24" y="112" width="150" height="86" />
            </clipPath>
            <clipPath id="ff-duct-right">
              <rect x="266" y="112" width="150" height="86" />
            </clipPath>
          </defs>
          <g clipPath="url(#ff-duct-left)">
            <path className="ff-flow" d="M-40 132 H180" />
            <path className="ff-flow ff-flow-b" d="M-64 155 H180" />
            <path className="ff-flow ff-flow-c" d="M-24 178 H180" />
            <path className="ff-mote" d="M-48 142 H180" />
            <path className="ff-mote ff-mote-b" d="M-16 168 H180" />
          </g>
          <g clipPath="url(#ff-duct-right)">
            <path className="ff-flow ff-flow-clean" d="M250 132 H480" />
            <path className="ff-flow ff-flow-clean ff-flow-b" d="M250 155 H470" />
            <path className="ff-flow ff-flow-clean ff-flow-c" d="M250 178 H490" />
          </g>
          <rect className="ff-frame" x="166" y="36" width="112" height="228" rx="2" strokeWidth="2.5" />
          {folds.map((x, index) => (
            <path
              key={x}
              className={index % 2 === 0 ? "ff-fold-a" : "ff-fold-b"}
              d={`M${x} 52 L${x + 11} 52 L${x + 18} 248 L${x + 7} 248 Z`}
            />
          ))}
        </svg>
      </div>
      <figcaption>Return air, the pleats, then the furnace side.</figcaption>
    </figure>
  );
}
