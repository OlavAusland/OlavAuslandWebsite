import React from 'react';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';

export default function NavBar(){
  const navigate = useNavigate();

  const logout = () => {
    auth.signOut();
    navigate('/');
  }

  return (
    <header className='header shadow'>
      <p style={{justifySelf:'flex-start', cursor:'pointer'}} onClick={() => {navigate('/')}}>Olav Ausland Onstad</p>
      <div>
        <button onClick={() => {navigate('/record')}}>Record</button>
        <button onClick={() => {navigate('/contact')}}>Contact</button>
        <button onClick={() => {navigate('/about')}}>About</button>
        {/*auth.currentUser ? <h5>{auth.currentUser?.email}</h5> : <button onClick={() => {navigate('/login')}}>Login</button>*/}
        {auth.currentUser && <button onClick={() => {logout();}}>Logout</button>}
      </div>
    </header>
  );
}