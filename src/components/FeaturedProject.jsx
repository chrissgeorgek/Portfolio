import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import saha from "../assets/projects/saha.jpeg";
import Container from "./Container";

const tech = [
  "React",
  "Django REST",
  "PostgreSQL",
  "Redis",
  "JWT",
  "WebSockets",
];

function FeaturedProject() {
  return (
    <section className="py-12 bg-slate-950">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">
            FEATURED PROJECT
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            SAHA
            <span className="text-blue-500"> Learning Platform</span>
          </h2>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-center rounded-30 border border-white/10 bg-slate-900 overflow-hidden"
        >

          {/* LEFT */}

          <div className="overflow-hidden">

            <img
              src={saha}
              alt="SAHA Learning Platform"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />

          </div>

          {/* RIGHT */}

          <div className="p-8 lg:p-12">

            <h3 className="text-3xl font-bold mb-6">

              Full Stack EdTech Platform

            </h3>

            <p className="text-slate-400 leading-8 mb-8">

              Developed a scalable role-based learning platform supporting
              Students, Teachers and Administrators. Built secure JWT
              authentication, real-time chat using Django Channels &
              WebSockets, PostgreSQL database architecture, REST APIs,
              community modules and responsive dashboards.

            </p>

            <div className="flex flex-wrap gap-3 mb-10">

              {tech.map((item) => (

                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm"
                >
                  {item}
                </span>

              ))}

            </div>

            <div className="flex flex-wrap gap-5">

              <a
                href="https://github.com/chrissgeorgek/YOUR_REPOSITORY"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full bg-blue-600 hover:bg-blue-500 transition px-7 py-3 font-semibold"
              >
                <FaGithub />
                GitHub
              </a>

              {/* <a
                href="#"
                className="flex items-center gap-3 rounded-full border border-slate-700 hover:border-blue-500 px-7 py-3 transition"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a> */}

            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}

export default FeaturedProject;