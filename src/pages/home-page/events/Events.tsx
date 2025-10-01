import "./Events.css";
import { upcomingEvents } from "../../../data/upcoming-events-info";

export function Events() {
  return (
    <section id="events">
      <div className="events-container">
        <div className="events-info">
          <h1>
            Upcoming <b>Events</b>
          </h1>
          <a href="/about#past-event">
            <button className="archive-button">View Archive</button>
          </a>
        </div>

        <div className="event-boxes">
          {upcomingEvents.map((event, index) => (
            <div className="event-box" key={index}>
              <div className="event-image">
                <img src={event.image} alt={event.name} />
              </div>
              <div className="event-name">
                <p>{event.name}</p>
              </div>
              <p>{event.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}