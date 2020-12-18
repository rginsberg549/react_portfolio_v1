import React from 'react';

function Project(props) {
    return(
        <div className="row">
            <div class="card">
                <img class="card-img-top quicktrends-icon" src={props.imgURL} alt="Card image cap"
          />
          <div class="card-body mx-auto">
            <h5 class="card-title">{props.projectTitle}</h5>
            <p class="card-text">{[props.projectDescription]}
            </p>
            <a href={props.deployedAppURL} class="btn btn-primary my-3">View Deployed App</a>
            <a href={props.githubURL} class="btn btn-secondary">View Github Repo</a>
          </div>
        </div>
    </div>
    )

}

export default Project;