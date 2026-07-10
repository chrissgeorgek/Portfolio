import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaRocket,
} from "react-icons/fa";
import Container from "./Container";

const cards = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    description:
      "Building responsive and scalable web applications using modern frontend and backend technologies.",
  },
  {
    icon: <FaServer />,
    title: "Backend Engineering",
    description:
      "Developing secure APIs, authentication systems, database architecture and business logic using Django.",
  },
  {
    icon: <FaCode />,
    title: "Clean Code",
    description:
      "Focused on writing reusable, maintainable and well-structured code following best practices.",
  },
  {
    icon: <FaRocket />,
    title: "Continuous Learning",
    description:
      "Always exploring modern technologies and improving development skills through real-world projects.",
  },
];

const stats = [
  {
    value: "3+",
    label: "Projects",
  },
  {
    value: "2",
    label: "Internships",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "2024",
    label: "MCA Graduate",
  },
];

function About() {
  return (
    <section className="bg-slate-950 py-12">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.35em] text-blue-400 text-sm mb-4">ABOUT ME</p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Passionate About Building
            <span className="text-blue-500"> Software.</span>
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-4">

              Turning Ideas into Scalable Applications

            </h3>

            <p className="text-slate-400 leading-8 mb-3">

              I'm Chriss George, a software developer passionate about
              building secure, scalable and user-focused applications.
              My experience includes developing role-based systems,
              REST APIs, real-time communication modules and responsive
              interfaces using Python, Django, React and PostgreSQL.

            </p>

            <p className="text-slate-400 leading-8 mb-10">

              I enjoy solving real-world problems through clean code,
              modern software architecture and continuous learning.
              I'm always looking for opportunities to contribute,
              collaborate and build impactful digital products.

            </p>

            <div className="grid grid-cols-2 gap-5">

              {stats.map((item) => (

                <div
                  key={item.label}
                  className="rounded-30 border border-white/10 bg-slate-900 p-7 hover:border-blue-500 transition"
                >

                  <h2 className="text-4xl font-black text-blue-500">

                    {item.value}

                  </h2>

                  <p className="text-slate-400 mt-2">

                    {item.label}

                  </p>

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            {cards.map((card) => (

              <div
                key={card.title}
                className="rounded-30 border border-white/10 bg-slate-900 p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl mb-6">

                  {card.icon}

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {card.title}

                </h3>

                <p className="text-slate-400 leading-7">

                  {card.description}

                </p>

              </div>

            ))}

          </motion.div>

        </div>

      </Container>

    </section>
  );
}

export default About;