import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function ProjectCard({ project }) {
    return (
      <Col xs={12} sm={6} md={4} lg={3} className="project-card">
      <Card style={{minHeight: '450px'}}>
      <Card.Img variant="top" src={project.img} alt={project.title} />
      <Card.Body className="card-body">
        <div>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.desc}
        </Card.Text>
        </div>
        <Button variant="primary">
          <a style={{color:'white'}} className="site-link" href={project.link} target="_blank" rel="noreferrer">Go to Site</a>
        </Button>
      </Card.Body>
    </Card>
    </Col>
    )
}

export default ProjectCard
