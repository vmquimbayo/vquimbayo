import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const placeholderImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1V3nN-12xxcryU7oYL0KqcYkA7ecfQpqw4A&s';

    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img
                            src={project.imageUrl || placeholderImage}
                            alt={project.title}
                            className="project-image"
                        />
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
