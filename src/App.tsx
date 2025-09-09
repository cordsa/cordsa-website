import './App.css'
import './Theme.css';
import { Header } from './components/Header';
import { Events } from './pages/home-page/events/Events';
import { Landing } from './pages/home-page/landing/Landing';
import { Donate } from './pages/home-page/donate/Donate';
import { Outreach } from './pages/home-page/outreach/Outreach';

function App() {

  return (
    <>
      <Header/>
      <Landing/>
      <Events/>
      <Donate/>
      <Outreach/>
    </>
  )
}

export default App
