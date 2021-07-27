
import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="flex">Welcome to our Website </h1>
       
          <nav className="flex">
            <ul>
           
              <li><Link to="/contact">CONTACT</Link></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/" >HOME</Link></li>
            </ul>
          </nav>
          

        
      </header>
    );
  }
}
export default Header;
