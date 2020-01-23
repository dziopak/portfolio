import React from "react";
import "./icon-tab.styles.scss";

const IconTab = ({text, image, active, onClick}) => {
    return (
        <div onClick={onClick} className={`icon-tab ${active ? "icon-tab--active" : ""}`}>
            <img className="icon-tab__icon" src={image} alt="Icon"/>
            <h3 className="icon-tab__title">{text}</h3>
        </div>
    );
}

export default IconTab;