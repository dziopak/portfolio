import React from "react";

import IconTab from "./../icon-tab/icon-tab.component";
import Icon1 from "./../../assets/img/front-end-icon.png";
import Icon2 from "./../../assets/img/back-end-icon.png";
import Icon3 from "./../../assets/img/mobile-apps-icon.png";
import Icon4 from "./../../assets/img/web-design-icon.png";
import useLang from "./../useLang/useLang.component";

import "./icon-tab-set.styles.scss";

const IconTabSet = ({active, tabSettings, setTabSettings, lang, lang_tag}) => {
    lang = lang[lang_tag];

    const setTab = (index) => {
        if (active === index) {
            setTabSettings({
                ...tabSettings,
                tabId: "none"
            });
        } else {
            setTabSettings({
                ...tabSettings,
                tabId: index,
            });
        }
    };

    return(
        <div className="icon-tab-set inner-container">
            <div className="icon-tab-set__tab-container animate-opacity animate-opacity--inactive" data-delay="1">
                <IconTab index="0" active={active === 0 ? true : false} text={lang.icon1} onClick={() => setTab(0)} image={Icon1}/>
            </div>
            
            <div className="icon-tab-set__tab-container animate-opacity animate-opacity--inactive" data-delay="2">
                <IconTab index="1" active={active === 1 ? true : false} text={lang.icon2} onClick={() => setTab(1)} image={Icon2}/>
            </div>
            <div className="icon-tab-set__tab-container animate-opacity animate-opacity--inactive" data-delay="3">
                <IconTab index="2" active={active === 2 ? true : false} text={lang.icon3} onClick={() => setTab(2)} image={Icon3}/>
            </div>
            <div className="icon-tab-set__tab-container animate-opacity animate-opacity--inactive" data-delay="4">
                <IconTab index="3" active={active === 3 ? true : false} text={lang.icon4} onClick={() => setTab(3)} image={Icon4}/>
            </div>
        </div>
    );
}

export default useLang(IconTabSet, "icon-tab-set");