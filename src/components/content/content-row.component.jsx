import React from "react";
import "./content-row.styles.scss";

const ContentRow = ({contentSide, title, vector, children}) => {
    return (
        <div className="content-row">
            {contentSide && contentSide === "right" ? <div className="col content-row__col content-row__col--left"><img className="content-row__img" src={vector} alt={title} /></div> : "" }
            <div className="col content-row__col">
                <div className="content-row__container valign">
                    <h3 className="content-row__title">{title}</h3>
                    {children}
                </div>
            </div>
            {!contentSide || !contentSide === "right" ? <div className="col content-row__col content-row__col--right"><img className="content-row__img" src={vector} alt={title} /></div> : "" }
        </div>
    );
}

export default ContentRow;