/** Decorative cross-section: return air, pleats, then the furnace side. */
export function FilterAirflow() {
  const pleats = [128, 140, 152, 164, 176, 188] as const;

  return (
    <div className="ff-stage" aria-hidden="true">
      <svg viewBox="0 0 320 240" className="block h-full w-full" focusable="false">
        <rect x="0.5" y="0.5" width="319" height="239" rx="14" fill="#fffdf8" stroke="#d4c6b0" />
        <rect x="18" y="74" width="284" height="92" rx="8" fill="#e7dccb" />
        <defs>
          <clipPath id="ff-duct-left">
            <rect x="18" y="74" width="100" height="92" />
          </clipPath>
          <clipPath id="ff-duct-right">
            <rect x="202" y="74" width="100" height="92" />
          </clipPath>
        </defs>
        <g clipPath="url(#ff-duct-left)">
          <path className="ff-flow" d="M-48 98H130" />
          <path className="ff-flow ff-flow-b" d="M-64 120H130" />
          <path className="ff-flow ff-flow-c" d="M-32 142H130" />
          <path className="ff-mote" d="M-56 108H130" />
          <path className="ff-mote ff-mote-b" d="M-20 132H130" />
        </g>
        <g clipPath="url(#ff-duct-right)">
          <path className="ff-flow ff-flow-clean" d="M190 98H370" />
          <path className="ff-flow ff-flow-clean ff-flow-b" d="M190 120H360" />
          <path className="ff-flow ff-flow-clean ff-flow-c" d="M190 142H376" />
        </g>
        <rect x="112" y="28" width="96" height="184" rx="3" fill="#fffdf8" stroke="#8b3a12" strokeWidth="3" />
        {pleats.map((x, index) => (
          <rect
            key={x}
            x={x}
            y="40"
            width="7"
            height="160"
            fill={index % 2 === 0 ? "#c45c26" : "#2f5557"}
            opacity={index % 2 === 0 ? 0.92 : 0.72}
          />
        ))}
      </svg>
    </div>
  );
}
