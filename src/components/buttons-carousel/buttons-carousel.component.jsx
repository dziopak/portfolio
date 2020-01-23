import React from "react";
import Slider from "react-slick";

import Weneve from "./../../assets/logos/weneve_button.jpg";
import Tadrem from "./../../assets/logos/tadrem_button.png";
import Dystanse from "./../../assets/logos/ed_button.png";

import "./buttons-carousel.styles.scss";
import "./../../assets/css/slick/slick.min.css";
import "./../../assets/css/slick/slick-theme.min.css";

const ButtonsCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        // slidesToScroll: 3,
        autoplay: true,
        centerMode: true
    };

    return (
        <div className="buttons-carousel">
            <div className="container">
                <Slider { ...settings }>
                    <div className="buttons-carousel__item"><img src={Weneve} alt="Weneve"/></div>
                    <div className="buttons-carousel__item"><img src={Tadrem} alt="Tadrem"/></div>
                    <div className="buttons-carousel__item"><img src={Dystanse} alt="E-Dystanse"/></div>
                    <div className="buttons-carousel__item"><img src={Weneve} alt="Weneve"/></div>
                    <div className="buttons-carousel__item"><img src={Tadrem} alt="Tadrem"/></div>
                    <div className="buttons-carousel__item"><img src={Dystanse} alt="E-Dystanse"/></div>
                    <div className="buttons-carousel__item"><img src={Weneve} alt="Weneve"/></div>
                    <div className="buttons-carousel__item"><img src={Tadrem} alt="Tadrem"/></div>
                    <div className="buttons-carousel__item"><img src={Dystanse} alt="E-Dystanse"/></div>
                    <div className="buttons-carousel__item"><img src={Weneve} alt="Weneve"/></div>
                    <div className="buttons-carousel__item"><img src={Tadrem} alt="Tadrem"/></div>
                    <div className="buttons-carousel__item"><img src={Dystanse} alt="E-Dystanse"/></div>
                    <div className="buttons-carousel__item"><img src={Weneve} alt="Weneve"/></div>
                    <div className="buttons-carousel__item"><img src={Tadrem} alt="Tadrem"/></div>
                    <div className="buttons-carousel__item"><img src={Dystanse} alt="E-Dystanse"/></div>
                    <div className="buttons-carousel__item"><img src={Weneve} alt="Weneve"/></div>
                    <div className="buttons-carousel__item"><img src={Tadrem} alt="Tadrem"/></div>
                    <div className="buttons-carousel__item"><img src={Dystanse} alt="E-Dystanse"/></div>
                    <div className="buttons-carousel__item"><img src={Weneve} alt="Weneve"/></div>
                    <div className="buttons-carousel__item"><img src={Tadrem} alt="Tadrem"/></div>
                    <div className="buttons-carousel__item"><img src={Dystanse} alt="E-Dystanse"/></div>
                    <div className="buttons-carousel__item"><img src={Weneve} alt="Weneve"/></div>
                    <div className="buttons-carousel__item"><img src={Tadrem} alt="Tadrem"/></div>
                    <div className="buttons-carousel__item"><img src={Dystanse} alt="E-Dystanse"/></div>
                    <div className="buttons-carousel__item"><img src={Weneve} alt="Weneve"/></div>
                    <div className="buttons-carousel__item"><img src={Tadrem} alt="Tadrem"/></div>
                    <div className="buttons-carousel__item"><img src={Dystanse} alt="E-Dystanse"/></div>
                    <div className="buttons-carousel__item"><img src={Weneve} alt="Weneve"/></div>
                    <div className="buttons-carousel__item"><img src={Tadrem} alt="Tadrem"/></div>
                    <div className="buttons-carousel__item"><img src={Dystanse} alt="E-Dystanse"/></div>
                </Slider>
            </div>
        </div>
    );
}

export default ButtonsCarousel;