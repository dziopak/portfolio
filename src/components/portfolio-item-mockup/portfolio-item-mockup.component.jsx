import React from "react";
import { useParams } from "react-router-dom";

import "./portfolio-item-mockup.styles.scss";

const PortfolioItemMockup = ({ data }) => {
    let {lang} = useParams();

    return (
        <div className="portfolio-item-mockup">
            <div className="portfolio-item-mockup__img-container">
                <img className="portfolio-item-mockup__img" src={data.thumb ? require(`./../../assets/img/folio/${data.thumb}`) : require('./../../assets/img/folio/tadrem.png')} alt={data.name} />
                <div className="portfolio-item-mockup__desc-container" style={data.thumb_background ? {backgroundColor: data.thumb_background} : {}}>
                    <div className="portfolio-item-mockup__desc">
                        <h3 className="portfolio-item-mockup__title" style={data.thumb_color ? {color: data.thumb_color} : {}}>{data.name}</h3>
                    </div>
                </div>
            </div>
    
            
            <div className="portfolio-item-mockup__overlay"></div>
        </div>
    );
}

export default PortfolioItemMockup;