
import '../css/Projects/Projects.css';
import ProjectCard from './ProjectCard';
const Projects = () => {

  return (
    <div className="Projects">
      <div className="project-section">
    
        {/* Layer Container - Flex Cards */}
        <div className="project-layer">
          {/* Project Card Component */}
          <div className="project-card">
            <div className="project-image-container">
              <img className="project-image" />
            </div>

            <div className="project-details-section">
              <p className="project-name">{data.project_name}</p>
              <p className="project-desc">{data.project_desc}</p>

              <div className="project-card-bottom-layer">
                <button className="PrimaryButton" id="project-button">
                  <a href={data.github_url}>Open on GitHub</a>
                </button>
                <p className="project-tech-stack">CSS/SCSS</p>
              </div>
            </div>
          </div>
        
        {/* Layer Container - Flex Cards */}
        <div className="project-layer">
          <ProjectCard title ="Eccentric touch 1" projectdetails="
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus natus aliquam quam dignissimos ratione et enim. Eveniet placeat deleniti optio, tenetur dolorem ad reprehenderit provident eaque perspiciatis! Tempore molestiae officia deserunt similique, obcaecati nostrum optio molestias a dolore eos delectus amet, quisquam soluta sequi, corporis iusto. Incidunt sunt aperiam esse."
          />
          <ProjectCard title ="Eccentric touch 1" projectdetails="
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus natus aliquam quam dignissimos ratione et enim. Eveniet placeat deleniti optio, tenetur dolorem ad reprehenderit provident eaque perspiciatis! Tempore molestiae officia deserunt similique, obcaecati nostrum optio molestias a dolore eos delectus amet, quisquam soluta sequi, corporis iusto. Incidunt sunt aperiam esse."
          />
          <ProjectCard title ="Eccentric touch 1" projectdetails="
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus natus aliquam quam dignissimos ratione et enim. Eveniet placeat deleniti optio, tenetur dolorem ad reprehenderit provident eaque perspiciatis! Tempore molestiae officia deserunt similique, obcaecati nostrum optio molestias a dolore eos delectus amet, quisquam soluta sequi, corporis iusto. Incidunt sunt aperiam esse."
          />
         <ProjectCard title ="Eccentric touch 1" projectdetails="
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus natus aliquam quam dignissimos ratione et enim. Eveniet placeat deleniti optio, tenetur dolorem ad reprehenderit provident eaque perspiciatis! Tempore molestiae officia deserunt similique, obcaecati nostrum optio molestias a dolore eos delectus amet, quisquam soluta sequi, corporis iusto. Incidunt sunt aperiam esse."
          />
          <ProjectCard title ="Eccentric touch 1" projectdetails="
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus natus aliquam quam dignissimos ratione et enim. Eveniet placeat deleniti optio, tenetur dolorem ad reprehenderit provident eaque perspiciatis! Tempore molestiae officia deserunt similique, obcaecati nostrum optio molestias a dolore eos delectus amet, quisquam soluta sequi, corporis iusto. Incidunt sunt aperiam esse."
          /> 
          <ProjectCard title ="Eccentric touch 1" projectdetails="
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus natus aliquam quam dignissimos ratione et enim. Eveniet placeat deleniti optio, tenetur dolorem ad reprehenderit provident eaque perspiciatis! Tempore molestiae officia deserunt similique, obcaecati nostrum optio molestias a dolore eos delectus amet, quisquam soluta sequi, corporis iusto. Incidunt sunt aperiam esse."
          />
        </div> {/** End of Project Layer */}
      </div>
    </div>
  );
};

export default Projects;
