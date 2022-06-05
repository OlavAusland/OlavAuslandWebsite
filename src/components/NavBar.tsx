import React from 'react';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';

export default function NavBar(){
  const navigate = useNavigate();
  return (
    <header className='header shadow'>
      <p style={{justifySelf:'flex-start', cursor:'pointer'}} onClick={() => {navigate('/')}}>Olav Ausland Onstad</p>
      <div>
        {/*<button onClick={() => {navigate('/record')}}>Record</button>*/}
        <button onClick={() => {navigate('/contact')}}>Contact</button>
        <button onClick={() => {navigate('/about')}}>About</button>
        {/*<button onClick={() => {navigate('/login')}}>Login</button>*/}
      </div>
    </header>
  );
}