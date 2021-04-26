
import '../css/main.css';
import ProjectCard from './ProjectCard';
import Data from "../Data/ProjectsData.json";
import React, { useState } from "react";

const Projects = () => {

  const [datas] = useState(Data.Projects);
  console.log(datas);
  return (

    <div className="Projects">
      <h2 className="page-headline">Our Projects</h2>
      <div className="project-layer">
        {datas.map((data, index) => (
          <ProjectCard
            ProjectDetails={data} />
        ))}
      </div>
    </div>
  )
};

export default Projects;
