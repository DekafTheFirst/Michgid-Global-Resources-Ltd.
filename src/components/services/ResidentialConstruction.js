import React from 'react'
import { Link } from 'react-router-dom';

const ResidentialConstruction = () => {
  return (
    <div>
      <h2 className='title'>Residential Construction Services</h2>
      <img src={require('../../imgs/residential/2.jpg')}/>
      <p className='body-text'>Welcome to Michgid Global Resources Ltd., where we transform blueprints into dream homes. Our residential construction services are tailored to meet the unique needs and aspirations of homeowners like you. With a focus on quality, creativity, and attention to detail, we bring your vision to life.</p>
      
      <div className="subservice">
        <h3 className='heading'>Custom Home Construction</h3>
        <span className='subheading'>Crafting Your Dream Home:</span>
        <p className='body-text'>At Michgid Global Resources Ltd., we understand that your home is a reflection of your lifestyle and personality. Our custom home construction services ensure that your dream home is not just a structure but a masterpiece. From concept to completion, our team collaborates closely with you to create a home that suits your tastes, preferences, and budget.</p>

        <span className='subheading'>Architectural Expertise:</span>
        <p className='body-text'>Our skilled architects and designers bring creativity and functionality together, ensuring that every corner of your custom home is designed with purpose. Whether you have a specific architectural style in mind or need guidance in choosing the right design, we're here to make your dream a reality.</p>
      </div>
      
      <img src={require('../../imgs/residential/5.jpeg')}/>

      <div className="subservice">
        <h3 className='heading'>Home Renovations and Remodeling</h3>
        
        <span className='subheading'>Transforming Spaces:</span>
        <p className='body-text'>
          Is your existing home in need of a refresh or a complete transformation? Our renovation and remodeling services breathe new life into your spaces. Whether it's a kitchen remodel, bathroom renovation, or a full home makeover, we have the expertise to enhance the functionality and aesthetics of your home.        </p>
        
        <span className='subheading'>Quality Craftsmanship:</span>
        <p className='body-text'>
          We take pride in our craftsmanship, using high-quality materials and the latest construction techniques to ensure longevity and durability. Our attention to detail sets us apart, as we focus on every aspect of your renovation project, from the initial design phase to the finishing touches.        
        </p>
      </div>

      <img src={require('../../imgs/residential/4.jpg')}/>


      <div className="subservice">
        <h3 className='heading'>Additions and Extensions</h3>
        
        <span className='subheading'>Expanding Possibilities:</span>
        <p className='body-text'>
          Need more space for a growing family or a dedicated home office? Our additions and extensions services provide the perfect solution. We seamlessly integrate new spaces into your existing home, ensuring a cohesive and harmonious design.        
        </p>
        
        <span className='subheading'>Maximizing Value:</span>
        <p className='body-text'>
          Beyond meeting your immediate needs, our additions and extensions are designed to add long-term value to your property. Whether it's a sunroom, a new bedroom, or a garage extension, we prioritize functionality and aesthetics to create a seamless blend between old and new.
        </p>
      </div>

      <img src={require('../../imgs/residential/1.jpg')}/>


      <div className="contact">
        <h3 className='heading'>Contact Us</h3>
        <p className='body-text'>
          Ready to embark on the journey of building or transforming your home? <Link to='/contact' className='contact-us-link'>Contact Us</Link> today to discuss your ideas, explore design possibilities, and receive a personalized quote. We're here to make your residential construction experience enjoyable, stress-free, and truly transformative.
        </p>
      </div>
    </div>
  )
}

export default ResidentialConstruction