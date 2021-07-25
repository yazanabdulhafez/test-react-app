
import React from 'react';
import './header.css'
import './aboutUs'
import AboutUs from './aboutUs';
class Header extends React.Component{
  render(){
  return (
<header>
<h1 className="flex">Welcome to our Website </h1>
<nav className="flex">

<a href="#">HOME</a>
<a href="#">CONTACT</a>
<a href="#"> ABOUT US</a>

</nav>
</header>
  );
}
}
export default Header;
