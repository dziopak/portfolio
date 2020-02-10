import React from "react";
import { Link } from "react-router-dom";

import "./button.styles.scss";

const Button = ({text, type, url, modifier, onClick}) => {
    return (
        <div className={`button ${modifier ? `button--${modifier}` : null}`}>
            { type === "submit" ?
                <button className="button__btn" type="submit">{text}</button>
            :
            <Link to={url || "/"}>
                <button onClick={onClick} className="button__btn">{text}</button>
            </Link>
            }
        </div>
    );
}

export default Button;