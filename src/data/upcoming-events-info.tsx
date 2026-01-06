/**
 * See README.md for full editing instructions.
 * Quick steps:
 * - To edit: update the fields inside a block { ... }.
 * - To add: copy an entire block { ... }, paste below, then update name/info/image.
 * - To delete: remove the whole block.
 */

import candyCane from "../assets/img/photos/events/candy-cane.png";

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
    name: "Merch Sale",
    info: (
      <>
        Our <b>Merch Sale</b> is happening <b>online</b> from <b>January 4–16</b>! Grab exclusive items, show your support, and help raise funds for our cause.
      </>
    ),
    image: merchSign,
  },
];
