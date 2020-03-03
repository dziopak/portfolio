import React from "react";
import { useParams } from "react-router-dom";
import vector from "./../../../assets/vectors/back-end-home.svg";
import Button from "../../button/button.component";

import pl from "./lang/pl.json";
import en from "./lang/en.json";

const BackendHome = () => {
    let langData = {
        pl,
        en
    }
    let {lang} = useParams();
    lang = langData[lang];
    langData = undefined;

    return (
        <div className="backend-home row">
            <div className="col">
                <img className="content-tab__img content-tab__img--bg" src={vector} alt="Back-End" />
            </div>
            <div className="col">
                <div class="valign">
                    <h3 className="content-tab__sub-title">{lang.title}</h3>
                    <p className="content-tab__text">{lang.content}</p>
                    <Button url="/" text={lang.button} modifier="purple" />
                </div>
            </div>
        </div>
    );
}

export default BackendHome;