import React from 'react';
import './Projects.css';

const Project=(props)=>{
    return (
        <React.Fragment className="projects">
            <h2>PROJECTS</h2>
            <ul className="projects-list">
                <li>Andoid App for fitness</li>
                <li>react</li>
                <li>mongo</li>
                <li>Python</li>
            </ul>
        </React.Fragment>
    )

}

export default Project;