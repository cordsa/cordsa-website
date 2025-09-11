import './DonateForm.css';

export function DonateForm() {
  return (
    <>
      <section id="donate">
        <div className="donate-box">
          <h1>Donate Online</h1>
          <form className="donate-form" action="#" method="post">
            <div className="form-row">
              <label htmlFor="firstName">First Name *</label>
              <input type="text" id="firstName" name="firstName" required />

              <label htmlFor="lastName">Last Name *</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>

            <div className="form-row">
              <label htmlFor="donorType">Donor Type *</label>
              <input type="text" id="donorType" name="donorType" required />

              <label htmlFor="address">Address *</label>
              <input type="text" id="address" name="address" required />
            </div>

            <div className="form-row">
              <label htmlFor="company">Company Name / Group</label>
              <input type="text" id="company" name="company" />
            </div>

            <h3>Payment</h3>
            <div className="payment-options">
              <button type="button" className="paypal-btn">
                <img src="https://www.paypalobjects.com/webstatic/icon/pp258.png" alt="PayPal" />
                PayPal
              </button>
              <button type="button" className="card-btn">Donate with card</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}