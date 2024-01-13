import React, { useEffect, useState } from 'react'
import ResidentialConstruction from './ResidentialConstruction';
import { Routes, useParams } from 'react-router-dom';
import CommercialConstruction from './CommercialConstruction';
import RoadConstruction from './RoadConstruction';
import BoreholeDrilling from './BoreholeDrilling';
import GeneralMerchandise from './GeneralMerchandise';
import ImmigrationServices from './ImmigrationServices';

const pages = [
  {slug:'residential-construction', pageTitle: 'Residential Construction', element: <ResidentialConstruction/>},
  {slug: 'commercial-construction', pageTitle: 'Commercial Construction', element: <CommercialConstruction/>},
  {slug: 'road-construction', pageTitle: 'Road Construction', element: <RoadConstruction/>},
  {slug: 'borehole-drilling', pageTitle: 'Borehole Drilling', element: <BoreholeDrilling/>},
  {slug: 'general-merchandise', pageTitle: 'General merchandise', element: <GeneralMerchandise/>},
  {slug: 'immigration-services', pageTitle: 'Immigration Services', element: <ImmigrationServices/>},
]

const images = [];
const Services = () => {
    const {slug} = useParams();
    const [tag, setTag] = useState(slug);
    const currentPage = pages.find((page)=>page.slug === tag).element
  
    return (
      <section className='services-page page'>
          <div className='banner'>
              <div className="banner-heading">
                  <h1>Services</h1>
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                          <li className="breadcrumb-item"><a href="/">Home</a></li>
                          <li className="breadcrumb-item"><a href="#">Services</a></li>
                          <li className="breadcrumb-item active" aria-current="page">{pages.find((page => page.slug === tag)).pageTitle}</li>
                      </ol>
                  </nav>
              </div>
          </div>

          

          <div className="container-fluid">
              <div className="row">
                  <div className='filter col-lg-3'>
                      <h3>Services</h3>
                      <div className="tags ">
                        {pages.map(page => (<TagButton key={page.slug} slug={page.slug} name={page.pageTitle} handleSetTag={setTag} tagActive={tag === page.slug ? true : false}/>))}
                      </div>
                  </div>
                  <div className="article col-lg-9">
                    {currentPage}
                  </div>
              </div>
              
          </div>
    </section>
)}

const TagButton = ({name, handleSetTag, tagActive, slug}) => {
  return <button className={`tag ${tagActive && 'active'}`} onClick={()=> handleSetTag(slug)}>{name}</button>
}


export default Services