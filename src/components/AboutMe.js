import React from 'react';


function AboutMe() {
    return (
    <div className="container">
        <div class="row">
        <div class="col-sm border-bottom border-top">
            <h1 class="text-info ml-3">About</h1>
        </div>
    </div>
        
        <div class="row pb-5">
            <img class="col-6" src="./img/ryan-profile.png" />
            <p class="col-6">  
            Empathetic, customer-centric, technologically savvy, and highly motivated technical customer success professional. 
            \Service-oriented and results-driven with a focus on putting customers’ needs first. 
            Experienced with identifying common customer challenges and suggesting alternative solutions or communicating requirements 
            with cross-functional teams. Strong work ethic with the ability to thrive under pressure in fast-paced environments, 
            and the skill to navigate technical landscapes. Passion for working with complex data to better understand problems 
            to drive customer strategies and measure success. History of wearing multiple hats and doing what is needed to ensure 
            a positive outcome for all stakeholders. </p>
        </div>

        <div class="row">
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