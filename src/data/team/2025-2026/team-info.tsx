/**
 * See README.md for full editing instructions.
 * Quick steps:
 * - To edit: update the fields inside a block { ... }.
 * - To add: copy an entire block { ... }, paste below, then update image/name/role.
 * - To delete: remove the whole block.
 */

import Dian from "../../../assets/img/team/2026-27/DianRruki.jpg.png";
import Shimaz from "../../../assets/img/team/2026-27/ShimazAhmed.jpg.png";
import Joe from "../../../assets/img/team/2026-27/JoeHoogland.jpg.png";
import Marshali from "../../../assets/img/team/2026-27/Marshali.jpg.png";
import Shwetha from "../../../assets/img/team/2026-27/ShwethaGopintha.jpg.jpg";
import Nabeeha from "../../../assets/img/team/2026-27/NabeehaIrfan.jpg.png";
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
