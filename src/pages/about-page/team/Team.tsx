import './Team.css';
import { teamMembers, type TeamMember } from '../../../data/team/2025-2026/team-info';

export function Team() {
  return (
    <>
      <section id="team">
        <div className="team-header">
          <div className="team-line"></div>
          <div className="team-header-text">
            <h1>Meet the Team</h1>
            <h2>2025-2026</h2>
          </div>
          <div className="team-line"></div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member: TeamMember) => (
            <div className="member-box">
              <img src={member.image} alt={member.name} />
              <div>
                <h1>{member.name}</h1>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}