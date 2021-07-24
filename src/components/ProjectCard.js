import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProjectCard({ project }) {
    return (
      <Card style={{ width: '18rem', margin:'20px' }}>
      <Card.Img variant="top" src={project.img} alt={project.title} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.desc}
        </Card.Text>
        <Button variant="primary">
          <a style={{color:'white'}} className="site-link" href={project.link} target="_blank" rel="noreferrer">Go to Site</a>
        </Button>
      </Card.Body>
    </Card>
    )
}

export default ProjectCard
