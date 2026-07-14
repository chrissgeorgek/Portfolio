import { motion } from "framer-motion";

const services = [
  {
    emoji: "🌐",
    title: "Website Development",
    color: "from-blue-400 to-cyan-500",
  },
  {
    emoji: "⚛️",
    title: "React Applications",
    color: "from-cyan-400 to-blue-500",
  },
  {
    emoji: "🐍",
    title: "Python Django",
    color: "from-green-400 to-emerald-500",
  },
  {
    emoji: "🤖",
    title: "Machine Learning",
    color: "from-pink-400 to-rose-500",
  },
  {
    emoji: "📊",
    title: "Data Analytics",
    color: "from-purple-400 to-indigo-500",
  },
  {
    emoji: "☁️",
    title: "Cloud Deployment",
    color: "from-orange-400 to-yellow-500",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#FFF7E8] via-[#FFF3D6] to-[#E8F8E8]"
    >
      {/* Background */}

      <div className="absolute bottom-0 h-48 w-full bg-[#69C56B]" />

      <div className="absolute top-20 left-10 text-8xl">🌳</div>
      <div className="absolute top-28 right-10 text-8xl">🌳</div>

      {/* Title */}

      <div className="relative z-20 pt-24 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="font-fredoka text-5xl font-bold text-[#444]"
        >
          Development Services
        </motion.h2>

        <p className="mt-4 text-xl text-gray-600">
          Everything you need for your academic project.
        </p>

      </div>

      {/* Cards */}

      <div className="relative z-20 mx-auto mt-20 grid max-w-6xl gap-8 px-8 md:grid-cols-2 lg:grid-cols-3">

        {services.map((item) => (

          <motion.div
            key={item.title}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
            className={`
              rounded-3xl
              bg-gradient-to-br
              ${item.color}
              p-8
              text-center
              shadow-2xl
            `}
          >

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="text-6xl"
            >
              {item.emoji}
            </motion.div>

            <h3 className="mt-6 font-fredoka text-2xl font-bold text-white">
              {item.title}
            </h3>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Services;