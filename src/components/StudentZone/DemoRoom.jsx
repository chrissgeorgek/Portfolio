import { motion } from "framer-motion";

const videos = [
  {
    title: "Python Django Project",
    emoji: "🐍",
  },
  {
    title: "React Portfolio",
    emoji: "⚛️",
  },
  {
    title: "Machine Learning",
    emoji: "🤖",
  },
];

const DemoRoom = () => {
  return (
    <section
      id="demo"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1D2942] via-[#263859] to-[#344D67]"
    >
      {/* Ceiling Lights */}

      <div className="absolute top-0 left-0 h-40 w-full bg-gradient-to-b from-yellow-300/10 to-transparent" />

      {/* Projector */}

      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-12 -translate-x-1/2 text-7xl"
      >
        📽️
      </motion.div>

      {/* Projector Light */}

      <div
        className="
          absolute
          left-1/2
          top-28
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-yellow-100/10
          blur-3xl
        "
      />

      {/* Title */}

      <div className="relative z-20 pt-36 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="font-fredoka text-5xl font-bold text-white"
        >
          Demo Room
        </motion.h2>

        <p className="mt-4 text-lg text-slate-300">
          Watch project demonstrations before choosing.
        </p>

      </div>

      {/* Cinema Screen */}

      <div className="relative z-20 mx-auto mt-16 w-[90%] max-w-5xl">

        <div className="rounded-3xl border-8 border-gray-700 bg-white shadow-2xl">

          <div className="aspect-video flex items-center justify-center bg-slate-100">

            <div className="text-center">

              <div className="text-7xl">
                🎬
              </div>

              <p className="mt-4 text-2xl font-bold text-gray-700">
                Project Demo Screen
              </p>

              <p className="mt-2 text-gray-500">
                YouTube videos will appear here later.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Demo Cards */}

      <div className="relative z-20 mx-auto mt-16 grid max-w-6xl gap-8 px-6 md:grid-cols-3">

        {videos.map((item) => (

          <motion.div
            key={item.title}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-lg border border-white/10"
          >

            <div className="text-center">

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

              <h3 className="mt-5 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <button
                className="
                  mt-6
                  rounded-full
                  bg-red-500
                  px-6
                  py-3
                  font-semibold
                  text-white
                  hover:bg-red-600
                "
              >
                ▶ Watch Demo
              </button>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Seats */}

      <div className="absolute bottom-0 flex w-full justify-center gap-8 pb-8 text-5xl opacity-70">

        💺 💺 💺 💺 💺 💺 💺 💺

      </div>

    </section>
  );
};

export default DemoRoom;