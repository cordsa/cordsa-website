import './App.css'
import './Theme.css';
import { Header } from './components/Header';
import { Events } from './pages/events/Events';
import { Landing } from './pages/landing/Landing';

function App() {

  return (
    <>
      <Header/>
      <Landing/>
      <Events/>
    </>
  )
}

export default App
