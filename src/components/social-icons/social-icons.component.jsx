import React from "react";

import Twitter from "./../../assets/icons/twitter.png"
import Facebook from "./../../assets/icons/facebook.png"
import LinkedIn from "./../../assets/icons/linkedin.png"
import Instagram from "./../../assets/icons/instagram.png"
import Messenger from "./../../assets/icons/messenger.png"

import "./social-icons.styles.scss";

const SocialIcons = () => {
    return(
        <div className="social-icons">
            <a className="social-icons__icon-link" href="https://twitter.com" target="_blank"><img className="social-icons__icon" src={Twitter} alt="Twitter" /></a>
            <a className="social-icons__icon-link" href="https://facebook.com" target="_blank"><img className="social-icons__icon" src={Facebook} alt="Facebook" /></a>
            <a className="social-icons__icon-link" href="https://linkedin.com" target="_blank"><img className="social-icons__icon" src={LinkedIn} alt="LinkedIn" /></a>
            <a className="social-icons__icon-link" href="https://instagram.com" target="_blank"><img className="social-icons__icon" src={Instagram} alt="Instagram" /></a>
            <a className="social-icons__icon-link" href="/" target="_blank"><img className="social-icons__icon" src={Messenger} alt="Messenger" /></a>
        </div>
    );
}

export default SocialIcons;