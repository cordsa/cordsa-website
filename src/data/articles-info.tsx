/**
 * See README.md for full editing instructions.
 * Quick steps:
 * - To edit: update the fields inside a block { ... }.
 * - To add: copy an entire block { ... }, paste below, then update images/name/date/link.
 * - To delete: remove the whole block.
 */

import cord from "../assets/img/photos/resources/cord.png";
import rkc from "../assets/img/photos/resources/rkc.png";
import ws from "../assets/img/photos/resources/ws.png";
import rdd from "../assets/img/photos/resources/rdd.png";
import ucla from "../assets/img/photos/resources/ucla.png";
import csa from "../assets/img/photos/resources/csa.png";

export interface Articles {
  image: string, 
  name: React.ReactNode,
  date: string,
  link: string,
}

export const articles: Articles[] = [
  {
    image: cord, 
    name: <>
      <b>Canadian Organization for Rare Disorders calls on Canada’s...",</b>
    </>,
    date: "Jul 10, 2025",
    link: "https://www.raredisorders.ca/news/story/media-release-july-10-2025",  
  },
  {
    image: rkc,
    name: <>
      <b>
        Success Story - When Standard
        Treatments Fail: A Case for...
      </b>
    </>,
    date: "Jun 25, 2025",
    link: "https://www.rarekidscan.com/news/success-story-virus-specific-t-cell-therapy", 
  },
  {
    image: ws,
    name: <>
      <b>
        Just launched: the ultimate 
        Edmonton challenge is here
      </b>
    </>,
    date: "Jun 6, 2025",
    link: "https://wellspring.ca/blog/2025/06/06/just-launched-the-ultimate-edmo nton-challenge-is-here/",
  },
  {
    image: rdd,
    name: <>
      <b>
        Rare Disease Day: More Than 
        You Can Imagine - 101
      </b>
    </>,
    date: "Feb 27, 2025",
    link: "https://www.rarediseaseday.org/news/more-than-you-can-imagine-101/",
  },
  {
    image: ucla,
    name: <>
      <b>
        After life in a bubble, ground-
        breaking treatment opens...
      </b>
    </>,
    date: "Dec 2, 2024",
    link: "https://stemcell.ucla.edu/news/after-life-bubble-groundbreaking-treatment-opens-jakob-guziaks-world",
  },
  {
    image: csa,
    name: <>
      <b>
        About the Canadian Spondylo-
        arthritis Association
      </b>
    </>,
    date: "2025",
    link: "https://sparthritis.ca/about/#whoweare",
  },
]