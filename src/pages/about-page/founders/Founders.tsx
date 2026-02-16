import './Founders.css';
import founders from "../../../assets/img/team/founders.png";

export function Founders() {
  return (
    <>
      <section id="founders">
        <img src={founders} alt="founders image" />
        <div className="founders-text">
          <h1>Our Founders</h1>
          <ul className="founders-text-list">
            <li>
              NORDSA was co-founded in 2017 by <b>Jessica Wijesundera</b> and <b>Divya Shah</b> to address the lack of advocacy for less common medical conditions.
              </li>
            <li>
              Initially affiliated with the U.S.-based National Organization for Rare Disorders (NORD), the group focused on education and fundraising.
              </li>
            <li>
              The club won the <b>Most Promising Group Award</b> from the UofA Student’s Union in 2018.
              </li>
            <li>
              Now called CORDSA, we align with the Canadian Organization for Rare Disorders (CORD) to support individuals in Canada affected by rare diseases.
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}