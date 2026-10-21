import { MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      .then(
        () => {
          alert("Thank you! Your message has been sent.");
          form.reset();
        },
        () => {
          alert("Sorry, something went wrong. Please try again.");
        },
      );
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-card">
        <h3 className="get-in-touch">Get in touch</h3>
        <p>
          Do you have a question or want to work together? Feel free to reach
          out to me.
        </p>
        {/* <div className="email-box">
          <MdEmail />
          <span>
            <a
              className="email"
              href="mailto:s.chaipotha@student.alfa-college.nl"
            >
              s.chaipotha@student.alfa-college.nl
            </a>
          </span>
        </div> */}
        {/* <div className="telefoon-box">
          <p>
            <FaMobile /> 06-25448808
          </p>
        </div> */}
      </div>

      <div className="contact-box">
        <form onSubmit={handleSubmit}>
          <div className="contact-input">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" required />
          </div>
          <div className="contact-input">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" name="email" required />
          </div>
          <div className="contact-input">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
