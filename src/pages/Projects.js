import "../css/Projects/Projects.css";

const Projects = ({ data }) => {
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
