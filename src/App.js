import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard.js'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Projects from './Pages/Projects'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
