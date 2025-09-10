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
    name: "Victoria Hristova",
    role: "Co-President",
  },
  {
    image: Laura,
    name: "Laura Ekekhor",
    role: "Co-President",
  },
  {
    image: Ella,
    name: "Ella Jurasz",
    role: "Treasurer",
  },
  {
    image: Marshali,
    name: "Marshali Edirisinghe",
    role: "Chief Advisor / Administration",
  },
  {
    image: Joe,
    name: "Joe Hoogland",
    role: "VP Fundraising / Corporate Relations",
  },
  {
    image: Natyflor,
    name: "Natyflor Sumalin",
    role: "VP Marketing",
  },
  {
    image: Dana,
    name: "Dana Arteaga",
    role: "VP Education",
  },
];