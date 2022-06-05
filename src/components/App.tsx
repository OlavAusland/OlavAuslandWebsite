import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Record from './Record';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/record" element={<Record/>}/>
      </Routes>
    </Router>
  );
}

export default App;
