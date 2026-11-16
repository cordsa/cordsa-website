
/**
 * See README.md for full editing instructions.
 * Quick steps:
 * - To edit: update the fields inside a block { ... }.
 * - To add: copy an entire block { ... }, paste below, then update name/info/image.
 * - To delete: remove the whole block.
 */

import movieNight from "../assets/img/photos/events/movie-night.png";
import valentinesDay from "../assets/img/photos/events/valentines-day.png";
import rddGala from "../assets/img/photos/events/rdd-gala.png";

export interface Event {
  name: string;
  info: React.ReactNode;
  image: string;
}

export const upcomingEvents: Event[] = [
  {
    name: "Movie Night",
    info: (
      <>
        Join us for <b>Movie Night</b> on <b>Thursday, Jan. 15</b>,
        from <b>5:00–7:00 PM</b> in <b>ECHA 2-420</b>.
        We will be screening <b>”The Theory of Everything”</b>,
        a powerful film that highlights the realities of living
        with ALS disease.
      </>
    ),
    image: movieNight,
  },

  {
    name: "Hot Coco + Bake Sale",
    info: (
      <>
        Join us for our <b>End-of-Semester Fundraising Sale</b> on{" "}
        <b>November 25 and 27</b> from <b>8:00 AM–6:00 PM</b> in{" "}
        <b>KHRA</b>! Stop by to enjoy delicious baked goods,
        warm drinks, blind books, and merch while supporting
        a great cause. All proceeds will go towards our{" "}
        <b>Rare Disease Day Gala</b> in February, supporting{" "}
        <b>Aubrey’s Hope for a Cure</b>. Come treat yourself
        and help us make a difference!
      </>
    ),
    image: valentinesDay,
  },

  {
    name: "Rare Disease Day Gala",
    info: (
      <>
        Join us for our annual <b>Rare Disease Day Gala</b>—our
        biggest event of the year—taking place{" "}
        <b>near the end of February</b>, with the{" "}
        <b>exact date and location to be announced</b>!
        This year, all proceeds and donations will go towards
        supporting <b>Aubrey’s Hope for a Cure</b>.
      </>
    ),
    image: rddGala,
  },
];
