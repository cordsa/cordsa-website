import './Footer.css'
import instagram from '../assets/img/icons/instagram.png';
import tiktok from '../assets/img/icons/tiktok.png';
import facebook from '../assets/img/icons/facebook.png';

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer-info">
          <div className="location">
            <p><b>Our Location:</b> 0-81 Student Life Central, Student Unions Building</p>
            <p><b>Address:</b> 8900 - 114 Street NW Edmonton</p>
          </div>
          <div className="follow">
            <b>Follow Us :</b>
            <div>
              <a href="https://www.instagram.com/cordsa_ualberta" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram icon" /></a>
              <a href="https://www.tiktok.com/@cordsa_ualberta" target="_blank" rel="noopener noreferrer"><img src={tiktok} alt="tiktok icon" /></a>
              <a href="https://www.facebook.com/cordualberta" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook icon" /></a>
            </div>
          </div>
        </div>

        <div className="footer-line"></div>
        <div className="copyright">
          <p>© Copyright 2025 CORDSA</p>
          <a href="https://www.raredisorders.ca" target="_blank" rel="noreferrer noopener">Website design inspired by CORD</a>
        </div>
      </footer>
    </>
  )
}