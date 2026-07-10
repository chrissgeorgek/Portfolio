import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import Container from "./Container";

function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "chrissgeorgek@gmail.com",
      link: "mailto:chrissgeorgek@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 75588 43749",
      link: "tel:+917558843749",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Mallappally, Kerala, India",
      link: "#",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/chrissgeorgek",
      link: "https://github.com/chrissgeorgek",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/chrissgeorge",
      link: "https://in.linkedin.com/in/chrissgeorge",
    },
  ];

  return (
    <section className="py-12">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.35em] text-blue-400 text-sm mb-4">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Let's Build Something
            <span className="text-blue-500"> Amazing</span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto leading-8">
            I'm actively looking for Software Engineer, Software Developer,
            Python Developer and Full Stack opportunities.
            Feel free to reach out for collaborations or job opportunities.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <div className="rounded-30 bg-slate-900 border border-white/10 p-10 h-full">

              <div className="flex flex-col justify-between h-full">

                <div>
                  <h3 className="text-3xl font-bold mb-6">Let's Connect 👋</h3>

                  <p className="text-slate-400 leading-8 mb-10">
                    Whether you're hiring, collaborating on a project,
                    or just want to connect, I'd love to hear from you.
                  </p>
                </div>

                <a
                  href="mailto:chrissgeorgek@gmail.com"
                  className="inline-flex items-center gap-3 rounded-full bg-blue-600 hover:bg-blue-500 transition px-8 py-4 font-semibold"
                >
                  Send Email
                  <FaArrowRight />
                </a>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="space-y-6"
          >

            {contacts.map((item) => (

              <a
                key={item.title}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : ""}
                rel="noreferrer"
                className="flex items-center gap-6 rounded-30 bg-slate-900 border border-white/10 p-6 hover:border-blue-500 hover:-translate-y-1 transition"
              >

                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-lg">

                  {item.icon}

                </div>

                <div>

                  <h4 className="font-semibold text-lg">{item.title}</h4>

                  <p className="text-slate-400">{item.value}</p>

                </div>

              </a>

            ))}

          </motion.div>

        </div>

      </Container>

    </section>
  );
}

export default Contact;