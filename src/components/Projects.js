import react from 'react';
import Project from "./Project";


function Projects() {
    return (
    <div>
        <Project 
        imgURL="./img/quicktrends-v1-screenshot.png"
        projectTitle="Project #1"
        projectSubTitle="QuickTrends (1.0)"
        projectDescription="A simple vanilla JS project featuring trend detection, company financials and a New Yorl Times Newsfeed."
        deployedAppURL="https://rginsberg549.github.io/project-1-v2/"
        githubURL="https://github.com/rginsberg549/project-1-v2"
        ></Project>

        <Project 
        imgURL="./img/quicktrends-v2-screenshot.png"
        projectTitle="Project #2"
        projectSubTitle="QuickTrends (1.1)"
        projectDescription="Project #1 extension built with Node JS hosted on Heroku. Adds user registration and authenication, search history, and a revamped UI."
        deployedAppURL="https://quicktrends.herokuapp.com/"
        githubURL="https://github.com/rginsberg549/quicktrends-v2"
        ></Project>

<Project 
        imgURL="./img/rfa-screenshot.png"
        projectTitle="Project #3"
        projectSubTitle="Request For Authorization (RFA)"
        projectDescription="A React App with Node.js and MYSQL database to help doctors create, download, and submit the request for authorization.  Integration with DocSpring for generating downloadable PDF."
        deployedAppURL="https://rfav1.herokuapp.com/"
        githubURL="https://github.com/rginsberg549/rfa_v1"
        ></Project>
    </div>
    )

}

export default Projects;