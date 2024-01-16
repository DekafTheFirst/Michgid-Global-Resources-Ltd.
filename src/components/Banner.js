import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-heading">
            <h1>{}</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><Link to="#">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="#">Project Gallery</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">All Projects</li>
                </ol>
            </nav>
        </div>
    </div>
  )
}

export default Banner