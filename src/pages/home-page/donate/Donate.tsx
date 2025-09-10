import './Donate.css';
import presentation from "../../../assets/img/photos/slideshow/presentation.png";

export function Donate() {
  return (
    <>
      <section id="donate">
        <div className="support-tab"><b>Support</b>&nbsp; the cause</div>
        <div className="donate-desc">
          <p>Your <b>donation</b> helps CORDSA host fundraisers, educational events, and our annual Rare Disease Day Gala. Proceeds go toward running student-led initiatives, and to our chosen focus foundation of the year.</p>
          <button>Donate Now</button>
        </div>
        <div className="slide-show">
          <img src={presentation} alt="presentation img" />
        </div>
      </section>
    </>
  )
}