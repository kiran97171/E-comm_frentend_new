import React from 'react'
import "./Components.css"
import Carousel from 'react-bootstrap/Carousel';
import laptop_banner from '../Assets/Home Page/laptop_banner.png'
import tab_banner from '../Assets/Home Page/tab_banner.png'
import smart_banner from '../Assets/Home Page/smart_banner.png'
import iphone_banner2 from '../Assets/Home Page/iphone_banner2.png'
import headphone_banner from '../Assets/Home Page/headphone_banner.png'
import boat_banner from '../Assets/Home Page/boat_banner.png'

const HomeBannerCarousel = () => {
    return (
        <>
            <div id='carousel-container'>
                <div id='carousel'>
                    <Carousel slide={false}>
                        <Carousel.Item>
                            <img
                                className="k-block w-100"
                                src={tab_banner}
                               alt='tab_banner'
                                style={{ height: "400px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="k-block w-100"
                                src={smart_banner}
                                alt='smart_banner'
                                style={{ height: "400px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="k-block w-100"
                                src={boat_banner}
                               alt='boat_banner'
                                style={{ height: "400px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="k-block w-100"
                                src={headphone_banner}
                                alt='headphone_banner'
                                style={{ height: "400px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="k-block w-100"
                                src={iphone_banner2}
                                alt='iphone_banner2'
                                style={{ height: "400px" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="k-block w-100"
                                src={laptop_banner}
                                alt='laptop_banner'
                                style={{ height: "400px" }}
                            />
                        </Carousel.Item>
                        
                    </Carousel >
                </div >
            </div >
        </>
    )
}

export default HomeBannerCarousel