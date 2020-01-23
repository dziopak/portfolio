import React from "react";
import "./content-tab-set.styles.scss";

const ContentTabSet = ({tabSettings, children}) => {
    return (
        <div>
            {tabSettings.tabId !== "none" ?
                <div className="content-tab-set">
                    { children[tabSettings.tabId] }
                </div>
            : ""}
        </div>
    );
}

export default ContentTabSet;