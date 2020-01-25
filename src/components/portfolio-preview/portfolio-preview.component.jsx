import React from "react";
import { useParams } from "react-router-dom";

import PortfolioItemMockup from "./../portfolio-item-mockup/portfolio-item-mockup.component";

import "./portfolio-preview.styles.scss";

const PortfolioPreview = ({items}) => {
    
    let {lang} = useParams();

    return(
        <div className="portfolio-preview">
            {
                items ?
                    items.map((el, index) => 
                        <PortfolioItemMockup data={el} key={index} />
                    )
                : null
            }
        </div>
    );
}

export default PortfolioPreview;