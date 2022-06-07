import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './Home';
import About from './About';
import Record from './Records';
import Login from './Login';
import NoRoute from './error/NoRoute';
import '../styles/app.css';

function App() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/record" element={<Record/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NoRoute/>}/>
      {/*<Route path="/register" element={<Register/>}/>*/}
    </Routes>
  );
}

export default App;
