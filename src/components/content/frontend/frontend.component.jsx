import React from "react";
import { useParams } from "react-router-dom";

import stock1 from "./../../../assets/vectors/services-1.svg";

import pl from "./lang/pl.json";
import en from "./lang/en.json";

import "./frontend.styles.scss";

const FrontendServices = () => {
    let langData = {
        pl,
        en
    }
    let {lang} = useParams();
    lang = langData[lang];
    langData = undefined;
    
    return (
        <div className="frontend row">
            <div className="frontend__col col">
                <h3 className="content-tab__sub-title">{lang.title}</h3>
                <p>
                    <strong>{ lang.section1.title }</strong><br/>
                    { lang.section1.content }
                </p>
                <p>
                    <strong>{ lang.section2.title }</strong><br/>
                    { lang.section2.content }
                </p>
                
                <p>
                    <strong>{ lang.section3.title }</strong><br/>
                    { lang.section3.content }
                </p>
            </div>

            <div className="frontend__col col">
                <img className="frontend__img valign" src={stock1} alt="Front-End" />
            </div>
        </div>
    );
}

export default FrontendServices;