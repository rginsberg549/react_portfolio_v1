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
        imgURL="./img/quicktrends-icon.png"
        projectTitle="Project #1 - QuickTrends"
        projectDescription="A simple vanilla JS project featuring trend detection, company financials and a NYT Newsfeed."
        deployedAppURL="https://rginsberg549.github.io/project-1-v2/"
        githubURL="https://github.com/rginsberg549/project-1-v2"
        ></Project>
    </div>
    )

}

export default Projects;