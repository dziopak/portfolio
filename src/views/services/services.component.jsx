import React from "react";

import Services from "./../../components/services/services.component";
import useLang from "./../../components/useLang/useLang.component";

import IntroVector from "./../../assets/vectors/services-intro.svg";
import "./services.styles.scss";

const ServicesPage = ({lang, lang_tag}) => {
    lang = lang[lang_tag];
    return (
        <div className="services-page">
            <div className="container">
                <div className="services-page__intro section">
                    <h3 className="services-page__title">{lang.title}</h3>
                    <img className="services-page__intro-img" src={IntroVector} width="200" />
                    <p className="services-page__text text-short">Jestem Full-stack Webdeveloperem specjalizującym się w programowaniu w JavaScript i PHP. Oferuję kompleksowe usługi związane z tworzeniem stron i aplikacji internetowych, od projektowania graficznego aż po programowanie Back-End. </p>
                </div>
                <Services />
            </div>
        </div>
    );
}

export default useLang(ServicesPage, "services", "views");