import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import useLang from "./../useLang/useLang.component";
import LangSwitcher from "./../lang-switcher/lang-switcher.component";
import NavItem from "./../nav-item/nav-item.component";

import "./top-nav.styles.scss";

const TopNav = ({lang, lang_tag, history, match}) => {
    const navUnderline = () => {
        setTimeout(() => {
            const active = document.querySelector(".top-nav__menu-item--active"); 
            const underline = document.querySelector(".top-nav__underline"); 
            const menuItem = document.querySelectorAll(".top-nav__menu-item");
            if (active) {
                menuItem.forEach((el) => {
                    el.onmouseover = () => {
                        underline.style.left = `${el.offsetLeft}px`;
                        underline.style.width = `${el.offsetWidth}px`;
                        underline.style.opacity = `1`;
                    }
                    el.onmouseout = () => {
                        underline.style.opacity = `0`;
                    }
                });
            } else {
                setTimeout(() => {
                    navUnderline();
                }, 1000);
            }
        }, 200);
    }
    
    useEffect(() => {
        navUnderline();
    }, [match]);
    
    const goHome = (lang_tag) => {
        history.push(`/${lang_tag}/`);
    }

    const toggleNav = () => {
        // const isActive = document.querySelector(".top-nav__menu").classList.
        document.querySelector(".top-nav__menu").classList.toggle("top-nav__menu--mobile");
        document.querySelector(".top-nav__mobile").classList.toggle("top-nav__mobile--active");
    }

    lang = lang[lang_tag];

    return (
        <div className="top-nav">
            <div className="container">
                <div className="top-nav__logo" onClick={() => goHome(lang_tag)}>
                    <strong>DZIOPAK</strong><br/>
                    <small>Development</small>
                </div>
                {lang.home ?
                <ul className="top-nav__menu">
                    <NavItem url={`/${lang_tag}`} mainClass="top-nav__menu-item" text={lang.home} />
                    <NavItem url={`/${lang_tag}/${lang.routes.aboutMe}`} mainClass="top-nav__menu-item" text={lang.aboutMe} />
                    <NavItem url={`/${lang_tag}/${lang.routes.services}`} mainClass="top-nav__menu-item" text={lang.services} />
                    <NavItem url={`/${lang_tag}/${lang.routes.portfolio}`} mainClass="top-nav__menu-item" text={lang.portfolio} />
                    <NavItem url={`/${lang_tag}/${lang.routes.blog}`} mainClass="top-nav__menu-item" text={lang.blog} />
                    <li className="top-nav__menu-item">
                        <Link to="/">{lang.contact}</Link>
                    </li>
                    <li className="top-nav__lang-switcher">
                        <LangSwitcher />
                    </li>
                </ul>
                : ""
                }
                <div className="top-nav__underline"></div>
                <div onClick={toggleNav} className="top-nav__mobile"></div>
            </div>
        </div>
    );
}

export default withRouter(useLang(TopNav, "top-nav", "", true));