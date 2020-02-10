import React from "react";
import { Link, withRouter, useParams } from "react-router-dom";

const NavItem = ({url, text, mainClass, classes, handleClick}) => {
    const {lang} = useParams();
    const {pathname} = window.location;
    const currentUrl = pathname.split("/")[2];
    let pageUrl = url.split(lang+"/");
    if (pageUrl.length > 0) pageUrl = pageUrl[1];
    
    return (
        <li onClick={handleClick} className={`${mainClass} ${classes} ${currentUrl === pageUrl ? `${mainClass}--active` : ""}`}>
            <Link to={url}>{text}</Link>
        </li>
    );
}

export default withRouter(NavItem);