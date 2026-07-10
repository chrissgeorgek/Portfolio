import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiJavascript,
  SiDjango,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import Container from "./Container";

const categories = [
  {
    title: "Frontend",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
  {
    title: "Backend",
    color: "from-blue-500 to-indigo-600",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
    ],
  },
  {
    title: "Database",
    color: "from-indigo-500 to-purple-600",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    title: "Tools",
    color: "from-sky-500 to-cyan-600",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "AWS", icon: <FaAws /> },
    ],
  },
];

function TechStack() {
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
            TECH STACK
          </p>

          <h2 className="text-4xl md:text-5xl font-black">

            Technologies I
            <span className="text-blue-500"> Work With</span>

          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {categories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-30 border border-white/10 bg-slate-900 overflow-hidden"
            >

              <div
                className={`bg-gradient-to-r ${category.color} p-6`}
              >

                <h3 className="text-2xl font-bold">

                  {category.title}

                </h3>

              </div>

              <div className="grid grid-cols-2 gap-5 p-7">

                {category.skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="flex items-center gap-4 rounded-2xl bg-slate-800 p-4 hover:bg-slate-700 transition"
                  >

                    <div className="text-3xl text-blue-400">

                      {skill.icon}

                    </div>

                    <span className="font-medium">

                      {skill.name}

                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default TechStack;