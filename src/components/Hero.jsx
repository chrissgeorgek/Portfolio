import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";

import Container from "./Container";
import useHero from "../hooks/useHero";
import FloatingStudentBookHero from "../components/FloatingStudentBookHero";
function Hero() {
  const { hero, loading, error } = useHero();

  const techStack = [
    "Python",
    "Django",
    "React",
    "PostgreSQL",
    "REST APIs",
    "AWS",
  ];

  const stats = [
    {
      value: "3+",
      label: "Projects",
      icon: <FaCode />,
    },
    {
      value: "15+",
      label: "Technologies",
      icon: <FaLaptopCode />,
    },
    {
      value: "2",
      label: "Internships",
      icon: <FaServer />,
    },
  ];

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">

          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-6 text-slate-400">
            Loading Portfolio...
          </p>

        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center">

        <div className="text-center">

          <h2 className="text-2xl font-bold text-red-500">
            Failed to load Hero
          </h2>

          <p className="text-slate-400 mt-3">
            Please make sure Django server is running.
          </p>

        </div>

      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center">

      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-screen py-24">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-400 text-sm font-medium mb-8">

              🟢 Available for Full-Time Opportunities

            </div>

            <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-3">

              Hi, I'm

            </h2>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">

              {hero.name.split(" ")[0]}

              <br />

              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">

                {hero.name.split(" ").slice(1).join(" ")}

              </span>

            </h1>

            <h3 className="mt-8 text-2xl md:text-3xl font-bold leading-snug">

              {hero.headline}

            </h3>

            <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">

              {hero.description}

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href={hero.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold hover:scale-105 transition duration-300"
              >

                <FaDownload />

                Download Resume

              </a>

              <Link
                to="projects"
                smooth
                duration={500}
                offset={-70}
                className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 hover:border-blue-500 transition"
              >

                View Projects

                <FaArrowRight />

              </Link>

            </div>

            <div className="flex gap-5 mt-10">

              <a
                href={hero.github}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
              >

                <FaGithub />

              </a>

              <a
                href={hero.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
              >

                <FaLinkedin />

              </a>

            </div>

            <div className="flex flex-wrap gap-3 mt-10">

              {techStack.map((item) => (

                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-2 text-sm text-slate-300 hover:border-blue-500 transition"
                >

                  {item}

                </span>

              ))}

            </div>

            <div className="grid grid-cols-3 gap-5 mt-12">

              {stats.map((item) => (

                <motion.div
                  key={item.label}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center"
                >

                  <div className="flex justify-center text-blue-400 text-2xl mb-3">
                    {item.icon}
                  </div>

                  <h2 className="text-3xl font-black text-white">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.label}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>
          {/* RIGHT */}

<motion.div
initial={{ opacity: 0, x: 70 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
className="relative flex justify-center items-center"
>

{/* Background Glow */}

<div className="absolute w-[420px] h-[420px] rounded-full bg-blue-600/20 blur-[120px]" />

{/* Python */}

<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="absolute -left-8 top-10 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-xl px-5 py-3"
>
  🐍 Python
</motion.div>

{/* React */}

<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
  className="absolute -right-10 top-20 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-xl px-5 py-3"
>
  ⚛ React
</motion.div>

{/* Django */}

<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 4.5, repeat: Infinity }}
  className="absolute left-0 bottom-20 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-xl px-5 py-3"
>
  🚀 Django
</motion.div>

{/* PostgreSQL */}

<motion.div
  animate={{ y: [0, 8, 0] }}
  transition={{ duration: 6, repeat: Infinity }}
  className="absolute -right-6 bottom-28 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-xl px-5 py-3"
>
  🗄 PostgreSQL
</motion.div>

{/* Profile */}

<motion.div
  animate={{
    y: [0, -15, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative"
>

  <div
    className="
      rounded-[36px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-3
      shadow-[0_0_70px_rgba(37,99,235,.25)]
    "
  >
    <img
      src={hero.profile_image}
      alt={hero.name}
      className="w-[290px] md:w-[330px] lg:w-[370px] rounded-[28px] object-cover"
    />
  </div>

  {/* Floating Student Zone */}

  <div
  className="
    absolute
    left-1/2
    -translate-x-1/2

    -top-36
    sm:-top-44
    md:-top-48
    lg:-top-58

    z-40

    scale-75
    sm:scale-90
    md:scale-100
  "
>
  <FloatingStudentBookHero />
</div>

</motion.div>

</motion.div>

</div>

</Container>

</section>
);
}

export default Hero;