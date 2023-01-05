import React, { useState } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ModalButton from './components/Modal';

function App() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div className="App">
        {openModal ? <ModalButton closeModal={setOpenModal}/> :
        <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opensource" element={<OpenSource />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
      }
    </div>
  );
}

export default App;
