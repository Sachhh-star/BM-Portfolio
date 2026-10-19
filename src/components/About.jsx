function About() {
  return (
    <section id="about" className="about">
      <h2>About me</h2>
      <div className="about-card">
        <img src="/beamquik-photo.jpg" alt="Photo of Beam" className="about-photo" />
        <div className="about-info">
          <h3>Quick Profile</h3>
          <h4>Education</h4>
          <p>MBO4 Software Development, Alfa-college</p>
          <h4>Location</h4>
          <p>Grootegast, Groningen</p>
          <h4>School E-mail</h4>
          <p>
            <a href="mailto:s.chaipotha@student.alfa-college.nl">
              s.chaipotha@student.alfa-college.nl
            </a>
          </p>
          <h4>Phone</h4>
          <p>06-25448808</p>
          <a className="btn" href="/cv.pdf" download>
            Download Original CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
