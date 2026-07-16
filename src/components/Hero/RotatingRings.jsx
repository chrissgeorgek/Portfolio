// src/components/Hero/RotatingRings.jsx

import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaBook,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

const rings = [
  {
    size: 450,
    duration: 45,
    stroke: "#5EEAD4",
    width: 3,
    dash: "0",
    reverse: false,
    icons: [
      { icon: <FaReact />, angle: 0 },
      { icon: <FaBook />, angle: 180 },
    ],
  },
  {
    size: 600,
    duration: 70,
    stroke: "#A78BFA",
    width: 4,
    dash: "14 10",
    reverse: true,
    icons: [
      { icon: <FaPython />, angle: 60 },
      { icon: <FaCode />, angle: 240 },
    ],
  },
  {
    size: 760,
    duration: 100,
    stroke: "#38BDF8",
    width: 1.5,
    dash: "5 12",
    reverse: false,
    icons: [
      { icon: <FaLaptopCode />, angle: 120 },
      { icon: <FaGraduationCap />, angle: 300 },
    ],
  },
];

function OrbitIcon({
  size,
  angle,
  children,
  color,
}) {
  const radius = size / 2 - 12;

  return (
    <g
      transform={`
        translate(${size / 2},${size / 2})
        rotate(${angle})
        translate(0,-${radius})
      `}
    >
      <foreignObject
        x="-12"
        y="-12"
        width="24"
        height="24"
      >
        <div
          style={{
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color,
            fontSize: "18px",
          }}
        >
          {children}
        </div>
      </foreignObject>
    </g>
  );
}

export default function RotatingRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-20">
      {rings.map((ring, index) => (
        <motion.svg
          key={index}
          width={ring.size}
          height={ring.size}
          viewBox={`0 0 ${ring.size} ${ring.size}`}
          className="absolute"
          animate={{
            rotate: ring.reverse ? -360 : 360,
          }}
          transition={{
            duration: ring.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <defs>
            <filter id={`glow-${index}`}>
              <feGaussianBlur
                stdDeviation="3"
                result="coloredBlur"
              />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx={ring.size / 2}
            cy={ring.size / 2}
            r={ring.size / 2 - 12}
            fill="none"
            stroke={ring.stroke}
            strokeWidth={ring.width}
            strokeDasharray={ring.dash}
            opacity="0.25"
            filter={`url(#glow-${index})`}
          />

          <circle
            cx={ring.size / 2}
            cy={ring.size / 2}
            r={ring.size / 2 - 22}
            fill="none"
            stroke={ring.stroke}
            strokeWidth="0.8"
            opacity=".08"
          />

          {ring.icons.map((item, i) => (
            <OrbitIcon
              key={i}
              size={ring.size}
              angle={item.angle}
              color={ring.stroke}
            >
              {item.icon}
            </OrbitIcon>
          ))}
        </motion.svg>
      ))}
    </div>
  );
}