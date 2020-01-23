import React from "react";
import { useParams } from "react-router-dom";
import stock1 from "./../../../assets/img/stock1.jpg";
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
        <div className="backend-home">
                <h3 className="content-tab__sub-title">{lang.title}</h3>
                <p className="content-tab__text">{lang.content}</p>
                
                <Button url="/" text={lang.button} modifier="purple" />
        </div>
    );
}

export default BackendHome;