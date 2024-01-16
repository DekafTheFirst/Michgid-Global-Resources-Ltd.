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
                <span className="nav-link dropdown-toggle" onClick={()=>setDropDownClicked(!dropdownClicked)}>Services</span>
                <ul className={`dropdown ${dropdownClicked && 'clicked'}`}>
                    <li className="nav-item" ><NavLink className="nav-link" to="/services/residential-construction">Residential Construction</NavLink></li>
                    <li className="nav-item" ><NavLink className="nav-link" to="/services/road-construction">Road Construction</NavLink></li>
                    <li className="nav-item" ><NavLink className="nav-link" to="/services/commercial-construction">Commercial Construction</NavLink></li>
                    <li className="nav-item" ><NavLink className="nav-link" to="/services/borehole-drilling">Borehole Drilling</NavLink></li>
                    <li className="nav-item" ><NavLink className="nav-link" to="/services/erosion-control">Erosion Control</NavLink></li>
                    <li className="nav-item" ><NavLink className="nav-link" to="/services/consultancy">Consultancy</NavLink></li>
                </ul>
              </li>
              
              <li className="nav-item">
                <NavLink to="/goods" className="nav-link">Goods</NavLink>
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