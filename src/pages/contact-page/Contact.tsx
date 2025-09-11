import './Contact.css';

export function Contact() {
  return (
    <>
      <section id="contact">
        <div className="contact-box">
          <h1><b>Contact</b> Us</h1>
          <p>We’d love to hear from you! Fill out the form and we’ll get back to you within 2–3 business days.</p>
          <form action="#" method="post">
            <input
              type="text" name="name" placeholder="Name *" required
            />
            <input
              type="email" name="email" placeholder="Email *" required
            />
            <textarea
              name="comments" placeholder="Comments">
            </textarea>
            <div className="submit-container">
              <button type="submit">send</button>
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