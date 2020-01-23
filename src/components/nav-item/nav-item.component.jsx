import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavItem = ({url, text, mainClass, classes, handleClick}) => {
    return (
        <li onClick={handleClick} className={`${mainClass} ${classes} ${window.location.pathname === url || window.location.pathname === url+"/" ? `${mainClass}--active` : ""}`}>
            <Link to={url}>{text}</Link>
        </li>
    );
}

export default withRouter(NavItem);