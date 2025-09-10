import './Mission.css';
import team1 from "../../../assets/img/team/slideshow/team-1.jpg";
import team2 from "../../../assets/img/team/slideshow/team-2.jpeg";
import team3 from "../../../assets/img/team/slideshow/team-3.jpeg";
import team4 from "../../../assets/img/team/slideshow/team-4.jpeg";
import team5 from "../../../assets/img/team/slideshow/team-5.jpg";
import team6 from "../../../assets/img/team/slideshow/team-6.png";
import team7 from "../../../assets/img/team/slideshow/team-7.png";
import team8 from "../../../assets/img/team/slideshow/team-8.jpg";
import { useEffect, useState } from 'react';

export function Mission() {
  // images for the slideshow 
  const teams = [team1, team2, team3, team4, team5, team6, team7, team8];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % teams.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [teams.length]);

  return (
    <>
      <section id="mission">
        <div className="mission-text">
          <h1>Our Mission</h1>
          <p>
            Here at the University of Alberta, we aim to raise awareness for rare disorders and their associated challenges by supporting research and education, both on and off campus, through our student-led outreach and fundraising initiatives.
          </p>
        </div>

        <div className="slide-show">
          <img 
            src={teams[current]} 
            alt={`team ${current + 1}`} 
          />
        </div>
      </section>
    </>
  )
}