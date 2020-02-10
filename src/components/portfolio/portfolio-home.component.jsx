import React, { useState, useEffect } from "react";
import firebase from './../../utils/firebase.js';

import FiltersBar from "./../filters-bar/filters-bar.component";
import PortfolioPreview from "../portfolio-preview/portfolio-preview.component";
import Button from "./../button/button.component"
import useLang from "./../useLang/useLang.component";

import "./portfolio.styles.scss";

const PortfolioHome = ({lang, lang_tag}) => {
    lang = lang[lang_tag];

    const [folioData, setFolioData] = useState({
        filterType: 0,
        items: []
    });

    useEffect(() => {
        const fn = async () => {
            const db = firebase.firestore();
            const itemsRef = await db.collection("items").get();
            const newState = [];
            itemsRef.forEach((doc) => {
                newState.push(doc.data());
            });
            setFolioData({
                ...folioData,
                items: newState
            });
        };
        fn();
    },["*"]);

    const setFilter = (filter) => {
        setFolioData({
            ...folioData,
            filterType: filter
        });
    };

    const filter = (items, filter) => {
        let res;
        if (filter !== 0) {
            res = items.filter((el) => el.type === filter);
        } else {
            res = items;
        }
        return res;
    };


    const items = filter(folioData.items, folioData.filterType);

    return (
        <div className="portfolio portfolio--home section">
            <h3 className="portfolio__header animate-opacity animate-opacity--inactive">{lang.title_home}</h3>
            <p className="spacer portfolio__text text-short animate-opacity animate-opacity--inactive">{lang.content_home}</p>
            <div className="animate-opacity animate-opacity--inactive">

            <FiltersBar filter={folioData.filterType} setFilter={setFilter} />
            {
                items.length > 0 ? <PortfolioPreview items={items.slice(0, 4)} />
                : <p>{lang.noItems}</p>
            }
            <Button url={`${lang_tag}/${lang.route}`} text={lang.button} modifier="purple" />
            </div>
        </div>
    );
}

export default useLang(PortfolioHome, "portfolio");