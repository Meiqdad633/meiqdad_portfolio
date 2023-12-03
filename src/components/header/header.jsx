import React from 'react';
import './header.css';
import Cta from './cta';
import Me from '../../assets/me.jpg';
import Headersoc from './headersoc';

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello, I am </h5>
            <h1>Meiqdad Hassani</h1>
            <h5 className="text-light">
                Front-End Developer
            </h5>
            <Cta/>
            <Headersoc/>
            <div className="me">
              <img src={Me} alt="Me" />
            </div>
            <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
    </header>
  )
}

export default Header