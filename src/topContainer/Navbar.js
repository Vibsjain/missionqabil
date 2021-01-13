import React from "react";
import "./Navbar.css"
// import { Navbar, Nav } from "react-bootstrap";

const navbar = () => {
    return (
        <nav id='custom-navbar' className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Mission Qabil</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">About Us</a>
                        <a className="nav-link" href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default navbar;