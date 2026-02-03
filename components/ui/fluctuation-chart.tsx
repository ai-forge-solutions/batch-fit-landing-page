export function FluctuationChart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Línea horizontal central */}
      <line x1="5" y1="20" x2="55" y2="20" stroke="#9CA3AF" strokeWidth="1" />
      
      {/* Barras fluctuantes más grandes y centradas */}
      {[
        { x: 8, height: 8, positive: true },
        { x: 12, height: 12, positive: true },
        { x: 16, height: 6, positive: true },
        { x: 20, height: 10, positive: false },
        { x: 24, height: 14, positive: false },
        { x: 28, height: 7, positive: false },
        { x: 32, height: 6, positive: true },
        { x: 36, height: 15, positive: true },
        { x: 40, height: 9, positive: true },
        { x: 44, height: 11, positive: false },
        { x: 48, height: 8, positive: true },
        { x: 52, height: 10, positive: false },
      ].map((bar, index) => (
        <rect
          key={index}
          x={bar.x - 1.5}
          y={bar.positive ? 20 - bar.height : 20}
          width="3"
          height={bar.height}
          fill="#10B981"
          rx="0.5"
        />
      ))}
    </svg>
  )
}