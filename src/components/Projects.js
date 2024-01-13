import React, { useEffect, useState } from 'react'
import Banner from './Banner'

const images = [
    {id:"residential-1", imagePath: require('../imgs/residential/1.jpg'), tag: 'residential-construction'},
    {id:"residential-2", imagePath: require('../imgs/residential/2.jpg'), tag: 'residential-construction'},
    {id:"residential-3", imagePath: require('../imgs/residential/3.jpg'), tag: 'residential-construction'},
    {id:"residential-4", imagePath: require('../imgs/residential/4.jpg'), tag: 'residential-construction'},
    {id:"residential-5", imagePath: require('../imgs/residential/5.jpeg'), tag: 'residential-construction'},
    {id:"residential-6", imagePath: require('../imgs/residential/6.jpg'), tag: 'residential-construction'},
    {id:"residential-7", imagePath: require('../imgs/residential/7.jpg'), tag: 'residential-construction'},
    {id:"residential-8", imagePath: require('../imgs/residential/8.jpg'), tag: 'residential-construction'},
    {id:"residential-9", imagePath: require('../imgs/residential/9.jpg'), tag: 'residential-construction'},
    {id:"residential-10", imagePath: require('../imgs/residential/10.jpg'), tag: 'residential-construction '},
    {id:"residential-11", imagePath: require('../imgs/residential/11.jpeg'), tag: 'residential-construction'},
    {id:"residential-12", imagePath: require('../imgs/residential/12.jpeg'), tag: 'residential-construction'},
    {id:"residential-13", imagePath: require('../imgs/residential/13.png'), tag: 'residential-construction'},
    {id:"commercial-1", imagePath: require('../imgs/commercial/1.jpg'), tag: 'commercial-construction'},
    {id:"commercial-2", imagePath: require('../imgs/commercial/2.jpg'), tag: 'commercial-construction'},
    {id:"commercial-3", imagePath: require('../imgs/commercial/3.jpg'), tag: 'commercial-construction'},
    {id:"commercial-4", imagePath: require('../imgs/commercial/4.jpg'), tag: 'commercial-construction'},
    {id:"road-1", imagePath: require('../imgs/road/1.jpg'), tag: 'road-construction'},
    {id:"road-2", imagePath: require('../imgs/road/2.jpg'), tag: 'road-construction'},
    {id:"road-3", imagePath: require('../imgs/road/3.jpg'), tag: 'road-construction'},
    // {id:"road-4", imagePath: require('../imgs/road/4.jpg'), tag: 'road'},
    // {id:"c-9", imagePath: require('../imgs/commercial/9.jpg'), tag: 'commercial'},
    // {id:"c-10", imagePath: require('../imgs/commercial/10.jpg'), tag: 'commercial'},
    // {id:"c-11", imagePath: require('../imgs/commercial/11.jpeg'), tag: 'commercial'},
    // {id:"c-12", imagePath: require('../imgs/commercial/12.jpeg'), tag: 'commercial'},
    // {id:"c-13", imagePath: require('../imgs/commercial/13.png'), tag: 'commercial'},
]


const Projects = () => {
    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(()=> {
        tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag == tag));
    }, [tag])

    return (
        <section className='projects-page page'>
            <div className='banner'>
                <div className="banner-heading">
                    <h1>PROJECTS</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Project Gallery</a></li>
                            <li className="breadcrumb-item active" aria-current="page">All Projects</li>
                        </ol>
                    </nav>
                </div>
            </div>

            

            <div className="container-fluid">
                <div className="row">
                    <div className='filter col-lg-2'>
                        <h3>Projects</h3>
                        <div className="tags ">
                            {/* <div className="tags ">
                                {images.map(image => (<TagButton key={image.id} name={image.id} handleSetTag={setTag} tagActive={tag === image.slug ? true : false}/>))}
                            </div> */}
                            <TagButton name="all" tag="all" handleSetTag={setTag} tagActive={tag === "all" ? true : false}/>
                            <TagButton name="residential" tag="residential-construction" handleSetTag={setTag} tagActive={tag === "residential-construction" ? true : false}/>
                            <TagButton name="commercial" tag="commercial-construction" handleSetTag={setTag} tagActive={tag === "commercial-construction" ? true : false}/>
                            <TagButton name="road" tag="road-construction" handleSetTag={setTag} tagActive={tag === "road-construction" ? true : false}/>
                        </div>
                    </div>
                    <div className="images col-lg-10">
                        {filteredImages.map(image => (
                            <div className="image-container" key={image.id}>
                                <div className="image-card">
                                    <img src={image.imagePath} alt={image.id}/>
                                    <div className="overlay">
                                        <a href={`/services/${image.tag}`}><span>Learn More</span></a>
                                    </div>
                            </div>
                        </div>))}
                    </div>
                </div>
                
            </div>
        </section>
    )
}

const TagButton = ({name, tag, handleSetTag, tagActive}) => {
    return <button className={`tag ${tagActive && 'active'}`} onClick={()=> handleSetTag(tag)}>{name}</button>
}

export default Projects