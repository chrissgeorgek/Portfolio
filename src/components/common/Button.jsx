import { motion } from "framer-motion";

export default function Button({
  children,
  loading = false,
  className = "",
  ...props
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: loading ? 1 : 1.02 }}
      disabled={loading}
      className={`rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition disabled:opacity-70 ${className}`}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-3">

          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>

          Saving...

        </div>
      ) : (
        children
      )}
    </motion.button>
  );
}