import "./components/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import OpenSource from './components/OpenSource';

function App() {
  return (
    <div className="root">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opensource" element={<OpenSource />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
