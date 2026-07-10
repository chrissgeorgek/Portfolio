import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
  } from "react-icons/fa";
  
  function Footer() {
  
    return (
  
      <footer className="footer">
  
        <h2>Chriss George</h2>
  
        <p>
          Python Full Stack Developer
        </p>
  
        <div className="footer-icons">
  
          <a
            href="https://github.com/chrissgeorgek"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
  
          <a
            href="https://linkedin.com/in/chrissgeorge"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
  
          <a href="mailto:chrissgeorgek@gmail.com">
            <FaEnvelope />
          </a>
  
        </div>
  
        <p className="copyright">
  
          © {new Date().getFullYear()} Chriss George
  
          <br />
  
          Built with React & ❤️
  
        </p>
  
      </footer>
  
    );
  
  }
  
  export default Footer;