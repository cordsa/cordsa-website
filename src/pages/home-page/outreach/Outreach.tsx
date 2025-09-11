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
            <a href="https://campus.hellorubric.com/?s=12208" target="_blank" rel="noopener noreffer"><button>Rubric Portal</button></a>
            <a href="https://forms.gle/WAJ2dAhQmTwPNkp59" target="_blank" rel="noopener noreffer"><button>Become a General Member</button></a>
          </div>
        </div>

        <div className="testimonial">
          <div className="quote">
            <img className="quote-icon" src={quote} alt="quote image" />
            <p className="testimonial-text">Being part of CORDSA has deepened my understanding of the rare disease community and given me the privilege of connecting with inspiring and resilient individuals and professionals. Collaborating on these projects with such dedicated peers makes this work even more meaningful!</p>
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