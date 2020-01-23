import React from "react";

import useLang from "./../../components/useLang/useLang.component";
import Portfolio from "./../../components/portfolio/portfolio.component";

import "./portfolio.styles.scss";

const PortfolioPage = () => {
    return (
        <div className="portfolio-page">
            <div className="container">
                <Portfolio />
            </div>
        </div>
    );
}

export default useLang(PortfolioPage, "portfolio", "views");