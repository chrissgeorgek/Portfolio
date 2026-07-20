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
    size: 520,
    duration: 55,
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
    duration: 85,
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
    duration: 120,
    stroke: "#38BDF8",
    width: 3,
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
            fontSize: isMobile ? "8px" : "24px",
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
          {/* Premium Energy Core */}
<motion.div
  className="absolute rounded-full"
  style={{
    width: isMobile ? 260 : 520,
    height: isMobile ? 260 : 520,
    background:
      "radial-gradient(circle, rgba(94,234,212,.22) 0%, rgba(59,130,246,.12) 45%, transparent 75%)",
    filter: "blur(35px)",
  }}
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.75, 1, 0.75],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

<motion.div
  className="absolute origin-bottom"
  style={{
    width: 4,
    height: isMobile ? 170 : 340,
    background:
      "linear-gradient(to top, transparent, #67E8F9, transparent)",
    filter: "blur(2px)",
  }}
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "linear",
  }}
/>
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
stdDeviation={isMobile ? "2" : "5"}
result="blur"
/>

<feMerge>
  <feMergeNode in="blur"/>
  <feMergeNode in="SourceGraphic"/>
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
          <motion.div
  className="absolute rounded-full border border-cyan-300/30"
  style={{
    width: isMobile ? 120 : 180,
    height: isMobile ? 120 : 180,
    backdropFilter: "blur(8px)",
    background: "rgba(255,255,255,.03)",
  }}
  animate={{
    scale: [1, 1.04, 1],
    opacity: [.7, 1, .7],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
/>
        </div>
      );
    }