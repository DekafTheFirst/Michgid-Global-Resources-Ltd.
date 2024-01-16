import React from 'react'
import Slider from './Slider'
import Contact from './Contact'
import { Link } from 'react-router-dom';

const Home = ({navOpen}) => {
  return (
    <>
    <Slider navOpen={navOpen}/>


    {/* Experience  */}
    <section className="about row flex container">
        <div className="about-content">
            <h1>Welcome to Michgid Global Resources Ltd.</h1>
            <p>Our Company has been the leading construction service to clients through out Nigeria since 20**.</p>
            <Link to="/about-us" className="page-btn-2">Learn More</Link>
        </div>
        <div className="vision row">
            <div className="vision-content">
                <h2>OUR VISION</h2>
                <ul>
                    <li>To become the go to company when it comes to construction in nigeria and world wide</li>
                    <li>To provide service unmatched which will make our clients trust us with their construction and other needs</li>
                </ul>
            </div>
            
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      OUR VALUES
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      OUR MISSION
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      OUR OBJECTIVES
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                  </div>
                </div>
              </div>
        
        </div>
        
    </section>
    

    {/* <!-- Services --> */}
    <section className="service-links" id="service-links">
        <div className="container">
            <h3>Services</h3>
            <div className="service-cards column">
                <Link to="/services/residential-construction" className="s-card">
                    <div className="icon">
                        <img src={require("../imgs/residential-construction.png")} alt="construction" />
                    </div>
                    <h4>Residential Construction</h4>
                </Link>
                <Link to="/services/commercial-construction" className="s-card">
                    <div className="icon">
                        <img src={require("../imgs/commercial-construction.png")} alt="renovation" />
                    </div>
                    <h4>Commercial Construction</h4>
                </Link>
                <Link to="/services/road-construction" className="s-card">
                    <div className="icon">
                        <img src={require("../imgs/concrete-mixer.png")} alt="road construction" />
                    </div>
                    <h4>Road Construction</h4>
                </Link>

                <Link to="/services/borehole-drilling" className="s-card">
                    <div className="icon">
                        <img src={require("../imgs/borehole-drilling.png")} alt="borehole-drilling" />
                    </div>
                    <h4>Borehole Drilling</h4>
                </Link>
                
                <Link to="/goods" className="s-card">
                    <div className="icon">
                        <img src={require("../imgs/merchandise.png")} alt="merchandise" />
                    </div>
                    <h4>Goods</h4>
                </Link>

                <Link to="/services/consultancy" className="s-card">
                    <div className="icon">
                        <img src={require("../imgs/consultancy.png")} alt="immigration" />
                    </div>
                    <h4>Consultancy</h4>
                </Link>
            </div>
        </div>
    </section>

    

    {/* <!-- Subscribe --> */}
    <section className="subscribe">
        <div className="subscribe-content container">
            <div className="wrapper">
                <h2>Consultation with exceptional quality.</h2>
                <p>Just one call away: <Link to="tel:+2348036778249">+2348036778249</Link></p>
            </div>
            <Link to="/contact" className="page-btn active">Get your consultation</Link>

        </div>


    </section>

    </>
  )
}

export default Home