import { motion } from "framer-motion";

export default function HeroFrame() {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full z-[18] pointer-events-none"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      animate={{ rotate: [0, 2, 0, -2, 0] }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Main Circle */}
      <circle
        cx="960"
        cy="520"
        r="340"
        fill="none"
        stroke="#67E8F9"
        strokeWidth="1.5"
        opacity=".15"
      />

      {/* Top Arc */}
      <path
        d="M620 520
           A340 340 0 0 1
           1300 520"
        fill="none"
        stroke="#67E8F9"
        strokeWidth="2"
        opacity=".35"
      />

      {/* Bottom Arc */}
      <path
        d="M700 720
           Q960 840
           1220 720"
        fill="none"
        stroke="#67E8F9"
        strokeWidth="2"
        opacity=".25"
      />

      {/* Decorative Lines */}
      <path
        d="M760 250
        L1160 250"
        stroke="#ffffff"
        opacity=".18"
      />

      <path
        d="M700 310
        L1220 310"
        stroke="#ffffff"
        opacity=".08"
      />

      {/* Left Leaf */}
      <path
        d="
        M700 690
        C650 650
        640 600
        700 560
        "
        stroke="#67E8F9"
        strokeWidth="2"
        fill="none"
        opacity=".3"
      />

      {/* Right Leaf */}
      <path
        d="
        M1220 690
        C1270 650
        1280 600
        1220 560
        "
        stroke="#67E8F9"
        strokeWidth="2"
        fill="none"
        opacity=".3"
      />

      {/* Stars */}
      <circle cx="960" cy="220" r="3" fill="#ffffff" />

      <circle cx="760" cy="340" r="2" fill="#67E8F9" />

      <circle cx="1160" cy="340" r="2" fill="#67E8F9" />

      <circle cx="960" cy="760" r="3" fill="#A78BFA" />
    </motion.svg>
  );
}