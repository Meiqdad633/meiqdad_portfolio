import React from 'react';
import "./about.css";
import Me from '../../assets/me.jpg';
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
const About = () => {
  return (
    <section id='about'>about
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={Me} alt="me" />
          </div>
        </div>
      
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdOutlineWorkHistory/>
              <h5>Experience</h5>
              <small> +3 Years Working</small>
            </article>
            <article className="about__card">
              <FaRegUser/>
              <h5>Clients</h5>
              <small> 200+ worl wide</small>
            </article>
            <article className="about__card">
              <MdOutlineWorkHistory/>
              <h5>projects</h5>
              <small> 80 project</small>
            </article>
          </div>
          <p>its a ppsaldsahfsdasddassssssssssssssssssssssssssssssssssssssssss sssssssssssssssssssss sssssssssssssssssssss sssssssssssssssssssss sssssssssssssssssssss sssssssssssssssssssss sssssssssssssssssssss 
            </p>
            <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>


    
    
    
    
    </section>
  
  )
}

export default About;