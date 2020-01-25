import React from "react";
import { useParams } from "react-router-dom";
import "./portfolio-item.styles.scss";

const PortfolioItem = ({key, data}) => {
    let {lang} = useParams();
    return (
        <div key={key} className="portfolio-item">
            <img className="portfolio-item__img" src={data.thumb ? require(`./../../assets/img/folio/${data.thumb}`) : require('./../../assets/img/folio/tadrem.png')} alt={data.name} />
            <div className="portfolio-item__desc-container">
                <div className="portfolio-item__desc">
                    <h3 className="portfolio-item__title">{data.name}</h3>
                    <p className="portfolio-item__text">{data["desc_"+lang]}</p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem;