import {
    FaEnvelope,
    FaPhone,
    FaLinkedin,
    FaGithub,
    FaMapMarkerAlt
  } from "react-icons/fa";
  
  function Contact() {
  
    return (
  
      <section className="section">
  
        <div className="section-title">
  
          <h2>Contact Me</h2>
  
          <p>Let's connect</p>
  
        </div>
  
        <div className="contact-container">
  
          <div className="contact-card">
  
            <div className="contact-item">
  
              <FaEnvelope />
  
              <div>
  
                <h3>Email</h3>
  
                <a href="mailto:chrissgeorgek@gmail.com">
                  chrissgeorgek@gmail.com
                </a>
  
              </div>
  
            </div>
  
            <div className="contact-item">
  
              <FaPhone />
  
              <div>
  
                <h3>Phone</h3>
  
                <a href="tel:+917558843749">
                  +91 75588 43749
                </a>
  
              </div>
  
            </div>
  
            <div className="contact-item">
  
              <FaLinkedin />
  
              <div>
  
                <h3>LinkedIn</h3>
  
                <a
                  href="https://linkedin.com/in/chrissgeorge"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/chrissgeorge
                </a>
  
              </div>
  
            </div>
  
            <div className="contact-item">
  
              <FaGithub />
  
              <div>
  
                <h3>GitHub</h3>
  
                <a
                  href="https://github.com/chrissgeorgek"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/chrissgeorgek
                </a>
  
              </div>
  
            </div>
  
            <div className="contact-item">
  
              <FaMapMarkerAlt />
  
              <div>
  
                <h3>Location</h3>
  
                <p>Mallappally, Kerala, India</p>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
  
    );
  }
  
  export default Contact;