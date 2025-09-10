import './App.css'
import './Theme.css';
import { Header } from './components/Header';
import { HomePage } from './pages/home-page/HomePage';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router';
import { About } from './pages/about-page/About';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
