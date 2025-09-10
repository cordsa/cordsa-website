import './PastEvent.css';
import { pastEvents, type Events } from '../../../data/past-events/events-info';

export function PastEvent() {
  return (
    <>
      <section id="past-event">
        <div className="events-grid">
          {pastEvents.map((event: Events, index: number) => (
            <div className={`event-row ${index % 2 === 1 ? "reverse" : ""}`} key={index}>
              <div className="past-event-info">
                <h1>{event.name}</h1>
                <p>{event.info}</p>
              </div>
              <img src={event.image} alt={event.name} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}