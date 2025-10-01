import './Contact.css';
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    setStatus("Message sent!");
    form.reset();

    setTimeout(() => {
      setStatus(""); // clear message after 5s
    }, 5000);
  };

  return (
    <>
      <section id="contact">
        <div className="contact-box">
          <h1><b>Contact</b> Us</h1>
          <p>We’d love to hear from you! Fill out the form and we’ll get back to you within 2–3 business days.</p>
          <form 
            action="https://formspree.io/f/movkdzyr" 
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="formType" value="Contact Form" />
            <input
              type="text" 
              name="name" 
              placeholder="Name *" 
              required
            />
            <input
              type="email" 
              name="email" 
              placeholder="Email *" 
              required
            />
            <textarea
              name="comments" 
              placeholder="Comments"
            ></textarea>
            <div className="submit-container">
              <button className="submit-button" type="submit">send</button>
              {status && <p className="success-message">{status}</p>}
              <div className="email-text">
                our email: <a href="mailto:cordsa@ualberta.ca">cordsa@ualberta.ca</a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
