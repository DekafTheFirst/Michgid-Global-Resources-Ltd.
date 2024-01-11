import React from 'react'
import Slider from './Slider'
import Contact from './Contact'

const Home = ({navOpen}) => {
  return (
    <>
    <Slider navOpen={navOpen}/>


    {/* Experience  */}
    <section className="about row flex container">
        <div className="about-content">
            <h1>Welcome to Michgid Global Resources Intl.</h1>
            <p>Our Company has been the leading construction service to clients through out Nigeria since 20**.</p>
            <a href="#" className="page-btn-2">Contact Us</a>
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
                <a href="#" className="s-card">
                    <div className="icon">
                        <img src={require("../imgs/construction.png")} alt="construction" />
                    </div>
                    <h4>Construction</h4>
                </a>
                <a href="#" className="s-card">
                    <div className="icon">
                        <img src={require("../imgs/renovation.png")} alt="renovation" />
                    </div>
                    <h4>Renovation</h4>
                </a>
                <a href="#" className="s-card">
                    <div className="icon">
                        <img src={require("../imgs/concrete-mixer.png")} alt="road construction" />
                    </div>
                    <h4>Road Construction</h4>
                </a>

                <a href="#" className="s-card">
                    <div className="icon">
                        <img src={require("../imgs/consultation.png")} alt="consultation" />
                    </div>
                    <h4>Consultation</h4>
                </a>
                
                <a href="#" className="s-card">
                    <div className="icon">
                        <img src={require("../imgs/merchandise.png")} alt="merchandise" />
                    </div>
                    <h4>Construction Materials</h4>
                </a>
                <a href="#" className="s-card">
                    <div className="icon">
                        <img src={require("../imgs/travel.png")} alt="immigration" />
                    </div>
                    <h4>Immigration</h4>
                </a>
            </div>
        </div>
    </section>

    

    {/* <!-- Subscribe --> */}
    <section className="subscribe">
        <div className="subscribe-content container">
            <div className="wrapper">
                <h2>Consultation with exceptional quality.</h2>
                <p>Just one call away: <a href="tel:+2348036778249">+2348036778249</a></p>
            </div>
            <a href="#" className="page-btn active">Get your consultation</a>

        </div>


    </section>

    </>
  )
}

export default Home