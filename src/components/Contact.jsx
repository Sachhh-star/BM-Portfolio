import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

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
          (setStatus("success"));
          form.reset();
        },
        () => {
          (setStatus("error"));
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
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
          {status === "success" && (
            <p className="form-message success">
              Thank you! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="form-message error">
              Sorry, something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
