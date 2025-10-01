/**
 * See README.md for full editing instructions.
 * Quick steps:
 * - To edit: update the fields inside a block { ... }.
 * - To add: copy an entire block { ... }, paste below, then update name/info/image.
 * - To delete: remove the whole block.
 */

import generalMeeting from "../assets/img/photos/events/general-meeting.png";
import triviaNight from "../assets/img/photos/events/trivia-night.png";
import schoolBash from "../assets/img/photos/events/school-bash.png";

export interface Event {
  name: string;
  info: React.ReactNode;
  image: string;
}

export const upcomingEvents: Event[] = [
  {
    name: "CORDSA's Fall AGM",
    info: (
      <>
        Join us for our <b>Fall AGM</b> on <b>Thurs. Sept. 18</b>, from <b>5:00-7:00 PM</b> in <b>ECHA 1-498</b>.
        Meet the executive team, connect with fellow students, and learn more about CORDSA:
        our mission, upcoming events, and volunteer opportunities. Enjoy snacks, drinks, and a fun game of Jeopardy!
      </>
    ),
    image: generalMeeting,
  },

  {
    name: "Rare Disorders Trivia Night",
    info: (
      <>
        Join us for our first <b>Rare Disorders Trivia Night</b> on <b>Thurs. Sept. 25</b>, from <b>6:00-7:30 PM</b> in <b>ECHA 1-498</b>.
        We are collaborating with the UAlberta Quizbowl Club, so come and enjoy snacks, drinks, and some fun competition!
      </>
    ),
    image: triviaNight,
  },

  {
    name: "Back 2 School Bash!",
    info: (
      <>
        Join us for our <b>Back 2 School Bash</b> on <b>Fri. Sept. 26</b>, from <b>9:00-11:00 PM</b> at ‘The Pint’ on Whyte Avenue.
        Come mingle with our executive team and enjoy some good community-building as we ring in the new term.
        Tickets are $10 and include a slice of pizza + highball!
      </>
    ),
    image: schoolBash,
  },

];