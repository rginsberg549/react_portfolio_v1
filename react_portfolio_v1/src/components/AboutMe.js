import React from 'react';


function AboutMe() {
    return (
    <div className="container">
    <div className="row">
        <nav class="navbar navbar-expand-lg navbar-dark bg-info col-sm-12 col-md-5">
            <a class="navbar-brand mx-auto" href="/responsive-portfolio-v1/index.html"><strong>Ryan Ginsberg</strong></a>
        </nav>

        <div class="row col-sm-12 col-md-7 pt-3">
            <ul class="list-inline mx-auto justify-content-center">
                    <li class="list-inline-item border-right border-info pr-2"><a class="text-info" href="index.html">About</a></li>
                    <li class="list-inline-item border-info pr-2"><a class="text-info" href="portfolio.html">Portfolio</a></li>
              </ul>
        </div>

        <div class="row">
        <div class="col-sm border-bottom border-top">
            <h1 class="text-info ml-3">About</h1>
        </div>
    </div>
        
        <div class="row">
            <p class="col-sm-12 pt-3">
                <img class="col-sm-12 profile-img img-fluid float-left pb-3" src="img/ryan-profile.png" /> 
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
    </div>
    )
}

export default AboutMe;