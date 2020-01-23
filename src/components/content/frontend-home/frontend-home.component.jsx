import React from "react";
import { useParams } from "react-router-dom";

import stock1 from "./../../../assets/vectors/rwd.svg";
import Button from "./../../button/button.component";

import pl from "./lang/pl.json";
import en from "./lang/en.json";


const FrontendHome = () => {
    let langData = {
        pl,
        en
    }
    let {lang} = useParams();
    lang = langData[lang];
    langData = undefined;
    
    return (
        <div className="frontend-home">
                <img className="content-tab__img content-tab__img--bg" src={stock1} alt="Webdesign" />
                <h3 className="content-tab__sub-title">{lang.title}</h3>
                <p className="content-tab__text">{lang.content}</p>
                <Button url="/" text={lang.button} modifier="purple" />
        </div>
    );
}

export default FrontendHome;