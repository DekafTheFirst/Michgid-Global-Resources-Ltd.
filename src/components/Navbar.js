import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import Home from './Home';

const routes = [
  {name: "home", path: "/", component: <Home />}
]

const Navbar = ({navOpen, setNavOpen}) => {
  const [dropdownClicked, setDropDownClicked] =  useState(false);
  const toggleNavOpen = () => {
    setNavOpen(!navOpen)
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="/"><img src={require("../icons/letter-m.png")} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavOpen}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">About</NavLink>
              </li>
              <li className="nav-item">
                <span className="nav-link dropdown-toggle" onClick={()=>setDropDownClicked(!dropdownClicked)}>Services</span>
                <ul className={`dropdown ${dropdownClicked && 'clicked'}`}>
                    <li className="nav-item" ><a className="nav-link" href="/services/residential-construction">Residential Construction</a></li>
                    <li className="nav-item" ><a className="nav-link" href="/services/road-construction">Road Construction</a></li>
                    <li className="nav-item" ><a className="nav-link" href="/services/commercial-construction">Commercial Construction</a></li>
                    <li className="nav-item" ><a className="nav-link" href="/services/borehole-drilling">Borehole Drilling</a></li>
                    <li className="nav-item" ><a className="nav-link" href="/services/general-merchandise">General Merchandise</a></li>
                    <li className="nav-item" ><a className="nav-link" href="/services/immigration-services">Immigration Services</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          
        </div>
    </nav>
  )
}

export default Navbar