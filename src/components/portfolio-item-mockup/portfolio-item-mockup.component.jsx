import React from "react";
import { Link } from "react-router-dom";

import useLang from "../useLang/useLang.component";

import "./portfolio-item-mockup.styles.scss";

const PortfolioItemMockup = ({ data, lang, lang_tag }) => {
    lang = lang[lang_tag];
    return (
        <Link to={`/${lang_tag}/${lang.portfolio}/${lang.project}/${data.url}`}>
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
        </Link>
    );
}

export default useLang(PortfolioItemMockup);