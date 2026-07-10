import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import Container from "./Container";

const experiences = [
  {
    company: "Etome Works Ltd",
    role: "Software Engineer Intern",
    duration: "Apr 2026 – June 2026",
    description:
      "Developed the SAHA Learning Platform using Django REST Framework and React.js. Implemented JWT authentication, role-based access control, PostgreSQL database design, WebSockets, Redis, and real-time chat features while contributing to scalable backend APIs and responsive frontend interfaces.",
    tech: [
      "React",
      "Django REST",
      "PostgreSQL",
      "Redis",
      "JWT",
      "WebSockets",
    ],
  },

  {
    company: "IPSR Solutions Limited",
    role: "Software Developer Trainee",
    duration: "May 2025 – Apr 2026",
    description:
      "Developed a role-based Training Management System using Django and PostgreSQL. Built modules for student management, faculty management, batch allocation, attendance tracking, daily work reporting, approvals, and administrative operations with secure authentication and CRUD functionality.",
    tech: [
      "Python",
      "Django",
      "PostgreSQL",
      "Bootstrap",
      "Git",
    ],
  },
];

function Experience() {
  return (
    <section className="bg-slate-950 py-12">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">
            EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            My Professional
            <span className="text-blue-500"> Journey</span>
          </h2>

        </motion.div>


        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-px bg-blue-500/30"></div>

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
              className="relative flex gap-8 mb-20"
            >

              <div className="relative z-10 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/40">

                <FaBriefcase />

              </div>

              <div className="flex-1 rounded-30 border border-white/10 bg-slate-900 p-8 hover:border-blue-500 transition">

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 mb-6">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {exp.role}
                    </h3>

                    <p className="text-blue-400 mt-1">
                      {exp.company}
                    </p>

                  </div>

                  <span className="text-slate-400">
                    {exp.duration}
                  </span>

                </div>

                <p className="text-slate-400 leading-8 mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3">

                  {exp.tech.map((item) => (

                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Experience;