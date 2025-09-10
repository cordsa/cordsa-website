import cordsaLogo from '../assets/img/icons/logo.png';
import './Header.css';

export function Header() {
  return (
    <>
      <header id="header">
        <div className="cordsa-logo">
          <img src={cordsaLogo} alt="cordsa logo" />
          <h1>CORDSA</h1>
          <div className="meaning-text">
            <p>Canadian Organization for Rare</p>
            <p>Disorders Student Association</p>
          </div>
        </div>

        <ul className="header-links">
          <li>About</li>
          <li>Get Involved</li>
          <li>Resources</li>
          <li>Contact Us</li>
        </ul>
      </header>
    </>
  )
}