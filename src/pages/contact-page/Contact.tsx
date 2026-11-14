import './Contact.css';

export function Contact() {
  return (
    <section id="contact">
      <div className="contact-box">
        <h1><b>Contact</b> Us</h1>

        <p>
          We'd love to hear from you!
          Have a question or want to get in touch?
          Send us an email.
        </p>

        <div className="email-text">
          <a href="mailto:cordsa@ualberta.ca">
            cordsa@ualberta.ca
          </a>
        </div>
      </div>
    </section>
  );
}
