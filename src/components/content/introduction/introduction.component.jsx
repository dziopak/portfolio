import React, { useEffect } from "react";
import Typed from 'typed.js';

import Button from "./../../button/button.component";
import IntroVector from "./../../../assets/vectors/about-me.svg";
import useLang from "./../../useLang/useLang.component";

import "./introduction.styles.scss";

const Introduction = ({lang, lang_tag}) => {
    lang = lang[lang_tag];
    
    return (
        <div className="introduction section">
            <div className="row">
                <div className="col">
                    <img alt="Introduction" className="introduction__img animate-opacity animate-opacity--inactive" src={IntroVector} />
                </div>
                { lang && lang.routes ?
                <div className="col">
                    <div className="introduction__content">
                        <h3 className="introduction__title animate-opacity animate-opacity--inactive" data-delay="1">{lang.title}</h3>
                        <p className="introduction__text animate-opacity animate-opacity--inactive" data-delay="2">{lang.content}</p>
                        <div data-delay="3" className="animate-opacity animate-opacity--inactive">
                            <Button url={lang.routes.aboutMe} modifier="purple" text="Mój Blog" />
                            <Button url={lang.routes.aboutMe} modifier="pink" text={lang.button} />
                        </div>
                    </div>
                </div>
                : "" }
            </div>
        </div>
    );
}

export default useLang(Introduction, "content/introduction", "", true);