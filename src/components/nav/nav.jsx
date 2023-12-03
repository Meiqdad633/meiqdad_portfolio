import React, { useState } from 'react';
import './nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { MdOutlineContactMail } from "react-icons/md";



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <IoHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active': ''}> <FaRegUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active': ''}> <MdOutlineWorkHistory/></a>
      <a href="#services" onClick={() => setActiveNav('#services')}className={activeNav === '#services' ? 'active': ''}> <GiSkills/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active': ''}> <MdOutlineContactMail/></a>
    </nav>
  )
}
 
export default Nav;