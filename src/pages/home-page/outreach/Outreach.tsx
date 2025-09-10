import './Outreach.css';
import quote from '../../../assets/img/icons/quote.png';
import ashley from '../../../assets/img/team/Ashley.png';

export function Outreach() {
  return (
    <>
      <section id="outreach">
        <div className="outreach-join">
          <h1>Are you a UofA <b>Student?</b></h1>
          <p>Join CORDSA to be part of our mission! As a member, you’ll receive our email newsletter with event updates, rare disease insights, and opportunities to volunteer at our events, while earning service hours.</p>
          <div>
            <button>Rubric Portal</button>
            <button>Become a General Member</button>
          </div>
        </div>

        <div className="testimonial">
          <div className="quote">
            <img className="quote-icon" src={quote} alt="quote image" />
            <p className="testimonial-text">Joining cordsa has...  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.</p>
            <img className="quote-icon-reverse" src={quote} alt="quote image" />
          </div>

          <div className="testimonial-person">
            <img src={ashley} alt="profile pic" />
            <div className="testimonial-info">
              <p className="testimonial-name">Ashley Abrahart</p>
              <p className="title">CORDSA Director</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}