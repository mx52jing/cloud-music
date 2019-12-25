import React, {memo, useState, useEffect} from 'react'
import Swiper from 'swiper'

import 'swiper/css/swiper.css'
import './index.scss'

const Slider = props => {
    const [sliderSwiper, setSliderSwiper] = useState(null)
    const { sliderList } = props
    useEffect(_ => {
        if(!sliderSwiper && !!sliderList.length) {
            const swiper = new Swiper('.slider-container', {
                loop: true,
                autoplay: true,
                autoplayDisableOnInteraction: false,
                pagination: {el:'.swiper-pagination'}
            })
            setSliderSwiper(swiper)
        }
    }, [sliderList.length, sliderSwiper])
    return (
        <div className="slider-wrapper">
            <div className="slider-container">
                <div className="swiper-wrapper">
                    {
                        sliderList.map((item, index) => (
                            <div
                                key={index}
                                className="swiper-slide">
                                <div className="slider-nav">
                                    <img src={item.imageUrl} alt=""/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    )
}

export default memo(Slider)
