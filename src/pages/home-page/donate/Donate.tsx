import './Donate.css';
import presentation from "../../assets/img/photos/slideshow/presentation.png";

export function Donate() {
  return (
    <>
      <div className="support-text"><b>Support</b> the cause</div>
      <div className="donate-descr">
        <p>Your donation helps CORDSA host fundraisers, educational events, and our annual Rare Disease Day Gala. Proceeds go toward running student-led initiatives, and to our chosen focus foundation of the year.</p>
        <button>Donate Now</button>
      </div>
      <div className="slide-show">
        <img src={presentation} alt="presentation img" />
      </div>
    </>
  )
}