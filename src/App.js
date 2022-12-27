import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
          <Routes>
            <Route path="/" element={<Layout />} />
          </Routes>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
