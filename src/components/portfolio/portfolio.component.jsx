import React, { useState, useEffect } from "react";
import firebase from './../../utils/firebase.js';

import FiltersBar from "./../filters-bar/filters-bar.component";
import PortfolioPreview from "../portfolio-preview/portfolio-preview.component";
import useLang from "./../useLang/useLang.component";

import "./portfolio.styles.scss";

const Portfolio = ({lang, lang_tag}) => {
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

    return (
        <div className="portfolio section">
            <h3 className="portfolio__header">{lang.title}</h3>
            <p className="spacer portfolio__text text-short">{lang.content}</p>

            <FiltersBar filter={folioData.filterType} setFilter={setFilter} />
            <PortfolioPreview items={filter(folioData.items, folioData.filterType)} />
        </div>
    );
}

export default useLang(Portfolio, "portfolio");