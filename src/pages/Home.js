import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-page'> 
      <div className='hero'>
        <img src='/Joliza.jpg' alt='Joliza'/>
        <div className="hero-text">
          <h1>Hi! Im Joliza!</h1>
          <p> I am a full-stack software engineer who enjoys working with React for frontend design. I also love designing backend data structures and am pursuing a career as a freelance web developer. I'd love to hear from you regarding the needs of your small business!</p>
          <div className="portfolio-btn"> 
          <Link to="/portfolio">Portfolio</Link>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default Home
