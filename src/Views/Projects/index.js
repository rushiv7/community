
import React from 'react';
import { Switch, Route, HashRouter, Link } from 'react-router-dom';
import ProjectDetails from '../../Assets/ProjectDetails.json'


const Projects = function () {
    return (
      <div className="Projects">
        {/* Projects Container*/}

        <div className="Home-ProjectsContainer Container">
          <h2 className="headline">
            Our Projects
          </h2>
          <div className="Home-ProjectsLayer">
            {ProjectDetails.map((data, key) => {
              return (
                <div className="ProjectCard"
                  key={key}>
                    <p className="ProjectCard-title">
                      {data.project_title}
                    </p>
                    <p className="ProjectCard-description">
                      {data.project_description}
                    </p>
                    <div className="ProjectCard-bottomLayer">
                      <button className="ProjectCard-Button">
                        Learn More
                      </button>
                      <p className="ProjectCard-TechStack">
                        {data.project_stack}
                      </p>
                    </div>
                </div>
              )
            })};
        </div>
      </div>

    </div>
  )
};

export default Projects;