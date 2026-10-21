import { FaGithub } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Beam Chaipotha</h3>
          <p>Full-Stack Software Developer</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skill">Skill</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Find me</h3>
          <a
            className="footer-social"
            href="https://github.com/Sachhh-star"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} Beam Chaipotha.
        </p>

        <a href="#home" className="back-to-top">
          <FaArrowUp /> Back to top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
