import './Events.css';

export function Events() {
  return (
    <>
      <section id="events">
        <div className="events-info">
          <h1>Upcoming Events</h1>
          <button>View Archive</button>
        </div>

        <div className="event-boxes">
          <div className="event-image"></div>
          <div className="event-name">CORDSA's Fall AGM</div>
          <p>Join us for our Fall AGM on Thurs. Sept. 18, from 5:00-7:00 PM in (room tbd). Meet the executive team, connect with fellow students, and learn more about CORDSA: our mission, upcoming events, and volunteer opportunities. Enjoy snacks, drinks, and a fun game of Jeopardy!</p>
        </div>
      </section>
    </>
  )
}