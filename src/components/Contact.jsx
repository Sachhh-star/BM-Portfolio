import TiltCard from "./TiltCard";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-card">
        <h3 className="get-in-touch">Get in touch</h3>
        <p>
          Do you have a question or want to work together? You can find all my
          contact details in my CV.
        </p>
      </div>
      <TiltCard className="contact-cv">
        <div className="front cv-card">
          <div className="chip"></div>
          <p>MY CV</p>
          <h3>Want to contact me?</h3>
          <p className="cv-text">All my contact details are in my CV.</p>
          <div className="cv-buttons">
            <a className="btn" href="/cv.pdf" target="_blank">
              View my CV
            </a>
            <a className="btn" href="/cv.pdf" download>
              Download CV
            </a>
          </div>
        </div>
        <span className="tag tag-pdf">PDF</span>
        <span className="tag tag-talk">Let's talk</span>
      </TiltCard>
    </section>
  );
}

export default Contact;
