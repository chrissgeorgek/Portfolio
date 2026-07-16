// src/components/Hero/FloatingObjects.jsx

import { motion } from "framer-motion";
import {
  FaBook,
  FaReact,
  FaPython,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaLeaf,
  FaStar,
} from "react-icons/fa";

const objects = [
  {
    icon: FaBook,
    top: "18%",
    left: "14%",
    color: "#FACC15",
    size: 30,
    duration: 8,
    delay: 0,
  },
  {
    icon: FaReact,
    top: "22%",
    right: "18%",
    color: "#61DAFB",
    size: 34,
    duration: 10,
    delay: 1,
  },
  {
    icon: FaPython,
    top: "62%",
    left: "12%",
    color: "#4ADE80",
    size: 30,
    duration: 9,
    delay: 2,
  },
  {
    icon: FaGraduationCap,
    top: "68%",
    right: "14%",
    color: "#F97316",
    size: 30,
    duration: 11,
    delay: 1,
  },
  {
    icon: FaLaptopCode,
    top: "34%",
    left: "7%",
    color: "#A78BFA",
    size: 32,
    duration: 12,
    delay: 3,
  },
  {
    icon: FaCode,
    top: "38%",
    right: "8%",
    color: "#38BDF8",
    size: 28,
    duration: 10,
    delay: 2,
  },
  {
    icon: FaLeaf,
    bottom: "18%",
    left: "24%",
    color: "#22C55E",
    size: 26,
    duration: 13,
    delay: 4,
  },
  {
    icon: FaStar,
    bottom: "22%",
    right: "22%",
    color: "#FDE047",
    size: 24,
    duration: 9,
    delay: 5,
  },
];

export default function FloatingObjects() {
  return (
    <>
      {objects.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            className="absolute z-30 pointer-events-none"
            style={{
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              right: item.right,
              color: item.color,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [-6, 6, -6],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <Icon
              size={item.size}
              style={{
                filter:
                  "drop-shadow(0 0 14px rgba(255,255,255,.25))",
              }}
            />
          </motion.div>
        );
      })}
    </>
  );
}