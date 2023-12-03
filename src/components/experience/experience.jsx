import React from 'react';
import './experience.css';
import { FaRegCircleCheck } from "react-icons/fa6";


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experinece</h2>

      <div  className="container experience__container">
        <div className='expereince__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaRegCircleCheck  className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <FaRegCircleCheck className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <FaRegCircleCheck className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <FaRegCircleCheck className='experience__details-icon' />
                <div>
                  <h4>bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <FaRegCircleCheck className='experience__details-icon' />
              <div>
                <h4>tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaRegCircleCheck  className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          </div>
          <div className='expereince__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaRegCircleCheck className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaRegCircleCheck className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaRegCircleCheck className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaRegCircleCheck className='experience__details-icon'/>
              <div>
                <h4>bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaRegCircleCheck className='experience__details-icon'/>
              <div>
                <h4>tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaRegCircleCheck className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;