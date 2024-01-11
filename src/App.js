import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Services from './components/services/Services';
import Projects from './components/Projects';
import NoPage from './components/NoPage';
import { useEffect, useState } from 'react';


function App() {
  const [navOpen, setNavOpen] = useState(false)


  return (
    <>
    <BrowserRouter>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen}/>
      <div id="content">
        
          <Routes>
            <Route path="/" element={<Home navOpen={navOpen}/>}/>
            <Route path="/services/:slug" element={<Services />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<NoPage />} />
          </Routes>  
        
      </div>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
