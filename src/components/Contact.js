import React from 'react'

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <div className='banner'>
            <div className="banner-heading">
                <h1>CONTACT US</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div className="container">
            <div className="contact-content">
                <h2>What can we do for you?</h2>
                <p>We are always ready and able to work on project of any complexity, be it commercial, residential and we also sell general merchandise.</p>
                <form action="">
                    <div className="form row">
                        <input type="text" name="" id="" placeholder="Your Name" />
                        <input type="email" name="" id="" placeholder="Email" />
                        <select name="" id="">
                            <option value="0">Reason For Contacting*</option>
                            <option value="1">Construction</option>
                            <option value="2">Renovation</option>
                            <option value="3">Consultation</option>
                            <option value="4">Architecture</option>
                            <option value="5">Electric</option>
                            <option value="6">General Merchandise</option>
                        </select>
                        <input type="tel" name="" id="" placeholder="Phone" />
                    </div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Write in details...."></textarea>
                        <p>* indicates a required field.</p>
                    </div>
                    <button type="submit" className="page-btn-2">Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact