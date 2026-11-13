/**
 * See README.md for full editing instructions.
 * Quick steps:
 * - To edit: update the fields inside a block { ... }.
 * - To add: copy an entire block { ... }, paste below, then update image/name/role.
 * - To delete: remove the whole block.
 */

import Dian from "../../../assets/img/team/2026-27/DianRruki - Dian Rruki.heic";
import Shimaz from "../../../assets/img/team/2026-27/IMG_1383 - Shimaz Ahmed.heic";
import Joe from "../../../assets/img/team/2026-27/4FEBA916-5F51-4691-97A7-22ED176B6F6E - Joe Hoogland.jpeg";
import Marshali from "../../../assets/img/team/2026-27/IMG_5467 - Marshali Edirisinghe.jpeg";
import Shwetha from "../../../assets/img/team/2026-27/20250901_114016(1) - Shwetha Gopinath.jpg";
import Nabeeha from "../../../assets/img/team/2026-27/photo - Nabeeha Irfan.jpeg";
import Dana from "../../../assets/img/team/2025-2026/dana.png";

export interface TeamMember {
  image: string;
  name: string;
  role: string;
}

export const teamMembers: TeamMember[] = [
  {
    image: Joe,
    name: "Joe Hoogland",
    role: "Co-President",
  },
  {
    image: Marshali,
    name: "Marshali Edirisinghe",
    role: "Co-President",
  },
  {
    image: Dian,
    name: "Dian Rruki",
    role: "Treasurer / Administration",
  },
  {
    image: Dana,
    name: "Dana Arteaga",
    role: "Chief Advisor",
  },
  {
    image: Shwetha,
    name: "Shwetha Gopinath",
    role: "VP Fundraising / Corporate Relations",
  },
  {
    image: Shimaz,
    name: "Shimaz Ahmed",
    role: "VP Marketing",
  },
  {
    image: Nabeeha,
    name: "Nabeeha Irfan",
    role: "VP Education",
  },
];
