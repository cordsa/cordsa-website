import './DonateForm.css';
import paypal from "../../../assets/img/icons/paypal.png";

export function DonateForm() {
  return (
    <>
<section id="donate-form">
        <div className="donate-box">
          <h1>Donate Online</h1>
          <h2>Donation Info</h2>
          <form className="donate-form" action="#" method="post">
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
            </div>

            <h3>Payment</h3>
            <div className="payment-options">
              <button type="button" className="paypal-button">
                <img src={paypal} alt="paypal logo" />
              </button>
              <button type="button" className="card-button">Donate with card</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}