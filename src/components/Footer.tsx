import './Footer.css'
import instagram from '../assets/img/icons/instagram.png';
import tiktok from '../assets/img/icons/tiktok.png';
import facebook from '../assets/img/icons/facebook.png';

export function Footer() {
  return (
    <>
      <footer>
        <div>
          <div className="location">
            <p><b>Our Location:</b> 0-81 Student Life Central, Student Unions Building</p>
            <p><b>Address:</b> 8900 - 114 Street NW Edmonton</p>
          </div>
          <div className="follow">
            <b>Follow Us :</b>
            <div>
              <img src={instagram} alt="instagram icon" />
              <img src={tiktok} alt="tiktok icon" />
              <img src={facebook} alt="facebook icon" />
            </div>
          </div>
        </div>

        <div className="line"></div>
        <div>
          <p>© Copyright 2025 CORDSA</p>
          <p>Website design inspired by CORD</p>
        </div>
      </footer>
    </>
  )
}