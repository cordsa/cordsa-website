/**
 * See README.md for full editing instructions.
 * Quick steps:
 * - To edit: update the fields inside a block { ... }.
 * - To add: copy an entire block { ... }, paste below, then update image/name/role.
 * - To delete: remove the whole block.
 */

import Victoria from "../../../assets/img/team/2025-2026/victoria.png";
import Laura from "../../../assets/img/team/2025-2026/laura.png";
import Ella from "../../../assets/img/team/2025-2026/ella.png";
import Marshali from "../../../assets/img/team/2025-2026/marshali.png";
import Joe from "../../../assets/img/team/2025-2026/joe.png";
import Natyflor from "../../../assets/img/team/2025-2026/natyflor.png";
import Dana from "../../../assets/img/team/2025-2026/dana.png";

export interface TeamMember {
  image: string;
  name: string;
  role: string;
}

export const teamMembers: TeamMember[] = [
  {
    image: Victoria,
    name: "Joe Hoogland",
    role: "Co-President",
  },
  {
    image: Marshali,
    name: "Marshali Edirisinghe",
    role: "Co-President",
  },
  {
    image: Ella,
    name: "Dian Rruki",
    role: "Treasurer / Administration",
  },
  {
    image: Dana,
    name: "Dana Arteaga",
    role: "Chief Advisor",
  },
  {
    image: Joe,
    name: "Shwetha Gopinath",
    role: "VP Fundraising / Corporate Relations",
  },
  {
    image: Natyflor,
    name: "Shimaz Ahmed",
    role: "VP Marketing",
  },
  {
    image: Laura,
    name: "Nabeeha Irfan",
    role: "VP Education",
  },
];
