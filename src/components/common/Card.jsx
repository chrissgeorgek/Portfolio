import { motion } from "framer-motion";

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}