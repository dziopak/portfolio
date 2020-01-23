import React from "react";
import useLang from "./../useLang/useLang.component";

import "./filters-bar.styles.scss";

const FiltersBar = ({ lang, lang_tag, filter, setFilter}) => {
    lang = lang[lang_tag];
    return (
        <div className="filters-bar">
            <div className="inner-container">
                <ul className="filters-bar__list row">
                    <li onClick={() => setFilter(0)} className={`filters-bar__list-item col ${filter === 0 ? "filters-bar__list-item--active" : ""}`}>{lang.all}</li>
                    <li onClick={() => setFilter(1)} className={`filters-bar__list-item col ${filter === 1 ? "filters-bar__list-item--active" : ""}`}>{lang.websites}</li>
                    <li onClick={() => setFilter(2)} className={`filters-bar__list-item col ${filter === 2 ? "filters-bar__list-item--active" : ""}`}>{lang.webapps}</li>
                    <li onClick={() => setFilter(3)} className={`filters-bar__list-item col ${filter === 3 ? "filters-bar__list-item--active" : ""}`}>{lang.mobile}</li>
                    <li onClick={() => setFilter(4)} className={`filters-bar__list-item col ${filter === 4 ? "filters-bar__list-item--active" : ""}`}>{lang.extensions}</li>
                    <li onClick={() => setFilter(5)} className={`filters-bar__list-item col ${filter === 5 ? "filters-bar__list-item--active" : ""}`}>{lang.design}</li>
                </ul>
            </div>
        </div>
    );
}

export default useLang(FiltersBar, "filters-bar");