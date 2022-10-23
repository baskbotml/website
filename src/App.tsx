import React from 'react';
import './App.css';
import logo from './assets/logo.png'

function App() {
  return (
      <nav className='navbar'>
        <a href='/'><img src={logo} alt='goofy ahh logo' width={118} height={93} /></a>
        <ul>
          <li>
            <a href='/'><p className='navbar-text'>Home</p></a>
          </li> 
          <li>
            <a href='https://status.baskbot.ml'><p className='navbar-text'>Status</p></a>
          </li>
          <li>
            <a href='https://docs.baskbot.ml'><p className='navbar-text'>Docs</p></a>
          </li>
        </ul>
      </nav>
  );
}

export default App;