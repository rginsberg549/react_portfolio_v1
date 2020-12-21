import React from 'react';

function Project(props) {
    return(
        <div className="container">
        <div className="m-5">
            <div className="">
                    <img class="card-img-top quicktrends-icon" src={props.imgURL}></img>
            </div>
            
            <div class="">
                    <h5 className="card-title">{props.projectTitle}</h5>
                    <p className="mx-auto card-text">{[props.projectDescription]}</p>
            </div>

            <div className="">
                <a target="_blank" className="col-3 btn btn-primary m-3" href={props.deployedAppURL} >View Deployed App</a>
                <a target="_blank" class="col-3 btn btn-secondary m-3" href={props.githubURL}>View Github Repo</a>
                </div>
        </div>

        </div>
    )

}

export default Project;