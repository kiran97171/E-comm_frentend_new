import React from 'react'
import './Components.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import smart_auto_banner from '../Assets/Home Page/smart_auto_banner.png'
import tab_auto_banner1 from '../Assets/Home Page/tab_auto_banner1.png'
import iphone_auto_banner from '../Assets/Home Page/iphone_auto_banner.png'
import tab_auto_banner from '../Assets/Home Page/tab_auto_banner.png'
import headphone_auto_banner from '../Assets/Home Page/headphone_auto_banner.png'


const HomeBannerAutoCarousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 500,
        cssEase: "linear"
    };
    return (
        <>
            <div className='auto-carousel-container'>
                <div className='auto-carousel'>
                    <Slider {...settings}>
                        <div>
                            <img src={smart_auto_banner} alt='smart_auto_banner'></img>
                        </div>
                        <div>
                            <img src={tab_auto_banner1} alt='tab_auto_banner1'></img>
                        </div>
                        <div>
                            <img src={iphone_auto_banner} alt='iphonr_auto_banner'></img>
                        </div>
                        <div>
                            <img src={tab_auto_banner} alt='tab_auto_banner'></img>
                        </div>
                        <div>
                            <img src={headphone_auto_banner} alt='headphone_banner'></img>
                        </div>
                      
                    </Slider>
                </div>
            </div>
        </>
    )
}
export default HomeBannerAutoCarousel