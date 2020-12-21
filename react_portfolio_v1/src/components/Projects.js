import react from 'react';
import Project from "./Project";


function Projects() {
    return (
    <div>
        <Project 
        imgURL="./img/quicktrends-icon.png"
        projectTitle="Project #1 - QuickTrends"
        projectDescription="A simple vanilla JS project featuring trend detection, company financials and a NYT Newsfeed."
        deployedAppURL="https://rginsberg549.github.io/project-1-v2/"
        githubURL="https://github.com/rginsberg549/project-1-v2"
        ></Project>

        <Project 
        imgURL="./img/quicktrends-v2-screenshot.png"
        projectTitle="Project #2 - QuickTrends - V2"
        projectDescription="Project #1 extension built with Node JS hosted on Heroku. Adds user registration and authenication, search history, revamp UI."
        deployedAppURL="https://quicktrends.herokuapp.com/"
        githubURL="https://github.com/rginsberg549/quicktrends-v2"
        ></Project>

<Project 
        imgURL="./img/rfa-screenshot.png"
        projectTitle="Project #3 - Request For Authorization"
        projectDescription="A React App with Node.js and MYSQL database to help doctors create, download, and submit the request for authorization"
        deployedAppURL="https://rfav1.herokuapp.com/"
        githubURL="https://github.com/rginsberg549/rfa_v1"
        ></Project>
    </div>
    )

}

export default Projects;