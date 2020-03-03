import React, {useState} from "react";

import IconTabSet from "../icon-tab-set/icon-tab-set.component.jsx"
import ContentTabSet from "../content-tab-set/content-tab-set.component.jsx"
import ContentTab from "./../content-tab/content-tab.component";
import useLang from "./../useLang/useLang.component";

import FrontEndVector from "./../../assets/vectors/front-end-home.svg";
import BackEndVector from "./../../assets/vectors/back-end-home.svg";
import MobileAppsVector from "./../../assets/vectors/mobile-apps-home.svg";
import WebDesignVector from "./../../assets/vectors/web-design-home.svg";

import "./services.styles.scss";

const ServicesHome = ({lang, lang_tag}) => {
    lang = lang[lang_tag];

    const [tabSettings, setTabSettings] = useState({
        tabId: "none"
    });

    return (
        <div className="services services--home section">
            <h3 className="services__header animate-opacity animate-opacity--inactive">{lang.title}</h3>
            <p className="services__text text-short animate-opacity animate-opacity--inactive">{lang.contentHome}</p>
            <IconTabSet active={tabSettings.tabId} setTabSettings={setTabSettings} />
            <ContentTabSet tabSettings={tabSettings}>
                {
                    lang.frontEnd ?
                        <ContentTab vector={FrontEndVector} title={lang.frontEnd.title} content={lang.frontEnd.content} buttonText={lang.button} />
                    : ""
                }
                {
                    lang.backEnd ?
                        <ContentTab vector={BackEndVector} title={lang.backEnd.title} content={lang.backEnd.content} buttonText={lang.button} />
                    : ""
                }
                {
                    lang.mobileApps ?
                        <ContentTab vector={MobileAppsVector} title={lang.mobileApps.title} content={lang.mobileApps.content} buttonText={lang.button} />
                    : ""
                }
                {
                    lang.webDesign ?
                        <ContentTab vector={WebDesignVector} title={lang.webDesign.title} content={lang.webDesign.content} buttonText={lang.button} />
                    : ""
                }
            </ContentTabSet>
        </div>
    );
}

export default useLang(ServicesHome, "services");