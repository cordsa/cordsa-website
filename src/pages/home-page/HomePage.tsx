import { Events } from './events/Events';
import { Landing } from './landing/Landing';
import { Donate } from './/donate/Donate';
import { Outreach } from './outreach/Outreach';
import { Newsletter } from './newsletter/Newsletter';

export function HomePage() {
  return (
    <>
      <Landing/>
      <Events/>
      <Donate/>
      <Outreach/>
      <Newsletter/>
    </>
  )
}