import { Founders } from "./founders/Founders";
import { Mission } from "./mission/Mission";
import { PastEvent } from "./past-events/PastEvents";
import { Team } from "./team/Team";

export function About() {
  return (
    <>
      <Mission/>
      <Founders/>
      <Team/>
      <PastEvent/>
    </>
  )
}