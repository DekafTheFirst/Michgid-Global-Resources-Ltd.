import React, { useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import Home from './Home';

const routes = [
  {name: "home", path: "/", component: <Home />}
]


const Navbar = () => {
  const [dropdownClicked, setDropDownClicked] =  useState(false);
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/"><img src={require("../icons/letter-m.png")} alt="" /></Link>
          <button className="navbar-toggler" type="button"  onClick={toggleShow}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? 'show': ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={()=>{setShow(false)}}>Home</NavLink>
              </li>
              
              <li className="nav-item">
                <span className="nav-link dropdown-toggle" onClick={()=>setDropDownClicked(!dropdownClicked)}>Services</span>
                <ul className={`dropdown ${dropdownClicked && 'clicked'}`}>
                    <li className="nav-item" ><NavLink className="nav-link" to="/services/residential-construction" onClick={()=>{setShow(false)}}>Residential Construction</NavLink></li>
                    <li className="nav-item" ><NavLink className="nav-link" to="/services/road-construction" onClick={()=>{setShow(false)}}>Road Construction</NavLink></li>
                    <li className="nav-item" ><NavLink className="nav-link" to="/services/commercial-construction" onClick={()=>{setShow(false)}}>Commercial Construction</NavLink></li>
                    <li className="nav-item" ><NavLink className="nav-link" to="/services/borehole-drilling" onClick={()=>{setShow(false)}}>Borehole Drilling</NavLink></li>
                    <li className="nav-item" ><NavLink className="nav-link" to="/services/erosion-control" onClick={()=>{setShow(false)}}>Erosion Control</NavLink></li>
                    <li className="nav-item" ><NavLink className="nav-link" to="/services/consultancy" onClick={()=>{setShow(false)}}>Consultancy</NavLink></li>
                </ul>
              </li>
              
              <li className="nav-item">
                <NavLink to="/goods" className="nav-link" onClick={()=>{setShow(false)}}>Goods</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/projects" onClick={()=>{setShow(false)}}>Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={()=>{setShow(false)}}>Contact</NavLink>
              </li>
            </ul>
          </div>
          
        </div>
    </nav>
  )
}

export default Navbar