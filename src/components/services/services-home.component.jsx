import React, {useState} from "react";
import useLang from "./../useLang/useLang.component";
import Button from "./../button/button.component";
import IconTabSet from "../icon-tab-set/icon-tab-set.component.jsx"
import ContentTabSet from "../content-tab-set/content-tab-set.component.jsx"
import WebdesignHome from "./../content/webdesign-home/webdesign-home.component";
import FrontendHome from "./../content/frontend-home/frontend-home.component";
import BackendHome from "./../content/backend-home/backend-home.component";
import MobileappsHome from "../content/mobileapps-home/mobileapps-home.component.jsx";

import "./services.styles.scss";

const ServicesHome = ({lang, lang_tag}) => {
    lang = lang[lang_tag];

    const [tabSettings, setTabSettings] = useState({
        tabId: "none"
    });

    return (
        <div className="services services--home section">
            <h3 className="services__header animate-opacity animate-opacity--inactive">{lang.title}</h3>
            <p className="services__text text-short animate-opacity animate-opacity--inactive">{lang.content_home}</p>
            <IconTabSet active={tabSettings.tabId} setTabSettings={setTabSettings} />
            <ContentTabSet tabSettings={tabSettings}>
                <FrontendHome/>
                <BackendHome/>
                <MobileappsHome/>
                <WebdesignHome/>
            </ContentTabSet>
        </div>
    );
}

export default useLang(ServicesHome, "services");