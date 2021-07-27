import React from 'react'
import projects from '../projectData'
import ProjectCard from '../components/ProjectCard';
import { Row } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <h1>My Projects</h1>
      <Row style={{width: '100%', justifyContent:'center'}}>
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
      </Row>
    </div>
  )
}

export default Portfolio
