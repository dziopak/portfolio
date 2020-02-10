import React from "react";
import Slider from "react-slick";

import "./../../assets/css/slick/slick.min.css";
import "./../../assets/css/slick/slick-theme.min.css";
import "./pictures-slider.styles.scss";

const PicturesSlider = ({images, alt, imagesPath, className}) => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        centerMode: false,
        arrows: true
    };
    
    return(
        <div className={`pictures-slider ${className}`}>
            {
                images ?
                    <Slider {...settings}>
                        {
                            images.map((el, key) => 
                                <img key={key} src={require(`../../assets/img/${imagesPath}/${el}`)} alt={alt} />
                            )
                        }
                    </Slider>
                : null
            }
        </div>
    );
}

export default PicturesSlider;