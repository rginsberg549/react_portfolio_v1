import React from "react";

function Navbar() {
    return (
        <div className="container">
        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-dark bg-info col-sm-12 col-md-5">
                <a class="navbar-brand mx-auto" href="/responsive-portfolio-v1/index.html"><strong>Ryan Ginsberg</strong></a>
            </nav>
            <div class="row col-sm-12 col-md-7 pt-3">
                <ul class="list-inline mx-auto justify-content-center">
                        <li class="list-inline-item border-right border-info pr-2"><a class="text-info" href="/">About</a></li>
                        <li class="list-inline-item border-info pr-2"><a class="text-info" href="/projects">Portfolio</a></li>
                  </ul>
            </div>
        </div>
        </div>
    )

}

export default Navbar