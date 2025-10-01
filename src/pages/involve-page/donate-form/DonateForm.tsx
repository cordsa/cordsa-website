import './DonateForm.css';
import paypal from "../../../assets/img/icons/paypal.png";
import { useState } from "react";

export function DonateForm() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    setStatus("Form submitted!");
    form.reset();

    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
    <>
      <section id="donate-form">
        <p className="donate-note">Note: The donation form isn’t active yet. Coming soon!</p>
        <div className="donate-box">
          <h1>Donate Online</h1>
          <h2>Donation Info</h2>
          <form
            className="donate-form"
            action="https://formspree.io/f/movkdzyr"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="formType" value="Donor Form" />

            <div className="form-row">
              <div className="first-name">
                <label htmlFor="firstName">First Name <span>*</span></label>
                <input type="text" id="firstName" name="firstName" required />
              </div>

              <div className="last-name">
                <label htmlFor="lastName">Last Name <span>*</span></label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>

            <div className="form-row">
              <div className="donor-type">
                <label htmlFor="donorType">Donor Type <span>*</span></label>
                <input type="text" id="donorType" name="donorType" required />
              </div>

              <div className="address">
                <label htmlFor="address">Address <span>*</span></label>
                <input type="text" id="address" name="address" required />
              </div>
            </div>

            <div className="form-row">
              <div className="donor-group-name">
                <label htmlFor="company">Company Name / Group</label>
                <input type="text" id="company" name="company" />
              </div>

              <div className="placeholder-input"></div>
            </div>

            <h3>Payment</h3>
            <div className="payment-options">
              <button type="button" className="paypal-button">
                <img src={paypal} alt="paypal logo" />
              </button>
              <button type="button" className="card-button">
                Donate with card
              </button>
            </div>

            {status && <p className="success-message">{status}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
