import { motion } from "framer-motion";

export default function DashboardCard({
  title,
  value,
  icon,
  color = "from-blue-600 to-cyan-500",
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6"
    >
      <div
        className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${color}`}
      />

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-400 text-sm">

            {title}

          </p>

          <h2 className="mt-3 text-4xl font-bold">

            {value}

          </h2>

        </div>

        <div
          className={`rounded-2xl bg-gradient-to-r ${color} p-4 text-3xl`}
        >
          {icon}
        </div>

      </div>

    </motion.div>
  );
}