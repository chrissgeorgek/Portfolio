import profile from "../assets/portfolio.jpeg";
import resume from "../assets/resume.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-tag">
          👋 Hello, I'm
        </p>

        <h1>
          Chriss <span>George</span>
        </h1>

        <h2>Python Full Stack Developer</h2>

        <p className="hero-description">
          MCA graduate with hands-on experience building scalable web
          applications using Python, Django, React, PostgreSQL, and REST APIs.
          Passionate about creating secure, responsive, and user-focused
          software solutions.
        </p>

        <div className="hero-buttons">

          <a
            href={resume}
            download
            className="btn primary-btn"
          >
            <FaDownload />
            Resume
          </a>

          <a
            href="#contact"
            className="btn secondary-btn"
          >
            <FaArrowRight />
            Contact Me
          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:chrissgeorgek@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="profile-card">

          <img
            src={profile}
            alt="Chriss George"
            className="profile-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;