import './Donate.css';
import presentation from "../../../assets/img/photos/slideshow/presentation.png";
import { Link } from 'react-router-dom';

export function Donate() {
  return (
    <>
      <section id="donate">
        <div className="support-tab"><b>Support</b>&nbsp; the Cause</div>
        <div className="donate-desc">
          <p>Your <b>donation</b> helps CORDSA host fundraisers, educational events, and our annual Rare Disease Day Gala. Proceeds go toward running student-led initiatives, and to our chosen focus foundation of the year.</p>
          <Link className="donate-button-link" to="/get-involved"><button className="donate-button">Donate Now</button></Link>
        </div>
        <div className="slide-show">
          <img src={presentation} alt="presentation img" />
        </div>
      </section>
    </>
  )
}