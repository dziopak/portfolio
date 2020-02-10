import React from "react";
import "./content-row.styles.scss";
import PicturesSlider from "../pictures-slider/pictures-slider.component";

const ContentRow = ({contentSide, title, vector, children, images, imagesPath}) => {
    return (
        <div className="content-row row">
            {contentSide && contentSide === "right" ?
                <div className={`col content-row__col content-row__col--left ${images ? "content-row__col--short" : ""}`}>
                    {
                        images ? <PicturesSlider className="content-row__img" images={images} imagesPath={imagesPath} alt={title} /> : <img className="content-row__img" src={vector} alt={title} />
                    }
                    
                </div>
            : "" }

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