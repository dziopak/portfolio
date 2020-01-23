import React from "react";
import { useParams } from "react-router-dom";

import "./portfolio-preview.styles.scss";

const PortfolioPreview = ({items}) => {
    
    let {lang} = useParams();

    return(
        <div className="portfolio-preview">
            {
                items ?
                    items.map((el, index) => 
                        <div key={index} className="portfolio-preview__item">
                            <img className="portfolio-preview__img" src={el.thumb ? require(`./../../assets/img/folio/${el.thumb}`) : require('./../../assets/img/folio/tadrem.png')} alt={el.name} />
                            <div className="portfolio-preview__item-desc-container">
                                <div className="portfolio-preview__item-desc">
                                    <h3 className="portfolio-preview__item-title">{el.name}</h3>
                                    <p className="portfolio-preview__item-text">{el["desc_"+lang]}</p>
                                </div>
                            </div>
                        </div>
                    )
                : null
            }
        </div>
    );
}

export default PortfolioPreview;