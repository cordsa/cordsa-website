import './Events.css';

export function Events() {
  return (
    <>
      <section id="events">
        <div className="events-info">
          <h1>Upcoming <b>Events</b></h1>
          <button>View Archive</button>
        </div>

        <div className="event-boxes">
          <div className="event-box">
            <div className="event-image"></div>
            <div className="event-name">CORDSA's Fall AGM</div>
            <p>Join us for our <b>Fall AGM</b> on <b>Thurs. Sept. 18</b>, from <b>5:00-7:00 PM</b> in <b>ECHA 1-498</b>. Meet the executive team, connect with fellow students, and learn more about CORDSA: our mission, upcoming events, and volunteer opportunities. Enjoy snacks, drinks, and a fun game of Jeopardy!</p>
          </div>

          <div className="event-box">
            <div className="event-image"></div>
            <div className="event-name">Rare Disorders Trivia Night</div>
            <p>Join us for our first <b>Rare Disorders Trivia Night</b> on <b>Thurs. Sept. 25</b>, from <b>5:00pm-6:30</b> PM in (room tbd). We are collaborating with the UAlberta Quizbowl Club, so come and enjoy snacks, drinks, and some fun competition!</p>
          </div>

          <div className="event-box">
            <div className="event-image"></div>
            <div className="event-name">Back 2 School Bash!</div>
            <p>Join us for our <b>Back 2 School Bash</b> on Fri. Sept. 26, from <b>9:00-11:00PM</b> at ‘The Pint’ on Whyte Avenue. Come mingle with our executive team and enjoy some good community-building as we ring in the new term. Tickets are $10 and include a slice of pizza + highball!</p>
          </div>
        </div>
      </section>
    </>
  )
}