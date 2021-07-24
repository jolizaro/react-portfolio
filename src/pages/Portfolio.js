import React from 'react'
import projects from '../projectData'
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <h1>My Projects</h1>
      <div style={{width: '100%', display:'flex', flexWrap:'wrap'}}>
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
      </div>
    </div>
  )
}

export default Portfolio
