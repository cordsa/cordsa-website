import gala2023 from "../../assets/img/photos/past-events/gala-2023.png";
import pumpkinCarving from "../../assets/img/photos/past-events/pumpkin-carving.png";
import artsTreatsFest from "../../assets/img/photos/past-events/arts-treats-fest.png";
import gala2024 from "../../assets/img/photos/past-events/gala-2024.png";
import bakeSale from "../../assets/img/photos/past-events/bake-sale.png";
import painAwarenessWeek from "../../assets/img/photos/past-events/pain-awareness.png";
import doughnutParty from "../../assets/img/photos/past-events/doughnut-party.png";
import bottleDrive from "../../assets/img/photos/past-events/bottle-drive.png";
import moveNight from "../../assets/img/photos/past-events/movie-night.png";
import bakeSale2 from "../../assets/img/photos/past-events/bake-sale-2.png";
import gala2025 from "../../assets/img/photos/past-events/gala-2025.png";

export interface Events {
  name: string;
  info: string;
  image: string;
}

export const pastEvents: Events[] = [
  {
    name: "Rare Disease Day Gala 2025",
    info: "Featured a silent auction, guest speakers, and a dinner under the theme of “Rare Autoimmune Disease & Cancer Spotlight.” Speakers included a professor, physician, member of the Alberta Cancer Foundation, and individuals with first-hand rare disease experience. Together, we raised $6,000 for the Canadian Spondyloarthritis Association through the Gala and our year-round initiatives!",
    image: gala2025,
  },
  {
    name: "Winter Valentine's Bake Sale",
    info: "Featured handmade baked goods, stickers, candygrams, and flowers. Students and staff stopped by to learn about our club and show their support. Thanks to the community’s generosity, we raised $400!",
    image: bakeSale2,
  },
  {
    name: "Winter Movie Night",
    info: "Featured Brain on Fire, a true story highlighting the rare autoimmune disease anti-NMDA receptor encephalitis. We raised $50!",
    image: moveNight,
  },
  {
    name: "Winter Bottle Drive",
    info: "Shout-out to local businesses on Whyte Ave and CORDSA members for contributing bottle donations. Together, we raised $550 to support our initiatives!",
    image: bottleDrive,
  },
  {
    name: "Doughnut Party Collaboration",
    info: "Featuring boxes of six assorted vegan doughnuts from their rotating monthly menu. We raised $45!",
    image: doughnutParty,
  },
  {
    name: "National Pain Awareness Week Trivia Table",
    info: "Featured a trivia table centred on pain awareness and rare disorders. Students tested their knowledge, with winners getting the chance to play a “guess the number of candies in the jar” game!",
    image: painAwarenessWeek,
  },
  {
    name: "Fall Bake Sale",
    info: "Featured handmade fall-inspired treats for students and staff. People who stopped by also had the chance to learn about our club and its mission. Thanks to the support of our community, we raised $450!",
    image: bakeSale,
  },
  {
    name: "Rare Disease Day Gala 2024",
    info: "Featured a dinner, silent art auction, and guest speakers under the theme “Light Up for Rare Cancers.” Speakers included 48Hour Discovery, Angus Watt Advisory Committee, representative from Wellspring, and a student with a lived rare disease experience. Together, we raised $1,000 for Wellspring Alberta, our focus foundation of the year!",
    image: gala2024,
  },
  {
    name: "Arts & Treats Fest ft. AAHSA",
    info: "We partnered with the All Asian Heritage Students Association (AAHSA) to host a guided painting session led by a student artist, complete with art supplies and sweet treats. Some of the finished pieces were later featured in our 2024 Gala silent auction.",
    image: artsTreatsFest,
  },
  {
    name: "Fall Pumpkin Carving",
    info: "Featured Halloween fun with education, highlighting scary rare disorder statistics, stigma in cinema, and examples of positive rare disease representation in film.",
    image: pumpkinCarving,
  },
  {
    name: "Rare Disease Day Gala 2023",
    info: "Featured a dinner, silent art auction, and guest speakers. We raised $1,600 for Aubrey’s Hope for a Cure, our focus foundation of the year!",
    image: gala2023,
  },
]