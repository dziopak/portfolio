import React from "react";

import useLang from "./../../useLang/useLang.component";

import GoalsVector from "./../../../assets/vectors/about-me-goals.svg";
import "./my-goals.styles.scss";

const MyGoals = ({lang, lang_tag}) => {
    lang = lang[lang_tag];
    return(
        <div className="my-goals content">
            <div className="content__row section row">
                <div className="content__col content__col--left col">
                    <img className="my-goals__img" src={GoalsVector} alt="My goals" />
                </div>
                
                <div className="content__col content__col--right col">
                    <div className="content__container valign">
                        <h3 className="content__title">{lang.title}</h3>
                        <p className="content__text">
                            Moje umiejętności web developerskie nie ograniczają się wyłącznie do HTML'a i CSS. Równie dobrze radzę sobie z językami PHP i JavaScript, preprocesorami LESS i SASS a także frameworkami jak Laravel, React czy NodeJS. W mojej pracy przydaje się również znajomość innych technologii i narzędzi. Bardzo pomocna jest również dobra znajomość systemów baz danych jak MySQL i PostgreSQL, oraz baz NoSQL jak Firebase czy MongoDB.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default useLang(MyGoals, "content/my-goals");