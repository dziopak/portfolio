import React from "react";
import { withRouter } from "react-router-dom";
import useLang from "./../useLang/useLang.component";

import "./lang-switcher.styles.scss";

const LangSwitcher = ({lang, lang_tag, history}) => {
    lang = lang[lang_tag]; 
    
    const switchLang = (lang_tag) => {
        if (lang_tag === "pl") {
            history.push("/en/");
        } else {
            history.push("/pl/");
        }
    }

    return (
        <div className="lang-switcher">
            {
                lang[lang_tag] ?
                    <img alt={lang[lang_tag].name} onClick={() => switchLang(lang_tag)}  className="lang-switcher__flag" src={require(`./../../assets/icons/lang/${lang[lang_tag].icon}`)} />
                : ""
            }
        </div>
    );
}

export default useLang(withRouter(LangSwitcher), "lang-switcher");