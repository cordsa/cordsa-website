import cordsaLogo from '../assets/img/icons/logo.png';

export function Header() {
  return (
    <>
      <header id="header">
        <img src={cordsaLogo} alt="cordsa logo" />
        <h1>CORDSA</h1>
        <div className="meaning-text">
          <p>Canadian Organization for Rare</p>
          <p>Disorders Student Association</p>
        </div>

        <ul className="header-links">
          <li>about</li>
          <li>get involved</li>
          <li>resources</li>
          <li>contact us</li>
        </ul>
      </header>
    </>
  )
}