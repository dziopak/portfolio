import React from "react";
import useLang from "./../useLang/useLang.component";

import AboutMeVector from "./../../assets/vectors/about-me.svg";
import "./about-me.styles.scss"

const AboutMe = ({lang, lang_tag}) => {
    lang = lang[lang_tag];
    return (
        <div className="about-me section">
            <h3 className="about-me__title">{lang.title}</h3>
            <img className="about-me__img" src={AboutMeVector} alt="About me" width="200" />
            <p className="about-me__text text-short">{lang.content}</p>
        </div>
    );
}

export default useLang(AboutMe, "about-me");