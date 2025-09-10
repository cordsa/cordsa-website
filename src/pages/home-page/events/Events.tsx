import './Events.css';
import generalMeeting from '../../../assets/img/photos/events/general-meeting.png';
import triviaNight from '../../../assets/img/photos/events/trivia-night.png';
import schoolBash from '../../../assets/img/photos/events/school-bash.png';

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
            <div className="event-image">
              <img src={generalMeeting} alt="general meeting" />
            </div>
            <div className="event-name"><p>CORDSA's Fall AGM</p></div>
            <p>Join us for our <b>Fall AGM</b> on <b>Thurs. Sept. 18</b>, from <b>5:00-7:00 PM</b> in <b>ECHA 1-498</b>. Meet the executive team, connect with fellow students, and learn more about CORDSA: our mission, upcoming events, and volunteer opportunities. Enjoy snacks, drinks, and a fun game of Jeopardy!</p>
          </div>

          <div className="event-box">
            <div className="event-image">
              <img src={triviaNight} alt="trivia night" />
            </div>
            <div className="event-name"><p>Rare Disorders Trivia Night</p></div>
            <p>Join us for our first <b>Rare Disorders Trivia Night</b> on <b>Thurs. Sept. 25</b>, from <b>6:00pm-7:30 PM</b> PM in <b>ECHA 1-498</b>. We are collaborating with the UAlberta Quizbowl Club, so come and enjoy snacks, drinks, and some fun competition!</p>
          </div>

          <div className="event-box">
            <div className="event-image">
              <img src={schoolBash} alt="school bash" />
            </div>
            <div className="event-name"><p>Back 2 School Bash!</p></div>
            <p>Join us for our <b>Back 2 School Bash</b> on Fri. Sept. 26, from <b>9:00-11:00PM</b> at ‘The Pint’ on Whyte Avenue. Come mingle with our executive team and enjoy some good community-building as we ring in the new term. Tickets are $10 and include a slice of pizza + highball!</p>
          </div>
        </div>
      </section>
    </>
  )
}