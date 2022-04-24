import React from 'react';
import cart from '../../assets/cart.svg';
import menu from '../../assets/menu.svg';
import search from '../../assets/search.svg';
import './header.css';

const Header = () => {
  function responsiveHeader() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header"; 
    }
  }

  return (
    <header className="header" id="myTopnav">
      <div className='left'>
        <a href="#demos">Demos</a>
        <a href="#pages">Pages</a>
        <a href="#portfolio">Portfolio</a>
      </div>
      <div className='right'>
        <a href="#menu" className='icon' onClick={responsiveHeader}>
          <img src={menu} alt="menu"/>
        </a>
        <img src={cart} alt="cart"/>
        <img src={search} alt="search"/>
        <input type="text"/>
      </div>
    </header>
  )
}

export default Header