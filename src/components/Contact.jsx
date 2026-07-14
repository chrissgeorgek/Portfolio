import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";

import Container from "./Container";
import { sendMessage } from "../services/messageService";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      await sendMessage(form);

      toast.success("Message sent successfully.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      toast.error("Unable to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
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
            Python Developer and Full Stack opportunities. Feel free to reach
            out for collaborations or job opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-slate-900 border border-white/10 p-8"
            >
              <h3 className="text-3xl font-bold mb-8">
                Send Me a Message
              </h3>

              <div className="space-y-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-blue-500"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-blue-500"
                />

                <textarea
                  rows={6}
                  name="message"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-blue-500 resize-none"
                />
                                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 transition py-4 font-semibold flex items-center justify-center gap-3 disabled:opacity-60"
                >
                  <FaPaperPlane />

                  {loading ? "Sending..." : "Send Message"}

                </button>

              </div>

            </form>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            {contacts.map((item) => (

              <a
                key={item.title}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-6 rounded-3xl bg-slate-900 border border-white/10 p-6 hover:border-blue-500 hover:-translate-y-1 transition"
              >

                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-lg">

                  {item.icon}

                </div>

                <div>

                  <h4 className="text-lg font-semibold">

                    {item.title}

                  </h4>

                  <p className="text-slate-400 break-all">

                    {item.value}

                  </p>

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