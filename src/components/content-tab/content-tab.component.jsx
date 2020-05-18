import React from "react";

import Button from "./../button/button.component";
import "./content-tab.styles.scss";

const ContentTab = ({ title, content, vector, buttonText }) => {
    return (
        <div className="content-tab row">
            <div className="col">
                <img className="content-tab__img content-tab__img--bg" src={vector} alt={title} />
            </div>
            <div className="col">
                <h3 className="content-tab__sub-title">{title}</h3>
                <p className="content-tab__text">{content}</p>
                <Button url="/" text={buttonText} modifier="purple" />
            </div>
        </div>
    );
}

export default ContentTab;