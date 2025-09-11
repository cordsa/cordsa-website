import cordsaLogo from '../assets/img/icons/logo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header id="header">
        <NavLink to="/" className="cordsa-logo">
          <img src={cordsaLogo} alt="cordsa logo" />
          <h1>CORDSA</h1>
          <div className="meaning-text">
            <p>Canadian Organization for Rare</p>
            <p>Disorders Student Association</p>
          </div>
        </NavLink>

        <ul className="header-links">
          <li><NavLink className="link" to="/about">About</NavLink></li>
          <li><NavLink className="link" to="/get-involved">Get Involved</NavLink></li>
          <li><NavLink className="link" to="/resources">Resources</NavLink></li>
          <li><NavLink className="link" to="/contact-us">Contact Us</NavLink></li>
        </ul>
      </header>
    </>
  )
}