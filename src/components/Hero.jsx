function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>
          Hello,
          <br /> I'm Beam
        </h1>
        <h2>Full stack development</h2>
        <p>
          Welcome to my portfolio! I'm a second-year Software Development
          student at Alfa-college in Groningen. Here, I share my projects and
          what I'm learning along the way.
        </p>
        <div className="hero-buttons">
          <a className="btn" href="#project">
            View my project
          </a>
          <a className="btn" href="/cv.pdf" target="_blank">
            View my CV
          </a>
          <a
            className="btn"
            href="https://github.com/Sachhh-star"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a className="btn" href="mailto:s.chaipotha@student.alfa-college.nl">
            s.chaipotha@student.alfa-college.nl
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <img src="/beam-photo.jpg" alt="Photo of Beam" className="photo-real" />
        <img
          src="/beam-anime.jpg"
          alt="Drawing of Beam"
          className="photo-drawing"
        />
      </div>
    </section>
  );
}

export default Hero;
