import React from 'react';
import Button from './button/button'
import './style.css';
import { useNavigate } from 'react-router-dom';



const Header = ({ toggleTheme }) => {
  return (
    <header>
    <div className='head'>
      <h1 className='head_text'> Campus Event Handler </h1>



      <div className="toggle-switch">
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider"></span>
        </label>
      </div>
      <div className='button_head'>  
    <Button />
    </div>
      </div>

    </header>
  );
};

export default Header;
