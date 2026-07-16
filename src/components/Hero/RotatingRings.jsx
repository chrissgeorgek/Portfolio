// ===========================
// RotatingRings.jsx (PART 1)
// ===========================

import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

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
    width: 3,
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
    width: 2,
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
  isMobile,
}) {
  const radius = size / 2 - (isMobile ? 10 : 12);

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
            fontSize: isMobile ? "15px" : "18px",
            filter: isMobile
              ? "none"
              : `drop-shadow(0 0 8px ${color})`,
          }}
        >
          {children}
        </div>
      </foreignObject>
    </g>
  );
}

export default function RotatingRings() {

  const isMobile = useIsMobile();

  const displayRings = isMobile
    ? rings.map((ring) => ({
        ...ring,
        size: Math.round(ring.size * 0.62),
        duration: ring.duration * 2,
        width: Math.max(1, ring.width * 0.75),
      }))
    : rings;
    
      return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-20">
          {displayRings.map((ring, index) => (
            <motion.svg
              key={index}
              width={ring.size}
              height={ring.size}
              viewBox={`0 0 ${ring.size} ${ring.size}`}
              className="absolute transform-gpu will-change-transform"
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
                    stdDeviation={isMobile ? "1" : "3"}
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
                opacity={isMobile ? "0.18" : "0.25"}
                filter={
                  isMobile
                    ? undefined
                    : `url(#glow-${index})`
                }
              />
    
              <circle
                cx={ring.size / 2}
                cy={ring.size / 2}
                r={ring.size / 2 - 22}
                fill="none"
                stroke={ring.stroke}
                strokeWidth={isMobile ? "0.5" : "0.8"}
                opacity=".08"
              />
    
              {ring.icons.map((item, i) => (
                <OrbitIcon
                  key={i}
                  size={ring.size}
                  angle={item.angle}
                  color={ring.stroke}
                  isMobile={isMobile}
                >
                  {item.icon}
                </OrbitIcon>
              ))}
            </motion.svg>
          ))}
        </div>
      );
    }