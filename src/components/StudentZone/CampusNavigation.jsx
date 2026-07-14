import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {
  FaBookOpen,
  FaLaptopCode,
  FaVideo,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

const places = [
  {
    title: "Project Library",
    subtitle: "Completed Projects",
    icon: FaBookOpen,
    target: "library",
    color: "#4F8EF7",
  },
  {
    title: "Services",
    subtitle: "Development Services",
    icon: FaLaptopCode,
    target: "services",
    color: "#F6A623",
  },
  {
    title: "Demo Lab",
    subtitle: "Watch Live Projects",
    icon: FaVideo,
    target: "demo",
    color: "#F85D7A",
  },
  {
    title: "Contact Desk",
    subtitle: "Let's Work Together",
    icon: FaHeadset,
    target: "contact",
    color: "#3CCB7F",
  },
];

export default function CampusNavigation() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-200 via-sky-100 to-[#d7f6cf]">

      {/* Sky Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff,transparent_70%)] opacity-70" />

      {/* Hills */}

      <div className="absolute bottom-0 left-0 w-full h-56 bg-[#82D67B] rounded-t-[100%]" />

      {/* Floating Clouds */}

      <motion.div
        animate={{ x: [-120, 1200] }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-16 left-0 w-44 h-16 rounded-full bg-white/70 blur-sm"
      />

      <motion.div
        animate={{ x: [1200, -200] }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-36 right-0 w-56 h-20 rounded-full bg-white/60 blur-sm"
      />

      <div className="relative z-20 max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-4xl md:text-6xl font-black text-[#51351E]">
            Student Zone Campus
          </h2>

          <p className="mt-3 text-lg text-gray-700">
            Choose where you'd like to explore
          </p>

        </motion.div>

        {/* Campus */}

        <div className="relative mt-20">

          {/* Roads */}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            <div className="relative">

              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-80 rounded-full bg-[#E8D1A8]" />

              <div className="absolute top-1/2 -translate-y-1/2 h-4 w-[480px] rounded-full bg-[#E8D1A8]" />

              {/* Center Circle */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-white bg-cyan-300 shadow-xl"
              />

            </div>

          </div>

          {/* Buildings */}

          <div className="grid grid-cols-2 gap-10 md:gap-16">

            {places.map((item, index) => {

              const Icon = item.icon;

              return (

                <ScrollLink
                  key={item.title}
                  to={item.target}
                  smooth
                  duration={700}
                  offset={-60}
                >

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -8,
                    }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      delay: index * .2,
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="flex justify-center cursor-pointer"
                  >

                    <div className="w-44 md:w-52">

                      {/* Roof */}

                      <div
                        className="mx-auto h-0 w-0 border-l-[42px] border-r-[42px] border-b-[30px] border-l-transparent border-r-transparent md:border-l-[55px] md:border-r-[55px] md:border-b-[40px]"
                        style={{
                          borderBottomColor: item.color,
                        }}
                      />

                      {/* House */}

                      <div className="rounded-[28px] border-4 border-[#8B5A2B] bg-[#FFF7EA] p-5 shadow-2xl">

                        <div
                          className="mx-auto flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl text-white shadow-lg"
                          style={{
                            background: item.color,
                          }}
                        >
                          <Icon size={28} />
                        </div>

                        <h3 className="mt-5 text-center text-lg md:text-xl font-black text-[#51351E]">

                          {item.title}

                        </h3>

                        <p className="mt-2 text-center text-sm text-gray-600">

                          {item.subtitle}

                        </p>

                        <div className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-[#8B5A2B]">

                          Enter

                          <FaArrowRight />

                        </div>

                      </div>

                    </div>

                  </motion.div>

                </ScrollLink>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}