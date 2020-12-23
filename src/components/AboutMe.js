import React from 'react';


function AboutMe() {
    return (
    <div className="container">
        
        <div class="card">
            <h3 className="font-weight-bold text-center m-3">About Me</h3>
            <img class="card-img-top rounded mx-auto d-block profile-img m-3" src="./img/ryan-profile.png" alt="Card image cap"/>
            <p class="card-text text-center m-3">Empathetic, customer-centric, technologically savvy, and highly motivated technical customer success professional. Service-oriented and results-driven with a focus on putting customers’ needs first. 
            Experienced with identifying common customer challenges and suggesting alternative solutions or communicating requirements 
            with cross-functional teams. Strong work ethic with the ability to thrive under pressure in fast-paced environments, 
            and the skill to navigate technical landscapes. Passion for working with complex data to better understand problems 
            to drive customer strategies and measure success. History of wearing multiple hats and doing what is needed to ensure 
            a positive outcome for all stakeholders. </p>
            <a href="/projects" class="btn btn-primary text-center m-5">View Projects</a>

        </div>

        <div class="row m-3">
            <a class="col mx-auto" href="https://www.linkedin.com/in/ryanmginsberg/"><img class="icon" src="./img/linked-icon.png" /></a>
            <a class="col mx-auto" href="https://github.com/rginsberg549"><img class="icon" src="./img/github-icon.png" /></a>
            <a class="col mx-auto" href="mailto:rginsberg@gmail.com"><img class="icon" src="./img/email-icon.png" /></a>
            <a class="col" href="tel:818-645-5832"><img class="icon" src="./img/phone-icon.png" /></a>
            <a class="col" target="_blank" href="./files/resume.pdf"><img class="icon" src="./img/resume-icon.png" /></a>
        </div>
    </div>
    )
}

export default AboutMe;