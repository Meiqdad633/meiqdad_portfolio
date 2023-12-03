import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/pic1.jpeg'
import IMG2 from '../../assets/pic2.jpeg'
import IMG3 from '../../assets/pic3.jpeg'
import IMG4 from '../../assets/pic4.jpeg'
import IMG5 from '../../assets/pic5.jpeg'
import IMG6 from '../../assets/pic6.jpeg'


const data = [
  {
    id: 1,
    image : IMG1,
    Title : 'Project 1',
    github : 'www.github.com/meqdad/rep',
    demo : 'dribble.com/meiqdasd/ssd'
  },
  {
    id: 2,
    image : IMG2,
    Title : 'Project 2',
    github : 'www.github.com/meqdad/rep',
    demo : 'dribble.com/meiqdasd/ssd'
  },
  {
    id: 3,
    image : IMG3,
    Title : 'Project 3',
    github : 'www.github.com/meqdad/rep',
    demo : 'dribble.com/meiqdasd/ssd'
  },
  {
    id: 1,
    image : IMG4,
    Title : 'Project 4',
    github : 'www.github.com/meqdad/rep',
    demo : 'dribble.com/meiqdasd/ssd'
  },
  {
    id: 1,
    image : IMG5,
    Title : 'Project 5',
    github : 'www.github.com/meqdad/rep',
    demo : 'dribble.com/meiqdasd/ssd'
  },
  {
    id: 6,
    image : IMG6,
    Title : 'Project 6',
    github : 'www.github.com/meqdad/rep',
    demo : 'dribble.com/meiqdasd/ssd'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My recent Work</h5>
      <h2> Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
            <h3> {title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live demo of Projects</a>
            </div>
          </div>
        </article>

            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;