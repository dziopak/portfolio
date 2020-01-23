import React from "react";
import { Link } from "react-router-dom";

import Logo from "./../../assets/img/logo.png";
import "./footer.styles.scss";

const Footer = () => {
    return(
        <div className="footer">
            <div className="container row">
                <div className="col footer__column footer__column--copyrights">
                    <div className="footer__container">
                        <img className="footer__logo" src={Logo} alt="Dziopak.com" />
                        <p className="footer__text">
                            Designed and realised by <Link className="footer__menu-link" to="/">dziopak.com</Link><br/> All rights reserved.
                        </p>
                    </div>
                </div>
                <div className="col footer__column" style={{order: 1}}>
                    <ul className="footer__menu">
                        <li className="footer__menu-title">Main menu</li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">Home page</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">About me</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">My services</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">Recent Work</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">Blog</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">Contact me</Link></li>
                    </ul>
                </div>
                <div className="col footer__column" style={{order: 1}}>
                    <ul className="footer__menu">
                        <li className="footer__menu-title">Services</li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">Web & UI Design</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">Front-end development</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">Back-end development</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">Mobile app development</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">Browser extensions</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">Other services</Link></li>
                    </ul>
                </div>
                <div className="col footer__column" style={{order: 3}}>
                    <ul className="footer__menu">
                        <li className="footer__menu-title">Recent blog posts</li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">CSS Tricks: Perfect square</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">CSS Tricks: Vertical alignment</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">Chrome: Setting up first extension</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">React Hooks: useEffect & useState</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">SEO: Social media impact</Link></li>
                        <li className="footer__menu-item"><Link className="footer__menu-link" to="/">Design: Web design trends in 2020</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;