/**
 * See README.md for full editing instructions.
 * Quick steps:
 * - To edit: update the fields inside a block { ... }.
 * - To add: copy an entire block { ... }, paste below, then update name/info/image.
 * - To delete: remove the whole block.
 */

import candyCane from "../assets/img/photos/events/candy-cane.png";
import movieNight from "../assets/img/photos/events/movie-night.png";
import bottleDrive from "../assets/img/photos/events/bottle-drive.png";
import valentinesDay from "../assets/img/photos/events/valentines-day.png";

export interface Event {
  name: string;
  info: React.ReactNode;
  image: string;
}

export const upcomingEvents: Event[] = [
  {
    name: "Candy Cane Gram Workshop",
    info: (
      <>
        Join us for our first <b>Candy cane workshop</b> on <b>Monday. Dec 1</b>, from <b>5:00-7:00 PM</b> in <b>ECHA 2-430</b>. Create personalized candy-gram gifts for friends, classmates, or loved ones while enjoying a fun, hands-on break from coursework that helps you spread a little joy across campus.
      </>
    ),
    image: candyCane,
  },
  
  {
    name: "Movie Night",
    info: (
      <>
        Join us for <b>Movie Night</b> on <b>Thursday, Jan. 15</b>, from <b>5:00–7:00 PM</b> in <b>ECHA 2-420</b>. We will be screening <b>”The Theory of Everything”</b>, a powerful film that highlights the realities of living with ALS disease.
      </>
    ),
    image: movieNight,
  },
  
  {
    name: "Bottle Drive",
    info: (
      <>
        We’re hosting a <b>Bottle Drive</b> on <b>Friday, Jan. 30</b> from <b>12:00–5:00 PM</b> on <b>Whyte Avenue</b>. Come out and help us collect bottles and cans to support our cause—every bottle counts!
      </>
    ),
    image: bottleDrive,
  },
  
  {
    name: "Valentine’s Day Bake Sale",
    info: (
      <>
        Celebrate Valentine’s Day with our <b>Bake Sale</b> on <b>February 12 and 13</b> from <b>9:00 AM–5:00 PM</b> in <b>ECHA</b>! Stop by to treat yourself (or someone special) to a variety of delicious homemade goodies, support our cause, and help us spread a little extra love on campus.
      </>
    ),
    image: valentinesDay,
  },
];
