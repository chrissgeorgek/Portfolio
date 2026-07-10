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

import profile from "../assets/images/profile.jpeg";
import Container from "./Container";

function Hero() {
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

              Chriss

              <br />

              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">

                George

              </span>

            </h1>

            <h3 className="mt-8 text-2xl md:text-3xl font-bold leading-snug">

              Building modern web applications
              that solve real-world problems.

            </h3>

            <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">

              Passionate software developer with experience
              building secure, scalable and responsive
              applications using Python, Django,
              React, PostgreSQL and modern web technologies.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="/resume.pdf"
                target="_blank"
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

            {/* Social */}

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/chrissgeorgek"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://in.linkedin.com/in/chrissgeorge"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
              >
                <FaLinkedin />
              </a>

            </div>

            {/* Tech Pills */}

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

            {/* Stats */}

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

{/* RIGHT */}

<motion.div
  initial={{ opacity: 0, x: 70 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center items-center"
>

  {/* Glow */}

  <div className="absolute w-[380px] h-[380px] rounded-full bg-blue-600/20 blur-[110px]" />

  {/* Python */}

  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute -left-6 top-12 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-xl px-5 py-3"
  >
    🐍 Python
  </motion.div>

  {/* React */}

  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute -right-8 top-16 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-xl px-5 py-3"
  >
    ⚛ React
  </motion.div>

  {/* Django */}

  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4.5, repeat: Infinity }}
    className="absolute left-0 bottom-16 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-xl px-5 py-3"
  >
    🚀 Django
  </motion.div>

  {/* PostgreSQL */}

  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute -right-6 bottom-20 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-xl px-5 py-3"
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
    className="relative rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl p-3 shadow-[0_0_60px_rgba(37,99,235,.25)]"
  >

    <img
      src={profile}
      alt="Chriss George"
      className="w-[300px] lg:w-[340px] rounded-[26px] object-cover"
    />

  </motion.div>

</motion.div>

</div>

</Container>

</section>
);
}

export default Hero;