import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

// const currentTab = (history, path) => {
//     if (history.location.pathname === path) {
//       return { color: "#f3a94e" };
//     } else {
//       return { color: "#FFFFFF" };
//     }
//   };

const navbar = ({history}) => (
        <nav id='custom-navbar' className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Mission Qabil</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a  className="nav-link" href="#definition">About Us</a>
                        <a  className="nav-link" href="#footer">Contact Us</a>
                        <Link className="nav-link" to="/team">Our Team</Link>
                    </div>
                </div>
            </div>
        </nav>
    );

export default navbar;