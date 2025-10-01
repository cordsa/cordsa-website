import { useState, useRef } from "react";
import "./Newsletter.css";

export function Newsletter() {
  const [status, setStatus] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    setStatus("Subscribed!");
    setTimeout(() => setStatus(""), 4000);

    // Clear after a small delay
    setTimeout(() => {
      formRef.current?.reset();
    }, 500);
  };

  return (
    <section id="news-letter">
      <h1>
        Join Our <b>Newsletter</b>
      </h1>
      {status && <p className="status-msg">{status}</p>}

      <form
        ref={formRef}
        className="news-email"
        action="https://script.google.com/macros/s/AKfycbynXSG4y4xUlW0Ycych3RD1tVktt0hyU-zIhTMFwyam1Kgv84Z7U2q7Xj78_36zFlRK4g/exec"
        method="GET"
        target="hidden_iframe"
        onSubmit={handleSubmit}
      >
        <div className="news-email">
          <input type="email" name="email" placeholder="Email" required />
          <button type="submit">Subscribe</button>
        </div>
      </form>
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
    </section>
  );
}
