const ProjectCard = ({title, projectdetails}) => {
     
  //Modal Js
  const modalClick = (e)=>{
     // Get the modal
     var modal = document.getElementById("myModal");
     // Get the button that opens the modal
     var btn = document.getElementById("myBtn");  
     // Get the <span> element that closes the modal
     var span = document.getElementsByClassName("close")[0];
 
     //When user click on view button, The modal is open.
     modal.style.display = "block";
 
     // When the user clicks on <span> (x), close the modal
     span.onclick = function() {
       modal.style.display = "none";
     }
     
   // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
       if (event.target == modal) {
         modal.style.display = "none";
       }
       } 
   }
   const mainDetails = projectdetails ? projectdetails.substring(0, 50) : '';
     return (
        
          // {/* Project Card Component */}
          <div className="project-card">
            <div className="project-image-container">
              <img className="project-image" />
            </div>
          
          <div className="project-details-section">
            <p className="project-name">{title}</p>
            <p className="project-desc">{mainDetails}...</p>

            <div className="project-card-bottom-layer">
              <input type="button" id="project-button" className="PrimaryButton" value="view" onClick={modalClick}/>

              {/* <!-- Open Modal --> */}
                  <div id="myModal" class="modal">

                    {/* <!-- Modal content --> */}
                    <div class="modal-content">
                      <div className="modal-head">
                        <h1 className="modal-title">{title}</h1>
                        <span class="close">&times;</span>
                      </div>
                      <p>{projectdetails}</p>
                      <input type="button" id="project-button" className="PrimaryButton" value="Open on Github"/>
                    </div>               
                  </div>
                {/* <!-- Close Modal --> */}

              <p className="project-tech-stack">
                CSS/SCSS
              </p>
            </div>
          </div>

          </div>
//  {/* End of Project Card Component */}

     )
};

export default ProjectCard;
