import './PastEvent.css';
import checkpoint from "./../../../assets/img/icons/event-point.svg";
import { pastEvents, type Events } from '../../../data/events-info';

export function PastEvent() {
  return (
    <>
      <section id="past-event">
        <div className="past-event-header">
          Past Events
        </div>
        {pastEvents.map((event: Events, index: number) => (
          <>
            <div className={`event-row ${index % 2 === 1 ? "reverse" : ""} past-event`} key={index}>
              <div className="past-event-info">
                <h1>{event.name}</h1>
                <p>{event.info}</p>
                <div
                  className={`event-bubble ${index % 2 === 1 ? "left-bubble" : "right-bubble"}`}>
                </div>
              </div>
              <img src={event.image} alt={event.name} />

              <div className="past-events-line">
              <img className="event-point" src={checkpoint} alt="event point" />
            </div>
            </div>
          </>
        ))}
      </section>
    </>
  )
}