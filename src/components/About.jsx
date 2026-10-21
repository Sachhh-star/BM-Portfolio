import { FaGraduationCap } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

function About() {
  return (
    <section id="about" className="about">
      <h2>About me</h2>
      <div className="about-card">
        <img
          src="/beamquik-photo.jpg"
          alt="Photo of Beam"
          className="about-photo"
        />
        <div className="about-info">
          <h3>Quick Profile</h3>
          <p className="about-text">
            Hi! I'm Beam, a second-year Software Development student at
            Alfa-college. I love building websites and games, from the design to
            the database. I'm looking for an internship where I can keep growing
            as a full-stack developer.
          </p>

          <div className="info-grid">
            <div className="info-item">
              <FaGraduationCap />
              <div>
                <h4>Education</h4>
                <p>MBO4 Software Development, Alfa-college</p>
                <p>Boumaboulevard, Groningen</p>
              </div>
            </div>

            <div className="info-item">
              <FaCode />
              <div>
                <h4>Focus</h4>
                <p>Full-stack development</p>
              </div>
            </div>
          </div>

          <a className="btn" href="/cv.pdf" download>
            Download Original CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
