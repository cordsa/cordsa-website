import './App.css'
import './Theme.css';
import { Header } from './components/Header';
import { HomePage } from './pages/home-page/HomePage';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router';
import { About } from './pages/about-page/About';
import { Contact } from './pages/contact-page/Contact';
import { Resources } from './pages/resources-page/Resources';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact-us" element={<Contact/>}></Route>
        <Route path="/resources" element={<Resources/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
