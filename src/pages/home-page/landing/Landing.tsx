import './Landing.css';

export function Landing() {
  return (
    <>
      <section id="landing">
        <div className="landing-image"></div>
        <div className="landing-info">
          <h1>
            <b>CORDSA</b> is a student-led affiliate of the Canadian Organization for Rare Disorders (CORD) at the University of Alberta.
          </h1>
          <div className="line"></div>
          <p>
            <b>Our mission</b> is to raise awareness for rare disorders, support research and education, and engage with community both on and off campus through advocacy and outreach. 
          </p>
          <div className="landing-button">
            <button>learn more</button>
          </div>
        </div>
      </section>
    </>
  )
}