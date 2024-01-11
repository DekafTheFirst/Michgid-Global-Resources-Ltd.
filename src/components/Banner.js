import React from 'react'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-heading">
            <h1>{}</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Project Gallery</a></li>
                    <li class="breadcrumb-item active" aria-current="page">All Projects</li>
                </ol>
            </nav>
        </div>
    </div>
  )
}

export default Banner