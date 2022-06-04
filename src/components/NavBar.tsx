import React from 'react';
import '../styles/app.css';

export default class NavBar extends React.Component{
  render(){
    return (
      <div className='container'>
        <header className='header shadow'>
          <p style={{justifySelf:'flex-start'}}>Olav Ausland Onstad</p>
          <div>
            <button>Contact</button>
            <button>About</button>
          </div>
        </header>
      </div>
    );
  }
}