import React from "react";
import Button from "./../button/button.component";

import "./carousel-item.styles.scss";

const CarouselItem = ({img, title, children, text}) => {
    return(
        <div className="carousel-item">
            <div className="carousel-item__img-container">
                <img className="carousel-item__img" src={img} alt={title} />
            </div>
            <div className="carousel-item__content">
                <h4 className="carousel-item__title">{title}</h4>
                <p className="carousel-item__text">{text}</p>
                {children}
                <Button text="Verify me" modifier="purple" />
            </div>
        </div>
    );
}

export default CarouselItem;