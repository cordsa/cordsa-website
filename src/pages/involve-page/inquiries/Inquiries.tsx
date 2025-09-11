import './Inquiries.css';

export function Inquiries() {
  return (
    <>
      <section id="inquiries">
        <div className="questions-box">
          <h1>Have Questions ?</h1>
          <p>
            Your support matters to us. For any donation inquiries or to learn more about ways you can contribute to CORDSA, please contact us. We’d be glad to connect.
          </p>
          <h2>Email:</h2>
          <p>cordsa@ualberta.ca</p>
        </div>

        <div className="join-box">
          <h1>Join Our Student Club</h1>
          <p>
            Join CORDSA to be part of our mission! As a member, you’ll receive our email newsletter with event updates, rare disease insights, and opportunities to volunteer at our events, while earning service hours.
          </p>
          <button>Become a Member</button>
        </div>
      </section>
    </>
  )
}