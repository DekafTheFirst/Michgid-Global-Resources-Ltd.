import React, { useEffect, useState } from 'react'
import Banner from './Banner'

const products = [
    {id:"residential-1", productName: "Television", imagePath: require('../imgs/goods/electronics/1.png'), tag: 'electronics'},
    {id:"residential-2", productName: "Television", imagePath: require('../imgs/goods/electronics/2.png'), tag: 'electronics'},
    {id:"residential-3", productName: "Television", imagePath: require('../imgs/goods/electronics/3.png'), tag: 'electronics'},
    {id:"residential-4", productName: "Television", imagePath: require('../imgs/goods/electronics/4.png'), tag: 'electronics'},
    {id:"residential-5", productName: "Television", imagePath: require('../imgs/goods/electronics/6.png'), tag: 'electronics'},
    {id:"residential-6", productName: "Television", imagePath: require('../imgs/goods/electronics/7.png'), tag: 'electronics'},
    {id:"residential-7", productName: "Television", imagePath: require('../imgs/goods/electronics/8.png'), tag: 'electronics'},
    {id:"residential-8", productName: "Television", imagePath: require('../imgs/goods/electronics/9.png'), tag: 'electronics'},
    {id:"residential-9", productName: "Television", imagePath: require('../imgs/goods/electronics/10.png'), tag: 'electronics'},

    {id:"furniture-1", productName: "Furniture", imagePath: require('../imgs/goods/furniture/1.png'), tag: 'furniture'},
    {id:"furniture-2", productName: "Furniture", imagePath: require('../imgs/goods/furniture/2.png'), tag: 'furniture'},
    {id:"furniture-3", productName: "Furniture", imagePath: require('../imgs/goods/furniture/3.png'), tag: 'furniture'},
    {id:"furniture-4", productName: "Furniture", imagePath: require('../imgs/goods/furniture/4.png'), tag: 'furniture'},
    {id:"furniture-5", productName: "Furniture", imagePath: require('../imgs/goods/furniture/5.png'), tag: 'furniture'},
    {id:"furniture-6", productName: "Furniture", imagePath: require('../imgs/goods/furniture/6.png'), tag: 'furniture'},
    {id:"furniture-7", productName: "Furniture", imagePath: require('../imgs/goods/furniture/7.png'), tag: 'furniture'},
    {id:"furniture-8", productName: "Furniture", imagePath: require('../imgs/goods/furniture/8.png'), tag: 'furniture'},
    {id:"furniture-9", productName: "Furniture", imagePath: require('../imgs/goods/furniture/9.png'), tag: 'furniture'},
    {id:"furniture-10", productName: "Furniture", imagePath: require('../imgs/goods/furniture/10.png'), tag: 'furniture'},

    {id:"building-materials-1", productName: "Building Materials", imagePath: require('../imgs/goods/building-materials/1.png'), tag: 'building-materials'},
    {id:"building-materials-2", productName: "Building Materials", imagePath: require('../imgs/goods/building-materials/2.png'), tag: 'building-materials'},
    {id:"building-materials-3", productName: "Building Materials", imagePath: require('../imgs/goods/building-materials/3.png'), tag: 'building-materials'},
    {id:"building-materials-4", productName: "Building Materials", imagePath: require('../imgs/goods/building-materials/4.png'), tag: 'building-materials'},
    {id:"building-materials-5", productName: "Building Materials", imagePath: require('../imgs/goods/building-materials/5.png'), tag: 'building-materials'},
    {id:"building-materials-6", productName: "Building Materials", imagePath: require('../imgs/goods/building-materials/6.png'), tag: 'building-materials'},
    {id:"building-materials-7", productName: "Building Materials", imagePath: require('../imgs/goods/building-materials/7.png'), tag: 'building-materials'},
    {id:"building-materials-8", productName: "Building Materials", imagePath: require('../imgs/goods/building-materials/8.png'), tag: 'building-materials'},




   
    // {id:"road-4", imagePath: require('../imgs/road/4.jpg'), tag: 'road'},
    // {id:"c-9", imagePath: require('../imgs/commercial/9.jpg'), tag: 'commercial'},
    // {id:"c-10", imagePath: require('../imgs/commercial/10.jpg'), tag: 'commercial'},
    // {id:"c-11", imagePath: require('../imgs/commercial/11.jpeg'), tag: 'commercial'},
    // {id:"c-12", imagePath: require('../imgs/commercial/12.jpeg'), tag: 'commercial'},
    // {id:"c-13", imagePath: require('../imgs/commercial/13.png'), tag: 'commercial'},
]


const Goods = () => {
    const [tag, setTag] = useState('electronics');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=> {
        setFilteredProducts(products.filter(image => image.tag == tag));
    }, [tag])

    return (
        <section className='goods-page page'>
            <div className='banner'>
                <div className="banner-heading">
                    <h1>Goods</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Goods</li>
                        </ol>
                    </nav>
                </div>
            </div>

            

            <div className="container-fluid">
                <div className="row">
                    <div className='filter col-lg-3'>
                        <h3>Available Goods</h3>
                        <div className="tags ">
                            {/* <div className="tags ">
                                {images.map(image => (<TagButton key={image.id} name={image.id} handleSetTag={setTag} tagActive={tag === image.slug ? true : false}/>))}
                            </div> */}
                            <TagButton name="electronics" tag="electronics" handleSetTag={setTag} tagActive={tag === "electronics" ? true : false}/>
                            <TagButton name="building materials" tag="building-materials" handleSetTag={setTag} tagActive={tag === "building-materials" ? true : false}/>
                            <TagButton name="furniture" tag="furniture" handleSetTag={setTag} tagActive={tag === "furniture" ? true : false}/>
                        </div>
                    </div>
                    <div className="images col-lg-9">
                        {filteredProducts.map(product => (
                            <div className="image-container" key={product.id}>
                                <div className="image-card">
                                    <img src={product.imagePath} alt={product.id}/>
                                    <div className="overlay">
                                        <a href={`/contact`}><span>Buy This Item</span></a>
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

export default Goods;