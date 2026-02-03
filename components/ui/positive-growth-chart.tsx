export function PositiveGrowthChart({ className }: { className?: string }) {
  // 12 barras, todas positivas y del mismo tamaño
  const barHeight = 16;
  const barX = [8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52];

  // Generar puntos para una curva exponencial y la flecha
  // y = a * e^(b * x), normalizado al SVG
  const points = [];
  const n = 12;
  const xStart = 8, xEnd = 52;
  const yBase = 22, yTop = 8; // y va de 22 (abajo) a 8 (arriba)
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    // Exponencial: y = yBase - (yBase-yTop) * (e^{2t}-1)/(e^2-1)
    const exp = Math.exp(2 * t);
    const y = yBase - (yBase - yTop) * (exp - 1) / (Math.exp(2) - 1);
    const x = xStart + (xEnd - xStart) * t;
    points.push({ x, y });
  }
  // Construir el atributo d para la curva
  const curveD = points.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(' ');

  // Flecha: desde el penúltimo al último punto
  const arrowFrom = points[n - 2];
  const arrowTo = points[n - 1];

  return (
    <svg
      className={className}
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Línea base */}
      <line x1="5" y1="32" x2="55" y2="32" stroke="#9CA3AF" strokeWidth="1" />
      {/* Barras positivas, todas iguales */}
      {barX.map((x, i) => (
        <rect
          key={i}
          x={x - 1.5}
          y={32 - barHeight}
          width="3"
          height={barHeight}
          fill="#10B981"
          rx="0.5"
        />
      ))}
      {/* Curva exponencial azul */}
      <path
        d={curveD}
        stroke="#3b82f6"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Flecha pequeña al final de la curva */}
      <line
        x1={arrowFrom.x}
        y1={arrowFrom.y}
        x2={arrowTo.x}
        y2={arrowTo.y}
        stroke="#3b82f6"
        strokeWidth="1.2"
        markerEnd="url(#arrowhead)"
      />
      <defs>
        <marker id="arrowhead" markerWidth="4" markerHeight="4" refX="4" refY="2" orient="auto" markerUnits="strokeWidth">
          <polygon points="0 0, 4 2, 0 4" fill="#3b82f6" />
        </marker>
      </defs>
    </svg>
  );
}
