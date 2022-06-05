import React from 'react';
import '../styles/navbar.css';

export default class NavBar extends React.Component{
  render(){
    return (
      <header className='header shadow'>
        <p style={{justifySelf:'flex-start'}}>Olav Ausland Onstad</p>
        <div>
          <button>Contact</button>
          <button>About</button>
        </div>
      </header>
    );
  }
}