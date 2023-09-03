import React from 'react'
import Navbar from '../Components/Navbar'
import HomeBannerCarousel from '../Components/HomeBannerCarousel'
import BestSellers from './BestSellers'
import HomeBannerAutoCarousel from '../Components/HomeBannerAutoCarousel'
import Perks from '../Components/Perks'
import FeaturedProducts from '../Components/FeaturedProducts'
import Footer from '../Components/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BestSellerElectronics = () => {
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(4)

    useEffect(() => {
        axios.get("https://e-comm-backend-new03.onrender.com/products/electronics")
            .then((response) => setData(response.data))
            .catch((error) => console.log("Error", error))
    }, [])

    const loadMoreItems = () => {
        setVisible(prevValue => prevValue + 2)
    }

    return (
        <>
            <Navbar />
            <HomeBannerCarousel />
            <div id='best-sellers'>
                <h3>BEST SELLERS</h3>
                <BestSellers />
                <div className='bestseller-products-data-container'>
                    <div className='bestseller-products-data'>
                        {
                            data.slice(0, visible).filter((item, index) => { return item.id >= 5 && item.id <= 15 }).map((element, index) => (
                                <div className='bestseller-product-card' key={index}>
                                    <Link to={`/detaildescription/${element.id}`} ><img src={element.productImage1} alt=""></img></Link>
                                    <div className='bestseller-product-card-data-description'>
                                        <Link to={`/detaildescription/${element.id}`} className='product-link'><h5>{element.productTitle}</h5></Link>
                                        <p className='bestseller-product-price'>&#x20b9; {element.productPrice}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='load-more-products-container'>
                    <button onClick={loadMoreItems} className={visible === 10 ? 'load-more-products-button-hidden' : 'load-more-products-button-visible'}>LOAD MORE PRODUCTS »</button>
                </div>
            </div>
            <HomeBannerAutoCarousel />
            <Perks />
            <FeaturedProducts />
            <hr className='home-hr' />
            <Footer />
        </>
    )
}
export default BestSellerElectronics