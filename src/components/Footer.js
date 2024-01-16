import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container-fluid">
            <div className="row">
                <div className="footer-details col-md-6">
                    <a href="#" className="logo" ><img src={require("../icons/letter-m.png")} alt="logo" className="logo-img" /></a>
                    <div className="detail">
                        <h5>Address: </h5>
                        <p>7869, Lugbe, Abuja, Nigeria</p>
                    </div>
                    <div className="detail">
                        <h5>Phone: </h5>
                        <a href="tel:+2348036778249">+2348036778249</a>
                    </div>
                    <div className="detail">
                        <h5>Email: </h5>
                        <a href="mailto:contact@michgidglobal@gmail.com">contact@michgidglobal@gmail.com</a>
                    </div>
            
                
                </div>
                <div className="footer-content col-md-6">                    
                    <div className="media-links mb-5">
                        <h5>Socials: </h5>
                        <div className="links">
                            <a href="#">
                                <img className="media-icon" src={require("../icons/facebook.png")} alt=""/>
                            </a>
                            <a href="#">
                                <img className="media-icon" src={require("../icons/twitter.png")} alt=""/>
                            </a>
                            <a href="#">
                                <img className="media-icon" src={require("../icons/instagram.png")} alt=""/>
                            </a>
                            <a href="#">
                                <img className="media-icon" src={require("../icons/linkedin.png")} alt=""/>
                            </a>
                        </div>
                    </div>
                    <form action="">
                        <h5>Newsletter: </h5>
                        <input type="email" name="" id="" placeholder="Your email here"/>
                        <button type="submit" className="page-btn-2">Subscribe</button>
                    </form>
                </div>
            
                <div className="copy-right mt-3">
                    <p>Michgid Global Resources Ltd. &copy; 2023, All RIghts Reserved.</p>
                    <a href="" className="">Contact Us</a>
                </div>
                
        </div>
        
        </div>
    </footer>
  )
}

export default Footer