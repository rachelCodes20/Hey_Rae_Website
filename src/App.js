import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ModalButton from './components/Modal';
import './styles/App.scss';

function App() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div className="App">
      {openModal ? (
        <ModalButton closeModal={setOpenModal} />
      ) : (
        <Router>
          <NavBar />
          <Routes>
            <Route path="/opensource" element={<OpenSource />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
