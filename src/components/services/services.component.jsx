import React, {useState} from "react";
import useLang from "../useLang/useLang.component";
import IconTabSet from "../icon-tab-set/icon-tab-set.component.jsx"
import ContentTabSet from "../content-tab-set/content-tab-set.component.jsx"
import WebdesignHome from "../content/webdesign-home/webdesign-home.component";
import FrontendServices from "../content/frontend/frontend.component.jsx";
import Backend from "../content/backend/backend.component";
import MobileappsHome from "../content/mobileapps-home/mobileapps-home.component.jsx";

import "./services.styles.scss";

const ServicesHome = ({lang, lang_tag}) => {
    lang = lang[lang_tag];

    const [tabSettings, setTabSettings] = useState({
        tabId: 0,
        didAnimate: false
    });

    return (
        <div className="services section">
            <IconTabSet active={tabSettings.tabId} setTabSettings={setTabSettings} />
            <ContentTabSet tabSettings={tabSettings}>
                <FrontendServices/>
                <Backend/>
                <MobileappsHome/>
                <WebdesignHome/>
            </ContentTabSet>
        </div>
    );
}

export default useLang(ServicesHome, "services");