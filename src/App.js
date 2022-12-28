// import logo from './assets/logo'
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
       
        
      </header>
    </div>
  );
}

export default App;
