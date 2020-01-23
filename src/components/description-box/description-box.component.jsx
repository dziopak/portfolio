import React from "react";
import "./description-box.styles.scss";

const DescriptionBox = ({children}) => {
    return(<div className="description-box section">{children}</div>);
}

export default DescriptionBox;