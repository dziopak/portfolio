import React from "react";
import Slider from "react-slick";

import "./carousel.styles.scss";
import "./../../assets/css/slick/slick.min.css";
import "./../../assets/css/slick/slick-theme.min.css";

const Carousel = ({children}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        autoplay: true,
        centerMode: false,
        arrows: false
    };
    
    return(
        <div className="carousel">
            <Slider {...settings}>
                {
                    children
                }
            </Slider>
        </div>
    );
}

export default Carousel;