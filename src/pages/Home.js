import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-page'> 
      <div className='hero'>
        <img src='/Joliza.jpg' alt='Joliza'/>
        <div className="hero-text">
          <h1>Hi! Im Joliza!</h1>
          <p> I am a software engineer. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="portfolio-btn"> 
          <Link to="/portfolio">Portfolio</Link>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default Home
