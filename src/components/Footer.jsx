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
          <h3>Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:s.chaipotha@student.alfa-college.nl">
              s.chaipotha@student.alfa-college.nl
            </a>
          </p>
          <p>Phone: 06-25448808</p>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Beam Chaipotha.</p>
    </footer>
  );
}

export default Footer;
