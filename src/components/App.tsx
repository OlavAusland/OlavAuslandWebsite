import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Record from './Record';
import Login from './Login';
import NoRoute from './error/NoRoute';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/record" element={<Record/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NoRoute/>}/>
        {/*<Route path="/register" element={<Register/>}/>*/}
      </Routes>
    </Router>
  );
}

export default App;
