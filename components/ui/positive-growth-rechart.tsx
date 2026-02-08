"use client"
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useInView } from "react-intersection-observer";

// Generar datos exponenciales
function generateData(n = 12) {
  const data = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    // Exponencial perfecta, más suave
    const value = 12 + 18 * Math.exp(1.5 * t) / Math.exp(1.5);
    data.push({
      name: `S${i + 1}`,
      bar: 18, // Todas las barras iguales
      line: value,
    });
  }
  return data;
}

export function PositiveGrowthRechart({ className }: { className?: string }) {
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [data, setData] = useState(generateData());

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  return (
    <div ref={ref} className={className} style={{ width: "100%", height: 260 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 30, right: 20, left: 0, bottom: 0 }}
          barCategoryGap={"0%"}
          barGap={0}
        >
          <XAxis dataKey="name" hide />
          <YAxis hide domain={[0, 40]} />
          <Tooltip
            cursor={{ fill: "rgba(107,114,128,0.08)" }}
            contentStyle={{ borderRadius: 8, fontSize: 14 }}
          />
          <Bar
            dataKey="bar"
            fill="#9CA3AF"
            barSize={16}
            radius={[4, 4, 0, 0]}
            isAnimationActive={animate}
            animationDuration={1800}
          />
          <Line
            type="basis"
            dataKey="line"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
            isAnimationActive={animate}
            animationDuration={2200}
            activeDot={{ r: 6, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}