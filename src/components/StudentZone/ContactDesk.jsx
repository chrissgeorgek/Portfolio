import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const contacts = [
  {
    title: "Email",
    icon: <FaEnvelope />,
    value: "chrissgeorgek@gmail.com",
    color: "from-red-400 to-pink-500",
    link: "mailto:chrissgeorgek@gmail.com",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    value: "View Projects",
    color: "from-gray-700 to-gray-900",
    link: "https://github.com/",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    value: "Connect",
    color: "from-blue-500 to-cyan-500",
    link: "https://linkedin.com/",
  },
  {
    title: "WhatsApp",
    icon: <FaWhatsapp />,
    value: "Chat Now",
    color: "from-green-500 to-emerald-500",
    link: "https://wa.me/917558843749",
  },
];

const ContactDesk = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#FFF7E8] via-[#F9F4E5] to-[#CFEFC7]"
    >
      {/* Grass */}

      <div className="absolute bottom-0 h-44 w-full bg-[#63C468]" />

      {/* Trees */}

      <div className="absolute left-8 bottom-32 text-8xl">🌳</div>
      <div className="absolute right-8 bottom-32 text-8xl">🌳</div>

      {/* Title */}

      <div className="relative z-20 pt-24 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="font-fredoka text-5xl font-bold text-[#444]"
        >
          Contact Desk
        </motion.h2>

        <p className="mt-4 text-xl text-gray-600">
          Let's build something amazing together.
        </p>

      </div>

      {/* Reception Desk */}

      <div className="relative z-20 mx-auto mt-16 max-w-5xl">

        <div className="rounded-[40px] bg-[#FFE7BA] p-10 shadow-2xl border-4 border-[#C98B42]">

          <div className="text-center text-8xl">
            👨‍💻
          </div>

          <h3 className="mt-6 text-center text-3xl font-bold text-[#444]">
            Hi, I'm Chriss 👋
          </h3>

          <p className="mt-4 text-center text-gray-600">
            Feel free to reach out for projects, collaborations, or freelance work.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {contacts.map((item) => (

              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
                className={`
                  rounded-3xl
                  bg-gradient-to-r
                  ${item.color}
                  p-6
                  text-white
                  shadow-xl
                `}
              >

                <div className="flex items-center gap-5">

                  <div className="text-4xl">
                    {item.icon}
                  </div>

                  <div>

                    <h4 className="text-xl font-bold">
                      {item.title}
                    </h4>

                    <p className="mt-1">
                      {item.value}
                    </p>

                  </div>

                </div>

              </motion.a>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactDesk;