import './App.css'
import './Theme.css';
import { Header } from './components/Header';
import { HomePage } from './pages/home-page/HomePage';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router';
import { About } from './pages/about-page/About';
import { Contact } from './pages/contact-page/Contact';
import { Resources } from './pages/resources-page/Resources';
import { Involved } from './pages/involve-page/Involved';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="get-involved" element={<Involved/>}></Route>
        <Route path="/resources" element={<Resources/>}></Route>
        <Route path="/contact-us" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
