import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer row flex container">
            <div className="footer-details row">
                <a href="#" className="logo" ><img src="./imgs/logo.png" alt="logo" className="logo-img" /></a>
                <ul>
                    <li className="row">
                        <h5>Address: </h5>
                        <p>7869, Lugbe, Abuja, Nigeria</p>
                    </li>
                    <li className="row">
                        <h5>Phone: </h5>
                        <a href="tel:+2348036778249">+2348036778249</a>
                    </li>
                    <li className="row">
                        <h5>Email: </h5>
                        <p>contact@michgidglobal@gmail.com</p>
                    </li>
                </ul>
                
            </div>
            <div className="footer-content">
                <h5>Newsletter: </h5>
                <form action="" className="row">
                    <input type="email" name="" id="" placeholder="Your email here"/>
                    <button type="submit" className="page-btn-2">Subscribe</button>
                </form>
                <h5>Social: </h5>
                <div className="media-links row">
                    <a href="#">
                        <img className="media-icon" src="./icons/facebook.png" alt=""/>
                    </a>
                    <a href="#">
                        <img className="media-icon" src="./icons/twitter.png" alt=""/>
                    </a>
                    <a href="#">
                        <img className="media-icon" src="./icons/instagram.png" alt=""/>
                    </a>
                </div>
            </div>
            <div className="copy-right">
                <div className="container">
                    <p>Michgid Global Resources Ltd. &copy; 2023, All RIghts Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer